"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { getGithubContributions, type ContributionCalendar } from "@/app/actions/github";

const YEARS = [2026, 2025] as const;
const USERNAME = "dvansari65";

const LEVEL_OPACITY: Record<string, number> = {
  NONE: 0.06,
  FIRST_QUARTILE: 0.22,
  SECOND_QUARTILE: 0.42,
  THIRD_QUARTILE: 0.66,
  FOURTH_QUARTILE: 0.92,
};

export default function GithubGraph() {
  const [year, setYear] = useState<number>(YEARS[0]);
  const [data, setData] = useState<ContributionCalendar | null>(null);
  const [loading, setLoading] = useState(true);
  const [unavailable, setUnavailable] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setUnavailable(false);
    getGithubContributions(USERNAME, `${year}-01-01T00:00:00Z`, `${year}-12-31T23:59:59Z`)
      .then((calendar) => {
        if (cancelled) return;
        setData(calendar);
        setUnavailable(calendar === null);
      })
      .catch(() => {
        if (!cancelled) setUnavailable(true);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [year]);

  return (
    <div className="flex w-full flex-col gap-5 rounded-2xl border border-line p-5 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-[13.5px] text-ink-2" aria-live="polite">
          {loading ? (
            <span className="text-ink-3">Loading activity…</span>
          ) : data ? (
            <>
              <span className="font-medium text-ink">{data.totalContributions.toLocaleString("en-US")}</span> contributions in {year}
            </>
          ) : (
            <span className="text-ink-3">Activity unavailable</span>
          )}
        </p>

        <div role="tablist" aria-label="Year" className="flex gap-1 rounded-full border border-line bg-paper-2/70 p-0.5">
          {YEARS.map((y) => (
            <button
              key={y}
              role="tab"
              aria-selected={year === y}
              onClick={() => setYear(y)}
              className={`rounded-full px-3 py-1 text-[12px] font-medium transition-colors duration-300 ${
                year === y ? "bg-ink text-paper" : "text-ink-3 hover:text-ink"
              }`}
            >
              {y}
            </button>
          ))}
        </div>
      </div>

      {unavailable ? (
        <div className="flex h-[112px] flex-col items-start justify-center gap-1 text-[13.5px] text-ink-2">
          <p>The activity graph could not be loaded right now.</p>
          <a
            href={`https://github.com/${USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="link-draw inline-flex items-center gap-1 text-ink"
          >
            View on GitHub <ArrowUpRight aria-hidden className="h-3.5 w-3.5" />
          </a>
        </div>
      ) : (
        <div className="scroll-quiet w-full overflow-x-auto">
          {loading || !data ? (
            <div className="flex h-[112px] items-end gap-[3px]">
              {Array.from({ length: 52 }).map((_, i) => (
                <div key={i} className="flex flex-col gap-[3px]">
                  {Array.from({ length: 7 }).map((_, j) => (
                    <div key={j} className="h-[11px] w-[11px] animate-pulse rounded-[3px] bg-ink/[0.05]" style={{ animationDelay: `${i * 12}ms` }} />
                  ))}
                </div>
              ))}
            </div>
          ) : (
            <div className="flex min-w-max gap-[3px]">
              {data.weeks.map((week, i) => (
                <div key={i} className="flex flex-col gap-[3px]">
                  {week.contributionDays.map((day) => (
                    <div
                      key={day.date}
                      title={`${day.contributionCount} contribution${day.contributionCount === 1 ? "" : "s"} on ${day.date}`}
                      className="h-[11px] w-[11px] rounded-[3px] transition-transform duration-200 hover:scale-[1.35]"
                      style={{ backgroundColor: `rgb(22 22 20 / ${LEVEL_OPACITY[day.contributionLevel] ?? 0.06})` }}
                    />
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      <div className="flex items-center justify-end gap-1.5 text-[11px] text-ink-3">
        <span>Less</span>
        {[0.06, 0.22, 0.42, 0.66, 0.92].map((o) => (
          <span key={o} className="h-[10px] w-[10px] rounded-[3px]" style={{ backgroundColor: `rgb(22 22 20 / ${o})` }} />
        ))}
        <span>More</span>
      </div>
    </div>
  );
}

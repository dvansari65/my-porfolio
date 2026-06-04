"use client";

import React, { useState, useEffect } from 'react';
import { getGithubContributions } from '@/app/actions/github';

type ContributionDay = {
  contributionCount: number;
  date: string;
  contributionLevel: string;
};

type Week = {
  contributionDays: ContributionDay[];
};

type CalendarData = {
  totalContributions: number;
  weeks: Week[];
};

export default function GithubGraph() {
  const [selectedYear, setSelectedYear] = useState<number>(2026);
  const [data, setData] = useState<CalendarData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const years: Array<number> = [2026, 2025];

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);
      try {
        const fromDate = `${selectedYear}-01-01T00:00:00Z`;
        const toDate = `${selectedYear}-12-31T23:59:59Z`;
        const calendarData = await getGithubContributions("dvansari65", fromDate, toDate);
        setData(calendarData);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : "Failed to fetch data. Make sure GITHUB_TOKEN is set.";
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [selectedYear]);

  const getColor = (level: string) => {
    switch (level) {
      case 'FIRST_QUARTILE': return '#9be9a8';
      case 'SECOND_QUARTILE': return '#40c463';
      case 'THIRD_QUARTILE': return '#30a14e';
      case 'FOURTH_QUARTILE': return '#216e39';
      case 'NONE':
      default: return 'rgba(26,26,25,0.05)';
    }
  };

  return (
    <div className="w-full flex flex-col items-start overflow-hidden relative gap-4">
      {/* Year Selector */}
      <div className="flex gap-2 flex-wrap">
        {years.map((year) => (
          <button
            key={year}
            onClick={() => setSelectedYear(year)}
            className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors ${
              selectedYear === year
                ? "bg-[#1A1A19] text-[#FBFBFB]"
                : "bg-[rgba(26,26,25,0.05)] text-[#1A1A19] hover:bg-[rgba(26,26,25,0.1)]"
            }`}
          >
            {year}
          </button>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="w-full flex justify-start">
        <div className="p-4 sm:p-6 border border-[rgba(26,26,25,0.1)] rounded-xl bg-[rgba(26,26,25,0.01)] hover:border-[rgba(26,26,25,0.2)] transition-colors duration-300 w-full flex flex-col gap-4">
          
          {loading ? (
            <div className="flex items-center justify-center h-[120px] w-full text-sm opacity-50">
              Loading contributions...
            </div>
          ) : error ? (
            <div className="flex flex-col items-center justify-center h-[120px] w-full text-sm text-red-500 opacity-80 text-center gap-2">
              <span>{error}</span>
              <span className="text-xs opacity-70">Check your .env.local file</span>
            </div>
          ) : data ? (
            <>
              <div className="text-xs font-medium opacity-70">
                {data.totalContributions} contributions in {selectedYear}
              </div>
              
              <div className="w-full overflow-x-auto pb-2 flex justify-start" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                <style dangerouslySetInnerHTML={{__html: `
                  ::-webkit-scrollbar { display: none; }
                `}} />
                
                <div className="flex gap-[3px] sm:gap-[4px] min-w-max">
                  {data.weeks.map((week, i) => (
                    <div key={i} className="flex flex-col gap-[3px] sm:gap-[4px]">
                      {week.contributionDays.map((day) => (
                        <div
                          key={day.date}
                          title={`${day.contributionCount} contributions on ${day.date}`}
                          className="w-[9px] h-[9px] sm:w-[11px] sm:h-[11px] rounded-[2px] transition-transform hover:scale-125"
                          style={{ backgroundColor: getColor(day.contributionLevel) }}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : null}

        </div>
      </div>
    </div>
  );
}

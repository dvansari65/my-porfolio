import { contributions } from "@/lib/content";
import Section from "@/components/ui/Section";
import ExpandableRow from "@/components/ui/ExpandableRow";
import ExternalAction from "@/components/ui/ExternalAction";
import { GitMerge, GitPullRequestArrow } from "lucide-react";

const fmt = new Intl.NumberFormat("en-US");

export default function Contributions() {
  return (
    <Section id="contributions" eyebrow="Open source" index={2}>
      <div className="flex flex-col gap-7">
        {contributions.map((group) => (
          <div key={group.repo}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 pb-0.5">
              <a href={group.href} target="_blank" rel="noopener noreferrer" className="text-[13.5px] text-ink sm:text-[14px]">
                <span className="text-ink-3">{group.org} / </span>
                <span className="link-draw font-medium">{group.repo}</span>
              </a>
            </div>

            <ol className="flex flex-col">
              {group.items.map((pr) => (
                <ExpandableRow
                  key={pr.number}
                  title={pr.title}
                  trailing={
                    <span className="inline-flex items-center gap-1.5">
                      {pr.status === "merged" ? (
                        <GitMerge aria-hidden className="h-3.5 w-3.5 text-[#8250df]" />
                      ) : (
                        <GitPullRequestArrow aria-hidden className="h-3.5 w-3.5 text-[#1a7f37]" />
                      )}
                      <span className={pr.status === "merged" ? "text-[#8250df]" : "text-[#1a7f37]"}>
                        {pr.status === "merged" ? "Merged" : "Open"}
                      </span>
                      <span className="text-line-2">·</span>
                      {pr.date}
                    </span>
                  }
                >
                  <p className="max-w-[62ch] leading-[1.65] text-ink-2">{pr.summary}</p>

                  {pr.highlights && (
                    <ul className="flex max-w-[62ch] flex-col gap-2 border-l border-line pl-4 text-[13.5px] leading-[1.6] text-ink-2 sm:text-[14px]">
                      {pr.highlights.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                  )}

                  <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-1">
                    <ExternalAction href={pr.href}>Read pull request #{pr.number}</ExternalAction>
                    {pr.stats && (
                      <span className="text-[12.5px] text-ink-3">
                        <span className="font-medium text-[#1a7f37]">+{fmt.format(pr.stats.additions)}</span>{" "}
                        <span className="font-medium text-[#cf222e]">−{fmt.format(pr.stats.deletions)}</span>
                        <span className="mx-1.5">·</span>
                        {pr.stats.files} {pr.stats.files === 1 ? "file" : "files"}
                      </span>
                    )}
                  </div>
                </ExpandableRow>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </Section>
  );
}

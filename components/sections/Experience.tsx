import { GitMerge, GitPullRequestArrow } from "lucide-react";
import { experience } from "@/lib/content";
import Section from "@/components/ui/Section";
import Disclosure from "@/components/ui/Disclosure";
import ExternalAction from "@/components/ui/ExternalAction";

export default function Experience() {
  return (
    <Section eyebrow="Experience" index={1}>
      <ol className="hairline flex flex-col">
        {experience.map((item) => (
          <li
            key={`${item.role}-${item.period}`}
            className="grid grid-cols-1 gap-1.5 py-5 first:pt-2 last:pb-0 sm:grid-cols-[132px_1fr] sm:gap-8"
          >
            <p className="text-[12.5px] text-ink-3 sm:pt-[3px] sm:text-[13px]">{item.period}</p>

            <div className="flex flex-col">
              <h3 className="flex flex-wrap items-baseline gap-x-2 text-[15.5px] font-medium tracking-[-0.005em] text-ink sm:text-[17px]">
                {item.role}
                {item.org && (
                  <span className="text-[14px] font-normal text-ink-2 sm:text-[15px]">
                    at{" "}
                    {item.org.href ? (
                      <a
                        href={item.org.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-draw text-ink-2 hover:text-ink"
                      >
                        {item.org.name}
                      </a>
                    ) : (
                      item.org.name
                    )}
                  </span>
                )}
              </h3>

              {item.kind && <p className="mt-1.5 text-[12px] text-ink-3">{item.kind}</p>}

              {item.summary && (
                <p className="mt-2.5 max-w-[58ch] text-[14px] leading-[1.65] text-ink-2 sm:text-[14.5px]">{item.summary}</p>
              )}

              {item.work && (
                <div className="mt-3.5">
                  <Disclosure label="What I built" closeLabel="Hide details">
                    <ol className="flex flex-col gap-4 border-l border-line pl-4">
                      {item.work.map((w) => (
                        <li key={w.href} className="flex flex-col gap-1">
                          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                            <ExternalAction href={w.href} className="text-ink">
                              {w.title}
                            </ExternalAction>
                            <span className="inline-flex items-center gap-1.5 text-[12px]">
                              {w.status === "merged" ? (
                                <GitMerge aria-hidden className="h-3 w-3 text-[#8250df]" />
                              ) : (
                                <GitPullRequestArrow aria-hidden className="h-3 w-3 text-[#1a7f37]" />
                              )}
                              <span className={w.status === "merged" ? "text-[#8250df]" : "text-[#1a7f37]"}>
                                {w.status === "merged" ? "Merged" : "Open"}
                              </span>
                            </span>
                          </div>
                          <p className="max-w-[58ch] text-[13.5px] leading-[1.6] text-ink-2">{w.summary}</p>
                        </li>
                      ))}
                    </ol>
                  </Disclosure>
                </div>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

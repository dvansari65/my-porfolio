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

              {(item.kind || item.amount) && (
                <p className="mt-1.5 flex flex-wrap items-center gap-2 text-[12px] text-ink-3">
                  {item.kind && <span>{item.kind}</span>}
                  {item.kind && item.amount && <span aria-hidden>·</span>}
                  {item.amount && (
                    <span className="rounded-md border border-line bg-paper-2/70 px-1.5 py-px text-[11.5px] font-medium text-ink-2">
                      {item.amount}
                    </span>
                  )}
                </p>
              )}

              {item.summary && (
                <p className="mt-2.5 max-w-[58ch] text-[14px] leading-[1.65] text-ink-2 sm:text-[14.5px]">{item.summary}</p>
              )}

              {item.bullets && (
                <div className="mt-3.5">
                  <Disclosure
                    label="What I built"
                    closeLabel="Hide details"
                    aside={item.proof && <ExternalAction href={item.proof.href}>{item.proof.label}</ExternalAction>}
                  >
                    <ul className="flex max-w-[60ch] flex-col gap-2.5 border-l border-line pl-4 text-[14px] leading-[1.6] text-ink-2">
                      {item.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </Disclosure>
                </div>
              )}
              {!item.bullets && item.proof && (
                <div className="mt-3.5">
                  <ExternalAction href={item.proof.href}>{item.proof.label}</ExternalAction>
                </div>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

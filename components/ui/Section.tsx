import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  eyebrow: string;
  title?: ReactNode;
  lede?: ReactNode;
  index?: number;
  children: ReactNode;
};

/** Section frame: eyebrow label, optional title and lede, then the body. */
export default function Section({ id, eyebrow, title, lede, index = 0, children }: SectionProps) {
  return (
    <section
      id={id}
      className="rise scroll-mt-16 flex w-full flex-col"
      style={{ "--rise-index": index } as React.CSSProperties}
    >
      <header className="mb-3 flex flex-col gap-2.5">
        <p className="eyebrow">{eyebrow}</p>
        {title && <h2 className="text-[22px] font-medium leading-tight tracking-[-0.015em] text-ink sm:text-[24px]">{title}</h2>}
        {lede && <p className="max-w-[58ch] text-[14.5px] leading-relaxed text-ink-2">{lede}</p>}
      </header>
      {children}
    </section>
  );
}

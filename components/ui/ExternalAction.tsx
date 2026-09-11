import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

type ExternalActionProps = {
  href: string;
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
  strong?: boolean;
};

/**
 * A text link with an arrow that nudges up-and-right on hover.
 * `strong` renders the primary, filled variant.
 */
export default function ExternalAction({ href, children, icon, className = "", strong = false }: ExternalActionProps) {
  const external = /^https?:/.test(href);
  const base = strong
    ? "inline-flex items-center gap-1.5 rounded-full bg-ink px-3.5 py-2 text-[13px] font-medium text-paper transition-[transform,box-shadow] duration-300 [transition-timing-function:var(--ease-out-quart)] hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-10px_rgb(22_22_20/0.5)]"
    : "group/link inline-flex items-center gap-1.5 text-[13.5px] font-medium text-ink-2 transition-colors duration-200 hover:text-ink";

  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`${base} ${className}`}
    >
      {icon}
      <span className={strong ? "" : "link-draw"}>{children}</span>
      <ArrowUpRight
        aria-hidden
        className={`h-3.5 w-3.5 transition-transform duration-300 [transition-timing-function:var(--ease-out-quart)] ${
          strong ? "group-hover:translate-x-px" : "text-ink-3 group-hover/link:-translate-y-px group-hover/link:translate-x-px group-hover/link:text-ink"
        }`}
      />
    </a>
  );
}

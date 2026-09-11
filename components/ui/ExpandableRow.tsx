"use client";

import { useId, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";

type ExpandableRowProps = {
  /** Primary text, rendered as the row title. */
  title: ReactNode;
  /** Small text shown next to the title (status, tagline). */
  meta?: ReactNode;
  /** Right-aligned text, typically a date. */
  trailing?: ReactNode;
  children: ReactNode;
};

/**
 * A single-line list row that expands in place when clicked.
 * The whole header is the trigger; links inside the body stay clickable.
 */
export default function ExpandableRow({ title, meta, trailing, children }: ExpandableRowProps) {
  const id = useId();
  const [open, setOpen] = useState(false);

  return (
    <li className="group">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={`${id}-panel`}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full cursor-pointer items-start gap-3 py-3 text-left sm:items-baseline sm:gap-4"
      >
        <span className="flex min-w-0 flex-1 flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
          <span className="flex min-w-0 flex-col gap-0.5 sm:flex-row sm:items-baseline sm:gap-3">
            <span className="text-[14.5px] font-medium leading-snug tracking-[-0.005em] text-ink decoration-[1px] underline-offset-[5px] group-hover:underline sm:text-[15px]">
              {title}
            </span>
            {meta && <span className="text-[12.5px] text-ink-3 sm:shrink-0 sm:text-[13px]">{meta}</span>}
          </span>
          {trailing && <span className="text-[12.5px] text-ink-3 sm:shrink-0 sm:text-[13px]">{trailing}</span>}
        </span>
        <Plus
          aria-hidden
          className={`mt-[3px] h-3.5 w-3.5 shrink-0 text-ink-3 transition-transform duration-500 [transition-timing-function:var(--ease-out-quart)] sm:mt-0 sm:self-center ${
            open ? "rotate-45" : ""
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`${id}-panel`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ height: { duration: 0.45, ease: [0.25, 1, 0.5, 1] }, opacity: { duration: 0.3 } }}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-3.5 pb-5 pt-1 text-[14px] sm:text-[14.5px]">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

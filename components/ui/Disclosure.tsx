"use client";

import { useId, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";

type DisclosureProps = {
  label: string;
  closeLabel?: string;
  children: ReactNode;
  /** Extra actions rendered on the same row as the trigger. */
  aside?: ReactNode;
};

/** Quiet text-button disclosure with a height animation. */
export default function Disclosure({ label, closeLabel, children, aside }: DisclosureProps) {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
        <button
          type="button"
          aria-expanded={open}
          aria-controls={id}
          onClick={() => setOpen((v) => !v)}
          className="group inline-flex w-fit items-center gap-1.5 text-[13.5px] font-medium text-ink-2 transition-colors duration-200 hover:text-ink"
        >
          <span className="link-draw">{open && closeLabel ? closeLabel : label}</span>
          <Plus
            aria-hidden
            className={`h-3.5 w-3.5 text-ink-3 transition-transform duration-500 [transition-timing-function:var(--ease-out-quart)] group-hover:text-ink ${
              open ? "rotate-45" : ""
            }`}
          />
        </button>
        {aside}
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={id}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ height: { duration: 0.45, ease: [0.25, 1, 0.5, 1] }, opacity: { duration: 0.3 } }}
            className="overflow-hidden"
          >
            <div className="pt-4">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

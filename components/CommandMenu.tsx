"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, FileText, FolderKanban, GitPullRequest, Github, Mail, Search } from "lucide-react";
import { profile } from "@/lib/content";

const scrollTo = (selector: string) => document.querySelector(selector)?.scrollIntoView({ behavior: "smooth" });

const commands = [
  { label: "Open source", detail: "Pull requests and key changes", icon: GitPullRequest, action: () => scrollTo("#contributions") },
  { label: "Projects", detail: "Selected work", icon: FolderKanban, action: () => scrollTo("#projects") },
  { label: "Résumé", detail: "Open PDF", icon: FileText, action: () => window.open(profile.resume, "_blank", "noopener,noreferrer") },
  { label: "GitHub", detail: `@${profile.handle}`, icon: Github, action: () => window.open(`https://github.com/${profile.handle}`, "_blank", "noopener,noreferrer") },
  { label: "Contact", detail: "Email and social links", icon: Mail, action: () => scrollTo("#connect") },
];

export default function CommandMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const visible = commands.filter(({ label, detail }) => `${label} ${detail}`.toLowerCase().includes(query.toLowerCase()));

  const run = (index: number) => {
    const command = visible[index];
    if (!command) return;
    setIsOpen(false);
    command.action();
  };

  useEffect(() => {
    const onShortcut = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setIsOpen((open) => !open);
      }
    };
    window.addEventListener("keydown", onShortcut);
    return () => window.removeEventListener("keydown", onShortcut);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    setQuery("");
    setActiveIndex(0);
    requestAnimationFrame(() => inputRef.current?.focus());
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeys = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
      if (event.key === "ArrowDown" && visible.length) {
        event.preventDefault();
        setActiveIndex((i) => (i + 1) % visible.length);
      }
      if (event.key === "ArrowUp" && visible.length) {
        event.preventDefault();
        setActiveIndex((i) => (i - 1 + visible.length) % visible.length);
      }
      if (event.key === "Enter") {
        event.preventDefault();
        run(activeIndex);
      }
    };
    window.addEventListener("keydown", onKeys);
    return () => window.removeEventListener("keydown", onKeys);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, activeIndex, visible.length]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Open navigation menu"
        aria-keyshortcuts="Meta+K Control+K"
        className="fixed right-6 top-6 z-40 hidden items-center gap-2 sm:inline-flex rounded-full border border-line bg-surface/85 px-3 py-2 text-[12px] font-medium text-ink-2 shadow-[var(--shadow-card)] backdrop-blur-md transition-all duration-300 [transition-timing-function:var(--ease-out-quart)] hover:-translate-y-0.5 hover:border-line-2 hover:bg-surface-2 hover:text-ink hover:shadow-[var(--shadow-card-hover)]"
      >
        <Search aria-hidden className="h-3.5 w-3.5" />
        <span className="hidden sm:inline">Navigate</span>
        <span className="hidden h-3 w-px bg-line-2 sm:block" />
        <kbd className="font-mono text-[11px]">⌘K</kbd>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-start justify-center bg-ink/15 px-4 pt-[16vh] backdrop-blur-[4px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onMouseDown={(event) => event.target === event.currentTarget && setIsOpen(false)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Quick navigation"
              className="w-full max-w-md overflow-hidden rounded-2xl border border-line bg-paper shadow-[0_32px_90px_-20px_rgb(22_22_20/0.35)]"
              initial={{ opacity: 0, y: -8, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.985 }}
              transition={{ duration: 0.18, ease: [0.25, 1, 0.5, 1] }}
            >
              <div className="flex items-center gap-3 border-b border-line px-4">
                <Search aria-hidden className="h-4 w-4 text-ink-3" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(event) => {
                    setQuery(event.target.value);
                    setActiveIndex(0);
                  }}
                  placeholder="Where to?"
                  className="h-13 flex-1 bg-transparent py-4 text-[15px] text-ink outline-none placeholder:text-ink-3"
                />
                <kbd className="rounded-md border border-line bg-paper-2 px-1.5 py-0.5 text-[10px] text-ink-3">esc</kbd>
              </div>

              <div className="p-2">
                {visible.map((command, index) => {
                  const Icon = command.icon;
                  const active = activeIndex === index;
                  return (
                    <button
                      key={command.label}
                      type="button"
                      onMouseEnter={() => setActiveIndex(index)}
                      onClick={() => run(index)}
                      className={`group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors duration-150 ${
                        active ? "bg-ink text-paper" : "text-ink"
                      }`}
                    >
                      <span className={`grid h-8 w-8 place-items-center rounded-lg ${active ? "bg-paper/10" : "bg-paper-2"}`}>
                        <Icon aria-hidden className="h-4 w-4" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-[14px] font-medium">{command.label}</span>
                        <span className={`block text-[12px] ${active ? "text-paper/60" : "text-ink-3"}`}>{command.detail}</span>
                      </span>
                      <ArrowUpRight aria-hidden className={`h-4 w-4 transition-opacity ${active ? "opacity-70" : "opacity-0"}`} />
                    </button>
                  );
                })}
                {visible.length === 0 && <p className="py-8 text-center text-[13px] text-ink-3">Nothing matches</p>}
              </div>

              <div className="flex items-center gap-4 border-t border-line px-4 py-2.5 text-[10.5px] text-ink-3">
                <span>↑↓ move</span>
                <span>↵ open</span>
                <span>esc close</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

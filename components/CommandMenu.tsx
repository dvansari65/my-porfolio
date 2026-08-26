"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, FileText, FolderKanban, Github, Mail, Search } from "lucide-react";

type CommandMenuProps = {
  onProjects: () => void;
};

export default function CommandMenu({ onProjects }: CommandMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const commands = [
    { label: "Projects", detail: "Explore selected work", icon: FolderKanban, action: onProjects },
    { label: "Résumé", detail: "Open PDF", icon: FileText, action: () => window.open("/assets/danish.pdf", "_blank", "noopener,noreferrer") },
    { label: "GitHub", detail: "View dvansari65", icon: Github, action: () => window.open("https://github.com/dvansari65", "_blank", "noopener,noreferrer") },
    { label: "Contact", detail: "Email and social links", icon: Mail, action: () => document.querySelector("#connect")?.scrollIntoView({ behavior: "smooth" }) },
  ];

  const visibleCommands = commands.filter(({ label, detail }) =>
    `${label} ${detail}`.toLowerCase().includes(query.toLowerCase())
  );

  const runCommand = (index: number) => {
    const command = visibleCommands[index];
    if (!command) return;
    setIsOpen(false);
    command.action();
  };

  useEffect(() => {
    const handleShortcut = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setIsOpen((open) => !open);
      }
    };

    window.addEventListener("keydown", handleShortcut);
    return () => window.removeEventListener("keydown", handleShortcut);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    setQuery("");
    setActiveIndex(0);
    requestAnimationFrame(() => inputRef.current?.focus());

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeys = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
      if (event.key === "ArrowDown" && visibleCommands.length) {
        event.preventDefault();
        setActiveIndex((index) => (index + 1) % visibleCommands.length);
      }
      if (event.key === "ArrowUp" && visibleCommands.length) {
        event.preventDefault();
        setActiveIndex((index) => (index - 1 + visibleCommands.length) % visibleCommands.length);
      }
      if (event.key === "Enter") {
        event.preventDefault();
        const command = visibleCommands[activeIndex];
        if (command) {
          setIsOpen(false);
          command.action();
        }
      }
    };

    window.addEventListener("keydown", handleKeys);
    return () => window.removeEventListener("keydown", handleKeys);
  }, [isOpen, activeIndex, visibleCommands]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Open command menu"
        aria-keyshortcuts="Meta+K Control+K"
        className="absolute right-0 top-0 z-40 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-3 py-2 text-xs font-medium text-[#1A1A19]/60 shadow-sm backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-black/20 hover:text-[#1A1A19] hover:shadow-md"
      >
        <Search className="h-3.5 w-3.5" />
        <span className="hidden sm:inline">Quick links</span>
        <span className="hidden h-3 w-px bg-black/10 sm:block" />
        <kbd className="font-sans text-[11px] tracking-wide">⌘ K</kbd>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-start justify-center bg-[#1A1A19]/20 px-4 pt-[18vh] backdrop-blur-[3px]"
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
              className="w-full max-w-lg overflow-hidden rounded-2xl border border-black/10 bg-[#FBFBFB] shadow-[0_24px_80px_rgba(26,26,25,0.18)]"
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.16, ease: "easeOut" }}
            >
              <div className="flex items-center gap-3 border-b border-black/[0.07] px-4">
                <Search className="h-4 w-4 text-[#1A1A19]/35" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(event) => {
                    setQuery(event.target.value);
                    setActiveIndex(0);
                  }}
                  placeholder="Type a command..."
                  className="h-14 flex-1 bg-transparent text-[15px] outline-none placeholder:text-[#1A1A19]/35"
                />
                <kbd className="rounded-md border border-black/10 bg-black/[0.03] px-1.5 py-0.5 text-[10px] text-[#1A1A19]/45">ESC</kbd>
              </div>

              <div className="p-2">
                {visibleCommands.map((command, index) => {
                  const Icon = command.icon;
                  return (
                    <button
                      key={command.label}
                      type="button"
                      onMouseEnter={() => setActiveIndex(index)}
                      onClick={() => runCommand(index)}
                      className={`group flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition-colors ${
                        activeIndex === index ? "bg-[#1A1A19] text-[#FBFBFB]" : "text-[#1A1A19] hover:bg-black/[0.04]"
                      }`}
                    >
                      <span className={`grid h-8 w-8 place-items-center rounded-lg ${activeIndex === index ? "bg-white/10" : "bg-black/[0.04]"}`}>
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-medium">{command.label}</span>
                        <span className={`block text-xs ${activeIndex === index ? "text-white/55" : "text-[#1A1A19]/45"}`}>{command.detail}</span>
                      </span>
                      <ArrowUpRight className={`h-4 w-4 transition-opacity ${activeIndex === index ? "opacity-60" : "opacity-0 group-hover:opacity-40"}`} />
                    </button>
                  );
                })}

                {visibleCommands.length === 0 && (
                  <p className="py-8 text-center text-sm text-[#1A1A19]/45">No commands found</p>
                )}
              </div>

              <div className="flex items-center gap-3 border-t border-black/[0.07] px-4 py-2.5 text-[10px] text-[#1A1A19]/40">
                <span>↑↓ navigate</span>
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

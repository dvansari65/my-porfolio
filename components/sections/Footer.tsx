import { SiGithub, SiTelegram, SiX } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";
import { profile } from "@/lib/content";

const icons = {
  github: SiGithub,
  x: SiX,
  linkedin: FaLinkedin,
  telegram: SiTelegram,
  mail: Mail,
} as const;

export default function Footer() {
  return (
    <section
      id="connect"
      className="rise scroll-mt-16 flex w-full flex-col"
      style={{ "--rise-index": 5 } as React.CSSProperties}
    >
      <ul className="flex flex-wrap gap-2">
        {profile.socials.map((s) => {
          const Icon = icons[s.kind];
          const external = s.href.startsWith("http");
          return (
            <li key={s.label}>
              <a
                href={s.href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-2 text-[13.5px] font-medium text-ink-2 transition-all duration-300 [transition-timing-function:var(--ease-out-quart)] hover:-translate-y-0.5 hover:border-line-2 hover:bg-surface-2 hover:text-ink hover:shadow-[var(--shadow-card)]"
              >
                <Icon aria-hidden className="h-3.5 w-3.5 text-ink-3 transition-colors group-hover:text-ink" />
                {s.label}
              </a>
            </li>
          );
        })}
      </ul>

      <footer className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-5 text-[12px] text-ink-3">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="hidden sm:block">Press ⌘K to navigate</p>
      </footer>
    </section>
  );
}

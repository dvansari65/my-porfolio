import Image from "next/image";
import { FileText, Github, Mail } from "lucide-react";
import { profile } from "@/lib/content";
import ExternalAction from "@/components/ui/ExternalAction";

export default function Hero() {
  return (
    <section className="rise flex flex-col" style={{ "--rise-index": 0 } as React.CSSProperties}>
      <div className="group relative mb-5 h-14 w-14 sm:h-16 sm:w-16">
        <Image
          src={profile.avatar}
          alt={`${profile.name}'s profile picture`}
          fill
          sizes="64px"
          priority
          className="rounded-full object-cover ring-1 ring-line transition-transform duration-500 [transition-timing-function:var(--ease-out-quart)] group-hover:scale-[1.04]"
        />
      </div>

      <h1 className="text-[28px] font-semibold leading-none tracking-[-0.025em] text-ink sm:text-[38px]">{profile.name}</h1>

      <p className="mt-2.5 text-[14px] text-ink-2 sm:text-[15px]">
        {profile.role}
        <span className="mx-2 text-ink-3">·</span>
        <a
          href={`https://github.com/${profile.handle}`}
          target="_blank"
          rel="noopener noreferrer"
          className="link-draw text-ink-3 hover:text-ink"
        >
          @{profile.handle}
        </a>
      </p>

      <div className="mt-6 flex max-w-[60ch] flex-col gap-3.5 text-[14.5px] leading-[1.65] text-ink-2 sm:text-[15.5px]">
        {profile.bio.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
        <ExternalAction href={profile.resume} strong icon={<FileText aria-hidden className="h-3.5 w-3.5" />}>
          Résumé
        </ExternalAction>
        <ExternalAction href={`https://github.com/${profile.handle}`} icon={<Github aria-hidden className="h-3.5 w-3.5 text-ink-3" />}>
          GitHub
        </ExternalAction>
        <ExternalAction href={`mailto:${profile.email}`} icon={<Mail aria-hidden className="h-3.5 w-3.5 text-ink-3" />}>
          Email
        </ExternalAction>
      </div>
    </section>
  );
}

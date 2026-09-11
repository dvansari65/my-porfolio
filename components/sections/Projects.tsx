import { Code2, BookOpen, Globe } from "lucide-react";
import { projects, type Project } from "@/lib/content";
import Section from "@/components/ui/Section";
import ExpandableRow from "@/components/ui/ExpandableRow";
import ExternalAction from "@/components/ui/ExternalAction";
import FluxDiagram from "@/components/FluxDiagram";

const linkIcon = {
  site: <Globe aria-hidden className="h-3.5 w-3.5 text-ink-3" />,
  code: <Code2 aria-hidden className="h-3.5 w-3.5 text-ink-3" />,
  docs: <BookOpen aria-hidden className="h-3.5 w-3.5 text-ink-3" />,
};

function ProjectBody({ project }: { project: Project }) {
  return (
    <>
      <p className="max-w-[62ch] leading-[1.65] text-ink-2">{project.description}</p>

      {project.details && (
        <div className="grid gap-5 sm:grid-cols-[120px_1fr] sm:gap-x-8">
          {project.details.map((block) => (
            <div key={block.heading} className="contents">
              <p className="eyebrow pt-[3px]">{block.heading}</p>
              <ul className="flex flex-col gap-2 border-l border-line pl-4 text-[13.5px] leading-[1.6] text-ink-2 sm:text-[14px]">
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {project.diagram === "flux" && <FluxDiagram />}

      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-1">
        {project.links.map((link) => (
          <ExternalAction key={link.href} href={link.href} icon={linkIcon[link.kind]}>
            {link.label}
          </ExternalAction>
        ))}
        <span className="text-[12.5px] text-ink-3">{project.tags.join(" · ")}</span>
      </div>
    </>
  );
}

export default function Projects() {
  const ordered = [...projects].sort((a, b) => Number(!!b.featured) - Number(!!a.featured));

  return (
    <Section id="projects" eyebrow="Projects" index={3}>
      <ol className="flex flex-col">
        {ordered.map((project) => (
          <ExpandableRow
            key={project.slug}
            title={project.name}
            meta={project.tagline}
            trailing={project.status ?? undefined}
          >
            <ProjectBody project={project} />
          </ExpandableRow>
        ))}
      </ol>
    </Section>
  );
}

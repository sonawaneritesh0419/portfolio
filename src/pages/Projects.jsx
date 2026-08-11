import { FolderKanban, ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/resume";

export default function Projects() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Things I've shipped"
        description="A selection of production platforms across FinTech, HRMS/ERP, insurance, e-commerce and healthcare."
      />

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <Card
              key={project.name}
              className="group flex flex-col p-6 sm:p-7 hover:border-primary/40 transition-colors"
            >
              <div className="flex items-start justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10">
                  <FolderKanban className="h-5 w-5 text-primary" />
                </span>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${project.name}`}
                    className="text-ink-faint transition-colors group-hover:text-primary"
                  >
                    <ArrowUpRight className="h-5 w-5" />
                  </a>
                )}
              </div>

              <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                {project.name}
              </h3>
              <p className="font-mono text-xs text-ink-faint">{project.period}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="primary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}

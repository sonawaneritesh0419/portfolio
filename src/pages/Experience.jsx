import { PageHero } from "@/components/ui/page-hero";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { experience } from "@/data/resume";

export default function Experience() {
  return (
    <>
      <PageHero
        eyebrow="Experience"
        title="Where I've built things"
        description="Four roles, one throughline: owning frontend features from spec to production."
      />

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border sm:left-[9px]" />
          <div className="space-y-10">
            {experience.map((job) => (
              <div key={job.company} className="relative pl-8 sm:pl-10">
                <span
                  className={`absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 sm:h-[18px] sm:w-[18px] ${
                    job.current ? "border-primary bg-primary/30" : "border-ink-faint bg-bg"
                  }`}
                />
                <Card className="p-5 sm:p-7">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="font-display text-lg font-semibold text-ink sm:text-xl">
                      {job.role} <span className="text-ink-faint">@</span>{" "}
                      <span className="text-primary">{job.company}</span>
                    </h3>
                    <span className="font-mono text-xs text-ink-faint">{job.period}</span>
                  </div>
                  <p className="mt-1 text-xs text-ink-faint">{job.location}</p>

                  <ul className="mt-4 space-y-2.5">
                    {job.points.map((point, i) => (
                      <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-ink-muted">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary/70" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

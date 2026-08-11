import { GraduationCap, MapPin, Briefcase, Award } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { profile, education, highlights } from "@/data/resume";

const FACTS = [
  { icon: Briefcase, label: "Role", value: profile.role },
  { icon: MapPin, label: "Based in", value: profile.location.split(",").slice(-2).join(",").trim() },
  { icon: Award, label: "Experience", value: "5+ years" },
  { icon: GraduationCap, label: "Education", value: "BCA, Computer Application" },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About me"
        title="The story behind the components"
        description="How five years across FinTech, HRMS, ERP and healthcare shaped the way I build frontend."
      />

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="animate-fade-up">
            <p className="text-base leading-relaxed text-ink-muted sm:text-lg">
              {profile.summary}
            </p>
            <p className="mt-5 text-base leading-relaxed text-ink-muted sm:text-lg">
              I like owning features end-to-end — from reading a requirement or
              a Figma file, through building the component and wiring the API,
              to watching it hold up in production. Along the way I've picked
              up a habit of optimizing what I ship: performance budgets,
              RBAC-secured flows, cross-browser edge cases, and code reviews
              that actually make the next PR easier to write.
            </p>
            <p className="mt-5 text-base leading-relaxed text-ink-muted sm:text-lg">
              Outside of feature work, I mentor junior developers and enjoy
              the unglamorous parts of frontend — CI/CD pipelines, reusable
              component libraries, and turning a messy design handoff into a
              clean, typed component API.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {FACTS.map((fact) => (
              <Card key={fact.label} className="p-5">
                <fact.icon className="h-5 w-5 text-primary" />
                <p className="mt-3 font-mono text-xs uppercase tracking-wide text-ink-faint">
                  {fact.label}
                </p>
                <p className="mt-1 text-sm font-semibold text-ink">{fact.value}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface-2/40 px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Numbers" title="Impact at a glance" />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {highlights.map((h) => (
              <Card key={h.label} className="p-4">
                <p className="font-display text-2xl font-bold text-ink">{h.value}</p>
                <p className="mt-1 text-xs leading-snug text-ink-muted">{h.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <SectionHeading eyebrow="Education" title="Academic background" />
        <div className="space-y-4">
          {education.map((edu) => (
            <Card key={edu.title} className="flex items-center gap-4 p-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <GraduationCap className="h-5 w-5 text-primary" />
              </span>
              <div>
                <p className="text-sm font-semibold text-ink">{edu.title}</p>
                <p className="font-mono text-xs text-ink-faint">{edu.period}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}

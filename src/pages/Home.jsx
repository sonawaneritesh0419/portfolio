import { NavLink } from "react-router-dom";
import { ArrowRight, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { StatCard } from "@/components/ui/stat-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { profile, highlights, stack, projects, experience } from "@/data/resume";

export default function Home() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden mesh-bg">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="animate-fade-up">
            <Badge variant="primary" className="mb-5">
              Available for Senior React roles
            </Badge>
            <h1 className="font-display text-4xl font-extrabold leading-[1.08] text-ink sm:text-6xl">
              {profile.name.split(" ")[0]}{" "}
              <span className="text-ink-faint">{profile.name.split(" ")[1]}</span>
            </h1>
            <p className="mt-3 font-display text-xl font-semibold text-primary sm:text-2xl">
              {profile.role}
            </p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
              {profile.tagline}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button as={NavLink} to="/projects">
                See my work <ArrowRight className="h-4 w-4" />
              </Button>
              <Button as={NavLink} to="/contact" variant="outline">
                Let's talk
              </Button>
              <a
                href={profile.resumeFile}
                download
                className="inline-flex h-11 items-center gap-2 px-4 text-sm font-medium text-ink-muted hover:text-primary transition-colors"
              >
                <Download className="h-4 w-4" /> Resume
              </a>
            </div>

            <div className="mt-8 flex items-center gap-5 text-ink-faint">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-primary transition-colors">
                <GithubIcon className="h-5 w-5" />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-primary transition-colors">
                <LinkedinIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Signature: real, quantified impact shown as a stat dashboard */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 animate-fade-up [animation-delay:120ms] xs:grid-cols-3 lg:grid-cols-2">
            {highlights.map((h, i) => (
              <StatCard
                key={h.label}
                value={h.value}
                label={h.label}
                trend={h.trend}
                className={i === 0 ? "animate-float" : ""}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Quick about teaser ---------- */}
      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeading eyebrow="About" title="Frontend engineering, shipped end-to-end" className="mb-0" />
          <div>
            <p className="text-base leading-relaxed text-ink-muted">
              {profile.summary}
            </p>
            <NavLink to="/about" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
              Read full story <ArrowRight className="h-3.5 w-3.5" />
            </NavLink>
          </div>
        </div>
      </section>

      {/* ---------- Core stack teaser ---------- */}
      <section className="border-y border-border bg-surface-2/40 px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Toolbox" title="Core stack" />
          <div className="flex flex-wrap gap-2.5">
            {stack.frontend.map((item) => (
              <Badge key={item} variant="primary">{item}</Badge>
            ))}
          </div>
          <NavLink to="/skills" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
            View full skill set <ArrowRight className="h-3.5 w-3.5" />
          </NavLink>
        </div>
      </section>

      {/* ---------- Featured projects teaser ---------- */}
      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <SectionHeading eyebrow="Selected work" title="Recent projects" />
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.slice(0, 2).map((project) => (
            <Card key={project.name} className="p-6 hover:border-primary/40 transition-colors">
              <h3 className="font-display text-lg font-semibold text-ink">{project.name}</h3>
              <p className="mt-1 font-mono text-xs text-ink-faint">{project.period}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{project.description}</p>
            </Card>
          ))}
        </div>
        <NavLink to="/projects" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
          See all projects <ArrowRight className="h-3.5 w-3.5" />
        </NavLink>
      </section>

      {/* ---------- Current role teaser ---------- */}
      <section className="border-t border-border px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Right now" title="Currently building" />
          <Card className="p-6 sm:p-8">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-display text-xl font-semibold text-ink">
                {experience[0].role} <span className="text-ink-faint">@</span>{" "}
                <span className="text-primary">{experience[0].company}</span>
              </h3>
              <span className="font-mono text-xs text-ink-faint">{experience[0].period}</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">{experience[0].points[0]}</p>
          </Card>
          <NavLink to="/experience" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
            View full experience <ArrowRight className="h-3.5 w-3.5" />
          </NavLink>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl rounded-3xl border border-border mesh-bg px-6 py-14 text-center sm:py-20">
          <h2 className="font-display text-2xl font-bold text-ink sm:text-4xl">
            Hiring, or have a project in mind?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-ink-muted">
            I read every message myself — tell me about the role or the problem you're solving.
          </p>
          <Button as={NavLink} to="/contact" size="lg" className="mt-7">
            Get in touch <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </section>
    </>
  );
}

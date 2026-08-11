import { Code2, Plug, Wrench, Workflow, Palette, Sparkles } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { stack } from "@/data/resume";

const GROUPS = [
  { key: "frontend", label: "Frontend Technologies", icon: Code2, variant: "primary" },
  { key: "api", label: "API & Integration", icon: Plug, variant: "accent" },
  { key: "tools", label: "Development Tools", icon: Wrench, variant: "coral" },
  { key: "practices", label: "Practices & Workflow", icon: Workflow, variant: "primary" },
  { key: "design", label: "UI & Design", icon: Palette, variant: "accent" },
  { key: "extra", label: "Good to Have", icon: Sparkles, variant: "coral" },
];

export default function Skills() {
  return (
    <>
      <PageHero
        eyebrow="Skills"
        title="What's in the toolbox"
        description="Everything I reach for day to day, grouped the way I actually use it — not just a keyword list."
      />

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="grid gap-6 sm:grid-cols-2">
          {GROUPS.map((group) => (
            <Card key={group.key} className="p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <group.icon className="h-5 w-5 text-primary" />
                </span>
                <h3 className="font-display text-base font-semibold text-ink">
                  {group.label}
                </h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {stack[group.key].map((item) => (
                  <Badge key={item} variant={group.variant}>
                    {item}
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

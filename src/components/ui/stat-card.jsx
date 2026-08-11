import { TrendingUp } from "lucide-react";
import { Card } from "./card";
import { cn } from "@/lib/utils";

export function StatCard({ value, label, trend, className }) {
  return (
    <Card className={cn("noise-card p-4 sm:p-5", className)}>
      <div className="flex items-start justify-between">
        <span className="font-display text-2xl font-bold text-ink sm:text-3xl">
          {value}
        </span>
        {trend === "up" && (
          <span className="mt-1 flex items-center gap-0.5 rounded-full bg-accent/10 px-1.5 py-0.5 text-accent">
            <TrendingUp className="h-3 w-3" />
          </span>
        )}
      </div>
      <p className="mt-1.5 text-xs leading-snug text-ink-muted">{label}</p>
    </Card>
  );
}

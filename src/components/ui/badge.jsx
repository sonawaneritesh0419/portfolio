import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "border-border text-ink-muted bg-surface-2",
        primary: "border-primary/30 text-primary bg-primary/10",
        accent: "border-accent/30 text-accent bg-accent/10",
        coral: "border-coral/30 text-coral bg-coral/10",
      },
    },
    defaultVariants: { variant: "default" },
  }
);

export function Badge({ className, variant, ...props }) {
  return <span className={cn(badgeVariants({ variant, className }))} {...props} />;
}

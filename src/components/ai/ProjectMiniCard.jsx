import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ArrowUpRight } from "lucide-react";
import { closeChat } from "@/store/chatSlice";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/resume";

// Renders a project the assistant referred to. Data comes from resume.js by id,
// so the AI can never show a project that doesn't exist.
export function ProjectMiniCard({ id }) {
  const dispatch = useDispatch();
  const project = projects.find((p) => p.id === id);
  if (!project) return null;

  return (
    <div className="rounded-xl border border-border bg-surface p-3">
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="font-display text-sm font-semibold text-ink">{project.name}</p>
          <p className="font-mono text-[11px] text-ink-faint">{project.period}</p>
        </div>
        <Link
          to="/projects"
          onClick={() => dispatch(closeChat())}
          aria-label={`View ${project.name} on the Projects page`}
          className="text-ink-faint transition-colors hover:text-primary"
        >
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="mt-2 flex flex-wrap gap-1.5">
        {project.tags.slice(0, 4).map((tag) => (
          <Badge key={tag} variant="primary" className="px-2 py-0.5 text-[10px]">
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
}

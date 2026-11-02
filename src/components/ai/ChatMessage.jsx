import { cn } from "@/lib/utils";
import { ProjectMiniCard } from "@/components/ai/ProjectMiniCard";

export function ChatMessage({ message }) {
  const isUser = message.role === "user";

  return (
    <div className={cn("flex flex-col gap-2 animate-fade-up", isUser ? "items-end" : "items-start")}>
      <div
        className={cn(
          "max-w-[88%] whitespace-pre-wrap rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed",
          isUser
            ? "rounded-br-md bg-primary text-primary-ink"
            : message.error
              ? "rounded-bl-md border border-danger/30 bg-danger/10 text-danger"
              : "rounded-bl-md bg-surface-2 text-ink"
        )}
      >
        {message.content}
      </div>

      {message.projectIds?.length > 0 && (
        <div className="w-full max-w-[88%] space-y-2">
          {message.projectIds.map((id) => (
            <ProjectMiniCard key={id} id={id} />
          ))}
        </div>
      )}
    </div>
  );
}

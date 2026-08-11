export function PageLoader() {
  return (
    <div className="flex min-h-[60vh] w-full items-center justify-center">
      <div className="flex items-center gap-3 font-mono text-sm text-ink-muted">
        <span className="h-2 w-2 animate-ping rounded-full bg-primary" />
        Loading...
      </div>
    </div>
  );
}

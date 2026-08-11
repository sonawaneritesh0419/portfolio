export function PageHero({ eyebrow, title, description }) {
  return (
    <div className="relative overflow-hidden border-b border-border mesh-bg">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        {eyebrow && (
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-primary">
            {eyebrow}
          </p>
        )}
        <h1 className="font-display text-3xl font-bold text-ink sm:text-5xl">{title}</h1>
        {description && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

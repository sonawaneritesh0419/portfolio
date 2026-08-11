export function SectionHeading({ eyebrow, title, className }) {
  return (
    <div className={className ?? "mb-10"}>
      {eyebrow && (
        <p className="mb-2 font-mono text-xs uppercase tracking-widest text-primary">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">{title}</h2>
    </div>
  );
}

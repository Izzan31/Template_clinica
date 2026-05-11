type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  tone?: "dark" | "light";
  className?: string;
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  tone = "dark",
  className = ""
}: SectionTitleProps) {
  const titleColor =
    tone === "light" ? "text-white" : "text-[var(--color-text-dark)]";
  const descriptionColor =
    tone === "light" ? "text-white/75" : "text-[var(--color-text-muted)]";
  const eyebrowColor =
    tone === "light"
      ? "text-[var(--color-accent)]"
      : "text-[var(--color-primary)]";

  return (
    <div className={className}>
      {eyebrow ? (
        <p
          className={`mb-3 text-sm font-semibold uppercase tracking-[0.16em] ${eyebrowColor}`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`text-3xl font-semibold leading-tight tracking-tight sm:text-4xl ${titleColor}`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 max-w-2xl text-base leading-8 ${descriptionColor}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}

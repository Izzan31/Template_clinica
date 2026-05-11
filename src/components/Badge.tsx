import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  tone?: "light" | "dark";
  className?: string;
};

export function Badge({ children, tone = "light", className = "" }: BadgeProps) {
  const toneClass =
    tone === "dark"
      ? "border-white/20 bg-white/[0.08] text-[var(--color-accent)] backdrop-blur"
      : "border-[var(--color-border-soft)] bg-white text-[var(--color-primary-dark)]";

  return (
    <span
      className={`inline-flex rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] ${toneClass} ${className}`}
    >
      {children}
    </span>
  );
}

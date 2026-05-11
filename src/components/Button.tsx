export type ButtonTone =
  | "primary"
  | "secondaryLight"
  | "secondaryDark"
  | "dark"
  | "white";

export type ButtonSize = "sm" | "md" | "lg";

const toneClasses: Record<ButtonTone, string> = {
  primary:
    "border-[var(--color-accent)] bg-[var(--color-accent)] text-[var(--color-primary-dark)] hover:bg-white",
  secondaryLight:
    "border-white/25 bg-white/[0.08] text-white backdrop-blur hover:bg-white hover:text-[var(--color-primary-dark)]",
  secondaryDark:
    "border-[var(--color-border-soft)] bg-transparent text-[var(--color-primary-dark)] hover:border-[var(--color-accent)] hover:bg-white",
  dark:
    "border-[var(--color-primary-dark)] bg-[var(--color-primary-dark)] text-white hover:bg-[var(--color-primary)]",
  white:
    "border-white bg-white text-[var(--color-primary-dark)] hover:bg-[var(--color-accent)]"
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "min-h-10 px-4 py-2 text-sm",
  md: "min-h-11 px-5 py-3 text-sm",
  lg: "min-h-12 px-6 py-3.5 text-base"
};

export function buttonStyles({
  tone = "primary",
  size = "md",
  className = ""
}: {
  tone?: ButtonTone;
  size?: ButtonSize;
  className?: string;
} = {}) {
  return `inline-flex items-center justify-center gap-2 rounded-full border font-semibold transition duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2 ${sizeClasses[size]} ${toneClasses[tone]} ${className}`;
}

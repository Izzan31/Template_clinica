import type { LucideIcon } from "lucide-react";

type FloatingInfoCardProps = {
  icon: LucideIcon;
  label: string;
  value: string;
  className?: string;
};

export function FloatingInfoCard({
  icon: Icon,
  label,
  value,
  className = ""
}: FloatingInfoCardProps) {
  return (
    <div
      className={`rounded-3xl border border-white/30 bg-white/[0.72] p-4 text-[var(--color-primary-dark)] shadow-[0_18px_55px_rgba(6,42,56,0.18)] backdrop-blur-xl ${className}`}
    >
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--color-accent)] text-[var(--color-primary-dark)]">
          <Icon className="h-5 w-5" />
        </span>
        <div>
          <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
            {label}
          </span>
          <strong className="mt-0.5 block text-sm leading-5">{value}</strong>
        </div>
      </div>
    </div>
  );
}

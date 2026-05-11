import { BadgeCheck, Scale, ShieldCheck } from "lucide-react";
import { clinicConfig } from "@/config/clinic.config";

const trustIcons = [BadgeCheck, ShieldCheck, Scale];

type TrustBlockProps = {
  className?: string;
  compact?: boolean;
};

export function TrustBlock({ className = "", compact = false }: TrustBlockProps) {
  return (
    <div
      className={`grid gap-4 ${
        compact ? "md:grid-cols-3" : "sm:grid-cols-3"
      } ${className}`}
    >
      {clinicConfig.trustItems.map((item, index) => {
        const Icon = trustIcons[index] ?? BadgeCheck;

        return (
          <article
            className="rounded-[22px] border border-[var(--color-border-soft)] bg-[var(--color-surface)] p-5 shadow-[0_16px_50px_rgba(6,42,56,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)] hover:shadow-soft"
            key={item.title}
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-accent)] text-[var(--color-primary-dark)]">
              <Icon aria-hidden="true" className="h-5 w-5" />
            </span>
            <h3 className="mt-4 font-semibold text-[var(--color-text-dark)]">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-[var(--color-text-muted)]">
              {item.description}
            </p>
          </article>
        );
      })}
    </div>
  );
}

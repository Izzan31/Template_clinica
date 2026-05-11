import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/config/clinic.config";
import { Badge } from "@/components/Badge";
import { ServiceIcon } from "@/components/ServiceIcon";

type ServiceCardProps = {
  service: Service;
  compact?: boolean;
};

export function ServiceCard({ service, compact = false }: ServiceCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-[24px] border border-[var(--color-border-soft)] bg-[var(--color-surface)] shadow-[0_16px_50px_rgba(6,42,56,0.06)] transition duration-300 hover:-translate-y-1.5 hover:border-[var(--color-accent)] hover:shadow-soft">
      <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,var(--color-accent),var(--color-primary))]" />
      <div className={compact ? "p-5" : "p-6"}>
        <div className="flex items-start justify-between gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-border-soft)] bg-[var(--color-accent)] text-[var(--color-primary-dark)] transition duration-300 group-hover:bg-[var(--color-primary-dark)] group-hover:text-white">
            <ServiceIcon icon={service.icon} />
          </div>
          <Badge>{service.categoryLabel}</Badge>
        </div>
        <h2 className="mt-5 text-xl font-semibold text-[var(--color-text-dark)]">
          {service.title}
        </h2>
        <p className="mt-3 text-sm leading-7 text-[var(--color-text-muted)]">
          {service.description}
        </p>
        <Link
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary-dark)] transition duration-200 group-hover:text-[var(--color-primary)]"
          href={`/servicos/${service.slug}`}
        >
          Ver detalhes
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}

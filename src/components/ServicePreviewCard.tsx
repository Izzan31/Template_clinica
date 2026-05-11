import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/Badge";
import type { Service } from "@/config/clinic.config";

type ServicePreviewCardProps = {
  service: Service;
  featured?: boolean;
};

export function ServicePreviewCard({
  service,
  featured = false
}: ServicePreviewCardProps) {
  return (
    <Link
      className={`group relative overflow-hidden rounded-[28px] border border-[var(--color-border-soft)] bg-[var(--color-surface)] shadow-[0_18px_55px_rgba(6,42,56,0.08)] transition duration-500 hover:-translate-y-1.5 hover:border-[var(--color-accent)] hover:shadow-[0_28px_80px_rgba(6,42,56,0.14)] ${
        featured ? "lg:col-span-2" : ""
      }`}
      href={`/servicos/${service.slug}`}
    >
      <div className={featured ? "grid h-full lg:grid-cols-[1.1fr_0.9fr]" : ""}>
        <div className="relative min-h-64 overflow-hidden">
          <Image
            alt={service.title}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            fill
            sizes={featured ? "(min-width: 1024px) 520px, 100vw" : "420px"}
            src={service.image}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_35%,rgba(6,42,56,0.58)_100%)]" />
          <Badge className="absolute left-5 top-5 normal-case tracking-[0.08em]">
            {service.categoryLabel}
          </Badge>
        </div>
        <div className="flex flex-col justify-between p-6">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight text-[var(--color-text-dark)]">
              {service.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-[var(--color-text-muted)]">
              {service.description}
            </p>
          </div>
          <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary-dark)]">
            Ver detalhes
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-background)] text-[var(--color-primary)] transition duration-300 group-hover:bg-[var(--color-accent)]">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
}

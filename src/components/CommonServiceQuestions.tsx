import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { clinicConfig } from "@/config/clinic.config";

export function CommonServiceQuestions() {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {clinicConfig.services.map((service) => (
        <article
          className="rounded-[24px] border border-[var(--color-border-soft)] bg-[var(--color-surface)] p-5 shadow-[0_16px_50px_rgba(6,42,56,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)] hover:shadow-soft"
          key={service.slug}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-primary)]">
            {service.categoryLabel}
          </p>
          <h3 className="mt-3 text-lg font-semibold text-[var(--color-text-dark)]">
            {service.shortTitle}
          </h3>
          <div className="mt-4 grid gap-3">
            {service.faqs.slice(0, 2).map((faq) => (
              <div key={faq.question}>
                <p className="text-sm font-semibold text-[var(--color-text-dark)]">
                  {faq.question}
                </p>
                <p className="mt-1 line-clamp-2 text-sm leading-6 text-[var(--color-text-muted)]">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
          <Link
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary-dark)] transition hover:text-[var(--color-primary)]"
            href={`/servicos/${service.slug}`}
          >
            Ver dúvidas do serviço
            <ArrowRight className="h-4 w-4" />
          </Link>
        </article>
      ))}
    </div>
  );
}

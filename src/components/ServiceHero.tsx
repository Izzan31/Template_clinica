import { Sparkles } from "lucide-react";
import { CTAWhatsApp } from "@/components/CTAWhatsApp";
import { PageHero } from "@/components/PageHero";
import type { Service } from "@/config/clinic.config";

type ServiceHeroProps = {
  service: Service;
};

export function ServiceHero({ service }: ServiceHeroProps) {
  return (
    <PageHero
      description={service.intro}
      eyebrow={service.categoryLabel}
      image={service.image}
      title={service.seoTitle}
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <CTAWhatsApp message={service.whatsappMessage} size="lg">
          Agendar avaliação
        </CTAWhatsApp>
        <p className="inline-flex items-center gap-2 text-sm font-medium text-white/[0.8]">
          <Sparkles className="h-4 w-4 text-[var(--color-accent)]" />
          Planejamento sem promessa de resultado
        </p>
      </div>
    </PageHero>
  );
}


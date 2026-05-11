import type { Metadata } from "next";
import { Badge } from "@/components/Badge";
import { CommonServiceQuestions } from "@/components/CommonServiceQuestions";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { ServiceCatalog } from "@/components/ServiceCatalog";
import { clinicConfig } from "@/config/clinic.config";

export const metadata: Metadata = {
  title: `Serviços odontológicos | ${clinicConfig.name}`,
  description:
    "Catálogo premium de serviços odontológicos com prevenção, estética, reabilitação e urgência."
};

export default function ServicesPage() {
  return (
    <PageShell>
      <PageHero
        description="Serviços organizados por tipo de cuidado, com páginas próprias, dúvidas específicas e CTA de WhatsApp personalizado."
        eyebrow="Catálogo de serviços"
        image={clinicConfig.images.treatment}
        title="Escolha o cuidado certo para começar sua jornada"
      />

      <section className="bg-[var(--color-background)] py-16 sm:py-20">
        <Container>
          <ServiceCatalog services={clinicConfig.services} />
        </Container>
      </section>

      <section className="bg-[var(--color-surface)] py-16 sm:py-20">
        <Container>
          <div className="mb-8 max-w-3xl">
            <Badge>Dúvidas comuns</Badge>
            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-[var(--color-text-dark)]">
              Perguntas separadas por serviço
            </h2>
            <p className="mt-4 text-base leading-8 text-[var(--color-text-muted)]">
              Veja respostas iniciais por área de cuidado. A orientação final
              depende de avaliação clínica individual.
            </p>
          </div>
          <CommonServiceQuestions />
        </Container>
      </section>
    </PageShell>
  );
}

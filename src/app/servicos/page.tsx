import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { ServiceCatalog } from "@/components/ServiceCatalog";
import { clinicConfig } from "@/config/clinic.config";

export const metadata: Metadata = {
  title: `Serviços odontológicos | ${clinicConfig.name}`,
  description:
    "Catálogo de serviços odontológicos com prevenção, estética, reabilitação e urgência."
};

export default function ServicesPage() {
  return (
    <PageShell>
      <PageHero
        description="Tratamentos organizados por categoria, com detalhes nas páginas individuais."
        eyebrow="Serviços"
        image={null}
        title="Catálogo odontológico"
      />

      <section className="bg-[var(--color-background)] py-16 sm:py-20">
        <Container>
          <ServiceCatalog services={clinicConfig.services} />
        </Container>
      </section>
    </PageShell>
  );
}

import type { Metadata } from "next";
import { BookingWizard } from "@/components/BookingWizard";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { clinicConfig } from "@/config/clinic.config";

export const metadata: Metadata = {
  title: `Agendamento | ${clinicConfig.name}`,
  description:
    "Agende sua avaliação odontológica pelo WhatsApp com mensagem pronta, horário e endereço."
};

const quickButtonSlugs = [
  "avaliacao-odontologica",
  "limpeza",
  "clareamento",
  "implante",
  "urgencia-odontologica"
] as const;

export default function BookingPage() {
  const quickServices = clinicConfig.services.filter((service) =>
    quickButtonSlugs.includes(service.slug as (typeof quickButtonSlugs)[number])
  );

  return (
    <PageShell>
      <PageHero
        description="Selecione o serviço, confira a mensagem e abra o WhatsApp."
        eyebrow="Agendamento"
        image={null}
        title="Marcar consulta"
      />

      <section className="bg-[var(--color-background)] py-16 sm:py-20">
        <Container>
          <BookingWizard services={quickServices} />
        </Container>
      </section>
    </PageShell>
  );
}

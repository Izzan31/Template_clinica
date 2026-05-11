import type { Metadata } from "next";
import { ExternalLink, Mail } from "lucide-react";
import { Badge } from "@/components/Badge";
import { buttonStyles } from "@/components/Button";
import { ContactActionPanel } from "@/components/ContactActionPanel";
import { Container } from "@/components/Container";
import { CTAWhatsApp } from "@/components/CTAWhatsApp";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { clinicConfig } from "@/config/clinic.config";

export const metadata: Metadata = {
  title: `Contato | ${clinicConfig.name}`,
  description:
    "Endereço, WhatsApp, Instagram, horários e localização da clínica odontológica."
};

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero
        description="Endereço, horários e canais diretos da clínica."
        eyebrow="Contato"
        image={clinicConfig.images.clinic}
        title="Fale com a clínica e confirme sua consulta"
      >
        <CTAWhatsApp size="lg">Chamar no WhatsApp</CTAWhatsApp>
      </PageHero>

      <section className="bg-[var(--color-background)] py-16 sm:py-24">
        <Container>
          <ContactActionPanel />
        </Container>
      </section>

      <section className="bg-[var(--color-surface)] py-16 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <Reveal>
            <Badge>Como chegar</Badge>
            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-[var(--color-text-dark)]">
              Referências para chegar com tranquilidade
            </h2>
          </Reveal>

          <StaggerGroup className="grid gap-0 border-y border-[var(--color-border-soft)]">
            {clinicConfig.locationReferences.map((reference, index) => (
              <StaggerItem key={reference}>
                <article className="grid gap-4 border-b border-[var(--color-border-soft)] py-6 last:border-b-0 sm:grid-cols-[72px_1fr]">
                  <span className="text-3xl font-semibold tracking-tight text-[rgba(6,42,56,0.18)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-lg font-semibold text-[var(--color-text-dark)]">
                    {reference}
                  </p>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      <section className="bg-[var(--color-background)] py-16 sm:py-20">
        <Container>
          <Reveal className="border border-[var(--color-border-soft)] bg-white p-7 sm:p-9">
            <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <Badge>Contato institucional</Badge>
                <h2 className="mt-4 text-3xl font-semibold text-[var(--color-text-dark)]">
                  Outros canais da clínica
                </h2>
                <p className="mt-3 flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
                  <Mail className="h-4 w-4 text-[var(--color-primary)]" />
                  {clinicConfig.email}
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <CTAWhatsApp size="lg">Chamar no WhatsApp</CTAWhatsApp>
                <a
                  className={buttonStyles({ tone: "secondaryDark", size: "lg" })}
                  href={clinicConfig.instagram}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Instagram
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </PageShell>
  );
}

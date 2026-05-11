import type { Metadata } from "next";
import { AtSign, Mail, Phone } from "lucide-react";
import { clinicConfig } from "@/config/clinic.config";
import { Container } from "@/components/Container";
import { CTAWhatsApp } from "@/components/CTAWhatsApp";
import { LocationBlock } from "@/components/LocationBlock";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: `Contato | ${clinicConfig.name}`,
  description:
    "Endereço, WhatsApp, Instagram, horários e localização da clínica odontológica."
};

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero
        description="Veja endereço, horários, canais de contato e referências para chegar à clínica."
        eyebrow="Contato"
        image={clinicConfig.images.clinic}
        title="Fale com a clínica e confirme sua consulta"
      >
        <CTAWhatsApp size="lg">Chamar no WhatsApp</CTAWhatsApp>
      </PageHero>

      <section className="bg-[var(--color-background)] py-16 sm:py-20">
        <Container className="grid gap-6 md:grid-cols-3">
          <article className="rounded-[28px] border border-[var(--color-border-soft)] bg-[var(--color-surface)] p-7 shadow-[0_20px_70px_rgba(6,42,56,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)] hover:shadow-soft">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-accent)] text-[var(--color-primary-dark)]">
              <Phone className="h-6 w-6" />
            </span>
            <h2 className="mt-5 text-xl font-semibold text-[var(--color-text-dark)]">
              WhatsApp
            </h2>
            <p className="mt-2 text-sm leading-7 text-[var(--color-text-muted)]">
              {clinicConfig.phoneDisplay}
            </p>
          </article>

          <article className="rounded-[28px] border border-[var(--color-border-soft)] bg-[var(--color-surface)] p-7 shadow-[0_20px_70px_rgba(6,42,56,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)] hover:shadow-soft">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-accent)] text-[var(--color-primary-dark)]">
              <AtSign className="h-6 w-6" />
            </span>
            <h2 className="mt-5 text-xl font-semibold text-[var(--color-text-dark)]">
              Instagram
            </h2>
            <a
              className="mt-2 inline-block text-sm font-semibold text-[var(--color-text-muted)] transition hover:text-[var(--color-primary)]"
              href={clinicConfig.instagram}
              rel="noopener noreferrer"
              target="_blank"
            >
              {clinicConfig.instagramHandle}
            </a>
          </article>

          <article className="rounded-[28px] border border-[var(--color-border-soft)] bg-[var(--color-surface)] p-7 shadow-[0_20px_70px_rgba(6,42,56,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)] hover:shadow-soft">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-accent)] text-[var(--color-primary-dark)]">
              <Mail className="h-6 w-6" />
            </span>
            <h2 className="mt-5 text-xl font-semibold text-[var(--color-text-dark)]">
              E-mail
            </h2>
            <p className="mt-2 text-sm leading-7 text-[var(--color-text-muted)]">
              {clinicConfig.email}
            </p>
          </article>
        </Container>
      </section>

      <section className="bg-[var(--color-surface)] py-16 sm:py-20">
        <Container>
          <LocationBlock />
        </Container>
      </section>
    </PageShell>
  );
}

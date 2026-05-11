import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/Badge";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { ProfessionalInfo } from "@/components/ProfessionalInfo";
import { clinicConfig } from "@/config/clinic.config";

export const metadata: Metadata = {
  title: `Sobre a clínica | ${clinicConfig.name}`,
  description:
    "Conheça a estrutura, responsável técnico e princípios de atendimento da clínica."
};

const careCards = [
  "Atendimento próximo",
  "Avaliação clara",
  "Comunicação direta"
];

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        description="Uma clínica odontológica pequena, organizada e focada em avaliação clara, atendimento privado e condutas explicadas."
        eyebrow="Sobre"
        image={clinicConfig.images.consultation}
        title="Cuidado odontológico com estrutura enxuta e atenção aos detalhes"
      />

      <section className="bg-white py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <Badge>História</Badge>
            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-[var(--color-text-dark)] sm:text-5xl">
              Atendimento próximo, sem perder rigor clínico
            </h2>
            <p className="mt-5 text-base leading-8 text-[var(--color-text-muted)]">
              {clinicConfig.about.story}
            </p>
            <p className="mt-4 text-base leading-8 text-[var(--color-text-muted)]">
              {clinicConfig.about.humanCare}
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {careCards.map((card) => (
                <article
                  className="rounded-[22px] border border-[var(--color-border-soft)] bg-[var(--color-background)] p-4"
                  key={card}
                >
                  <CheckCircle2 className="h-5 w-5 text-[var(--color-primary)]" />
                  <p className="mt-3 text-sm font-semibold leading-6 text-[var(--color-text-dark)]">
                    {card}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="relative min-h-[480px] overflow-hidden rounded-[30px] shadow-[0_24px_70px_rgba(6,42,56,0.12)]">
            <Image
              alt="Ambiente de atendimento odontológico"
              className="h-full w-full object-cover"
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              src={clinicConfig.images.clinic}
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_42%,rgba(6,42,56,0.48)_100%)]" />
          </div>
        </Container>
      </section>

      <section className="bg-[var(--color-background)] py-16 sm:py-20">
        <Container className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-[28px] border border-[var(--color-border-soft)] bg-white p-7 shadow-[0_18px_55px_rgba(6,42,56,0.06)]">
            <Badge>Estrutura</Badge>
            <h2 className="mt-4 text-2xl font-semibold text-[var(--color-text-dark)]">
              Ambiente preparado para consultas objetivas
            </h2>
            <p className="mt-4 text-sm leading-7 text-[var(--color-text-muted)]">
              {clinicConfig.about.structure}
            </p>
          </article>

          <article className="rounded-[28px] border border-[var(--color-border-soft)] bg-white p-7 shadow-[0_18px_55px_rgba(6,42,56,0.06)]">
            <Badge>Responsável técnico</Badge>
            <h2 className="mt-4 text-2xl font-semibold text-[var(--color-text-dark)]">
              {clinicConfig.responsible}
            </h2>
            <p className="mt-2 text-sm font-semibold text-[var(--color-text-muted)]">
              {clinicConfig.cro}
            </p>
            <p className="mt-4 text-sm leading-7 text-[var(--color-text-muted)]">
              Responsável pela condução técnica da clínica, protocolos de
              atendimento e orientação ética dos casos.
            </p>
          </article>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <ProfessionalInfo />
        </Container>
      </section>

      <section className="bg-[var(--color-background)] py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div>
              <Badge>Ética e confiança</Badge>
              <h2 className="mt-4 text-3xl font-semibold text-[var(--color-text-dark)]">
                Comunicação responsável em todas as etapas
              </h2>
              <p className="mt-4 text-base leading-8 text-[var(--color-text-muted)]">
                {clinicConfig.about.ethics}
              </p>
              <div className="mt-6 flex gap-3 rounded-[22px] border border-[var(--color-border-soft)] bg-white p-4 text-sm leading-7 text-[var(--color-text-dark)]">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[var(--color-primary)]" />
                A clínica evita promessas de cura, garantias de resultado e
                exposição comparativa de casos.
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {clinicConfig.trustItems.map((item) => (
                <article
                  className="rounded-[24px] border border-[var(--color-border-soft)] bg-white p-5 shadow-[0_16px_50px_rgba(6,42,56,0.06)]"
                  key={item.title}
                >
                  <CheckCircle2 className="h-5 w-5 text-[var(--color-primary)]" />
                  <h3 className="mt-4 font-semibold text-[var(--color-text-dark)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--color-text-muted)]">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}

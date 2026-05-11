import type { Metadata } from "next";
import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import { AboutInteractiveTimeline } from "@/components/AboutInteractiveTimeline";
import { Badge } from "@/components/Badge";
import { Container } from "@/components/Container";
import { ImageReveal } from "@/components/motion/ImageReveal";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { ProfessionalInfo } from "@/components/ProfessionalInfo";
import { clinicConfig } from "@/config/clinic.config";

export const metadata: Metadata = {
  title: `Sobre a clínica | ${clinicConfig.name}`,
  description:
    "História, estrutura, responsável técnico e princípios da clínica."
};

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        description="Uma clínica pequena, privada e orientada por conduta ética."
        eyebrow="Sobre"
        image={clinicConfig.images.consultation}
        title="Uma clínica feita para consultas mais cuidadosas"
      />

      <section className="bg-[var(--color-surface)] py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <Reveal>
            <Badge>A clínica</Badge>
            <h2 className="mt-5 max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-[var(--color-text-dark)] sm:text-5xl">
              Menor por escolha
            </h2>
            <div className="mt-7 grid gap-5 border-l border-[var(--color-border-soft)] pl-6 text-base leading-8 text-[var(--color-text-muted)]">
              <p>{clinicConfig.about.story}</p>
            </div>
          </Reveal>

          <ImageReveal className="relative min-h-[500px] rounded-[18px] shadow-[0_30px_90px_rgba(6,42,56,0.14)]">
            <Image
              alt="Ambiente de atendimento odontológico"
              className="h-full w-full object-cover"
              fill
              sizes="(min-width: 1024px) 620px, 100vw"
              src={clinicConfig.images.clinic}
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_44%,rgba(6,42,56,0.58)_100%)]" />
            <div className="absolute bottom-6 left-6 right-6 border border-white/20 bg-white/[0.12] p-5 text-white backdrop-blur-md">
              <p className="text-sm font-semibold">Estrutura</p>
              <p className="mt-2 text-sm leading-6 text-white/[0.76]">
                {clinicConfig.about.structure}
              </p>
            </div>
          </ImageReveal>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-[var(--color-background)] py-16 sm:py-20">
        <Container>
          <Reveal className="max-w-3xl">
            <Badge>Atendimento</Badge>
            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-[var(--color-text-dark)] sm:text-5xl">
              Quatro etapas, sem excesso
            </h2>
          </Reveal>
          <AboutInteractiveTimeline />
        </Container>
      </section>

      <section className="bg-[var(--color-primary-dark)] py-16 text-white sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <Reveal>
            <Badge tone="dark">Princípios</Badge>
            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Ética antes de promessa.
            </h2>
          </Reveal>

          <StaggerGroup className="grid gap-4 sm:grid-cols-3">
            {clinicConfig.trustItems.map((item) => (
              <StaggerItem key={item.title}>
                <article className="border-l border-white/[0.16] pl-5">
                  <ShieldCheck className="h-6 w-6 text-[var(--color-accent)]" />
                  <h3 className="mt-8 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/[0.72]">
                    {item.description}
                  </p>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      <section className="bg-[var(--color-surface)] py-16 sm:py-20">
        <Container>
          <Reveal className="max-w-5xl">
            <ProfessionalInfo />
          </Reveal>
        </Container>
      </section>
    </PageShell>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import { Badge } from "@/components/Badge";
import { buttonStyles } from "@/components/Button";
import { Container } from "@/components/Container";
import { PageShell } from "@/components/PageShell";
import { PremiumHero } from "@/components/PremiumHero";
import { ServicePreviewCard } from "@/components/ServicePreviewCard";
import { clinicConfig, getFeaturedServices } from "@/config/clinic.config";
import { getWhatsAppLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: `${clinicConfig.name} | Clínica odontológica premium em ${clinicConfig.city}`,
  description:
    "Clínica odontológica em São Paulo com avaliação, limpeza, clareamento, implante, aparelho e urgência odontológica."
};

const methodPillars = [
  "Escuta objetiva desde o primeiro contato",
  "Avaliação clínica antes de qualquer indicação",
  "Próximos passos explicados com clareza"
];

const trustPoints = [
  "Atendimento com hora marcada",
  "Planejamento explicado",
  "Comunicação direta pelo WhatsApp"
];

export default function Home() {
  const featuredServices = getFeaturedServices().slice(0, 3);

  return (
    <PageShell>
      <PremiumHero />

      <section className="bg-[var(--color-background)] py-20 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <Badge>Cuidado com método</Badge>
              <h2 className="mt-4 max-w-xl text-4xl font-semibold leading-tight tracking-tight text-[var(--color-text-dark)] sm:text-5xl">
                Clareza do primeiro contato ao acompanhamento
              </h2>
            </div>
            <div>
              <p className="max-w-2xl text-base leading-8 text-[var(--color-text-muted)]">
                Uma experiência mais direta para quem quer entender prioridades,
                possibilidades e próximos passos antes de decidir qualquer
                tratamento.
              </p>
              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {methodPillars.map((pillar) => (
                  <article
                    className="rounded-[24px] border border-[var(--color-border-soft)] bg-[var(--color-surface)] p-5 shadow-[0_16px_50px_rgba(6,42,56,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)] hover:shadow-[0_24px_70px_rgba(6,42,56,0.10)]"
                    key={pillar}
                  >
                    <CheckCircle2 className="h-5 w-5 text-[var(--color-primary)]" />
                    <p className="mt-4 text-sm font-semibold leading-6 text-[var(--color-text-dark)]">
                      {pillar}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--color-surface)] py-20 sm:py-24">
        <Container>
          <div className="mb-9 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div className="max-w-3xl">
              <Badge>Serviços principais</Badge>
              <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-[var(--color-text-dark)] sm:text-5xl">
                Cuidados essenciais em uma jornada visual e organizada
              </h2>
            </div>
            <Link
              className={buttonStyles({ tone: "secondaryDark" })}
              href="/servicos"
            >
              Ver catálogo completo
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {featuredServices.map((service) => (
              <ServicePreviewCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[var(--color-background)] py-20 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="relative min-h-[520px] overflow-hidden rounded-[34px] shadow-[0_28px_80px_rgba(6,42,56,0.14)]">
              <Image
                alt="Dentista em consulta odontológica organizada"
                className="h-full w-full object-cover"
                fill
                sizes="(min-width: 1024px) 600px, 100vw"
                src={clinicConfig.images.consultation}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,42,56,0.04),rgba(6,42,56,0.44))]" />
            </div>
            <div>
              <Badge>Confiança clínica</Badge>
              <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-[var(--color-text-dark)] sm:text-5xl">
                Uma clínica organizada para consultas mais claras
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-[var(--color-text-muted)]">
                A rotina da clínica foi pensada para orientar com calma, reduzir
                dúvidas e manter uma comunicação simples antes e depois da
                avaliação.
              </p>
              <div className="mt-8 grid gap-4">
                {trustPoints.map((point) => (
                  <div
                    className="flex items-center gap-4 rounded-[22px] border border-[var(--color-border-soft)] bg-[var(--color-surface)] p-4 shadow-[0_16px_50px_rgba(6,42,56,0.06)]"
                    key={point}
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-accent)] text-[var(--color-primary-dark)]">
                      <CheckCircle2 className="h-5 w-5" />
                    </span>
                    <p className="font-semibold text-[var(--color-text-dark)]">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--color-surface)] py-20 sm:py-24">
        <Container>
          <div className="relative overflow-hidden rounded-[34px] bg-[var(--color-primary-dark)] p-8 text-white shadow-[0_28px_80px_rgba(6,42,56,0.18)] sm:p-10 lg:p-12">
            <Image
              alt="Consultório odontológico moderno"
              className="h-full w-full object-cover opacity-20"
              fill
              sizes="1200px"
              src={clinicConfig.images.clinic}
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,42,56,0.94),rgba(11,111,138,0.68))]" />
            <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <Badge tone="dark">Agendamento</Badge>
                <h2 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                  Pronto para marcar sua avaliação?
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-white/[0.78]">
                  Envie uma mensagem pelo WhatsApp e receba orientação sobre
                  horários, endereço e próximos passos.
                </p>
              </div>
              <a
                className={buttonStyles({ tone: "primary", size: "lg" })}
                href={getWhatsAppLink()}
                rel="noopener noreferrer"
                target="_blank"
              >
                <MessageCircle className="h-5 w-5" />
                Agendar pelo WhatsApp
              </a>
            </div>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}

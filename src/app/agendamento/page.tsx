import type { Metadata } from "next";
import { CheckCircle2, Clock, FileText, MessageSquareText } from "lucide-react";
import { clinicConfig } from "@/config/clinic.config";
import { Badge } from "@/components/Badge";
import { CommonServiceQuestions } from "@/components/CommonServiceQuestions";
import { Container } from "@/components/Container";
import { CTAWhatsApp } from "@/components/CTAWhatsApp";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { ServiceIcon } from "@/components/ServiceIcon";

export const metadata: Metadata = {
  title: `Agendamento | ${clinicConfig.name}`,
  description:
    "Agende sua avaliação odontológica pelo WhatsApp e veja quais informações enviar no primeiro contato."
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
        description="Envie uma mensagem objetiva pelo WhatsApp para verificar disponibilidade, receber orientações iniciais e marcar sua consulta."
        eyebrow="Agendamento"
        image={clinicConfig.images.clinic}
        title="Agende sua avaliação pelo WhatsApp"
      >
        <CTAWhatsApp size="lg">Iniciar conversa</CTAWhatsApp>
      </PageHero>

      <section className="bg-[var(--color-background)] py-16 sm:py-20">
        <Container className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <aside className="rounded-[28px] border border-[var(--color-border-soft)] bg-[var(--color-surface)] p-7 shadow-[0_20px_70px_rgba(6,42,56,0.08)]">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-accent)] text-[var(--color-primary-dark)]">
              <Clock className="h-6 w-6" />
            </span>
            <h2 className="mt-5 text-2xl font-semibold text-[var(--color-text-dark)]">
              Horários de atendimento
            </h2>
            <div className="mt-4 grid gap-2 text-sm leading-7 text-[var(--color-text-muted)]">
              {clinicConfig.businessHours.map((hour) => (
                <p key={hour}>{hour}</p>
              ))}
            </div>
            <p className="mt-5 text-sm leading-7 text-[var(--color-text-muted)]">
              Horários específicos dependem da disponibilidade da agenda no
              momento do contato.
            </p>
          </aside>

          <div>
            <Badge>Primeiro contato</Badge>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--color-text-dark)]">
              Como funciona a conversa inicial
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {clinicConfig.bookingSteps.map((step, index) => (
                <article
                  className="rounded-[26px] border border-[var(--color-border-soft)] bg-[var(--color-surface)] p-5 shadow-[0_18px_55px_rgba(6,42,56,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)] hover:shadow-soft"
                  key={step.title}
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-accent)] text-sm font-bold text-[var(--color-primary-dark)]">
                    {index + 1}
                  </span>
                  <h3 className="mt-4 font-semibold text-[var(--color-text-dark)]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[var(--color-text-muted)]">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--color-surface)] py-16 sm:py-20">
        <Container className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div>
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-accent)] text-[var(--color-primary-dark)]">
              <FileText className="h-6 w-6" />
            </span>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-[var(--color-text-dark)]">
              Antes da primeira consulta
            </h2>
            <p className="mt-4 text-base leading-8 text-[var(--color-text-muted)]">
              A primeira visita é voltada para entender sua necessidade,
              avaliar prioridades e explicar possibilidades de cuidado. O
              planejamento definitivo depende da avaliação presencial.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Confirme endereço, horário e tempo estimado antes de sair.",
              "Leve documentos pessoais apenas para cadastro presencial.",
              "Se tiver exames recentes, leve no dia da consulta.",
              "Evite enviar exames completos ou dados sensíveis pelo WhatsApp."
            ].map((item) => (
              <article
                className="flex gap-3 rounded-[24px] border border-[var(--color-border-soft)] bg-[var(--color-surface)] p-5 shadow-[0_16px_50px_rgba(6,42,56,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)] hover:shadow-soft"
                key={item}
              >
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[var(--color-primary)]" />
                <p className="text-sm leading-7 text-[var(--color-text-muted)]">
                  {item}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[var(--color-background)] py-16 sm:py-20">
        <Container className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-accent)] text-[var(--color-primary-dark)]">
              <MessageSquareText className="h-6 w-6" />
            </span>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-[var(--color-text-dark)]">
              Quais informações enviar
            </h2>
            <p className="mt-4 text-base leading-8 text-[var(--color-text-muted)]">
              Para agilizar, envie nome, serviço de interesse, melhor período
              para atendimento e uma descrição breve do motivo do contato.
              Evite enviar documentos, exames completos ou dados sensíveis pelo
              WhatsApp antes da orientação da equipe.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {quickServices.map((service) => (
              <CTAWhatsApp
                className="justify-start bg-white"
                key={service.slug}
                message={service.whatsappMessage}
                tone="outline"
              >
                <span className="inline-flex items-center gap-2">
                  <ServiceIcon icon={service.icon} className="h-4 w-4" />
                  {service.shortTitle}
                </span>
              </CTAWhatsApp>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[var(--color-surface)] py-16 sm:py-20">
        <Container>
          <div className="mb-8 max-w-3xl">
            <Badge>Dúvidas comuns</Badge>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--color-text-dark)]">
              Perguntas por serviço antes de agendar
            </h2>
            <p className="mt-4 text-base leading-8 text-[var(--color-text-muted)]">
              Use estas respostas como orientação inicial. O WhatsApp serve para
              agendar e direcionar o atendimento, sem substituir a consulta.
            </p>
          </div>
          <CommonServiceQuestions />
        </Container>
      </section>
    </PageShell>
  );
}

import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  MapPin,
  ShieldCheck
} from "lucide-react";
import { Badge } from "@/components/Badge";
import { Container } from "@/components/Container";
import { CTAWhatsApp } from "@/components/CTAWhatsApp";
import { FAQAccordion } from "@/components/FAQAccordion";
import { AnimatedLine } from "@/components/motion/AnimatedLine";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import type { Service } from "@/config/clinic.config";
import { clinicConfig } from "@/config/clinic.config";

type ServicePageLayoutProps = {
  service: Service;
};

type ServiceVariant = "entry" | "preventive" | "aesthetic" | "technical" | "urgent";

function getServiceVariant(service: Service): ServiceVariant {
  if (service.slug === "urgencia-odontologica") return "urgent";
  if (service.slug === "clareamento") return "aesthetic";
  if (service.slug === "limpeza") return "preventive";
  if (service.slug === "avaliacao-odontologica") return "entry";
  return "technical";
}

function ServiceSidebar({ service }: { service: Service }) {
  return (
    <aside className="rounded-[18px] border border-[var(--color-border-soft)] bg-[var(--color-surface)] p-6 shadow-[0_20px_70px_rgba(6,42,56,0.10)] lg:sticky lg:top-32">
      <Badge>Agendamento</Badge>
      <h2 className="mt-4 text-2xl font-semibold tracking-tight text-[var(--color-text-dark)]">
        Fale com a clínica
      </h2>
      <p className="mt-3 text-sm leading-7 text-[var(--color-text-muted)]">
        Envie uma mensagem pelo WhatsApp para verificar horários e orientações
        iniciais sobre {service.shortTitle.toLowerCase()}.
      </p>
      <div className="mt-5 grid gap-3 rounded-[16px] border border-[var(--color-border-soft)] bg-[var(--color-background)] p-4 text-sm leading-7 text-[var(--color-text-muted)]">
        <p className="flex gap-3">
          <CalendarCheck className="mt-1 h-5 w-5 shrink-0 text-[var(--color-primary)]" />
          <span>
            <strong className="block text-[var(--color-text-dark)]">
              Horários
            </strong>
            {clinicConfig.businessHours[0]}
          </span>
        </p>
        <p className="flex gap-3">
          <MapPin className="mt-1 h-5 w-5 shrink-0 text-[var(--color-primary)]" />
          <span>
            <strong className="block text-[var(--color-text-dark)]">
              Endereço
            </strong>
            {clinicConfig.address}
          </span>
        </p>
      </div>
      <div className="mt-4 flex gap-3 rounded-[16px] border border-[var(--color-border-soft)] bg-[var(--color-background)] p-4 text-sm leading-6 text-[var(--color-text-dark)]">
        <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-[var(--color-primary)]" />
        Atendimento indicado somente após avaliação clínica.
      </div>
      <CTAWhatsApp className="mt-5 w-full" message={service.whatsappMessage}>
        Agendar pelo WhatsApp
      </CTAWhatsApp>
    </aside>
  );
}

function IntroComposition({
  service,
  variant
}: {
  service: Service;
  variant: ServiceVariant;
}) {
  if (variant === "aesthetic") {
    return (
      <Reveal className="overflow-hidden rounded-[18px] border border-[var(--color-border-soft)] bg-[var(--color-surface)] shadow-[0_24px_80px_rgba(6,42,56,0.10)]">
        <div className="grid lg:grid-cols-[0.72fr_1.28fr]">
          <div className="bg-[var(--color-accent)] p-7 text-[var(--color-primary-dark)] sm:p-9">
            <span className="text-7xl font-semibold tracking-tight opacity-30">
              01
            </span>
            <p className="mt-8 max-w-sm text-lg font-semibold leading-8">
              A estÃ©tica aqui comeÃ§a com critÃ©rios clÃ­nicos, nÃ£o com promessa de resultado.
            </p>
          </div>
          <div className="p-7 sm:p-9">
            <Badge>Sobre o serviço</Badge>
            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-[var(--color-text-dark)]">
              Estética começa com avaliação, não com promessa
            </h2>
            <p className="mt-5 text-base leading-8 text-[var(--color-text-muted)]">
              {service.intro}
            </p>
          </div>
        </div>
      </Reveal>
    );
  }

  if (variant === "urgent") {
    return (
      <Reveal className="rounded-[18px] bg-[var(--color-primary-dark)] p-7 text-white shadow-[0_26px_80px_rgba(6,42,56,0.18)] sm:p-9">
        <Badge tone="dark">Contato rápido</Badge>
        <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-tight">
          Primeiro passo: orientar a chegada ao atendimento
        </h2>
        <p className="mt-5 max-w-3xl text-base leading-8 text-white/[0.76]">
          {service.intro}
        </p>
        <CTAWhatsApp
          className="mt-7"
          message={service.whatsappMessage}
          tone="light"
        >
          Chamar no WhatsApp
        </CTAWhatsApp>
      </Reveal>
    );
  }

  return (
    <Reveal className="grid gap-8 border-b border-[var(--color-border-soft)] pb-10 lg:grid-cols-[0.62fr_1.38fr]">
      <div>
        <Badge>Sobre o serviço</Badge>
        <h2 className="mt-5 text-3xl font-semibold tracking-tight text-[var(--color-text-dark)]">
          O que é {service.title.toLowerCase()}
        </h2>
      </div>
      <p className="text-xl leading-9 text-[var(--color-text-muted)]">
        {service.intro}
      </p>
    </Reveal>
  );
}

function EvaluationComposition({
  service,
  variant
}: {
  service: Service;
  variant: ServiceVariant;
}) {
  const isProcess = variant === "technical" || variant === "entry";

  if (isProcess) {
    return (
      <article className="relative rounded-[18px] border border-[var(--color-border-soft)] bg-[var(--color-surface)] p-7 shadow-[0_18px_55px_rgba(6,42,56,0.06)] sm:p-8">
        <Badge>Como funciona a avaliação</Badge>
        <h2 className="mt-5 text-3xl font-semibold tracking-tight text-[var(--color-text-dark)]">
          Etapas antes de qualquer indicação
        </h2>
        <div className="relative mt-8">
          <AnimatedLine className="absolute left-[19px] top-4 hidden h-[calc(100%-2rem)] w-px md:block" />
          <div className="grid gap-5">
            {service.evaluation.map((item, index) => (
              <Reveal
                className="grid gap-4 md:grid-cols-[40px_1fr]"
                direction="right"
                key={item}
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-accent)] text-sm font-bold text-[var(--color-primary-dark)]">
                  {index + 1}
                </span>
                <p className="border-b border-[var(--color-border-soft)] pb-5 text-sm leading-7 text-[var(--color-text-muted)]">
                  {item}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="rounded-[18px] border border-[var(--color-border-soft)] bg-[var(--color-surface)] p-7 shadow-[0_18px_55px_rgba(6,42,56,0.06)] sm:p-8">
      <Badge>Como funciona a avaliação</Badge>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {service.evaluation.map((item, index) => (
          <Reveal
            className="rounded-[16px] bg-[var(--color-background)] p-5"
            delay={index * 0.05}
            key={item}
          >
            <span className="text-4xl font-semibold tracking-tight text-[rgba(6,42,56,0.18)]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <p className="mt-5 text-sm leading-7 text-[var(--color-text-muted)]">
              {item}
            </p>
          </Reveal>
        ))}
      </div>
    </article>
  );
}

export function ServicePageLayout({ service }: ServicePageLayoutProps) {
  const variant = getServiceVariant(service);

  return (
    <section className="bg-[var(--color-background)] py-16 sm:py-20">
      <Container className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_390px] lg:items-start">
        <div className="grid gap-8">
          <IntroComposition service={service} variant={variant} />

          <Reveal className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <Badge>Indicação</Badge>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-[var(--color-text-dark)]">
                Quando pode ser indicado
              </h2>
            </div>
            <StaggerGroup className="grid gap-3">
              {service.whenIndicated.map((item) => (
                <StaggerItem key={item}>
                  <p className="flex gap-3 border-t border-[var(--color-border-soft)] pt-4 text-sm leading-7 text-[var(--color-text-muted)]">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[var(--color-primary)]" />
                    {item}
                  </p>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </Reveal>

          <EvaluationComposition service={service} variant={variant} />

          <article
            className={`rounded-[18px] p-7 sm:p-8 ${
              variant === "aesthetic"
                ? "bg-[var(--color-surface)]"
                : "bg-[var(--color-primary-dark)] text-white"
            }`}
          >
            <Badge tone={variant === "aesthetic" ? "light" : "dark"}>
              Benefícios possíveis
            </Badge>
            <h2
              className={`mt-5 text-3xl font-semibold tracking-tight ${
                variant === "aesthetic"
                  ? "text-[var(--color-text-dark)]"
                  : "text-white"
              }`}
            >
              Benefícios possíveis do acompanhamento profissional
            </h2>
            <p
              className={`mt-3 text-sm leading-7 ${
                variant === "aesthetic"
                  ? "text-[var(--color-text-muted)]"
                  : "text-white/[0.72]"
              }`}
            >
              Os pontos abaixo descrevem objetivos de cuidado e planejamento,
              sem promessa de resultado garantido.
            </p>
            <StaggerGroup className="mt-6 grid gap-3 md:grid-cols-3">
              {service.benefits.map((item) => (
                <StaggerItem key={item}>
                  <p
                    className={`flex gap-3 rounded-[16px] border p-4 text-sm leading-7 ${
                      variant === "aesthetic"
                        ? "border-[var(--color-border-soft)] bg-[var(--color-background)] text-[var(--color-text-muted)]"
                        : "border-white/[0.12] bg-white/[0.06] text-white/[0.78]"
                    }`}
                  >
                    <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-[var(--color-accent)]" />
                    {item}
                  </p>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </article>

          <Reveal>
            <article className="rounded-[18px] border border-[var(--color-border-soft)] bg-[var(--color-surface)] p-7 shadow-[0_18px_55px_rgba(6,42,56,0.06)] sm:p-8">
              <Badge>Dúvidas comuns</Badge>
              <h2 className="mt-5 text-2xl font-semibold tracking-tight text-[var(--color-text-dark)]">
                Dúvidas comuns sobre {service.shortTitle.toLowerCase()}
              </h2>
              <div className="mt-5">
                <FAQAccordion items={service.faqs} />
              </div>
            </article>
          </Reveal>
        </div>

        <ServiceSidebar service={service} />
      </Container>
    </section>
  );
}

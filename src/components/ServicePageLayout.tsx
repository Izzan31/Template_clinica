import { ArrowRight, CalendarCheck, CheckCircle2, MapPin, ShieldCheck } from "lucide-react";
import type { Service } from "@/config/clinic.config";
import { clinicConfig } from "@/config/clinic.config";
import { Badge } from "@/components/Badge";
import { Container } from "@/components/Container";
import { CTAWhatsApp } from "@/components/CTAWhatsApp";
import { FAQAccordion } from "@/components/FAQAccordion";

type ServicePageLayoutProps = {
  service: Service;
};

export function ServicePageLayout({ service }: ServicePageLayoutProps) {
  return (
    <section className="bg-[var(--color-background)] py-16 sm:py-20">
      <Container className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_390px] lg:items-start">
        <div className="grid gap-6">
          <article className="rounded-[28px] border border-[var(--color-border-soft)] bg-white p-7 shadow-[0_18px_55px_rgba(6,42,56,0.06)]">
            <Badge>Sobre o serviço</Badge>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--color-text-dark)]">
              O que é {service.title.toLowerCase()}
            </h2>
            <p className="mt-4 text-base leading-8 text-[var(--color-text-muted)]">
              {service.intro}
            </p>
          </article>

          <article className="rounded-[28px] border border-[var(--color-border-soft)] bg-white p-7 shadow-[0_18px_55px_rgba(6,42,56,0.06)]">
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-text-dark)]">
              Quando pode ser indicado
            </h2>
            <div className="mt-5 grid gap-3">
              {service.whenIndicated.map((item) => (
                <p className="flex gap-3 text-sm leading-7 text-[var(--color-text-muted)]" key={item}>
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[var(--color-primary)]" />
                  {item}
                </p>
              ))}
            </div>
          </article>

          <article className="rounded-[28px] border border-[var(--color-border-soft)] bg-white p-7 shadow-[0_18px_55px_rgba(6,42,56,0.06)]">
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-text-dark)]">
              Como funciona a avaliação
            </h2>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {service.evaluation.map((item, index) => (
                <div
                  className="rounded-[22px] border border-[var(--color-border-soft)] bg-[var(--color-background)] p-5 transition duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)] hover:bg-white hover:shadow-soft"
                  key={item}
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-accent)] text-sm font-bold text-[var(--color-primary-dark)]">
                    {index + 1}
                  </span>
                  <p className="mt-4 text-sm leading-7 text-[var(--color-text-muted)]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-[28px] border border-[var(--color-border-soft)] bg-white p-7 shadow-[0_18px_55px_rgba(6,42,56,0.06)]">
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-text-dark)]">
              Benefícios possíveis do acompanhamento profissional
            </h2>
            <p className="mt-3 text-sm leading-7 text-[var(--color-text-muted)]">
              Os pontos abaixo descrevem objetivos de cuidado e planejamento,
              sem promessa de resultado garantido.
            </p>
            <div className="mt-5 grid gap-3">
              {service.benefits.map((item) => (
                <p className="flex gap-3 text-sm leading-7 text-[var(--color-text-muted)]" key={item}>
                  <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-[var(--color-primary)]" />
                  {item}
                </p>
              ))}
            </div>
          </article>

          <article className="rounded-[28px] border border-[var(--color-border-soft)] bg-white p-7 shadow-[0_18px_55px_rgba(6,42,56,0.06)]">
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-text-dark)]">
              Dúvidas comuns sobre {service.shortTitle.toLowerCase()}
            </h2>
            <div className="mt-5">
              <FAQAccordion items={service.faqs} />
            </div>
          </article>
        </div>

        <aside className="rounded-[28px] border border-[var(--color-border-soft)] bg-white p-6 shadow-[0_20px_70px_rgba(6,42,56,0.10)] lg:sticky lg:top-32">
          <Badge>Agendamento</Badge>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-[var(--color-text-dark)]">
            Fale com a clínica
          </h2>
          <p className="mt-3 text-sm leading-7 text-[var(--color-text-muted)]">
            Envie uma mensagem pelo WhatsApp para verificar horários e
            orientações iniciais sobre {service.shortTitle.toLowerCase()}.
          </p>
          <div className="mt-5 grid gap-3 rounded-[22px] border border-[var(--color-border-soft)] bg-[var(--color-background)] p-4 text-sm leading-7 text-[var(--color-text-muted)]">
            <p className="flex gap-3">
              <CalendarCheck className="mt-1 h-5 w-5 shrink-0 text-[var(--color-primary)]" />
              <span>
                <strong className="block text-[var(--color-text-dark)]">Horários</strong>
                {clinicConfig.businessHours[0]}
              </span>
            </p>
            <p className="flex gap-3">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-[var(--color-primary)]" />
              <span>
                <strong className="block text-[var(--color-text-dark)]">Endereço</strong>
                {clinicConfig.address}
              </span>
            </p>
          </div>
          <div className="mt-4 flex gap-3 rounded-[22px] border border-[var(--color-border-soft)] bg-[var(--color-background)] p-4 text-sm leading-6 text-[var(--color-text-dark)]">
            <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-[var(--color-primary)]" />
            Atendimento indicado somente após avaliação clínica.
          </div>
          <CTAWhatsApp
            className="mt-5 w-full"
            message={service.whatsappMessage}
          >
            Agendar pelo WhatsApp
          </CTAWhatsApp>
        </aside>
      </Container>
    </section>
  );
}

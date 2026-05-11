import { Badge } from "@/components/Badge";
import { Container } from "@/components/Container";
import { CTAWhatsApp } from "@/components/CTAWhatsApp";
import { clinicConfig } from "@/config/clinic.config";

export function CTASection() {
  return (
    <section className="bg-[var(--color-background)] py-16 sm:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-[32px] bg-[linear-gradient(135deg,var(--color-primary-deep),var(--color-primary-dark)_58%,var(--color-primary))] p-8 text-white shadow-[0_32px_90px_rgba(6,42,56,0.22)] sm:p-10 lg:p-12">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10" />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <Badge tone="dark">Agendamento</Badge>
              <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                Converse com a equipe e marque sua avaliação
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-white/75">
                Envie uma mensagem pelo WhatsApp para verificar horários,
                endereço e próximos passos antes da consulta.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <CTAWhatsApp tone="light" size="lg">
                Agendar pelo WhatsApp
              </CTAWhatsApp>
              <p className="text-sm text-white/[0.65]">
                {clinicConfig.phoneDisplay}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

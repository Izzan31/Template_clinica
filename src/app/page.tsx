import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, CalendarCheck, ListChecks, MessageCircle } from "lucide-react";
import { Badge } from "@/components/Badge";
import { buttonStyles } from "@/components/Button";
import { ClinicGallery } from "@/components/ClinicGallery";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { PageShell } from "@/components/PageShell";
import { PremiumHero } from "@/components/PremiumHero";
import { clinicConfig } from "@/config/clinic.config";
import { getWhatsAppLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: `${clinicConfig.name} | Clínica odontológica em ${clinicConfig.city}`,
  description:
    "Clínica odontológica em São Paulo com serviços, informações institucionais e agendamento pelo WhatsApp."
};

const entryPoints = [
  {
    title: "Conheça os serviços",
    description: "Prevenção, estética, reabilitação e urgência.",
    href: "/servicos",
    icon: ListChecks
  },
  {
    title: "Entenda a clínica",
    description: "Estrutura, princípios e responsável técnico.",
    href: "/sobre",
    icon: Building2
  },
  {
    title: "Agende pelo WhatsApp",
    description: "Mensagem pronta e contato direto.",
    href: "/agendamento",
    icon: CalendarCheck
  }
];

export default function Home() {
  return (
    <PageShell>
      <PremiumHero />

      <section className="bg-[var(--color-background)] py-16 sm:py-20">
        <Container>
          <Reveal className="mb-8 max-w-2xl">
            <Badge>Próximo passo</Badge>
            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-[var(--color-text-dark)] sm:text-5xl">
              Comece por aqui
            </h2>
          </Reveal>

          <StaggerGroup className="grid gap-4 lg:grid-cols-3">
            {entryPoints.map((item, index) => {
              const Icon = item.icon;

              return (
                <StaggerItem key={item.href}>
                  <Link
                    className="group flex min-h-64 flex-col justify-between border border-[var(--color-border-soft)] bg-white p-6 shadow-[0_18px_55px_rgba(6,42,56,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)] hover:shadow-[0_28px_80px_rgba(6,42,56,0.12)]"
                    href={item.href}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span className="text-5xl font-semibold tracking-tight text-[rgba(6,42,56,0.16)]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-accent)] text-[var(--color-primary-dark)]">
                        <Icon className="h-5 w-5" />
                      </span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold tracking-tight text-[var(--color-text-dark)]">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-[var(--color-text-muted)]">
                        {item.description}
                      </p>
                      <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary-dark)]">
                        Abrir
                        <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </Container>
      </section>

      <section className="bg-[var(--color-surface)] py-16 sm:py-20">
        <Container>
          <Reveal className="mb-8 max-w-2xl">
            <Badge>Ambiente</Badge>
            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-[var(--color-text-dark)] sm:text-5xl">
              Estrutura da clínica
            </h2>
          </Reveal>
          <ClinicGallery />
        </Container>
      </section>

      <section className="bg-[var(--color-primary-dark)] py-14 text-white sm:py-16">
        <Container>
          <Reveal>
            <div className="grid gap-6 border-y border-white/[0.14] py-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <Badge tone="dark">Contato direto</Badge>
                <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
                  Pronto para falar com a clínica?
                </h2>
              </div>
              <a
                className={buttonStyles({ tone: "primary", size: "lg" })}
                href={getWhatsAppLink()}
                rel="noopener noreferrer"
                target="_blank"
              >
                <MessageCircle className="h-5 w-5" />
                Chamar no WhatsApp
              </a>
            </div>
          </Reveal>
        </Container>
      </section>
    </PageShell>
  );
}

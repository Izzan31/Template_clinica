import Image from "next/image";
import { BadgeCheck, FileCheck2, ShieldCheck } from "lucide-react";
import { FloatingInfoCard } from "@/components/FloatingInfoCard";
import { Badge } from "@/components/Badge";
import { clinicConfig } from "@/config/clinic.config";

export function TrustSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-background)] py-20 sm:py-24">
      <div className="pointer-events-none absolute left-10 top-20 h-64 w-64 rounded-full bg-[rgba(174,231,245,0.35)] blur-3xl" />
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
        <div className="relative min-h-[500px]">
          <div className="absolute left-8 top-8 h-[86%] w-[82%] rounded-[40px] bg-[rgba(6,42,56,0.10)]" />
          <div className="relative h-full min-h-[500px] overflow-hidden rounded-[40px] shadow-[0_32px_90px_rgba(6,42,56,0.16)]">
            <Image
              alt="Dentista durante atendimento em consultório odontológico"
              className="h-full w-full object-cover"
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              src={clinicConfig.images.consultation}
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,42,56,0.02)_0%,rgba(6,42,56,0.48)_100%)]" />
          </div>
          <FloatingInfoCard
            className="absolute -right-3 bottom-8 hidden w-72 lg:block"
            icon={ShieldCheck}
            label="Ética"
            value="Sem promessas ou antes/depois"
          />
        </div>

        <div className="flex flex-col justify-center">
          <Badge>Confiança clínica</Badge>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-[var(--color-text-dark)] sm:text-5xl">
            Atendimento odontológico com clareza do primeiro contato ao
            acompanhamento
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--color-text-muted)]">
            Uma estrutura menor permite comunicação mais próxima, agenda
            organizada e orientação objetiva antes de qualquer decisão clínica.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {clinicConfig.trustItems.map((item, index) => {
              const icons = [BadgeCheck, FileCheck2, ShieldCheck];
              const Icon = icons[index] ?? BadgeCheck;

              return (
                <article
                  className="rounded-[28px] border border-[var(--color-border-soft)] bg-[var(--color-surface)] p-5 shadow-[0_18px_55px_rgba(6,42,56,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)] hover:shadow-[0_26px_70px_rgba(6,42,56,0.14)]"
                  key={item.title}
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-accent)] text-[var(--color-primary-dark)]">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-[var(--color-text-dark)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[var(--color-text-muted)]">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

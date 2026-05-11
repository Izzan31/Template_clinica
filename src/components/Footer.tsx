import Link from "next/link";
import { Badge } from "@/components/Badge";
import { Container } from "@/components/Container";
import { CTAWhatsApp } from "@/components/CTAWhatsApp";
import { clinicConfig } from "@/config/clinic.config";

export function Footer() {
  return (
    <footer className="bg-[var(--color-primary-dark)] py-14 text-white">
      <Container>
        <div className="rounded-[18px] border border-white/10 bg-white/[0.04] p-7 shadow-[0_26px_80px_rgba(0,0,0,0.16)] backdrop-blur sm:p-9">
          <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr_0.9fr]">
            <div>
              <p className="text-lg font-semibold">{clinicConfig.name}</p>
              <p className="mt-3 max-w-md text-sm leading-7 text-white/70">
                {clinicConfig.tagline}. Informações do site não substituem uma
                avaliação clínica individual.
              </p>
              <div className="mt-5">
                <CTAWhatsApp tone="light">Agendar consulta</CTAWhatsApp>
              </div>
            </div>

            <div>
              <Badge tone="dark">Clínica</Badge>
              <div className="mt-4 grid gap-2 text-sm text-white/70">
                <p>{clinicConfig.address}</p>
                <p>
                  {clinicConfig.city}, {clinicConfig.state}
                </p>
                {clinicConfig.businessHours.map((hour) => (
                  <p key={hour}>{hour}</p>
                ))}
                <p>{clinicConfig.email}</p>
                <p>{clinicConfig.phoneDisplay}</p>
              </div>
            </div>

            <div>
              <Badge tone="dark">Responsável técnico</Badge>
              <div className="mt-4 grid gap-2 text-sm text-white/70">
                <p>{clinicConfig.responsible}</p>
                <p>{clinicConfig.cro}</p>
                <Link className="transition hover:text-white" href="/servicos">
                  Serviços
                </Link>
                <Link className="transition hover:text-white" href="/sobre">
                  Sobre a clínica
                </Link>
                <Link className="transition hover:text-white" href="/contato">
                  Localização
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6 text-xs leading-6 text-white/[0.55]">
            <p>
              © {new Date().getFullYear()} {clinicConfig.name}. Conteúdo
              institucional sem promessa de resultado. A conduta indicada
              depende de avaliação clínica individual.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

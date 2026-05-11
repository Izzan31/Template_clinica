import { FileCheck2, Scale } from "lucide-react";
import { Badge } from "@/components/Badge";
import { clinicConfig } from "@/config/clinic.config";

type ProfessionalInfoProps = {
  className?: string;
};

export function ProfessionalInfo({ className = "" }: ProfessionalInfoProps) {
  return (
    <section className={className}>
      <div className="rounded-[18px] border border-[var(--color-border-soft)] bg-[var(--color-surface)] p-6 shadow-[0_18px_55px_rgba(6,42,56,0.06)] transition duration-300 hover:border-[var(--color-accent)] hover:shadow-soft">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)] text-[var(--color-primary-dark)]">
            <FileCheck2 className="h-5 w-5" />
          </div>
          <div>
            <Badge>Documentos e informações profissionais</Badge>
            <h2 className="mt-4 text-2xl font-semibold text-[var(--color-text-dark)]">
              Dados técnicos da clínica
            </h2>
          </div>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {clinicConfig.professionalDocuments.map((document) => (
            <div
              className="rounded-[18px] border border-[var(--color-border-soft)] bg-[var(--color-background)] p-4"
              key={document.label}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
                {document.label}
              </p>
              <p className="mt-2 text-sm font-semibold text-[var(--color-text-dark)]">
                {document.value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-5 flex gap-3 rounded-[16px] border border-[var(--color-border-soft)] bg-[var(--color-background)] p-4 text-sm leading-7 text-[var(--color-text-dark)]">
          <Scale className="mt-1 h-5 w-5 shrink-0 text-[var(--color-primary)]" />
          <p>{clinicConfig.ethicalNotice}</p>
        </div>
      </div>
    </section>
  );
}

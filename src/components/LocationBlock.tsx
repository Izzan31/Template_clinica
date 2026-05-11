import { AtSign, ExternalLink, MapPin, Phone } from "lucide-react";
import { Badge } from "@/components/Badge";
import { buttonStyles } from "@/components/Button";
import { CTAWhatsApp } from "@/components/CTAWhatsApp";
import { clinicConfig } from "@/config/clinic.config";

type LocationBlockProps = {
  compact?: boolean;
};

export function LocationBlock({ compact = false }: LocationBlockProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
      <div className="rounded-[30px] border border-[var(--color-border-soft)] bg-[var(--color-surface)] p-7 shadow-[0_20px_70px_rgba(6,42,56,0.08)]">
        <Badge>Localização</Badge>
        <h2 className="mt-4 text-2xl font-semibold text-[var(--color-text-dark)]">
          Atendimento em {clinicConfig.city}, {clinicConfig.state}
        </h2>
        <div className="mt-6 grid gap-4 text-sm text-[var(--color-text-muted)]">
          <p className="flex gap-3 leading-6">
            <MapPin className="mt-1 h-5 w-5 shrink-0 text-[var(--color-primary)]" />
            <span>
              <strong className="block text-[var(--color-text-dark)]">
                Endereço
              </strong>
              {clinicConfig.address}
            </span>
          </p>
          <p className="flex gap-3 leading-6">
            <Phone className="mt-1 h-5 w-5 shrink-0 text-[var(--color-primary)]" />
            <span>
              <strong className="block text-[var(--color-text-dark)]">
                WhatsApp
              </strong>
              {clinicConfig.phoneDisplay}
            </span>
          </p>
          <p className="flex gap-3 leading-6">
            <AtSign className="mt-1 h-5 w-5 shrink-0 text-[var(--color-primary)]" />
            <span>
              <strong className="block text-[var(--color-text-dark)]">
                Instagram
              </strong>
              {clinicConfig.instagramHandle}
            </span>
          </p>
        </div>

        {!compact ? (
          <div className="mt-6 rounded-[24px] border border-[var(--color-border-soft)] bg-[var(--color-background)] p-4">
            <p className="text-sm font-semibold text-[var(--color-text-dark)]">
              Referências
            </p>
            <ul className="mt-3 grid gap-2 text-sm leading-6 text-[var(--color-text-muted)]">
              {clinicConfig.locationReferences.map((reference) => (
                <li key={reference}>- {reference}</li>
              ))}
            </ul>
          </div>
        ) : null}

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <CTAWhatsApp className="sm:min-w-48" />
          <a
            className={buttonStyles({
              tone: "secondaryDark",
              className: "sm:min-w-44"
            })}
            href={clinicConfig.googleMapsUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            Abrir no Maps
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="overflow-hidden rounded-[30px] border border-[var(--color-border-soft)] bg-[var(--color-background)] shadow-[0_20px_70px_rgba(6,42,56,0.08)]">
        {clinicConfig.mapsEmbedUrl ? (
          <iframe
            className={
              compact ? "h-full min-h-72 w-full" : "h-full min-h-[420px] w-full"
            }
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={clinicConfig.mapsEmbedUrl}
            title={`Mapa de ${clinicConfig.name}`}
          />
        ) : (
          <div
            className={
              compact
                ? "flex min-h-72 flex-col items-center justify-center px-6 text-center"
                : "flex min-h-[420px] flex-col items-center justify-center px-6 text-center"
            }
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-accent)] text-[var(--color-primary-dark)]">
              <MapPin className="h-8 w-8" />
            </span>
            <p className="mt-5 text-lg font-semibold text-[var(--color-text-dark)]">
              Mapa da clínica
            </p>
            <p className="mt-3 max-w-md text-sm leading-7 text-[var(--color-text-muted)]">
              {clinicConfig.address}, {clinicConfig.city}, {clinicConfig.state}.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

"use client";

import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";
import { Clock, Copy, MapPin, MessageCircle } from "lucide-react";
import { Badge } from "@/components/Badge";
import { buttonStyles } from "@/components/Button";
import { ServiceIcon } from "@/components/ServiceIcon";
import { clinicConfig, type Service } from "@/config/clinic.config";
import { getWhatsAppLink } from "@/lib/whatsapp";

type BookingWizardProps = {
  services: readonly Service[];
};

export function BookingWizard({ services }: BookingWizardProps) {
  const [selectedSlug, setSelectedSlug] = useState(services[0]?.slug ?? "");
  const [copied, setCopied] = useState(false);
  const reduceMotion = useReducedMotion();

  const selectedService = useMemo(
    () => services.find((service) => service.slug === selectedSlug) ?? services[0],
    [selectedSlug, services]
  );

  if (!selectedService) {
    return null;
  }

  async function copyMessage() {
    try {
      await navigator.clipboard.writeText(selectedService.whatsappMessage);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
      <div className="grid gap-8">
        <div className="grid gap-4 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <div>
            <Badge>Passo 1</Badge>
            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-[var(--color-text-dark)] sm:text-5xl">
              Escolha o assunto
            </h2>
          </div>
          <p className="text-base leading-8 text-[var(--color-text-muted)]">
            Mensagem pronta, horário e endereço em um só lugar.
          </p>
        </div>

        <div className="grid gap-5 xl:grid-cols-[0.82fr_1.18fr]">
          <div className="grid gap-3">
            {services.map((service) => {
              const isActive = service.slug === selectedService.slug;

              return (
                <button
                  className={`group relative grid gap-3 border p-4 text-left transition duration-300 sm:grid-cols-[40px_1fr] sm:items-center ${
                    isActive
                      ? "border-[var(--color-primary)] bg-[var(--color-primary-dark)] text-white"
                      : "border-[var(--color-border-soft)] bg-white text-[var(--color-text-dark)] hover:border-[var(--color-accent)]"
                  }`}
                  key={service.slug}
                  onClick={() => setSelectedSlug(service.slug)}
                  type="button"
                >
                  {isActive ? (
                    <m.span
                      className="absolute inset-0 bg-[var(--color-primary-dark)]"
                      layoutId="booking-active-service"
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    />
                  ) : null}
                  <span
                    className={`relative flex h-10 w-10 items-center justify-center rounded-full ${
                      isActive
                        ? "bg-white/[0.10] text-[var(--color-accent)]"
                        : "bg-[var(--color-accent)] text-[var(--color-primary-dark)]"
                    }`}
                  >
                    <ServiceIcon icon={service.icon} className="h-4 w-4" />
                  </span>
                  <span className="relative">
                    <span className="block text-base font-semibold">
                      {service.shortTitle}
                    </span>
                    <span
                      className={`mt-1 block text-sm ${
                        isActive ? "text-white/[0.70]" : "text-[var(--color-text-muted)]"
                      }`}
                    >
                      {service.categoryLabel}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <m.article
              animate={
                reduceMotion
                  ? { opacity: 1 }
                  : { opacity: 1, y: 0, filter: "blur(0px)" }
              }
              className="border border-[var(--color-border-soft)] bg-white p-6 shadow-[0_24px_70px_rgba(6,42,56,0.10)] sm:p-8"
              exit={
                reduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: -12, filter: "blur(6px)" }
              }
              initial={
                reduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: 16, filter: "blur(8px)" }
              }
              key={selectedService.slug}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <Badge>Passo 2</Badge>
              <h3 className="mt-5 text-3xl font-semibold tracking-tight text-[var(--color-text-dark)]">
                Mensagem pronta
              </h3>

              <div className="mt-5 border-y border-[var(--color-border-soft)] py-5">
                <p className="text-base leading-8 text-[var(--color-text-muted)]">
                  {selectedService.whatsappMessage}
                </p>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  className={buttonStyles({ tone: "primary" })}
                  href={getWhatsAppLink(selectedService.whatsappMessage)}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <MessageCircle className="h-4 w-4" />
                  Abrir WhatsApp
                </a>
                <button
                  className={buttonStyles({ tone: "secondaryDark" })}
                  onClick={copyMessage}
                  type="button"
                >
                  <Copy className="h-4 w-4" />
                  {copied ? "Copiada" : "Copiar"}
                </button>
              </div>
            </m.article>
          </AnimatePresence>
        </div>
      </div>

      <aside className="border border-[var(--color-border-soft)] bg-[var(--color-primary-dark)] p-6 text-white shadow-[0_24px_80px_rgba(6,42,56,0.18)] lg:sticky lg:top-28">
        <Badge tone="dark">Passo 3</Badge>
        <div className="mt-6 grid gap-5 text-sm leading-7 text-white/[0.78]">
          <p className="flex gap-3">
            <Clock className="mt-1 h-5 w-5 shrink-0 text-[var(--color-accent)]" />
            <span>
              <strong className="block text-white">Horários</strong>
              {clinicConfig.businessHours.join(" · ")}
            </span>
          </p>
          <p className="flex gap-3">
            <MapPin className="mt-1 h-5 w-5 shrink-0 text-[var(--color-accent)]" />
            <span>
              <strong className="block text-white">Endereço</strong>
              {clinicConfig.address}
            </span>
          </p>
        </div>
        <a
          className={buttonStyles({
            tone: "white",
            className: "mt-7 w-full"
          })}
          href={getWhatsAppLink(selectedService.whatsappMessage)}
          rel="noopener noreferrer"
          target="_blank"
        >
          <MessageCircle className="h-4 w-4" />
          Confirmar
        </a>
      </aside>
    </div>
  );
}

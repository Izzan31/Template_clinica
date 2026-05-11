"use client";

import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import {
  AtSign,
  Check,
  Clock,
  Copy,
  ExternalLink,
  MapPin,
  Phone
} from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/Badge";
import { buttonStyles } from "@/components/Button";
import { clinicConfig } from "@/config/clinic.config";
import { getWhatsAppLink } from "@/lib/whatsapp";

type ContactAction = {
  id: "whatsapp" | "instagram" | "address" | "hours";
  label: string;
  value: string;
  description: string;
  icon: typeof Phone;
  href?: string;
  actionLabel?: string;
  copyValue?: string;
};

const actions: ContactAction[] = [
  {
    id: "whatsapp",
    label: "WhatsApp",
    value: clinicConfig.phoneDisplay,
    description:
      "Canal principal para agendar, confirmar horários e receber orientações iniciais.",
    icon: Phone,
    href: getWhatsAppLink(),
    actionLabel: "Abrir conversa",
    copyValue: clinicConfig.phoneDisplay
  },
  {
    id: "instagram",
    label: "Instagram",
    value: clinicConfig.instagramHandle,
    description:
      "Perfil institucional para acompanhar comunicados e informações da clínica.",
    icon: AtSign,
    href: clinicConfig.instagram,
    actionLabel: "Abrir Instagram",
    copyValue: clinicConfig.instagramHandle
  },
  {
    id: "address",
    label: "Endereço",
    value: `${clinicConfig.address}, ${clinicConfig.city}, ${clinicConfig.state}`,
    description: "Use o Maps para traçar a rota até a clínica.",
    icon: MapPin,
    href: clinicConfig.googleMapsUrl,
    actionLabel: "Abrir no Maps",
    copyValue: clinicConfig.address
  },
  {
    id: "hours",
    label: "Horários",
    value: clinicConfig.businessHours.join(" · "),
    description:
      "A agenda funciona com hora marcada para preservar previsibilidade no atendimento.",
    icon: Clock,
    copyValue: clinicConfig.businessHours.join(" · ")
  }
];

export function ContactActionPanel() {
  const [activeId, setActiveId] = useState<ContactAction["id"]>("whatsapp");
  const [copiedId, setCopiedId] = useState<ContactAction["id"] | null>(null);
  const reduceMotion = useReducedMotion();
  const activeAction =
    actions.find((action) => action.id === activeId) ?? actions[0];

  async function copyValue(action: ContactAction) {
    try {
      await navigator.clipboard.writeText(action.copyValue ?? action.value);
      setCopiedId(action.id);
      window.setTimeout(() => setCopiedId(null), 1800);
    } catch {
      setCopiedId(null);
    }
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-stretch">
      <div className="border border-[var(--color-border-soft)] bg-white p-6 shadow-[0_24px_70px_rgba(6,42,56,0.10)] sm:p-8">
        <Badge>Contato</Badge>
        <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-[var(--color-text-dark)]">
          Canais diretos
        </h2>
        <div className="mt-8 grid gap-3">
          {actions.map((action) => {
            const Icon = action.icon;
            const isActive = action.id === activeAction.id;

            return (
              <button
                className={`group relative grid gap-4 border p-5 text-left transition duration-300 sm:grid-cols-[44px_1fr_auto] sm:items-center ${
                  isActive
                    ? "border-[var(--color-primary)] bg-[var(--color-primary-dark)] text-white"
                    : "border-[var(--color-border-soft)] bg-transparent text-[var(--color-text-dark)] hover:border-[var(--color-accent)] hover:bg-[var(--color-background)]"
                }`}
                key={action.id}
                onClick={() => setActiveId(action.id)}
                type="button"
              >
                {isActive ? (
                  <m.span
                    className="absolute inset-0 bg-[var(--color-primary-dark)]"
                    layoutId="contact-active-action"
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  />
                ) : null}
                <span
                  className={`relative flex h-11 w-11 items-center justify-center rounded-full ${
                    isActive
                      ? "bg-white/[0.10] text-[var(--color-accent)]"
                      : "bg-[var(--color-accent)] text-[var(--color-primary-dark)]"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <span className="relative min-w-0">
                  <span className="block text-sm font-semibold">
                    {action.label}
                  </span>
                  <span
                    className={`mt-1 block truncate text-sm ${
                      isActive ? "text-white/[0.70]" : "text-[var(--color-text-muted)]"
                    }`}
                  >
                    {action.value}
                  </span>
                </span>
                <ExternalLink
                  className={`relative hidden h-4 w-4 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:block ${
                    isActive ? "text-[var(--color-accent)]" : "text-[var(--color-primary)]"
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid min-h-[560px] overflow-hidden border border-[var(--color-border-soft)] bg-[var(--color-primary-dark)] shadow-[0_24px_80px_rgba(6,42,56,0.16)] lg:grid-rows-[1fr_auto]">
        <AnimatePresence mode="wait">
          <m.div
            animate={
              reduceMotion
                ? { opacity: 1 }
                : { opacity: 1, x: 0, filter: "blur(0px)" }
            }
            className="p-7 text-white sm:p-9"
            exit={
              reduceMotion
                ? { opacity: 0 }
                : { opacity: 0, x: -18, filter: "blur(6px)" }
            }
            initial={
              reduceMotion
                ? { opacity: 0 }
                : { opacity: 0, x: 18, filter: "blur(8px)" }
            }
            key={activeAction.id}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <Badge tone="dark">{activeAction.label}</Badge>
            <h3 className="mt-5 max-w-2xl text-4xl font-semibold leading-tight tracking-tight">
              {activeAction.value}
            </h3>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/[0.76]">
              {activeAction.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {activeAction.href ? (
                <a
                  className={buttonStyles({ tone: "white" })}
                  href={activeAction.href}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {activeAction.actionLabel}
                  <ExternalLink className="h-4 w-4" />
                </a>
              ) : null}
              <button
                className={buttonStyles({
                  tone: "secondaryLight",
                  className: "border-white/[0.22]"
                })}
                onClick={() => copyValue(activeAction)}
                type="button"
              >
                {copiedId === activeAction.id ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
                {copiedId === activeAction.id ? "Copiado" : "Copiar"}
              </button>
            </div>
          </m.div>
        </AnimatePresence>

        <div className="min-h-[260px] border-t border-white/[0.12] bg-white/[0.06]">
          {clinicConfig.mapsEmbedUrl ? (
            <iframe
              className="h-full min-h-[260px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={clinicConfig.mapsEmbedUrl}
              title={`Mapa de ${clinicConfig.name}`}
            />
          ) : (
            <div className="flex min-h-[260px] flex-col justify-end bg-[radial-gradient(circle_at_20%_20%,rgba(174,231,245,0.22),transparent_32%),linear-gradient(135deg,rgba(174,231,245,0.16),rgba(255,255,255,0.04))] p-7 text-white">
              <p className="text-sm font-semibold text-[var(--color-accent)]">
                Localização
              </p>
              <p className="mt-2 max-w-md text-sm leading-7 text-white/[0.72]">
                {clinicConfig.address}, {clinicConfig.city}, {clinicConfig.state}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

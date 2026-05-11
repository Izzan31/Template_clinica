"use client";

import { AnimatePresence, LayoutGroup, m, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, X } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/Badge";
import { buttonStyles } from "@/components/Button";
import { CTAWhatsApp } from "@/components/CTAWhatsApp";
import type { Service } from "@/config/clinic.config";

type HomeServiceExperienceProps = {
  services: readonly Service[];
};

export function HomeServiceExperience({ services }: HomeServiceExperienceProps) {
  const [activeSlug, setActiveSlug] = useState<string | null>(
    services[0]?.slug ?? null
  );
  const reduceMotion = useReducedMotion();
  const activeService = activeSlug
    ? services.find((service) => service.slug === activeSlug)
    : null;

  if (services.length === 0) {
    return null;
  }

  return (
    <LayoutGroup>
      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
        <div className="grid gap-3">
          {services.map((service, index) => {
            const isActive = service.slug === activeService?.slug;

            return (
              <button
                className={`group relative overflow-hidden border p-5 text-left transition duration-300 ${
                  isActive
                    ? "border-[var(--color-primary)] bg-[var(--color-primary-dark)] text-white"
                    : "border-[var(--color-border-soft)] bg-[var(--color-surface)] text-[var(--color-text-dark)] hover:border-[var(--color-accent)]"
                }`}
                key={service.slug}
                onClick={() => setActiveSlug(service.slug)}
                type="button"
              >
                {isActive ? (
                  <m.span
                    className="absolute inset-0 bg-[var(--color-primary-dark)]"
                    layoutId="home-active-service-bg"
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  />
                ) : null}
                <span className="relative grid gap-3 sm:grid-cols-[72px_1fr_auto] sm:items-center">
                  <span
                    className={`text-3xl font-semibold tracking-tight ${
                      isActive ? "text-white/[0.22]" : "text-[rgba(6,42,56,0.18)]"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span className="block text-lg font-semibold">
                      {service.shortTitle}
                    </span>
                    <span
                      className={`mt-1 block text-sm ${
                        isActive ? "text-white/[0.72]" : "text-[var(--color-text-muted)]"
                      }`}
                    >
                      {service.categoryLabel}
                    </span>
                  </span>
                  <ArrowUpRight
                    className={`hidden h-5 w-5 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:block ${
                      isActive ? "text-[var(--color-accent)]" : "text-[var(--color-primary)]"
                    }`}
                  />
                </span>
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          {activeService ? (
            <m.article
              animate={
                reduceMotion
                  ? { opacity: 1 }
                  : { opacity: 1, y: 0, filter: "blur(0px)" }
              }
              className="relative min-h-[500px] overflow-hidden border border-[var(--color-border-soft)] bg-[var(--color-primary-dark)] text-white shadow-[0_28px_80px_rgba(6,42,56,0.16)]"
              exit={
                reduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: -12, filter: "blur(5px)" }
              }
              initial={
                reduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: 18, filter: "blur(8px)" }
              }
              key={activeService.slug}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <m.div
                className="absolute inset-0"
                layoutId={`home-service-image-${activeService.slug}`}
              >
                <Image
                  alt={activeService.title}
                  className="h-full w-full object-cover"
                  fill
                  sizes="(min-width: 1024px) 620px, 100vw"
                  src={activeService.image}
                />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,42,56,0.94),rgba(6,42,56,0.60)_55%,rgba(6,42,56,0.20))]" />
              </m.div>
              <div className="relative flex min-h-[500px] flex-col justify-end p-6 sm:p-8">
                <div className="max-w-2xl">
                  <Badge tone="dark">{activeService.categoryLabel}</Badge>
                  <h3 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                    {activeService.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-base leading-7 text-white/[0.78]">
                    {activeService.description}
                  </p>
                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    {activeService.benefits.slice(0, 3).map((item) => (
                      <p
                        className="border-t border-white/[0.18] pt-3 text-sm leading-6 text-white/[0.76]"
                        key={item}
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <CTAWhatsApp
                      message={activeService.whatsappMessage}
                      tone="light"
                    >
                      Agendar
                    </CTAWhatsApp>
                    <Link
                      className={buttonStyles({
                        tone: "secondaryLight",
                        className: "border-white/[0.22]"
                      })}
                      href={`/servicos/${activeService.slug}`}
                    >
                      Ver detalhes
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
                <button
                  aria-label="Fechar resumo do serviço"
                  className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.18] bg-white/[0.08] text-white transition hover:bg-white hover:text-[var(--color-primary-dark)]"
                  onClick={() => setActiveSlug(null)}
                  type="button"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </m.article>
          ) : (
            <m.article
              animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              className="flex min-h-[500px] flex-col justify-end border border-[var(--color-border-soft)] bg-[var(--color-primary-dark)] p-6 text-white shadow-[0_28px_80px_rgba(6,42,56,0.16)] sm:p-8"
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 18 }}
              key="service-empty"
              transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
            >
              <Badge tone="dark">Serviços principais</Badge>
              <h3 className="mt-5 max-w-xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                Escolha um serviço para ver o resumo.
              </h3>
            </m.article>
          )}
        </AnimatePresence>
      </div>
    </LayoutGroup>
  );
}

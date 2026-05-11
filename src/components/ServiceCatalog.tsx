"use client";

import { AnimatePresence, LayoutGroup, m, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { Badge } from "@/components/Badge";
import { buttonStyles } from "@/components/Button";
import { ServiceIcon } from "@/components/ServiceIcon";
import type { Service, ServiceCategory } from "@/config/clinic.config";
import { serviceCategories } from "@/config/clinic.config";
import { getWhatsAppLink } from "@/lib/whatsapp";

type ServiceCatalogProps = {
  services: readonly Service[];
};

type ActiveCategory = ServiceCategory | "todos";

export function ServiceCatalog({ services }: ServiceCatalogProps) {
  const [activeCategory, setActiveCategory] = useState<ActiveCategory>("todos");
  const [selectedSlug, setSelectedSlug] = useState(services[0]?.slug ?? "");
  const reduceMotion = useReducedMotion();

  const visibleServices = useMemo(() => {
    if (activeCategory === "todos") {
      return services;
    }

    return services.filter((service) => service.category === activeCategory);
  }, [activeCategory, services]);

  const selectedService =
    visibleServices.find((service) => service.slug === selectedSlug) ??
    visibleServices[0] ??
    services[0];

  function chooseCategory(category: ActiveCategory) {
    setActiveCategory(category);
    const next =
      category === "todos"
        ? services[0]
        : services.find((service) => service.category === category);
    if (next) {
      setSelectedSlug(next.slug);
    }
  }

  if (!selectedService) {
    return null;
  }

  return (
    <LayoutGroup>
      <div className="grid gap-8">
        <div className="grid gap-4 lg:grid-cols-[0.76fr_1.24fr] lg:items-end">
          <div>
            <Badge>Catálogo</Badge>
            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-[var(--color-text-dark)] sm:text-5xl">
              Serviços disponíveis
            </h2>
          </div>
          <div className="flex flex-wrap gap-2 lg:justify-end">
            {serviceCategories.map((category) => {
              const isActive = activeCategory === category.value;

              return (
                <button
                  className={`rounded-full border px-4 py-2 text-sm font-semibold transition duration-300 ${
                    isActive
                      ? "border-[var(--color-accent)] bg-[var(--color-accent)] text-[var(--color-primary-dark)]"
                      : "border-[var(--color-border-soft)] bg-[var(--color-surface)] text-[var(--color-text-muted)] hover:border-[var(--color-accent)] hover:text-[var(--color-primary-dark)]"
                  }`}
                  key={category.value}
                  onClick={() => chooseCategory(category.value)}
                  type="button"
                >
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-[0.72fr_1.28fr] lg:items-stretch">
          <div className="grid gap-3">
            {visibleServices.map((service, index) => {
              const isSelected = service.slug === selectedService.slug;

              return (
                <button
                  className={`group relative grid gap-4 border p-5 text-left transition duration-300 sm:grid-cols-[72px_1fr_auto] sm:items-center ${
                    isSelected
                      ? "border-[var(--color-primary)] bg-[var(--color-primary-dark)] text-white"
                      : "border-[var(--color-border-soft)] bg-[var(--color-surface)] text-[var(--color-text-dark)] hover:border-[var(--color-accent)]"
                  }`}
                  key={service.slug}
                  onClick={() => setSelectedSlug(service.slug)}
                  type="button"
                >
                  {isSelected ? (
                    <m.span
                      className="absolute inset-0 bg-[var(--color-primary-dark)]"
                      layoutId="catalog-selected-bg"
                      transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                    />
                  ) : null}
                  <span
                    className={`relative text-3xl font-semibold tracking-tight ${
                      isSelected ? "text-white/[0.22]" : "text-[rgba(6,42,56,0.18)]"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="relative">
                    <span className="flex items-center gap-2">
                      <ServiceIcon icon={service.icon} className="h-4 w-4" />
                      <span className="text-lg font-semibold">
                        {service.shortTitle}
                      </span>
                    </span>
                    <span
                      className={`mt-1 block text-sm ${
                        isSelected ? "text-white/[0.68]" : "text-[var(--color-text-muted)]"
                      }`}
                    >
                      {service.categoryLabel}
                    </span>
                  </span>
                  <ArrowUpRight
                    className={`relative hidden h-5 w-5 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:block ${
                      isSelected ? "text-[var(--color-accent)]" : "text-[var(--color-primary)]"
                    }`}
                  />
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
              className="grid min-h-[560px] overflow-hidden border border-[var(--color-border-soft)] bg-[var(--color-surface)] shadow-[0_28px_80px_rgba(6,42,56,0.12)] lg:grid-cols-[0.88fr_1.12fr]"
              exit={
                reduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: -14, filter: "blur(6px)" }
              }
              initial={
                reduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: 16, filter: "blur(8px)" }
              }
              key={selectedService.slug}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <m.div
                className="relative min-h-[320px] bg-[var(--color-primary-dark)]"
                layoutId={`catalog-image-${selectedService.slug}`}
              >
                <Image
                  alt={selectedService.title}
                  className="h-full w-full object-cover"
                  fill
                  sizes="(min-width: 1024px) 520px, 100vw"
                  src={selectedService.image}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,42,56,0.04),rgba(6,42,56,0.62))]" />
                <span className="absolute bottom-6 left-6 text-8xl font-semibold tracking-tight text-white/[0.16]">
                  {String(
                    services.findIndex((item) => item.slug === selectedService.slug) + 1
                  ).padStart(2, "0")}
                </span>
              </m.div>

              <div className="flex flex-col justify-end p-6 sm:p-8">
                <Badge>{selectedService.categoryLabel}</Badge>
                <h3 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-[var(--color-text-dark)]">
                  {selectedService.title}
                </h3>
                <p className="mt-4 max-w-xl text-base leading-7 text-[var(--color-text-muted)]">
                  {selectedService.description}
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Link
                    className={buttonStyles({ tone: "dark" })}
                    href={`/servicos/${selectedService.slug}`}
                  >
                    Ver detalhes
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  <a
                    className={buttonStyles({ tone: "secondaryDark", size: "sm" })}
                    href={getWhatsAppLink(selectedService.whatsappMessage)}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Agendar este serviço
                  </a>
                </div>
              </div>
            </m.article>
          </AnimatePresence>
        </div>
      </div>
    </LayoutGroup>
  );
}

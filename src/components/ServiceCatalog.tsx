"use client";

import { useMemo, useState } from "react";
import type { Service, ServiceCategory } from "@/config/clinic.config";
import { serviceCategories } from "@/config/clinic.config";
import { ServicePreviewCard } from "@/components/ServicePreviewCard";

type ServiceCatalogProps = {
  services: readonly Service[];
};

type ActiveCategory = ServiceCategory | "todos";

export function ServiceCatalog({ services }: ServiceCatalogProps) {
  const [activeCategory, setActiveCategory] = useState<ActiveCategory>("todos");

  const visibleServices = useMemo(() => {
    if (activeCategory === "todos") {
      return services;
    }

    return services.filter((service) => service.category === activeCategory);
  }, [activeCategory, services]);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
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
              onClick={() => setActiveCategory(category.value)}
              type="button"
            >
              {category.label}
            </button>
          );
        })}
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {visibleServices.map((service, index) => (
          <ServicePreviewCard
            featured={activeCategory === "todos" && index === 0}
            key={service.slug}
            service={service}
          />
        ))}
      </div>
    </div>
  );
}

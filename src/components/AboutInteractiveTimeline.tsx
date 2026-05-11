"use client";

import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { Badge } from "@/components/Badge";

const timeline = [
  {
    title: "Primeiro contato",
    eyebrow: "01",
    description: "A equipe entende o assunto e orienta o agendamento.",
    detail: "A conversa inicial serve para direcionar o paciente sem substituir a consulta."
  },
  {
    title: "Avaliação",
    eyebrow: "02",
    description: "A consulta organiza queixa, histórico e prioridades.",
    detail: "A conduta começa depois da avaliação presencial e, quando necessário, exames."
  },
  {
    title: "Planejamento",
    eyebrow: "03",
    description: "As etapas possíveis são explicadas antes da decisão.",
    detail: "O paciente entende caminhos, limites e próximos passos sem promessa de resultado."
  },
  {
    title: "Acompanhamento",
    eyebrow: "04",
    description: "A agenda segue com comunicação direta e previsível.",
    detail: "Retornos, revisões e orientações ficam organizados conforme cada caso."
  }
];

export function AboutInteractiveTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const activeStep = timeline[activeIndex];

  return (
    <div className="mt-10 grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
      <div className="relative">
        <m.div
          aria-hidden="true"
          className="absolute left-[25px] top-7 hidden w-px origin-top bg-[var(--color-primary)] md:block"
          initial={reduceMotion ? false : { scaleY: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
          whileInView={reduceMotion ? undefined : { scaleY: 1 }}
          style={{ height: "calc(100% - 3.5rem)" }}
        />
        <div className="grid gap-3">
          {timeline.map((step, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                className={`group relative grid gap-4 border p-5 text-left transition duration-300 md:grid-cols-[52px_1fr] ${
                  isActive
                    ? "border-[var(--color-primary)] bg-[var(--color-primary-dark)] text-white shadow-[0_24px_70px_rgba(6,42,56,0.18)]"
                    : "border-[var(--color-border-soft)] bg-transparent text-[var(--color-text-dark)] hover:border-[var(--color-accent)] hover:bg-white"
                }`}
                key={step.title}
                onClick={() => setActiveIndex(index)}
                type="button"
              >
                {isActive ? (
                  <m.span
                    className="absolute inset-0 bg-[var(--color-primary-dark)]"
                    layoutId="about-active-step"
                    transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                  />
                ) : null}
                <span
                  className={`relative flex h-12 w-12 items-center justify-center rounded-full border text-sm font-semibold ${
                    isActive
                      ? "border-white/[0.18] bg-white/[0.08] text-white"
                      : "border-[var(--color-border-soft)] bg-white text-[var(--color-primary-dark)]"
                  }`}
                >
                  {step.eyebrow}
                </span>
                <span className="relative">
                  <span className="block text-xl font-semibold">
                    {step.title}
                  </span>
                  <span
                    className={`mt-2 block text-sm leading-7 ${
                      isActive ? "text-white/[0.72]" : "text-[var(--color-text-muted)]"
                    }`}
                  >
                    {step.description}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <m.aside
          animate={
            reduceMotion
              ? { opacity: 1 }
              : { opacity: 1, y: 0, filter: "blur(0px)" }
          }
          className="sticky top-28 border border-[var(--color-border-soft)] bg-white p-7 shadow-[0_24px_70px_rgba(6,42,56,0.10)] sm:p-8"
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
          key={activeStep.title}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <Badge>{activeStep.eyebrow}</Badge>
          <h3 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-[var(--color-text-dark)]">
            {activeStep.title}
          </h3>
          <p className="mt-5 text-base leading-8 text-[var(--color-text-muted)]">
            {activeStep.detail}
          </p>
        </m.aside>
      </AnimatePresence>
    </div>
  );
}

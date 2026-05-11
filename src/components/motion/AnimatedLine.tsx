"use client";

import { m, useReducedMotion } from "framer-motion";

type AnimatedLineProps = {
  className?: string;
  orientation?: "horizontal" | "vertical";
};

export function AnimatedLine({
  className = "",
  orientation = "vertical"
}: AnimatedLineProps) {
  const reduceMotion = useReducedMotion();
  const scaleProperty = orientation === "vertical" ? "scaleY" : "scaleX";

  return (
    <m.span
      aria-hidden="true"
      className={`block origin-top bg-[var(--color-border-soft)] ${className}`}
      initial={reduceMotion ? false : { [scaleProperty]: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: "-12% 0px -12% 0px" }}
      whileInView={reduceMotion ? undefined : { [scaleProperty]: 1 }}
    />
  );
}


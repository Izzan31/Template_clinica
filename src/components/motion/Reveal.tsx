"use client";

import { m, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  once?: boolean;
};

const offsets = {
  up: { x: 0, y: 28 },
  left: { x: -28, y: 0 },
  right: { x: 28, y: 0 },
  none: { x: 0, y: 0 }
};

export function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  once = true
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const offset = offsets[direction];

  return (
    <m.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, ...offset }}
      transition={{ duration: 0.62, delay, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once, margin: "-12% 0px -12% 0px" }}
      whileInView={reduceMotion ? undefined : { opacity: 1, x: 0, y: 0 }}
    >
      {children}
    </m.div>
  );
}


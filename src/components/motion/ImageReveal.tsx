"use client";

import { m, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type ImageRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function ImageReveal({
  children,
  className = "",
  delay = 0
}: ImageRevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <m.div
      className={`overflow-hidden ${className}`}
      initial={
        reduceMotion
          ? false
          : { clipPath: "inset(0 0 0 14%)", opacity: 0.75, scale: 1.03 }
      }
      transition={{ duration: 0.76, delay, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      whileInView={
        reduceMotion
          ? undefined
          : { clipPath: "inset(0 0 0 0%)", opacity: 1, scale: 1 }
      }
    >
      {children}
    </m.div>
  );
}


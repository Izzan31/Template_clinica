"use client";

import { m, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type SoftHoverProps = {
  children: ReactNode;
  className?: string;
};

export function SoftHover({ children, className = "" }: SoftHoverProps) {
  const reduceMotion = useReducedMotion();

  return (
    <m.div
      className={className}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduceMotion ? undefined : { y: -4 }}
    >
      {children}
    </m.div>
  );
}


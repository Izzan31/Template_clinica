"use client";

import { m, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type StaggerGroupProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
};

export function StaggerGroup({
  children,
  className = "",
  delay = 0
}: StaggerGroupProps) {
  const reduceMotion = useReducedMotion();

  return (
    <m.div
      className={className}
      initial={reduceMotion ? false : "hidden"}
      transition={{ delayChildren: delay, staggerChildren: 0.09 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      whileInView={reduceMotion ? undefined : "show"}
    >
      {children}
    </m.div>
  );
}

export function StaggerItem({ children, className = "" }: StaggerItemProps) {
  return (
    <m.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 26 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.58, ease: [0.22, 1, 0.36, 1] }
        }
      }}
    >
      {children}
    </m.div>
  );
}


"use client";

import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <m.div
        animate={
          reduceMotion
            ? { opacity: 1 }
            : { opacity: 1, y: 0, filter: "blur(0px)" }
        }
        exit={
          reduceMotion
            ? { opacity: 1 }
            : { opacity: 0, y: -10, filter: "blur(6px)" }
        }
        initial={
          reduceMotion
            ? { opacity: 1 }
            : { opacity: 0, y: 18, filter: "blur(8px)" }
        }
        key={pathname}
        transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </m.div>
    </AnimatePresence>
  );
}


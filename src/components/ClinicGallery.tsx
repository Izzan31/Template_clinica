"use client";

import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const galleryImages = [
  {
    src: "https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=1400",
    alt: "Sala de atendimento odontológico"
  },
  {
    src: "https://images.pexels.com/photos/3845623/pexels-photo-3845623.jpeg?auto=compress&cs=tinysrgb&w=1400",
    alt: "Ambiente interno de clínica"
  },
  {
    src: "https://images.pexels.com/photos/6502303/pexels-photo-6502303.jpeg?auto=compress&cs=tinysrgb&w=1400",
    alt: "Recepção de clínica odontológica"
  },
  {
    src: "https://images.pexels.com/photos/6502015/pexels-photo-6502015.jpeg?auto=compress&cs=tinysrgb&w=1400",
    alt: "Equipamentos odontológicos"
  },
  {
    src: "https://images.pexels.com/photos/3845766/pexels-photo-3845766.jpeg?auto=compress&cs=tinysrgb&w=1400",
    alt: "Consultório odontológico"
  }
];

export function ClinicGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const reduceMotion = useReducedMotion();

  const visibleImages = useMemo(() => {
    return [0, 1, 2].map((offset) => {
      const index = (activeIndex + offset) % galleryImages.length;
      return galleryImages[index];
    });
  }, [activeIndex]);

  function goToNext() {
    setDirection(1);
    setActiveIndex((index) => (index + 1) % galleryImages.length);
  }

  function goToPrevious() {
    setDirection(-1);
    setActiveIndex(
      (index) => (index - 1 + galleryImages.length) % galleryImages.length
    );
  }

  return (
    <div className="relative w-full max-w-full overflow-x-clip px-3 sm:px-4">
      <AnimatePresence mode="wait" initial={false}>
        <m.div
          animate={reduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
          className="grid gap-2 sm:gap-3 lg:grid-cols-3"
          drag={reduceMotion ? false : "x"}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.12}
          exit={
            reduceMotion
              ? { opacity: 0 }
              : { opacity: 0, x: direction > 0 ? -56 : 56 }
          }
          initial={
            reduceMotion
              ? { opacity: 0 }
              : { opacity: 0, x: direction > 0 ? 56 : -56 }
          }
          key={activeIndex}
          onDragEnd={(_, info) => {
            if (info.offset.x < -70) goToNext();
            if (info.offset.x > 70) goToPrevious();
          }}
          transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
        >
          {visibleImages.map((image, index) => (
            <m.figure
              className={`group relative aspect-square overflow-hidden rounded-[4px] bg-[var(--color-primary-dark)] ${
                index > 0 ? "hidden lg:block" : ""
              }`}
              key={`${image.src}-${activeIndex}-${index}`}
              whileHover={reduceMotion ? undefined : { y: -3 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                alt={image.alt}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.025]"
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                src={image.src}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,42,56,0),rgba(6,42,56,0.12))]" />
            </m.figure>
          ))}
        </m.div>
      </AnimatePresence>

      <button
        aria-label="Foto anterior"
        className="absolute left-5 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-white/80 text-[var(--color-primary-dark)] shadow-[0_16px_45px_rgba(6,42,56,0.18)] backdrop-blur transition duration-300 hover:bg-[var(--color-accent)] sm:left-7"
        onClick={goToPrevious}
        type="button"
      >
        <ArrowLeft className="h-4 w-4" />
      </button>
      <button
        aria-label="Próxima foto"
        className="absolute right-5 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-white/80 text-[var(--color-primary-dark)] shadow-[0_16px_45px_rgba(6,42,56,0.18)] backdrop-blur transition duration-300 hover:bg-[var(--color-accent)] sm:right-7"
        onClick={goToNext}
        type="button"
      >
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}

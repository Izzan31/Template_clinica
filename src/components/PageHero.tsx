import Image from "next/image";
import type { ReactNode } from "react";
import { clinicConfig } from "@/config/clinic.config";
import { Badge } from "@/components/Badge";
import { Container } from "@/components/Container";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
  children?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  image = clinicConfig.images.clinic,
  children
}: PageHeroProps) {
  return (
    <section className="relative min-h-[52vh] overflow-hidden bg-[var(--color-primary-dark)] pt-28 text-white sm:min-h-[56vh]">
      <Image
        alt=""
        className="h-full w-full object-cover"
        fill
        priority={false}
        sizes="100vw"
        src={image}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,42,56,0.94)_0%,rgba(6,42,56,0.76)_46%,rgba(11,111,138,0.30)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,42,56,0.30)_0%,rgba(6,42,56,0.08)_42%,rgba(6,42,56,0.42)_100%)]" />
      <Container className="relative z-10 flex min-h-[calc(52vh-7rem)] items-center py-14 sm:min-h-[calc(56vh-7rem)] sm:py-16">
        <div className="max-w-3xl">
          <Badge tone="dark">{eyebrow}</Badge>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.04] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/[0.85] sm:text-lg">
            {description}
          </p>
          {children ? <div className="mt-8">{children}</div> : null}
        </div>
      </Container>
    </section>
  );
}

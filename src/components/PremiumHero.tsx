"use client";

import Image from "next/image";
import Link from "next/link";
import { CalendarCheck, MapPin, Menu, MessageCircle, ShieldCheck, X } from "lucide-react";
import { useState } from "react";
import { buttonStyles } from "@/components/Button";
import { clinicConfig } from "@/config/clinic.config";
import { getWhatsAppLink } from "@/lib/whatsapp";

const heroLinks = clinicConfig.navigation;

export function PremiumHero() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[var(--color-primary-dark)]">
      <Image
        alt={clinicConfig.hero.imageAlt}
        className="h-full w-full object-cover"
        fill
        priority
        sizes="100vw"
        src={clinicConfig.hero.imageSrc}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,42,56,0.96)_0%,rgba(6,42,56,0.82)_38%,rgba(11,111,138,0.34)_72%,rgba(11,111,138,0.12)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,42,56,0.42)_0%,rgba(6,42,56,0.05)_44%,rgba(6,42,56,0.42)_100%)]" />
      <div className="pointer-events-none absolute -left-28 top-20 h-80 w-80 rounded-full bg-[rgba(174,231,245,0.14)] blur-3xl" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1200px] flex-col px-5 py-5 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between gap-4 py-2 text-white">
          <Link className="flex items-center gap-3" href="/">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm font-semibold text-[var(--color-primary-dark)]">
              {clinicConfig.logoInitials}
            </span>
            <span className="text-sm font-semibold sm:text-base">
              {clinicConfig.name}
            </span>
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            {heroLinks.map((link) => (
              <Link
                className="text-sm font-medium text-white/[0.78] transition duration-300 hover:text-white"
                href={link.href}
                key={link.href}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <a
            className={buttonStyles({
              tone: "white",
              size: "md",
              className: "hidden lg:inline-flex"
            })}
            href={getWhatsAppLink()}
            rel="noopener noreferrer"
            target="_blank"
          >
            Agendar consulta
          </a>

          <button
            aria-expanded={isOpen}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.14] bg-white/[0.08] text-white backdrop-blur-md transition duration-300 hover:bg-white/[0.14] lg:hidden"
            onClick={() => setIsOpen((value) => !value)}
            type="button"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {isOpen ? (
          <div className="mt-3 rounded-[24px] border border-white/[0.12] bg-[rgba(6,42,56,0.84)] p-4 text-white shadow-[0_18px_55px_rgba(6,42,56,0.22)] backdrop-blur-xl lg:hidden">
            <div className="grid gap-1">
              {heroLinks.map((link) => (
                <Link
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-white/[0.82] transition duration-300 hover:bg-white/10 hover:text-white"
                  href={link.href}
                  key={link.href}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <a
              className={buttonStyles({
                tone: "white",
                size: "md",
                className: "mt-3 w-full"
              })}
              href={getWhatsAppLink()}
              rel="noopener noreferrer"
              target="_blank"
            >
              Agendar consulta
            </a>
          </div>
        ) : null}

        <div className="flex flex-1 items-center py-16 sm:py-20 lg:py-24">
          <div className="max-w-[680px]">
            <p className="mb-5 inline-flex rounded-full border border-white/[0.14] bg-white/[0.08] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)] backdrop-blur">
              {clinicConfig.city}, {clinicConfig.state}
            </p>
            <h1 className="max-w-[680px] text-[42px] font-semibold leading-[0.98] tracking-tight text-white sm:text-[58px] lg:text-[66px]">
              Odontologia moderna com atendimento próximo
            </h1>
            <p className="mt-6 max-w-[560px] text-base leading-7 text-white/[0.85] sm:text-lg sm:leading-8">
              Cuidado odontológico planejado, comunicação clara e agendamento
              direto pelo WhatsApp.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className={buttonStyles({ tone: "primary", size: "lg" })}
                href={getWhatsAppLink()}
                rel="noopener noreferrer"
                target="_blank"
              >
                <MessageCircle className="h-5 w-5" />
                Agendar pelo WhatsApp
              </a>
              <Link
                className={buttonStyles({ tone: "secondaryLight", size: "lg" })}
                href="/servicos"
              >
                Ver serviços
              </Link>
            </div>

            <div className="mt-9 flex flex-col gap-3 text-sm font-medium text-white/[0.78] sm:flex-row sm:flex-wrap sm:gap-x-6">
              <span className="inline-flex items-center gap-2">
                <CalendarCheck className="h-4 w-4 text-[var(--color-accent)]" />
                Hora marcada
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[var(--color-accent)]" />
                Localização central
              </span>
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-[var(--color-accent)]" />
                Responsável técnico registrado
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

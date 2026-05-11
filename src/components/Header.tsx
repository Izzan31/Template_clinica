"use client";

import { m } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { buttonStyles } from "@/components/Button";
import { Container } from "@/components/Container";
import { clinicConfig } from "@/config/clinic.config";
import { getWhatsAppLink } from "@/lib/whatsapp";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname === "/") {
    return null;
  }

  const shellClass = isScrolled
    ? "border-white/80 bg-white/[0.92] text-[var(--color-primary-dark)] shadow-[0_18px_55px_rgba(6,42,56,0.10)]"
    : "border-white/[0.14] bg-white/[0.08] text-white shadow-none";
  const linkClass = isScrolled
    ? "text-[var(--color-text-muted)] hover:text-[var(--color-primary-dark)]"
    : "text-white/[0.76] hover:text-white";

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <Container className="py-4">
        <div
          className={`flex min-h-16 items-center justify-between gap-4 rounded-full border px-4 backdrop-blur-xl transition duration-300 sm:px-5 ${shellClass}`}
        >
          <Link className="group flex items-center gap-3" href="/">
            <span
              className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold transition ${
                isScrolled
                  ? "bg-[var(--color-primary-dark)] text-white"
                  : "bg-white text-[var(--color-primary-dark)]"
              }`}
            >
              {clinicConfig.logoInitials}
            </span>
            <span className="leading-tight">
              <span className="block text-base font-semibold">
                {clinicConfig.name}
              </span>
              <span
                className={`block text-xs ${
                  isScrolled ? "text-[var(--color-text-muted)]" : "text-white/[0.64]"
                }`}
              >
                {clinicConfig.city}, {clinicConfig.state}
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {clinicConfig.navigation.map((link) => (
              <Link
                className={`relative py-2 text-sm font-medium transition duration-200 ${linkClass}`}
                href={link.href}
                key={link.href}
              >
                {link.label}
                {pathname === link.href ? (
                  <m.span
                    className={`absolute inset-x-0 -bottom-0.5 h-px ${
                      isScrolled ? "bg-[var(--color-primary)]" : "bg-white"
                    }`}
                    layoutId="nav-active-line"
                    transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
                  />
                ) : null}
              </Link>
            ))}
          </nav>

          <a
            className={buttonStyles({
              tone: isScrolled ? "primary" : "white",
              size: "sm",
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
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition duration-200 lg:hidden ${
              isScrolled
                ? "border-[var(--color-border-soft)] text-[var(--color-primary-dark)] hover:border-[var(--color-accent)]"
                : "border-white/[0.16] bg-white/[0.08] text-white hover:bg-white/[0.14]"
            }`}
            onClick={() => setIsOpen((value) => !value)}
            type="button"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isOpen ? (
          <div className="mt-3 rounded-[18px] border border-white/80 bg-white/[0.95] p-4 text-[var(--color-primary-dark)] shadow-[0_18px_55px_rgba(6,42,56,0.12)] backdrop-blur-xl lg:hidden">
            <nav className="grid gap-2">
              {clinicConfig.navigation.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    className={`rounded-2xl px-4 py-3 text-sm font-medium transition duration-200 ${
                      isActive
                        ? "bg-[var(--color-background)] text-[var(--color-primary-dark)]"
                        : "text-[var(--color-text-muted)] hover:bg-[var(--color-background)] hover:text-[var(--color-primary-dark)]"
                    }`}
                    href={link.href}
                    key={link.href}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
            <a
              className={buttonStyles({
                tone: "primary",
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
      </Container>
    </header>
  );
}

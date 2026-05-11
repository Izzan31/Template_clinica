import type { Metadata } from "next";
import type { CSSProperties, ReactNode } from "react";
import { clinicConfig } from "@/config/clinic.config";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { PageTransition } from "@/components/motion/PageTransition";
import { StructuredData } from "@/components/StructuredData";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(clinicConfig.websiteUrl),
  title: `${clinicConfig.name} | ${clinicConfig.city}, ${clinicConfig.state}`,
  description:
    "Site institucional para clínica odontológica com serviços, agendamento pelo WhatsApp e informações de contato.",
  openGraph: {
    title: `${clinicConfig.name} | ${clinicConfig.city}, ${clinicConfig.state}`,
    description:
      "Serviços odontológicos com avaliação clara, atendimento profissional e agendamento pelo WhatsApp.",
    type: "website",
    locale: "pt_BR"
  }
};

const brandStyle = {
  "--color-background": "#F4FAFC",
  "--color-surface": "#FFFFFF",
  "--color-primary": "#0B6F8A",
  "--color-primary-dark": "#062A38",
  "--color-primary-deep": "#041E2A",
  "--color-accent": "#AEE7F5",
  "--color-text-dark": "#062A38",
  "--color-text-muted": "#607482",
  "--color-text-light": "#FFFFFF",
  "--color-border-soft": "rgba(6, 42, 56, 0.12)"
} as CSSProperties;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body style={brandStyle}>
        <StructuredData />
        <MotionProvider>
          <Header />
          <PageTransition>{children}</PageTransition>
          <Footer />
          <WhatsAppFloatingButton />
        </MotionProvider>
      </body>
    </html>
  );
}

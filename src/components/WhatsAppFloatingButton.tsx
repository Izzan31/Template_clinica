import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";

export function WhatsAppFloatingButton() {
  return (
    <a
      aria-label="Agendar consulta pelo WhatsApp"
      className="group fixed bottom-5 right-5 z-50 inline-flex h-12 items-center justify-center gap-2 rounded-full border border-[var(--color-border-soft)] bg-white/[0.92] px-3 text-[var(--color-primary-dark)] shadow-[0_12px_36px_rgba(6,42,56,0.14)] backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-[var(--color-accent)] hover:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2 sm:px-4"
      href={getWhatsAppLink()}
      rel="noopener noreferrer"
      target="_blank"
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-accent)] text-[var(--color-primary-dark)] transition duration-300 group-hover:bg-[var(--color-primary-dark)] group-hover:text-white">
        <MessageCircle
          aria-hidden="true"
          className="h-4 w-4"
          strokeWidth={2.2}
        />
      </span>
      <span className="hidden text-sm font-semibold sm:inline">WhatsApp</span>
    </a>
  );
}

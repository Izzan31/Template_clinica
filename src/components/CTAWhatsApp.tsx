import { MessageCircle } from "lucide-react";
import type { ReactNode } from "react";
import { buttonStyles, type ButtonSize } from "@/components/Button";
import { getWhatsAppLink } from "@/lib/whatsapp";

type CTAWhatsAppProps = {
  children?: ReactNode;
  className?: string;
  message?: string;
  size?: ButtonSize;
  tone?: "gold" | "navy" | "light" | "outline";
};

const toneMap = {
  gold: "primary",
  navy: "dark",
  light: "white",
  outline: "secondaryDark"
} as const;

export function CTAWhatsApp({
  children = "Agendar pelo WhatsApp",
  className = "",
  message,
  size = "md",
  tone = "gold"
}: CTAWhatsAppProps) {
  const ariaLabel =
    typeof children === "string" ? children : "Abrir conversa no WhatsApp";

  return (
    <a
      aria-label={ariaLabel}
      className={buttonStyles({
        tone: toneMap[tone],
        size,
        className
      })}
      href={getWhatsAppLink(message)}
      rel="noopener noreferrer"
      target="_blank"
    >
      <MessageCircle aria-hidden="true" className="h-4 w-4" strokeWidth={2.2} />
      <span>{children}</span>
    </a>
  );
}

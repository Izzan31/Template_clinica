import { clinicConfig } from "@/config/clinic.config";

export function getWhatsAppLink(
  message: string = clinicConfig.defaultWhatsappMessage
) {
  const phone = clinicConfig.whatsappNumber.replace(/\D/g, "");
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

import {
  AlertCircle,
  ClipboardCheck,
  ShieldCheck,
  Smile,
  Sparkles,
  SunMedium,
  type LucideIcon
} from "lucide-react";
import type { ServiceIcon as ServiceIconName } from "@/config/clinic.config";

const icons: Record<ServiceIconName, LucideIcon> = {
  alert: AlertCircle,
  clipboard: ClipboardCheck,
  shield: ShieldCheck,
  smile: Smile,
  sparkles: Sparkles,
  sun: SunMedium
};

type ServiceIconProps = {
  icon: ServiceIconName;
  className?: string;
};

export function ServiceIcon({ icon, className = "h-5 w-5" }: ServiceIconProps) {
  const Icon = icons[icon];
  return <Icon aria-hidden="true" className={className} strokeWidth={2} />;
}

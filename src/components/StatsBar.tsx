import { clinicConfig } from "@/config/clinic.config";

export function StatsBar() {
  return (
    <div className="grid gap-3 rounded-[28px] border border-white/20 bg-white/[0.14] p-3 backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4">
      {clinicConfig.stats.map((stat) => (
        <div
          className="rounded-3xl border border-white/[0.12] bg-white/[0.12] px-5 py-4"
          key={`${stat.value}-${stat.label}`}
        >
          <p className="text-2xl font-semibold tracking-tight text-white">
            {stat.value}
          </p>
          <p className="mt-1 text-xs leading-5 text-white/[0.68]">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}

import { Reveal } from "@/components/reveal";

const stats = [
  { value: "PGRDEPP", label: "Decreto 2157 de 2017 — implementación integral" },
  { value: "PEC", label: "Planes de Emergencia y Contingencia para eventos masivos" },
  { value: "SNGRD", label: "Articulación con el Sistema Nacional de Gestión del Riesgo" },
  { value: "CCSC", label: "Comunicación para el cambio social y de comportamiento" },
];

export function StatsBar() {
  return (
    <section className="border-y border-marino/10 bg-crema py-10">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-2 gap-8 px-6 md:grid-cols-4 md:px-12">
        {stats.map((s, i) => (
          <Reveal key={s.value} delay={i * 0.08}>
            <div className="text-center md:text-left">
              <div className="font-display text-xl font-extrabold text-marino sm:text-2xl">
                {s.value}
              </div>
              <div className="mt-1 text-xs leading-snug text-marino/60">{s.label}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

import { Check, X } from "lucide-react";
import { Reveal } from "@/components/reveal";

const problems = [
  "El PGRDEPP se archiva como requisito documental, sin apropiación real.",
  "Capacitaciones estáticas que nadie recuerda al momento de una emergencia.",
  "Comunicación reactiva: solo se activa cuando la crisis ya ocurrió.",
  "El cumplimiento normativo y la cultura organizacional avanzan por separado.",
];

const solutions = [
  "El PGRDEPP se convierte en campañas vivas que la comunidad entiende y sigue.",
  "Comunicación para el cambio de comportamiento (CCSC) que modifica hábitos de riesgo.",
  "Estrategia preventiva: se diseña antes del evento, no se improvisa durante la crisis.",
  "La Ley 1523 y el Decreto 2157 se integran a la reputación y sostenibilidad de tu marca.",
];

export function ProblemSolution() {
  return (
    <section className="bg-crema py-20 md:py-28">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-naranja">
            <span className="h-px w-6 bg-naranja" />
            El problema de fondo
          </span>
          <h2 className="font-display text-3xl font-extrabold text-marino sm:text-4xl">
            Cumplir la norma no es lo mismo que cambiar el comportamiento
          </h2>
          <p className="mt-4 text-marino/65">
            La mayoría de organizaciones tratan la gestión del riesgo como una auditoría
            documental de SST. El riesgo real se reduce cuando las personas, no solo los
            papeles, están preparadas.
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-marino/10 bg-white p-8">
              <h3 className="mb-6 font-display text-lg font-extrabold text-marino/50">
                Gestión tradicional del riesgo
              </h3>
              <ul className="space-y-4">
                {problems.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <X className="mt-0.5 h-5 w-5 shrink-0 text-marino/30" />
                    <span className="text-sm leading-relaxed text-marino/55">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="h-full rounded-2xl border-2 border-naranja bg-marino p-8 text-crema shadow-xl shadow-marino/10">
              <h3 className="mb-6 font-display text-lg font-extrabold text-naranja">
                Gestión social del riesgo — mi enfoque
              </h3>
              <ul className="space-y-4">
                {solutions.map((s) => (
                  <li key={s} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-naranja" />
                    <span className="text-sm leading-relaxed text-crema/85">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

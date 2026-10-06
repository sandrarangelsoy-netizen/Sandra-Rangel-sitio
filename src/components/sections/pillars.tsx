import { Brain, Scale, Sparkles } from "lucide-react";
import { Reveal } from "@/components/reveal";

const pillars = [
  {
    icon: Brain,
    title: "Ingeniería comportamental del riesgo",
    description:
      "Cómo la percepción del peligro y los factores psicosociales condicionan la reacción humana en una emergencia, y cómo el marketing social estructura respuestas comunitarias seguras sin generar pánico.",
  },
  {
    icon: Scale,
    title: "Operativización del marco normativo",
    description:
      "Interpretación de la Ley 1523 de 2012 y el Decreto 2157 de 2017 para integrar las exigencias del SNGRD a la responsabilidad social empresarial y la sostenibilidad corporativa.",
  },
  {
    icon: Sparkles,
    title: "Innovación en eventos masivos",
    description:
      "Metodologías transmedia y entornos de interacción para socializar medidas de evacuación y contingencia en espectáculos públicos y recintos corporativos.",
  },
];

export function Pillars() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-naranja">
            <span className="h-px w-6 bg-naranja" />
            Cómo pienso el riesgo
          </span>
          <h2 className="font-display text-3xl font-extrabold text-marino sm:text-4xl">
            Tres ejes de trabajo
          </h2>
        </Reveal>

        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <div className="flex flex-col items-center text-center md:items-start md:text-left">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-crema text-naranja">
                  <p.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-3 font-display text-lg font-extrabold text-marino">
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed text-marino/60">{p.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

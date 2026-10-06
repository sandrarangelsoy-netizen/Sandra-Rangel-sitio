import { SectionLabel } from "@/components/section-label";
import { Reveal } from "@/components/reveal";

const services = [
  {
    num: "01",
    title: "Campañas de marketing social",
    description:
      "Estrategia, mensajes y piezas para que las personas adopten conductas de autoprotección: rutas de evacuación, kits, simulacros y alertas tempranas.",
    tags: ["Estrategia", "Creatividad", "Medición"],
  },
  {
    num: "02",
    title: "Gestión del riesgo de desastres",
    description:
      "Comunicación del riesgo para entidades públicas y comunidades: del conocimiento del riesgo a su reducción y al manejo de la emergencia.",
    tags: ["Comunidades", "Entidades", "Formación"],
  },
  {
    num: "03",
    title: "Consultoría en cumplimiento",
    description:
      "Acompaño a empresas obligadas por la normativa colombiana a formular e implementar su plan de gestión del riesgo, y a comunicarlo de forma que se cumpla de verdad.",
    tags: ["Ley 1523 de 2012", "Decreto 2157 de 2017"],
  },
];

export function Services() {
  return (
    <section id="servicios" className="bg-white py-20 md:py-28">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
        <div className="grid gap-10 md:grid-cols-[1fr_0.8fr] md:gap-16">
          <Reveal>
            <SectionLabel number="02" label="SERVICIOS" />
            <h2 className="font-display text-3xl font-extrabold leading-tight text-marino sm:text-4xl">
              Tres frentes,
              <br />
              <em className="italic text-marino/50">un mismo trazo.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-marino/60 md:pt-14">
              La norma exige un plan. La comunidad necesita entenderlo. Mi trabajo es que
              ambas cosas ocurran a la vez.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 divide-y divide-marino/10 border-t border-marino/10">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <div className="grid grid-cols-1 gap-4 py-9 md:grid-cols-[80px_1.1fr_1fr] md:items-center md:gap-8">
                <span className="font-display text-sm font-bold text-naranja">{s.num}</span>
                <h3 className="font-display text-xl font-extrabold text-marino sm:text-2xl">
                  {s.title}
                </h3>
                <div>
                  <p className="text-sm leading-relaxed text-marino/60">{s.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {s.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-marino/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-marino/55"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

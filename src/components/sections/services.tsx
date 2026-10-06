import { FileCheck2, PartyPopper, Megaphone, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";

const services = [
  {
    icon: FileCheck2,
    tag: "Decreto 2157 de 2017",
    title: "Implementación integral del PGRDEPP",
    description:
      "Formulación del Plan de Gestión del Riesgo de Desastres de Entidades Públicas y Privadas, incluyendo el componente de comunicación interna y comunitaria que exige la norma (Art. 42, Ley 1523 de 2012).",
    audience: "Directores de HSEQ, sostenibilidad y gestión de riesgo corporativo",
  },
  {
    icon: PartyPopper,
    tag: "PEC · Eventos masivos",
    title: "Gestión social del riesgo en aglomeraciones",
    description:
      "Asesoría técnica para la radicación y aprobación del Plan de Emergencia y Contingencia ante las autoridades locales, más el diseño de la campaña de comunicación con asistentes antes, durante y después del evento.",
    audience: "Organizadores de eventos, productoras y promotores culturales",
  },
  {
    icon: Megaphone,
    tag: "CCSC",
    title: "Marketing social y cambio de comportamiento",
    description:
      "Campañas institucionales preventivas que traducen el conocimiento técnico del riesgo en mensajes que la comunidad adopta, orientadas a reducir vulnerabilidades socioambientales reales.",
    audience: "Alcaldías, gobernaciones y secretarías de gestión del riesgo",
  },
];

export function Services() {
  return (
    <section id="servicios" className="bg-white py-20 md:py-28">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-naranja">
            <span className="h-px w-6 bg-naranja" />
            Qué hago
          </span>
          <h2 className="font-display text-3xl font-extrabold text-marino sm:text-4xl">
            Tres frentes de intervención técnica
          </h2>
          <p className="mt-4 text-marino/65">
            Ingeniería del riesgo y marketing social trabajando juntos, no en paralelo.
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <article className="group h-full rounded-2xl border border-marino/10 bg-crema/60 p-8 transition-all hover:-translate-y-1 hover:border-naranja/40 hover:shadow-xl hover:shadow-marino/5">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-marino text-naranja">
                  <s.icon className="h-6 w-6" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-naranja">
                  {s.tag}
                </span>
                <h3 className="mb-3 mt-2 font-display text-xl font-extrabold text-marino">
                  {s.title}
                </h3>
                <p className="mb-5 text-sm leading-relaxed text-marino/65">{s.description}</p>
                <p className="mb-5 text-xs font-semibold text-marino/45">
                  Para: {s.audience}
                </p>
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-marino transition-colors group-hover:text-naranja"
                >
                  Hablemos de tu caso
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

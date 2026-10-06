import Image from "next/image";
import { Reveal } from "@/components/reveal";

const credentials = [
  {
    title: "Mercadeo",
    detail: "Universidad Libre, sede Cartagena",
  },
  {
    title: "Reconocimiento profesional",
    detail: "Egresada destacada, categoría Servidor Público — Unilibre, 2025",
  },
  {
    title: "Gestión del riesgo",
    detail: "Ley 1523 de 2012 y Decreto 2157 de 2017",
  },
  {
    title: "Red institucional",
    detail: "Plataforma Nacional de Gestión del Riesgo de Desastres",
  },
];

export function About() {
  return (
    <section id="sobre-mi" className="bg-crema py-20 md:py-28">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-6 md:grid-cols-[0.85fr_1.15fr] md:px-12">
        <Reveal>
          <div className="relative mx-auto aspect-[4/5] max-w-sm overflow-hidden rounded-[2rem] bg-marino shadow-xl">
            <Image
              src="/img/sandra-about.webp"
              alt="Sandra Rangel en su oficina"
              fill
              sizes="(max-width: 768px) 320px, 420px"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <span className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-naranja">
            <span className="h-px w-6 bg-naranja" />
            Sobre mí
          </span>
          <h2 className="font-display text-3xl font-extrabold text-marino sm:text-4xl">
            No soy auditora del riesgo. Soy arquitecta de la cultura que lo previene.
          </h2>
          <p className="mt-5 text-marino/70">
            Soy Sandra Rangel, mercadóloga egresada de la Universidad Libre, sede Cartagena,
            especializada en llevar el marco legal colombiano de gestión del riesgo de
            desastres —Ley 1523 de 2012 y Decreto 2157 de 2017— del papel a la práctica. Mi
            trabajo conecta la rigurosidad técnica de la ingeniería del riesgo con las
            herramientas del marketing social: investigación, segmentación y diseño de
            mensajes que modifican comportamientos reales.
          </p>
          <p className="mt-4 text-marino/70">
            He participado en espacios de la Plataforma Nacional de Gestión del Riesgo de
            Desastres junto a autoridades civiles y militares, y creo firmemente en los
            principios de autoconservación y solidaridad social que establece la ley: proteger
            la vida es una responsabilidad compartida, no solo del Estado.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {credentials.map((c) => (
              <div
                key={c.title}
                className="rounded-xl border-l-4 border-naranja bg-white px-5 py-4"
              >
                <div className="font-display text-base font-extrabold text-marino">
                  {c.title}
                </div>
                <div className="mt-0.5 text-xs leading-snug text-marino/55">{c.detail}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

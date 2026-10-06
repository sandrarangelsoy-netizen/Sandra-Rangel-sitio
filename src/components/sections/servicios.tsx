import Image from "next/image";
import { Reveal } from "@/components/reveal";

const services = [
  {
    img: "/img/selfie-oficina.webp",
    pos: "30% 30%",
    title: "Campañas de marketing social",
    body: "Estrategia, mensajes y piezas para que las personas adopten conductas de autoprotección: rutas de evacuación, kits, simulacros y alertas tempranas.",
    tags: ["Estrategia", "Creatividad", "Medición"],
  },
  {
    img: "/img/evento-plataforma.webp",
    pos: "75% 40%",
    title: "Gestión del riesgo de desastres",
    body: "Comunicación del riesgo para entidades públicas y comunidades, desde el conocimiento del riesgo hasta el manejo de la emergencia.",
    tags: ["Comunidades", "Entidades", "Formación"],
  },
  {
    img: "/img/retrato-taza.webp",
    pos: "50% 35%",
    title: "Consultoría en cumplimiento",
    body: "Acompaño a empresas obligadas por la normativa colombiana a formular e implementar su plan de gestión del riesgo, y a comunicarlo para que se cumpla de verdad.",
    tags: ["Ley 1523 de 2012", "Decreto 2157 de 2017"],
  },
];

export function Servicios() {
  return (
    <section
      id="servicios"
      className="mx-auto max-w-[1280px] px-[clamp(20px,4vw,48px)] py-16 md:py-[clamp(80px,12vh,140px)]"
    >
      <div className="mb-[clamp(40px,5vw,64px)] flex flex-wrap items-end justify-between gap-8">
        <Reveal>
          <h2 className="m-0 max-w-[16ch] text-balance text-[clamp(34px,3.6vw,54px)] font-bold leading-[1.08] tracking-[-0.025em]">
            Cómo te acompaño
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="m-0 max-w-[40ch] text-pretty text-[17px] leading-relaxed text-marino/75">
            La norma exige un plan. La comunidad necesita entenderlo. Trabajo
            para que ambas cosas ocurran a la vez.
          </p>
        </Reveal>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-[clamp(20px,2.4vw,32px)]">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.1}>
            <article className="group flex h-full flex-col gap-4 rounded-[28px] bg-[#FBF8F3] p-3 lg:gap-5 lg:rounded-none lg:bg-transparent lg:p-0">
              <div className="relative aspect-[16/11] sm:aspect-[4/3.4] overflow-hidden rounded-[20px] bg-[#E7E0D3]">
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.04]"
                  style={{ objectPosition: s.pos }}
                />
              </div>
              <div className="flex flex-col gap-4 px-3 pb-3 lg:gap-5 lg:p-0">
                <h3 className="m-0 text-[clamp(22px,2vw,28px)] font-bold leading-[1.15] tracking-[-0.015em]">
                  {s.title}
                </h3>
                <p className="m-0 text-pretty text-base leading-relaxed text-marino/80">
                  {s.body}
                </p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-marino/25 px-3 py-1.5 text-[13px]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

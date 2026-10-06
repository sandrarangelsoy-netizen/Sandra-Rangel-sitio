import Image from "next/image";
import { Reveal } from "@/components/reveal";

const photos = [
  { src: "/img/selfie-oficina.webp", alt: "Sandra Rangel trabajando", pos: "40% 30%", offset: "" },
  { src: "/img/retrato-taza.webp", alt: "Sandra Rangel en su oficina", pos: "50% 25%", offset: "md:mt-14" },
  { src: "/img/corferias.webp", alt: "Sandra Rangel en Corferias", pos: "50% 20%", offset: "" },
];

export function SobreMi() {
  return (
    <section id="sobre" className="bg-marino text-crema">
      <div className="mx-auto max-w-[1280px] px-[clamp(20px,4vw,48px)] py-16 md:py-[clamp(80px,12vh,140px)]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,400px),1fr))] items-start gap-[clamp(32px,6vw,96px)]">
          <div>
            <Reveal>
              <div className="mb-5 text-sm font-semibold text-naranja">Sobre mí</div>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="m-0 text-balance text-[clamp(34px,3.6vw,54px)] font-bold leading-[1.08] tracking-[-0.025em]">
                Las grandes marcas también tienen historias.{" "}
                <span className="font-normal italic">Las comunidades, también.</span>
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <div className="flex max-w-[54ch] flex-col gap-[18px] text-lg leading-[1.65] text-crema/80 lg:pt-10">
              <p className="m-0 text-pretty">
                Soy Sandra Rangel, mercadóloga egresada de la Universidad Libre de Cartagena,
                con formación técnica en gestión del riesgo de desastres. Llevo 12 años
                llevando las herramientas del marketing al lugar donde más se necesitan: la
                prevención.
              </p>
              <p className="m-0 text-pretty">
                La Ley 1523 de 2012 lo dice claro: la gestión del riesgo es responsabilidad de
                todos, y comunicar el riesgo es parte de conocerlo. Mi trabajo es que
                empresas, entidades y comunidades adopten lo que exige la norma y lo hagan
                suyo.
              </p>
              <a
                href="#contacto"
                className="mt-2 inline-block self-start border-b border-naranja pb-[5px] text-base font-semibold text-crema transition-colors hover:text-naranja"
              >
                Hablemos de tu proyecto →
              </a>
            </div>
          </Reveal>
        </div>

        <div className="mt-[clamp(48px,7vw,88px)] grid grid-cols-3 gap-3 sm:gap-5">
          {photos.map((p, i) => (
            <Reveal key={p.src} delay={i * 0.1} className={p.offset}>
              <div className="relative aspect-[3/4] overflow-hidden rounded-[18px] bg-[#2A3757] sm:rounded-[22px]">
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 768px) 33vw, 400px"
                  className="object-cover"
                  style={{ objectPosition: p.pos }}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { Reveal } from "@/components/reveal";

export function SobreMi() {
  return (
    <section id="sobre" className="bg-marino text-crema">
      <div className="mx-auto grid max-w-[1280px] grid-cols-[repeat(auto-fit,minmax(min(100%,400px),1fr))] items-center gap-[clamp(48px,7vw,104px)] px-[clamp(20px,4vw,48px)] py-[clamp(80px,12vh,140px)]">
        <Reveal>
          <div className="grid grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-end gap-4">
            <div className="relative aspect-[3/4] overflow-hidden rounded-[22px] bg-[#2A3757]">
              <Image
                src="/img/retrato-taza.webp"
                alt="Sandra Rangel en su oficina"
                fill
                sizes="360px"
                className="object-cover"
                style={{ objectPosition: "50% 25%" }}
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className="relative aspect-[3/4] overflow-hidden rounded-[22px] bg-[#2A3757]">
                <Image
                  src="/img/selfie-oficina.webp"
                  alt="Sandra Rangel trabajando"
                  fill
                  sizes="260px"
                  className="object-cover"
                  style={{ objectPosition: "40% 30%" }}
                />
              </div>
              <div className="flex aspect-square items-center justify-center rounded-[22px] bg-naranja p-[18%]">
                <svg viewBox="-14 -26 140 140" className="block w-full" aria-hidden>
                  <g
                    fill="none"
                    stroke="#1F2A44"
                    strokeWidth={17}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M55 37 L48 24 L14 88 A18 18 0 0 0 45.8 104.9 L83.3 34.3" />
                    <path d="M67 65 L99 110" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </Reveal>

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
          <Reveal delay={0.12}>
            <div className="mt-8 flex max-w-[54ch] flex-col gap-[18px] text-lg leading-[1.65] text-crema/80">
              <p className="m-0 text-pretty">
                Soy Sandra Milena Rangel Muñoz, mercadóloga egresada de la Universidad Libre de
                Cartagena. Llevé las herramientas del marketing al lugar donde más se
                necesitan: la prevención.
              </p>
              <p className="m-0 text-pretty">
                Desde el servicio público y la consultoría, traduzco planes técnicos en
                mensajes que la gente entiende, recuerda y pone en práctica.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.18}>
            <a
              href="#contacto"
              className="mt-9 inline-block border-b border-naranja pb-[5px] text-base font-semibold transition-colors hover:text-naranja"
            >
              Trabajemos juntas →
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

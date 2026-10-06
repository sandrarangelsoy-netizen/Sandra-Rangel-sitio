import Image from "next/image";
import { SectionLabel } from "@/components/section-label";
import { Reveal } from "@/components/reveal";
import { IsotipoMark } from "@/components/isotipo-mark";

export function About() {
  return (
    <section id="quien-soy" className="bg-crema py-20 md:py-28">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-6 md:grid-cols-[0.95fr_1.05fr] md:px-12">
        <Reveal>
          <div className="relative mx-auto grid max-w-md grid-cols-2 gap-4">
            <div className="relative col-span-2 aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/img/sandra-about.webp"
                alt="Sandra Rangel en su oficina"
                fill
                sizes="(max-width: 768px) 320px, 380px"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-2xl">
              <Image
                src="/img/sandra-selfie.webp"
                alt="Sandra Rangel"
                fill
                sizes="180px"
                className="object-cover"
              />
            </div>
            <div className="flex aspect-square items-center justify-center rounded-2xl bg-naranja">
              <IsotipoMark className="h-14 w-14 text-marino" />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <SectionLabel number="04" label="QUIÉN SOY" />
          <h2 className="font-display text-3xl font-extrabold leading-tight text-marino sm:text-4xl">
            Las grandes marcas
            <br />
            también tienen historias.
            <br />
            <em className="italic text-naranja">Las comunidades, también.</em>
          </h2>

          <p className="mt-6 text-marino/70">
            Soy Sandra Milena Rangel Muñoz, mercadóloga egresada de la Universidad Libre de
            Cartagena. Vinculo el marketing con mi formación técnica en gestión del riesgo de
            desastres para que, a través de la responsabilidad social empresarial, las
            empresas y las comunidades adopten lo que exige la norma.
          </p>
          <p className="mt-4 text-marino/70">
            La Ley 1523 de 2012 dice que la gestión del riesgo es responsabilidad de todos; el
            Decreto 2157 de 2017 exige que las entidades apliquen medidas de intervención
            prospectiva y correctiva. Esas medidas solo funcionan si la gente las entiende y
            las practica — ahí es donde entro yo.
          </p>

          <div className="mt-7 inline-flex items-center gap-3 rounded-full border border-marino/15 bg-white py-2 pl-2 pr-5">
            <span className="rounded-full bg-naranja px-3 py-1 text-xs font-extrabold text-white">
              12 años
            </span>
            <span className="text-sm font-semibold text-marino/70">
              Coordinadora de reducción del riesgo
            </span>
          </div>

          <div className="mt-8">
            <a
              href="#contacto"
              className="border-b border-naranja pb-0.5 text-sm font-bold text-naranja transition-colors hover:border-marino hover:text-marino"
            >
              Trabajemos juntas →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

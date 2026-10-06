import Image from "next/image";
import { Reveal } from "@/components/reveal";

export function CredibilityBanner() {
  return (
    <section className="relative isolate overflow-hidden py-24 md:py-32">
      <Image
        src="/img/sandra-evento-gestion-riesgo.webp"
        alt="Sandra Rangel en un encuentro de la Plataforma Nacional de Gestión del Riesgo de Desastres"
        fill
        sizes="100vw"
        className="object-cover object-top"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-marino via-marino/80 to-marino/40" />

      <div className="relative mx-auto w-full max-w-7xl px-6 md:px-12">
        <Reveal className="max-w-2xl">
          <span className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-naranja">
            <span className="h-px w-6 bg-naranja" />
            Presencia institucional
          </span>
          <h2 className="font-display text-3xl font-extrabold text-crema sm:text-4xl">
            En la mesa donde se decide la gestión del riesgo en Colombia
          </h2>
          <p className="mt-5 text-crema/80">
            He participado en espacios de la Plataforma Nacional de Gestión del Riesgo de
            Desastres junto a autoridades civiles, militares y organismos de socorro, y
            acompañado a fundaciones como Fundefava en la articulación de estrategias
            preventivas de alcance nacional.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

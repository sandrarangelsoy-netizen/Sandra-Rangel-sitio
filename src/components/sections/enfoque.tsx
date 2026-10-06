import { SectionLabel } from "@/components/section-label";
import { Reveal } from "@/components/reveal";

export function Enfoque() {
  return (
    <section id="enfoque" className="bg-crema py-20 md:py-28">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
        <Reveal>
          <SectionLabel number="01" label="ENFOQUE" />
          <p className="max-w-4xl font-display text-2xl font-semibold leading-snug text-marino sm:text-3xl md:text-4xl">
            Una emergencia no empieza el día del sismo ni de la inundación. Empieza mucho
            antes, en lo que una comunidad sabe, cree y practica. Ahí es donde trabajo:
            convierto la gestión del riesgo en conductas que salvan vidas.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

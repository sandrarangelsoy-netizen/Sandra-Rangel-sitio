import { Reveal } from "@/components/reveal";

export function CtaBand() {
  return (
    <section className="bg-crema px-6 py-16 md:px-12">
      <Reveal className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-8 rounded-[28px] bg-naranja px-8 py-12 text-center md:flex-row md:px-14 md:text-left">
          <div>
            <h2 className="font-display text-2xl font-extrabold text-white sm:text-3xl">
              ¿Tu organización o tu evento están realmente preparados?
            </h2>
            <p className="mt-2 text-white/85">
              Agenda una llamada de diagnóstico sin costo y revisemos juntas tu caso frente a
              la Ley 1523 y el Decreto 2157.
            </p>
          </div>
          <a
            href="#contacto"
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-marino px-8 py-4 text-sm font-bold text-crema transition-transform hover:-translate-y-0.5 hover:bg-negro"
          >
            Agendar diagnóstico
          </a>
        </div>
      </Reveal>
    </section>
  );
}

import Image from "next/image";
import { SectionLabel } from "@/components/section-label";
import { Reveal } from "@/components/reveal";

const entidades = [
  "Alcaldía Mayor de Cartagena",
  "Defensa Civil, seccional Bolívar",
  "UNGRD",
  "Personería de Bogotá",
  "Alcaldía Local de Los Mártires",
  "Alcaldía Local de Teusaquillo",
  "Alcaldía Local de Usaquén",
];

const clientes = ["Café del Mar", "Hotel Las Américas", "Media Maratón del Mar", "Profesional Security"];

const reconocimientos = [
  {
    year: "2025",
    img: "/img/reconocimiento-2025.webp",
    title: 'Egresada destacada del programa de Mercadeo, categoría "Servidor Público"',
    org: "Universidad Libre · Sede Cartagena",
  },
  {
    year: "2020",
    img: "/img/reconocimiento-2020.webp",
    title: "Reconocimiento por la labor desarrollada en el ejercicio profesional",
    org: "Universidad Libre · Sede Cartagena",
  },
];

export function Trayectoria() {
  return (
    <section id="trayectoria" className="bg-marino py-20 text-crema md:py-28">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
        <Reveal>
          <SectionLabel number="03" label="TRAYECTORIA" variant="light" />
          <h2 className="font-display text-3xl font-extrabold leading-tight sm:text-4xl">
            Donde se decide
            <br />
            <em className="italic text-crema/50">la prevención.</em>
          </h2>
          <p className="mt-5 max-w-2xl text-crema/70">
            12 años trabajando la gestión del riesgo desde adentro: diagnósticos, análisis y
            evaluación del riesgo, planes de gestión para entidades públicas y privadas,
            campañas de reducción del riesgo y asistencia técnica en el territorio.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative mt-12 aspect-[16/9] overflow-hidden rounded-2xl">
            <Image
              src="/img/sandra-evento-gestion-riesgo.webp"
              alt="Sandra Rangel en un encuentro de la Plataforma Nacional de Gestión del Riesgo de Desastres"
              fill
              sizes="(max-width: 1280px) 100vw, 1180px"
              className="object-cover object-top"
            />
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-marino/90 to-transparent p-5 text-xs font-semibold">
              <span>Plataforma Nacional para la Gestión del Riesgo de Desastres</span>
              <span className="text-crema/60">Participación institucional</span>
            </div>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-10 border-t border-crema/10 pt-12 sm:grid-cols-2">
          <Reveal>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.14em] text-crema/45">
              Entidades
            </h3>
            <ul className="space-y-2.5">
              {entidades.map((e) => (
                <li key={e} className="text-sm text-crema/80">
                  {e}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.14em] text-crema/45">
              Clientes
            </h3>
            <ul className="space-y-2.5">
              {clientes.map((c) => (
                <li key={c} className="text-sm text-crema/80">
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div id="reconocimientos" className="mt-16 border-t border-crema/10 pt-12">
          <Reveal>
            <h3 className="mb-7 text-xs font-bold uppercase tracking-[0.14em] text-crema/45">
              Reconocimientos
            </h3>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2">
            {reconocimientos.map((r, i) => (
              <Reveal key={r.year} delay={i * 0.1}>
                <div className="flex gap-5 rounded-2xl bg-crema/5 p-5">
                  <div className="relative h-28 w-24 shrink-0 overflow-hidden rounded-lg">
                    <Image src={r.img} alt={r.title} fill sizes="96px" className="object-cover" />
                  </div>
                  <div>
                    <span className="text-sm font-extrabold text-naranja">{r.year}</span>
                    <p className="mt-1 text-sm font-semibold leading-snug text-crema">
                      {r.title}
                    </p>
                    <p className="mt-1.5 text-xs text-crema/50">{r.org}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

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

const hacer = [
  "Diagnósticos, análisis y evaluación del riesgo",
  "Planes de gestión del riesgo para entidades públicas y privadas",
  "Campañas de reducción del riesgo",
  "Asistencia técnica en los territorios",
];

function Chips({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2.5">
      {items.map((item) => (
        <span
          key={item}
          className="rounded-full border border-marino/25 bg-crema px-4 py-2 text-[15px] font-medium"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

export function Trayectoria() {
  return (
    <section id="trayectoria" className="bg-[#FBF8F3]">
      <div className="mx-auto grid max-w-[1280px] grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-start gap-[clamp(48px,7vw,104px)] px-[clamp(20px,4vw,48px)] py-16 md:py-[clamp(80px,12vh,140px)]">
        <div>
          <Reveal>
            <div className="mb-5 text-sm font-semibold text-naranja">Trayectoria</div>
            <h2 className="m-0 text-balance text-[clamp(34px,3.6vw,54px)] font-bold leading-[1.08] tracking-[-0.025em]">
              12 años trabajando el riesgo desde adentro.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-6 max-w-[48ch] text-pretty text-lg leading-[1.65] text-marino/80">
              Como coordinadora de reducción del riesgo, Sandra ha trabajado con entidades del
              Estado y empresas privadas, del diagnóstico en el territorio a la campaña que
              cambia conductas.
            </p>
            <ul className="mt-8 flex max-w-[48ch] flex-col gap-3">
              {hacer.map((h) => (
                <li key={h} className="flex gap-3 text-base leading-snug text-marino/85">
                  <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-naranja" />
                  {h}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="flex flex-col gap-10">
          <Reveal delay={0.1}>
            <h3 className="m-0 mb-4 text-sm font-semibold text-marino/60">
              Entidades con las que ha trabajado
            </h3>
            <Chips items={entidades} />
          </Reveal>
          <Reveal delay={0.18}>
            <h3 className="m-0 mb-4 text-sm font-semibold text-marino/60">Clientes</h3>
            <Chips items={clientes} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

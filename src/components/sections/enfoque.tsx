import Image from "next/image";
import { Reveal } from "@/components/reveal";

const proof = [
  {
    img: "/img/reconocimiento-2025.webp",
    pos: "50% 45%",
    title: "Egresada destacada 2025",
    body: "La Universidad Libre de Cartagena la reconoció en la categoría Servidor Público del programa de Mercadeo.",
  },
  {
    img: "/img/evento-plataforma.webp",
    pos: "40% 40%",
    title: "En la conversación nacional",
    body: "Participa en la Plataforma Nacional para la Gestión del Riesgo de Desastres junto a entidades y organismos de socorro.",
  },
  {
    img: "/img/corferias.webp",
    pos: "50% 22%",
    title: "Marketing con propósito",
    body: "Presente en escenarios del sector como Corferias, donde las marcas aprenden a contar historias que mueven a la acción.",
  },
];

export function Enfoque() {
  return (
    <section id="enfoque" className="bg-[#FBF8F3]">
      <div className="mx-auto grid max-w-[1280px] grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-start gap-[clamp(48px,7vw,104px)] px-[clamp(20px,4vw,48px)] py-16 md:py-[clamp(80px,12vh,140px)]">
        <div>
          <Reveal>
            <h2 className="m-0 text-balance text-[clamp(34px,3.6vw,54px)] font-bold leading-[1.08] tracking-[-0.025em]">
              Un plan de emergencia que nadie entiende no protege a nadie.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="mt-8 flex max-w-[56ch] flex-col gap-[18px] text-lg leading-[1.65] text-marino/80">
              <p className="m-0 text-pretty">
                Muchas organizaciones tienen el documento: el plan de gestión del riesgo, los
                protocolos, las rutas. Lo que falta casi siempre es que las personas lo
                conozcan, lo crean y lo practiquen.
              </p>
              <p className="m-0 text-pretty">
                Ahí entra el marketing social. Las mismas herramientas que hacen que una marca
                se recuerde sirven para que una comunidad sepa qué hacer cuando la tierra
                tiembla o el agua sube.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-9 max-w-[28ch] text-balance text-[clamp(22px,2vw,28px)] font-semibold leading-[1.3] text-naranja">
              La diferencia está en comunicarlo para que cambie conductas.
            </p>
          </Reveal>
        </div>

        <div className="flex flex-col gap-3 lg:gap-0">
          {proof.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="grid grid-cols-[104px_minmax(0,1fr)] items-center gap-4 rounded-3xl bg-crema p-4 lg:grid-cols-[clamp(120px,12vw,168px)_minmax(0,1fr)] lg:gap-7 lg:rounded-none lg:border-b lg:border-marino/15 lg:bg-transparent lg:px-0 lg:py-[22px]">
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-[#E7E0D3]">
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    sizes="168px"
                    className="object-cover"
                    style={{ objectPosition: p.pos }}
                  />
                </div>
                <div>
                  <div className="text-balance text-[clamp(20px,1.8vw,24px)] font-bold leading-tight tracking-[-0.01em]">
                    {p.title}
                  </div>
                  <div className="mt-2 text-pretty text-[15px] leading-[1.55] text-marino/70">
                    {p.body}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { Reveal } from "@/components/reveal";

const awards = [
  {
    img: "/img/reconocimiento-2025.webp",
    year: "2025",
    title: "Egresada destacada del programa de Mercadeo, categoría “Servidor Público”",
    org: "Universidad Libre · Sede Cartagena",
  },
  {
    img: "/img/reconocimiento-2020.webp",
    year: "2020",
    title: "Reconocimiento por la labor desarrollada en el ejercicio profesional",
    org: "Universidad Libre · Sede Cartagena",
  },
];

export function Reconocimientos() {
  return (
    <section
      id="reconocimientos"
      className="mx-auto max-w-[1280px] px-[clamp(20px,4vw,48px)] py-16 md:py-[clamp(80px,12vh,140px)]"
    >
      <Reveal>
        <h2 className="m-0 mb-[clamp(40px,5vw,64px)] max-w-[20ch] text-balance text-[clamp(34px,3.6vw,54px)] font-bold leading-[1.08] tracking-[-0.025em]">
          Reconocimientos
        </h2>
      </Reveal>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] gap-[clamp(24px,3vw,40px)]">
        {awards.map((a, i) => (
          <Reveal key={a.year} delay={i * 0.1}>
            <figure className="m-0 grid grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)] items-center gap-6 rounded-3xl bg-[#FBF8F3] p-4">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-[#E7E0D3]">
                <Image src={a.img} alt={a.title} fill sizes="240px" className="object-cover" />
              </div>
              <figcaption className="pr-3">
                <div className="text-sm font-semibold text-naranja">{a.year}</div>
                <div className="mt-2.5 text-balance text-[clamp(19px,1.6vw,22px)] font-bold leading-tight">
                  {a.title}
                </div>
                <div className="mt-2.5 text-sm text-marino/70">{a.org}</div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

import Image from "next/image";
import { Reveal } from "@/components/reveal";

export function Contacto() {
  return (
    <footer id="contacto" className="px-[clamp(20px,4vw,48px)] pb-8">
      <Reveal className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] items-end gap-10 rounded-[32px] bg-naranja px-[clamp(28px,5vw,80px)] py-[clamp(48px,7vw,96px)] text-marino">
          <h2 className="m-0 text-balance text-[clamp(38px,4.6vw,68px)] font-bold leading-[1.02] tracking-[-0.03em]">
            Hablemos antes de la emergencia.
          </h2>
          <div className="flex flex-col items-start gap-5">
            <p className="m-0 max-w-[40ch] text-lg leading-snug">
              Cuéntame qué exige la norma en tu organización y diseñamos cómo comunicarlo.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="mailto:contacto@sandrarangel.co"
                className="rounded-full bg-marino px-[26px] py-4 text-base font-bold text-crema transition-colors hover:bg-crema hover:text-marino"
              >
                Escríbeme
              </a>
              <span className="font-semibold">contacto@sandrarangel.co</span>
            </div>
          </div>
        </div>
      </Reveal>

      <div className="mx-auto mt-8 flex max-w-[1280px] flex-wrap items-center justify-between gap-5 text-sm text-marino/65">
        <Image
          src="/logo/sandra-rangel-horizontal-color.svg"
          alt="Sandra Rangel"
          width={79}
          height={32}
          className="block h-8 w-auto"
        />
        <div className="flex gap-6">
          <a href="#" className="transition-colors hover:text-naranja">
            LinkedIn
          </a>
          <a href="#" className="transition-colors hover:text-naranja">
            Instagram
          </a>
          <a href="#" className="transition-colors hover:text-naranja">
            YouTube
          </a>
        </div>
        <span>Cartagena de Indias · © {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}

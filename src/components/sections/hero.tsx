"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { RotatingWord } from "@/components/rotating-word";

const navLinks = [
  { label: "Enfoque", href: "#enfoque" },
  { label: "Servicios", href: "#servicios" },
  { label: "Sobre mí", href: "#sobre" },
  { label: "Trayectoria", href: "#trayectoria" },
  { label: "Reconocimientos", href: "#reconocimientos" },
];

export function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="mx-auto max-w-[1280px] px-[clamp(20px,4vw,48px)] py-5 lg:py-6">
        <div className="flex items-center justify-between gap-6">
          <Link href="/" className="block">
            <Image
              src="/logo/sandra-rangel-horizontal-color.svg"
              alt="Sandra Rangel"
              width={99}
              height={40}
              className="block h-10 w-auto"
              priority
            />
          </Link>

          <div className="hidden items-center gap-x-[clamp(18px,2.4vw,34px)] text-[15px] text-marino/75 lg:flex">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="transition-colors hover:text-naranja">
                {l.label}
              </a>
            ))}
            <a
              href="#contacto"
              className="rounded-full bg-marino px-5 py-3 text-sm font-semibold text-crema transition-colors hover:bg-naranja hover:text-marino"
            >
              Agenda un diagnóstico
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-full text-marino lg:hidden"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {menuOpen && (
          <div className="mt-4 flex flex-col border-t border-marino/15 pt-2 lg:hidden">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-marino/10 py-3.5 text-lg font-semibold"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setMenuOpen(false)}
              className="mt-5 rounded-full bg-naranja px-6 py-4 text-center text-base font-bold text-marino"
            >
              Agenda un diagnóstico
            </a>
          </div>
        )}
      </nav>

      <header className="mx-auto grid max-w-[1280px] grid-cols-1 items-end gap-x-[clamp(32px,4vw,72px)] gap-y-10 px-[clamp(20px,4vw,48px)] lg:grid-cols-2 pb-12 lg:pb-0">
        <div className="contents lg:block lg:min-w-0 lg:pb-[clamp(40px,7vh,80px)] lg:pt-[clamp(32px,6vh,72px)]">
          <div className="order-2 pt-2 lg:order-none lg:pt-0">
          <Reveal>
            <div className="mb-7 flex flex-wrap items-center gap-2.5 text-[13px] text-marino/60">
              <span>Marketing social</span>
              <span className="text-naranja">/</span>
              <span>Gestión del riesgo</span>
              <span className="text-naranja">/</span>
              <span>Cumplimiento normativo</span>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="m-0 text-balance text-[clamp(42px,5vw,76px)] font-bold leading-[1.02] tracking-[-0.03em]">
              Comunicar el riesgo para que la gente <RotatingWord />
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-7 max-w-[46ch] text-pretty text-lg leading-relaxed text-marino/80">
              Diseño campañas de marketing social y acompaño a empresas obligadas a cumplir la
              norma de gestión del riesgo de desastres.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <a
                href="#contacto"
                className="rounded-full bg-naranja px-[26px] py-4 text-base font-bold text-marino transition-colors hover:bg-marino hover:text-crema"
              >
                Agenda un diagnóstico
              </a>
              <a
                href="#servicios"
                className="border-b border-marino pb-1 text-[15px] font-semibold transition-colors hover:text-naranja"
              >
                Cómo trabajo
              </a>
            </div>
          </Reveal>
          </div>

          <div className="order-3 grid max-w-[520px] grid-cols-2 gap-3 lg:mt-[clamp(40px,6vh,64px)] lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-4">
            <Reveal className="h-[200px] lg:h-auto">
              <figure className="relative m-0 h-full overflow-hidden rounded-[18px] bg-[#E7E0D3] lg:aspect-[4/3] lg:h-auto">
                <Image
                  src="/img/evento-plataforma.webp"
                  alt="Plataforma Nacional para la Gestión del Riesgo"
                  fill
                  sizes="280px"
                  className="object-cover"
                  style={{ objectPosition: "42% 40%" }}
                />
                <figcaption className="absolute inset-x-2.5 bottom-2.5 rounded-[10px] bg-crema/95 px-2.5 py-2 text-xs font-semibold leading-snug">
                  Plataforma Nacional de Gestión del Riesgo
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={0.1} className="h-[200px] lg:h-full">
              <div className="flex h-full flex-col justify-between gap-3 rounded-[18px] bg-marino p-[18px] text-crema">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-naranja">
                  2025
                </span>
                <span className="text-pretty text-[15px] font-semibold leading-snug">
                  Egresada destacada, categoría Servidor Público
                </span>
                <span className="text-xs opacity-70">Universidad Libre · Cartagena</span>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="relative order-1 flex items-end justify-center self-stretch pt-2 lg:order-none lg:min-h-[clamp(480px,82vh,800px)] lg:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[3/3.9] w-[min(88%,500px)] lg:w-[min(92%,500px)]"
          >
            <div
              aria-hidden
              className="absolute inset-0 -translate-x-3 translate-y-3 rounded-t-[260px] bg-naranja lg:hidden"
            />
            <div className="absolute inset-0 overflow-hidden rounded-t-[260px] bg-[#E7E0D3]">
              <Image
                src="/img/retrato-escritorio.webp"
                alt="Sandra Rangel"
                fill
                priority
                sizes="500px"
                className="object-cover"
                style={{ objectPosition: "35% 15%" }}
              />
            </div>
          </motion.div>
        </div>
      </header>
    </>
  );
}

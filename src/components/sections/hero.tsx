"use client";

import { useState } from "react";
import { BrandLogo } from "@/components/brand-logo";
import { IsotipoMark } from "@/components/isotipo-mark";
import { MarqueeBand } from "@/components/marquee-band";
import { InstagramIcon, LinkedInIcon, YoutubeIcon } from "@/components/social-icons";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Enfoque", href: "#enfoque" },
  { label: "Servicios", href: "#servicios" },
  { label: "Trayectoria", href: "#trayectoria" },
  { label: "Contacto", href: "#contacto" },
];

const socials = [
  { icon: LinkedInIcon, href: "#", label: "LinkedIn" },
  { icon: InstagramIcon, href: "#", label: "Instagram" },
  { icon: YoutubeIcon, href: "#", label: "YouTube" },
];

export function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div id="inicio">
      <header className="fixed inset-x-0 top-0 z-30 border-b border-crema/10">
        <div className="absolute inset-0 -z-10 bg-marino/90 backdrop-blur-md" />
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 md:px-12">
          <BrandLogo variant="light" />

          <nav className="hidden items-center gap-9 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold tracking-wide text-crema/70 transition-colors hover:text-crema"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#diagnostico"
            className="hidden items-center justify-center rounded-full bg-naranja px-5 py-2.5 text-sm font-bold text-white transition-transform hover:-translate-y-0.5 hover:bg-naranja-600 lg:inline-flex"
          >
            Agenda un diagnóstico
          </a>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center text-crema lg:hidden"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {menuOpen && (
          <div className="flex flex-col gap-1 border-t border-crema/10 bg-marino px-6 py-4 lg:hidden">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-md px-2 py-3 text-base font-semibold text-crema/85 hover:bg-crema/5"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#diagnostico"
              onClick={() => setMenuOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-naranja px-5 py-3 text-sm font-bold text-white"
            >
              Agenda un diagnóstico
            </a>
          </div>
        )}
      </header>

      <section className="relative overflow-hidden bg-marino pt-28 text-crema md:pt-32">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, #f4efe6 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-6 py-14 md:grid-cols-2 md:gap-8 md:py-20 md:px-12">
          <div>
            <span className="mb-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-naranja">
              <span className="h-px w-6 bg-naranja" />
              Marketing social · Gestión del riesgo
            </span>

            <h1 className="font-display text-5xl font-extrabold leading-[0.95] sm:text-6xl lg:text-7xl">
              Comunicar
              <br />
              <em className="italic">para </em>
              <em className="italic text-naranja">prevenir.</em>
            </h1>

            <div className="mt-8 max-w-md border-t border-crema/15 pt-8">
              <p className="text-crema/75">
                Diseño campañas que cambian conductas y acompaño a empresas obligadas a
                cumplir la norma de gestión del riesgo — antes de que llegue la emergencia.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-6">
                <a
                  href="#servicios"
                  className="border-b border-crema pb-0.5 text-sm font-bold text-crema transition-colors hover:border-naranja hover:text-naranja"
                >
                  Ver cómo trabajo
                </a>
                <a
                  href="#diagnostico"
                  className="text-sm font-semibold text-crema/55 transition-colors hover:text-crema"
                >
                  Agendar diagnóstico
                </a>
              </div>
            </div>
          </div>

          <div className="relative flex flex-col items-center justify-center py-6 md:py-0">
            <IsotipoMark className="h-48 w-48 text-naranja sm:h-64 sm:w-64 md:h-72 md:w-72" />
            <span className="mt-6 text-center text-xs font-bold uppercase tracking-[0.22em] text-crema/35">
              Un solo trazo que protege
            </span>
          </div>
        </div>

        <div className="relative mx-auto flex w-full max-w-7xl items-center justify-between border-t border-crema/10 px-6 py-6 text-xs font-semibold text-crema/50 md:px-12">
          <div className="flex items-center gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="transition-colors hover:text-naranja"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <span className="hidden tracking-[0.2em] sm:inline">DESLIZA</span>
          <span>Cartagena de Indias, Colombia</span>
        </div>
      </section>

      <MarqueeBand />
    </div>
  );
}


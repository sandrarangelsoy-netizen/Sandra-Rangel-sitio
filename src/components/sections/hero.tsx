"use client";

import { MinimalistHero } from "@/components/ui/minimalist-hero";
import { BrandLogo } from "@/components/brand-logo";
import { FacebookIcon, InstagramIcon, LinkedInIcon } from "@/components/social-icons";

const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Diagnóstico", href: "#diagnostico" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Contacto", href: "#contacto" },
];

const socialLinks = [
  { icon: LinkedInIcon, href: "#", label: "LinkedIn" },
  { icon: InstagramIcon, href: "#", label: "Instagram" },
  { icon: FacebookIcon, href: "#", label: "Facebook" },
];

export function Hero() {
  return (
    <MinimalistHero
      logo={<BrandLogo variant="light" />}
      navLinks={navLinks}
      eyebrow="Ley 1523 de 2012 · Decreto 2157 de 2017"
      mainText="Convierto la obligación legal de la gestión del riesgo de desastres en campañas de marketing social que cambian comportamientos, protegen vidas y blindan la continuidad de tu organización o evento."
      primaryCta={{ label: "Diagnóstico gratuito", href: "#diagnostico" }}
      secondaryCta={{ label: "Ver servicios", href: "#servicios" }}
      imageSrc="/img/sandra-hero.webp"
      imageAlt="Sandra Rangel, consultora en marketing social y gestión del riesgo de desastres"
      overlayText={{ part1: "Comunicar", part2: "para prevenir." }}
      socialLinks={socialLinks}
      locationText="Cartagena de Indias, Colombia"
    />
  );
}

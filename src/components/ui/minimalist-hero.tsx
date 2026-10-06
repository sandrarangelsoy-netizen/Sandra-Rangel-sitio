"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { X, Menu } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavLink {
  label: string;
  href: string;
}

interface SocialLink {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  href: string;
  label: string;
}

interface MinimalistHeroProps {
  logo: React.ReactNode;
  navLinks: NavLink[];
  eyebrow: string;
  mainText: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  imageSrc: string;
  imageAlt: string;
  overlayText: {
    part1: string;
    part2: string;
  };
  socialLinks: SocialLink[];
  locationText: string;
  className?: string;
}

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-sm font-semibold tracking-wide text-crema/70 transition-colors hover:text-crema"
  >
    {children}
  </a>
);

const SocialIcon = ({ href, icon: Icon, label }: SocialLink) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="flex h-9 w-9 items-center justify-center rounded-full border border-crema/20 text-crema/70 transition-colors hover:border-naranja hover:text-naranja"
  >
    <Icon className="h-4 w-4" />
  </a>
);

export const MinimalistHero = ({
  logo,
  navLinks,
  eyebrow,
  mainText,
  primaryCta,
  secondaryCta,
  imageSrc,
  imageAlt,
  overlayText,
  socialLinks,
  locationText,
  className,
}: MinimalistHeroProps) => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <div
      id="inicio"
      className={cn(
        "relative flex min-h-screen w-full flex-col items-center justify-between overflow-hidden bg-marino p-6 pt-28 text-crema sm:p-8 sm:pt-32 md:p-12 md:pt-36",
        className
      )}
    >
      {/* textura de fondo sutil */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #f4efe6 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 -z-10 h-[520px] w-[520px] rounded-full bg-naranja/10 blur-3xl"
      />

      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-30 border-b border-crema/10 bg-marino/80 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {logo}
          </motion.div>

          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <NavLink key={link.label} href={link.href}>
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="hidden lg:block">
            <a
              href={primaryCta.href}
              className="inline-flex items-center justify-center rounded-full bg-naranja px-5 py-2.5 text-sm font-bold text-white transition-transform hover:-translate-y-0.5 hover:bg-naranja-600"
            >
              {primaryCta.label}
            </a>
          </div>

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
              href={primaryCta.href}
              onClick={() => setMenuOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-naranja px-5 py-3 text-sm font-bold text-white"
            >
              {primaryCta.label}
            </a>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <div className="relative grid w-full max-w-7xl flex-grow grid-cols-1 items-center gap-10 py-10 md:grid-cols-[1fr_auto_1fr] md:gap-8 md:py-0">
        {/* Left Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="z-20 order-2 text-center md:order-1 md:text-left"
        >
          <span className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-naranja">
            <span className="h-px w-6 bg-naranja" />
            {eyebrow}
          </span>
          <p className="mx-auto max-w-xs text-sm leading-relaxed text-crema/75 md:mx-0">
            {mainText}
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <a
              href={primaryCta.href}
              className="inline-flex items-center justify-center rounded-full bg-naranja px-6 py-3 text-sm font-bold text-white transition-transform hover:-translate-y-0.5 hover:bg-naranja-600"
            >
              {primaryCta.label}
            </a>
            {secondaryCta && (
              <a
                href={secondaryCta.href}
                className="inline-flex items-center justify-center rounded-full border border-crema/30 px-6 py-3 text-sm font-bold text-crema transition-colors hover:border-naranja hover:text-naranja"
              >
                {secondaryCta.label}
              </a>
            )}
          </div>
        </motion.div>

        {/* Center Image with Circle */}
        <div className="relative order-1 flex h-full items-center justify-center md:order-2">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="absolute z-0 h-[260px] w-[260px] rounded-full bg-naranja/90 sm:h-[320px] sm:w-[320px] md:h-[380px] md:w-[380px] lg:h-[440px] lg:w-[440px]"
          />
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
            className="relative z-10 h-[300px] w-[230px] overflow-hidden rounded-[2.5rem] border-4 border-crema/10 shadow-2xl sm:h-[380px] sm:w-[290px] md:h-[430px] md:w-[330px]"
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              priority
              sizes="(max-width: 768px) 290px, 330px"
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Right Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="z-20 order-3 flex items-center justify-center text-center md:justify-start md:text-left"
        >
          <h1
            className="font-display font-extrabold leading-[0.95] text-crema"
            style={{ fontSize: "clamp(2.75rem, 5.2vw, 5.25rem)" }}
          >
            {overlayText.part1}
            <br />
            <span className="text-naranja">{overlayText.part2}</span>
          </h1>
        </motion.div>
      </div>

      {/* Footer Elements */}
      <footer className="z-30 flex w-full max-w-7xl items-center justify-between pb-2 pt-10 md:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="flex items-center gap-3"
        >
          {socialLinks.map((link) => (
            <SocialIcon key={link.label} {...link} />
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          className="text-sm font-semibold text-crema/60"
        >
          {locationText}
        </motion.div>
      </footer>
    </div>
  );
};

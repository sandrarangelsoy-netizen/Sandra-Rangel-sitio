import { BrandLogo } from "@/components/brand-logo";
import { InstagramIcon, LinkedInIcon, YoutubeIcon } from "@/components/social-icons";

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

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-marino text-crema/60">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 border-t border-crema/10 px-6 py-10 sm:flex-row sm:items-center sm:justify-between md:px-12">
        <BrandLogo variant="light" />

        <nav className="flex flex-wrap items-center gap-x-7 gap-y-2 text-sm font-semibold">
          {navLinks.map((l) => (
            <a key={l.label} href={l.href} className="transition-colors hover:text-naranja">
              {l.label}
            </a>
          ))}
        </nav>

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
      </div>
      <div className="border-t border-crema/10 px-6 py-5 text-center text-xs md:px-12">
        © {year} Sandra Rangel · Marketing social para la reducción del riesgo de desastres
      </div>
    </footer>
  );
}

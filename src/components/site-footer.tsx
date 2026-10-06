import { BrandLogo } from "@/components/brand-logo";
import { FacebookIcon, InstagramIcon, LinkedInIcon } from "@/components/social-icons";

const navCols = [
  {
    title: "Navegación",
    links: [
      { label: "Servicios", href: "#servicios" },
      { label: "Diagnóstico", href: "#diagnostico" },
      { label: "Sobre mí", href: "#sobre-mi" },
      { label: "Contacto", href: "#contacto" },
    ],
  },
  {
    title: "Servicios",
    links: [
      { label: "PGRDEPP · Decreto 2157", href: "#servicios" },
      { label: "PEC para eventos masivos", href: "#servicios" },
      { label: "Marketing social y CCSC", href: "#servicios" },
    ],
  },
  {
    title: "Contacto",
    links: [
      { label: "hola@sandrarangel.com", href: "mailto:hola@sandrarangel.com" },
      { label: "+57 300 000 0000", href: "tel:+573000000000" },
      { label: "Agendar diagnóstico", href: "#contacto" },
    ],
  },
];

const socials = [
  { icon: LinkedInIcon, href: "#", label: "LinkedIn" },
  { icon: InstagramIcon, href: "#", label: "Instagram" },
  { icon: FacebookIcon, href: "#", label: "Facebook" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-marino pt-16 text-crema/70">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
        <div className="grid gap-12 border-b border-crema/10 pb-12 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <BrandLogo variant="light" showTagline />
            <p className="mt-5 max-w-xs text-sm leading-relaxed">
              Marketing social para la gestión del riesgo de desastres. Convierto la Ley 1523
              de 2012 y el Decreto 2157 de 2017 en cultura de prevención real.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-crema/15 transition-colors hover:border-naranja hover:text-naranja"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {navCols.map((col) => (
            <div key={col.title}>
              <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.12em] text-crema/50">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-sm transition-colors hover:text-naranja">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-3 py-6 text-xs sm:flex-row">
          <span>© {year} Sandra Rangel. Todos los derechos reservados.</span>
          <div className="flex gap-5">
            <a href="#" className="hover:text-naranja">
              Aviso de privacidad
            </a>
            <a href="#" className="hover:text-naranja">
              Términos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

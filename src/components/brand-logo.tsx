import { cn } from "@/lib/utils";

interface BrandLogoProps {
  variant?: "light" | "dark";
  className?: string;
  iconClassName?: string;
  showTagline?: boolean;
}

/**
 * Isotipo oficial (el trazo "A" de Sandra + Rangel) acompañado del
 * nombre en Archivo ExtraBold, tal como define el manual de marca
 * para encabezados web (sección 02 · Versiones del logotipo).
 */
export function BrandLogo({
  variant = "dark",
  className,
  iconClassName,
  showTagline = false,
}: BrandLogoProps) {
  const ink = variant === "dark" ? "text-marino" : "text-crema";
  const sub = variant === "dark" ? "text-naranja" : "text-naranja";

  return (
    <a href="#inicio" className={cn("flex items-center gap-2.5", className)}>
      <svg
        viewBox="-14 -14 140 140"
        className={cn("h-8 w-8 shrink-0", iconClassName)}
        aria-hidden
      >
        <g
          fill="none"
          stroke={variant === "dark" ? "#1f2a44" : "#f4efe6"}
          strokeWidth={17}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M55 37 L48 24 L14 88 A18 18 0 0 0 45.8 104.9 L83.3 34.3" />
          <path d="M67 65 L99 110" />
        </g>
      </svg>
      <span className="flex flex-col leading-none">
        <span className={cn("font-display text-[1.05rem] font-extrabold tracking-tight", ink)}>
          SANDRA RANGEL
        </span>
        {showTagline && (
          <span className={cn("mt-1 text-[10px] font-bold uppercase tracking-[0.14em]", sub)}>
            Marketing social · Gestión del riesgo
          </span>
        )}
      </span>
    </a>
  );
}

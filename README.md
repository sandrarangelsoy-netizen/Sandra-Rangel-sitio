# Sandra Rangel — sitio web

Sitio de marketing para Sandra Rangel, marketing social para la gestión del
riesgo de desastres (Ley 1523 de 2012 y Decreto 2157 de 2017).

Next.js (App Router) + TypeScript + Tailwind CSS v4, con una estructura de
proyecto estilo shadcn (`components.json`, `src/components/ui`,
`src/lib/utils.ts`) y Framer Motion para las animaciones.

## Desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Build de producción

```bash
npm run build
npm run start
```

## Estructura

- `src/components/ui/minimalist-hero.tsx` — hero principal (basado en un
  componente de 21st.dev, adaptado a la identidad de marca).
- `src/components/sections/` — secciones de la página de inicio.
- `src/components/brand-logo.tsx`, `src/components/social-icons.tsx` —
  elementos de marca reutilizables.
- `public/logo/` — logotipo oficial (isotipo, horizontal, vertical; color y
  negativo) exportado del manual de marca.
- `public/img/` — fotografías.

## Marca

Paleta y tipografía tomadas del manual de identidad 2026: marino `#1F2A44`,
naranja `#E8622C`, crema `#F4EFE6`, negro `#161616`; tipografía Archivo
(Google Fonts).

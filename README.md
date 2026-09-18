# Sandra Rangel — Sitio web

Sitio de una sola página construido con HTML, CSS y JS vanilla, siguiendo el
sistema de marca definido en `sandra-rangel-sistema-de-marca.md` (paleta
negro/blanco/dorado, tipografía Fraunces + Work Sans).

## Estructura

```
index.html      → Contenido y estructura de la página
css/style.css   → Tokens de diseño (color, tipografía, espaciado) y estilos
js/main.js      → Menú móvil
assets/         → Carpeta reservada para los SVG del logo definitivo
```

## Logos en demo

El logo definitivo (triángulo de alerta + señal de difusión) todavía no está
cargado como archivo. Mientras tanto, el sitio muestra un **placeholder**
marcado con la etiqueta "demo" / "logo en demo" en:

- El encabezado (`.brand .logo-placeholder`)
- El hero (ícono de triángulo dibujado en SVG inline, a modo de referencia)
- La sección de contacto y el pie de página

Para reemplazarlos por el logo real:

1. Colocar los SVG de producción (`lockup-horizontal`, `icon-mono`, etc.) en
   `assets/`.
2. En `index.html`, sustituir cada bloque `<span class="logo-placeholder">…</span>`
   o `<div class="logo-placeholder">…</div>` por la etiqueta `<img>` o `<svg>`
   correspondiente.
3. Quitar la clase `.logo-placeholder` y sus estilos asociados en
   `css/style.css` si ya no se necesitan.

## Ver el sitio localmente

No requiere build. Basta con servir la carpeta:

```bash
python3 -m http.server 8000
```

y abrir `http://localhost:8000`.

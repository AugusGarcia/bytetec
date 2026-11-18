# BYTETEC — Landing

Sitio de una sola página para **BYTETEC**, servicio técnico de hardware y software.
Objetivo: presentar los servicios (reparación, optimización, sistemas, actualización y
respaldo), explicar la modalidad de soporte remoto y derivar la consulta a WhatsApp.

## Stack

| Pieza | Uso |
| :--- | :--- |
| [Astro](https://astro.build) 7 | Framework de sitio estático, componentes `.astro` |
| [Tailwind CSS](https://tailwindcss.com) 4 | Estilos, vía `@tailwindcss/vite` |
| [Motion](https://motion.dev) 14 | Animaciones de entrada (solo `opacity` y `transform`) |
| TypeScript | Tipado de scripts en `src/scripts/` |
| Node >= 22.23.4 | Entorno de build |

Sin frameworks JS de UI: no hay React, Vue ni Svelte. Una sección = un componente.

## Estructura

```text
src/
├── assets/         Imágenes y SVG
├── components/     Un componente por sección (Hero, Servicios, Faq, Cta, ...)
├── layouts/        Layout base del documento
├── pages/          index.astro
├── scripts/        reveal.ts — revelado al scroll vía data-reveal
└── styles/         global.css — tokens de diseño (@theme)
```

El diseño y sus tokens viven en `DESIGN.md` y `src/styles/global.css`.
Las convenciones de layout y de código están en `AGENTS.md`.

## Comandos

| Comando | Acción |
| :--- | :--- |
| `npm install` | Instala dependencias |
| `npm run dev` | Servidor local en `localhost:4321` |
| `npm run build` | Build de producción en `./dist/` |
| `npm run preview` | Previsualiza el build local |

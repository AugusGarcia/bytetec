// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: "https://bytetec.vercel.app",
  vite: {
    plugins: [tailwindcss()]
  },
   devToolbar: { enabled: false }
});
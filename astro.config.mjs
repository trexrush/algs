import { defineConfig } from 'astro/config';
import serviceWorker from "astrojs-service-worker";

// https://astro.build/config
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), tailwind(), serviceWorker(),],
  site: 'https://trexrush.github.io',
  base: '/algs',
});
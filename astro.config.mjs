import { defineConfig } from 'astro/config';

// https://astro.build/config
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import ViteYaml from '@modyfi/vite-plugin-yaml';

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), tailwind()],
  site: 'https://trexrush.github.io',
  base: '/algs',
  vite: {
    plugins: [ViteYaml()]
  }
});
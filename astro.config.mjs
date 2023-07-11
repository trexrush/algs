import { defineConfig } from 'astro/config';

// https://astro.build/config
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import yaml from '@rollup/plugin-yaml'

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), tailwind()],
  site: 'https://trexrush.github.io',
  base: '/algs',
  vite: {
    plugins: [yaml()]
  }
});
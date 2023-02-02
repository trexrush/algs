import { defineConfig } from 'astro/config';

// https://astro.build/config
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";

// import AstroPWA from '@vite-pwa/astro'
// import { VitePWA } from "vite-plugin-pwa"

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), tailwind()],
  site: 'https://trexrush.github.io',
  base: '/algs',
  // vite: {
  //   plugins: [
  //     VitePWA({
  //       strategies: 'injectManifest',
  //       injectManifest: {
  //         swSrc: 'dist/sw.js',
  //         globDirectory: 'dist',
  //         handler: 'StaleWhileRevalidate',
  //         globPatterns: [
  //           '**/*.{html,js,css,json,png}',
  //         ],
  //       }
  //     })
  //   ]
  // }
});
# About
A central place for me to share the algorithms I use for speedsolving the Rubik's Cube with inline visualizations, data driven, and shipped as a Progressive web app to have the offline power of a PDF.

[Link to my (old/current) algsheet on Google Sheets](https://docs.google.com/spreadsheets/d/1L0iR5AyRh2sTWymHSD2MiTJXzl8IoxGzyuRgqEhttSs/edit#gid=1313953242)

### Get Started

```
pnpm i

pnpm astro dev
```

add this to `settings.json` in VSCode for Tailwind intellisense in strings (i.e. in `AlgListing.svelte`):

```
  "tailwindCSS.experimental.classRegex": [
    ["Styles \\=([^;]*);", "'([^']*)'"],
    ["Styles \\=([^;]*);", "\"([^\"]*)\""],
    ["Styles \\=([^;]*);", "\\`([^\\`]*)\\`"]
  ],
```

### Build site locally

```
pnpm astro build && pnpm astro preview
```

## Stack

Powered by [Astro 🚀](https://astro.build), [Tailwind ☁️](https://tailwindcss.com), [Svelte 🦾](https://svelte.dev), and [CubingJS 📦](https://js.cubing.net/cubing/)

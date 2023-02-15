# About
I want to have a central place to share the algorithms I use for speedcolving the Rubik's Cube with inline visualizations, have it be data driven so its easy to modify, and have it be able to be shipped as a Progressive web app so it has the offline power of a PDF.

[Link to my current algsheet](https://docs.google.com/spreadsheets/d/1L0iR5AyRh2sTWymHSD2MiTJXzl8IoxGzyuRgqEhttSs/edit#gid=1313953242)


## Future 2.0 Plans

- use logo for github / gsheets link
- create gridlayout
- maintain collapsed / selected algs in localstorage/cache
- make dark mode toggleable
- add info card to navbar or page layouts
- move these to github issues :sob: :skull:
- collapse all sets
- algorithmically handle INVERSE, DOUBLE, LEFTY, BACK trigger modifiers
- expand triggers on demand / styling
- implement mirror toggle in site
- link to trainer once thats set up?
- allow algs/set to show up in a set order and mix up algs/sets? (wanted for PLL, needed to pull OLL/PLL from sheet)
- manually check all algs for correct direction of _2 / _2' moves
- add Parity OLL/PLL, OLL, H/Pi ZBLL

# Development

### Get Started

```
pnpm i

pnpm astro dev
```

### Build site locally

```
pnpm astro build && pnpm astro preview
```

## Stack

Powered by [Astro 🚀](https://astro.build), [Tailwind ☁️](https://tailwindcss.com), and [Svelte 🦾](https://svelte.dev)

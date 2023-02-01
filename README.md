# About
I want to have a central place to share the algorithms I use for speedcolving the Rubik's Cube.

# Goals for this Project
Be able to have an algsheet with inline visualizations, have it be data driven so its easy to modify, and have it be able to be shipped as a Progressive web app so it has the offline power of a PDF.

[Link to my current algsheet which I put a lot of effort into so tbh idk why i decided to redo it as a website](https://docs.google.com/spreadsheets/d/1L0iR5AyRh2sTWymHSD2MiTJXzl8IoxGzyuRgqEhttSs/edit#gid=1313953242)

# Development

## Stack

Astro, Tailwind, Svelte

## Todo (roughly in order)

- make the ratio of image to alg like 25/75 on mobile (and increase font)
- learn tailwind better + setup theming
- add an info component to tell ppl that they can click the image to get an algvis
- create gridlayout
- come up with / implement a good system for local images
- cache VC results
- image, serviceworker, astro-compress and prefetch astro integrations (PWA / Load Optimization)
- maintain collapsed / selected algs in localstorage
- option to invert an alg to show the right handed version (change name? EDIT - or just style the component to show that its inverted)
- link to twizzle? link to trainer once thats set up?
- collapse all
- make some flag to bypass algvis or us a different alg than display? maybe a shorthand?
(ex. where I say fruruf [ZBLL] or the pll parity cases like [J PERM] [PARITY])
(needed to pull parityPLL, parityOLL and OLL from the API)
- allow algs/set to show up in a set order and mix up algs/sets? (wanted for PLL, needed to pull OLL/PLL from sheet)
- add Parity OLL/PLL, PLL, OLL



## Get Started

```
pnpm i

astro run dev
```




Powered by [Astro 🚀](https://astro.build)

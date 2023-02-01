<script lang="ts">
  import { styles } from "../scripts/styles";
  import { DefaultData } from "../scripts/types";
  import type { IData } from "../scripts/types";
  import TwistyPlayer from "./TwistyPlayer.svelte";

  export let imageAlg: string;
  export let activeAlg: string;
  export let data: IData
  export let size: number

  let cssSize = size + "px";

  // https://experiments.cubing.net/cubing.js/twisty/misc-2d-stickerings.html
  // local images get those yep
  let imgSource: string = data.imgSource || DefaultData.imgSource;
  let stage: string = data.vcparams?.stage || DefaultData.vcparams.stage;
  let view: string = data.vcparams?.view || DefaultData.vcparams.view;
  let rot: string = data.vcparams?.rot || DefaultData.vcparams.rot;
  let puzzle: number| "mega" = data.vcparams?.puzzle || DefaultData.vcparams.puzzle;
  let colorScheme: string = data.vcparams?.colorScheme || DefaultData.vcparams.colorScheme;

  let visualCubeImage: HTMLImageElement;
  let twizzle: boolean = false;
  const setTwizzle = () => {
    twizzle = !twizzle;
  };
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->

<div
  class="cont flex flex-row items-center justify-center cursor-pointer relative aspect-square"
  use:styles={{ size: cssSize }}
>
  {#if !twizzle}
    <div on:click={setTwizzle}>
      {#if imgSource == "vc"}
        <img
          class="cursor-pointer transition-transform hover:translate-y-[-8px]"
          src="https://cubing.net/api/visualcube/?fmt=svg&bg=t&co=50&cc=black&r=y30x-30&pzl={puzzle}&view={view}&size={size}&stage={stage}&case={imageAlg}{rot}"
          alt="Alg Vis"
          />
      {:else if imgSource == "cubicleVC"}
        <svg class="cursor-pointer transition-transform hover:translate-y-[-8px]" width="{size}px" height="{size}px">
          <image xlink:href="https://cubiclealgdbimagegen.azurewebsites.net/generator?puzzle={puzzle}&scheme={colorScheme}&alg={imageAlg}{rot}" width="{size}px" height="{size}px">
        </svg>
      {:else if imgSource == "cubingjs"}
        <TwistyPlayer {imageAlg} {data} {size} />
      {/if}
    </div>
  {:else}
    <TwistyPlayer {activeAlg} {data} {size} />
    <div
      class=" absolute left-0 bottom-0 h-7 w-7 bg-red-300 rounded text-center"
      on:click={setTwizzle}
    >
      X
    </div>
  {/if}
</div>

<style>
  .cont {
    height: var(--size);
    width: var(--size);
  }
</style>

<script lang="ts">
  import { getContext } from "svelte";
  import { styles } from "../scripts/styles";
  import { DefaultData } from "../scripts/types";
  import type { IData } from "../scripts/types";
  import TwistyPlayer from "./TwistyPlayer.svelte";

  export let alg: string;
  export let activeAlg: string;

  let size: number = getContext('size')
  let cssSize = size + "px"

  let data: IData = getContext('data')
  // https://experiments.cubing.net/cubing.js/twisty/misc-2d-stickerings.html
  // local images get those yep
  let imgSource: string = data.imgSource || DefaultData.imgSource;
  let stage: string = data.vcparams?.stage || DefaultData.vcparams.stage;
  let view: string = data.vcparams?.view || DefaultData.vcparams.view;
  let rot: string = data.vcparams?.rot || DefaultData.vcparams.rot;
  let puzzle: number = data.vcparams?.puzzle || DefaultData.vcparams.puzzle;

  let visualCubeImage: HTMLImageElement;
  let twizzle: boolean = false;
  const setTwizzle = () => {
    twizzle = !twizzle;
  };
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->

<div class="cont flex flex-row items-center justify-center cursor-pointer relative border-4 aspect-square" use:styles={{ size: cssSize }}>
  {#if !twizzle}
    <img
    class="cursor-pointer transition-transform"
      bind:this={visualCubeImage}
      on:click={setTwizzle}
      src="https://cubing.net/api/visualcube/?fmt=svg&bg=t&co=50&cc=black&r=y30x-30&pzl={puzzle}&view={view}&size={size}&stage={stage}&case={alg}{rot}"
      alt="Alg Vis"
    />
  {:else}
    <TwistyPlayer {activeAlg} />
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
  img:hover {
    transform: translate(0px, -8px) scale(1.1);
  }
</style>

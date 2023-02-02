<script lang="ts">
  import { styles } from "../scripts/styles";
  import { DefaultData } from "../scripts/types";
  import type { IData } from "../scripts/types";
  import TwistyPlayer from "./TwistyPlayer.svelte";
  import AlgImage from "./AlgImage.svelte";

  export let imageAlg: string;
  export let activeAlg: string;
  export let data: IData
  export let size: number

  let cssSize = size + "px";

  // https://experiments.cubing.net/cubing.js/twisty/misc-2d-stickerings.html
  // local images get those yep
  let imgSource: string = data.imgSource || DefaultData.imgSource;

  let twizzle: boolean = false;
  const setTwizzle = () => {
    twizzle = !twizzle;
    if (imgSource == 'vc' && !twizzle) {
    }
  };
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->

<div
  class="cont flex flex-row items-center justify-center cursor-pointer relative aspect-square"
  use:styles={{ size: cssSize }}
>
  {#if !twizzle}
    <div on:click={setTwizzle}>
      <!-- TODO: clean up code, move all this logic to algCard tbh and use slots for images and twistyplayer  -->
      <AlgImage {imageAlg} {data} {size} />
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

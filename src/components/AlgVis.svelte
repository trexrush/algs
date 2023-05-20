<script lang="ts">
  import { styles } from "../scripts/styles";
  import { DefaultOptions } from "../scripts/types";
  import type { IOptions } from "../scripts/types";
  import TwistyPlayer from "./TwistyPlayer.svelte";
  import AlgImage from "./AlgImage.svelte";
  import { onMount } from "svelte";
  import merge from "ts-deepmerge";

  export let imageAlg: string;
  export let activeAlg: string;
  export let options: IOptions
  export let size: number

  let cssSize = size + "px";
  let imgSize: number
  let mounted: boolean = false

  let twistyOptions: IOptions = merge(DefaultOptions, options)

  // https://experiments.cubing.net/cubing.js/twisty/misc-2d-stickerings.html
  // local images get those yep
  let imgSource: string = twistyOptions.imgSource!;

  let twizzle: boolean = false;
  const setTwizzle = () => {
    twizzle = !twizzle;
    if (imgSource == 'vc' && !twizzle) {
    }
  };

  // bind:clientHeight returns nothing until mounted, which breaks images unless images are placed after this one finishes
  onMount(async () => {
    mounted = true
  })
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->

<div
  class="flex flex-row items-center justify-center cursor-pointer relative aspect-square max-h-[--size] max-w-[--size] h-[35%] w-[35%]"
  use:styles={{ size: cssSize }}
  bind:clientHeight={imgSize}
>
  {#if mounted}
    {#if !twizzle}
    <div on:click={setTwizzle}>
      <!-- TODO: clean up code, move all this logic to algCard tbh and use slots for images and twistyplayer  -->
      <AlgImage {imageAlg} options={twistyOptions} size={imgSize} />
    </div>
    {:else}
    <TwistyPlayer {activeAlg} options={twistyOptions} size={imgSize} />
    <div
      class=" absolute left-0 bottom-0 text-xs h-5 w-5 sm:h-7 sm:w-7 bg-red-300 dark:bg-red-600 rounded grid place-items-center select-none"
      on:click={setTwizzle}
      >
      X
    </div>
    {/if}
  {/if}
</div>

<style>
</style>

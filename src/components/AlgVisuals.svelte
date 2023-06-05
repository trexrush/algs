<script lang="ts">
  import { styles } from "../scripts/utilities"
  import type { IAlg, IOptions } from "../scripts/types"
  import TwistyPlayer from "./TwistyPlayer.svelte"
  import AlgImage from "./AlgImage.svelte";
  import { onMount } from "svelte";


  export let imageAlg: IAlg
  export let activeAlg: string
  export let options: IOptions
  export let size: number
  export let isLefty: boolean | undefined

  let cssSize = size + "px";
  let imgSize: number
  let mounted: boolean = false


  export let isAlgVisDisplayed: boolean = false
  export const toggleDisplay = () => { isAlgVisDisplayed = !isAlgVisDisplayed }
  // bind:clientHeight returns nothing until mounted, which breaks images unless images are placed after this one finishes
  onMount(async () => { mounted = true })
</script>

<!-- TODO: make container query -->
<!-- svelte-ignore a11y-click-events-have-key-events -->

<div class="flex flex-row items-center justify-center cursor-pointer relative aspect-square sm:h-[--size] h-[35%]"
use:styles={{ size: cssSize }} bind:clientHeight={imgSize}>
  {#if mounted}
    {#if !isAlgVisDisplayed}
    <div on:click={toggleDisplay}>
      <!-- TODO: clean up code, move all this logic to algCard tbh and use slots for images and twistyplayer  -->
      <AlgImage {imageAlg} options={options} size={imgSize} />
    </div>
    {:else}
    <TwistyPlayer {activeAlg} options={options} size={imgSize} isLefty={isLefty} />
    <div
      class="absolute left-0 bottom-0 h-5 w-5 sm:h-7 sm:w-7 bg-red-300 dark:bg-red-500 rounded grid place-items-center font-black select-none"
      on:click={toggleDisplay}
      >
      x
    </div>
    {/if}
  {/if}
</div>

<style>
</style>

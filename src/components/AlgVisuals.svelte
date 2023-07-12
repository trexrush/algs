<script lang="ts">
  import type { IAlg, IOptions } from "../scripts/types"
  import TwistyPlayer from "./TwistyPlayer.svelte"
  import AlgImage from "./AlgImage.svelte";
  import type { IAlgorithmClass } from "../scripts/alg";

  export let imageAlg: IAlg
  export let activeAlg: IAlgorithmClass
  export let options: IOptions

  export let isAlgVisDisplayed: boolean = false
  export const toggleDisplay = () => { isAlgVisDisplayed = !isAlgVisDisplayed }
</script>

<!-- TODO: make container query -->
<!-- svelte-ignore a11y-click-events-have-key-events -->

<div class="flex flex-row items-center justify-center cursor-pointer relative aspect-square sm:h-[128px] sm:w-[128px] h-[35%] w-[35%]">
  {#if !isAlgVisDisplayed}
    <div on:click={toggleDisplay}>
      <!-- TODO: clean up code, move all this logic to algCard tbh and use slots for images and twistyplayer  -->
      <AlgImage {imageAlg} options={options} />
    </div>
    {:else}
    <TwistyPlayer activeAlg={activeAlg.alg} options={options} isLefty={activeAlg.isLefty} />
    <div
      class="absolute left-0 bottom-0 h-5 w-5 sm:h-7 sm:w-7 bg-red-300 dark:bg-red-500 rounded grid place-items-center font-black select-none"
      on:click={toggleDisplay}>
      x
    </div>
  {/if}
</div>

<style>
</style>

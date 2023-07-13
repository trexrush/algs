<script lang="ts">
  import type { IAlgorithmClass } from "../../scripts/alg";
  import type { IOptions } from "../../scripts/types";
  import AlgImage from "../AlgImage.svelte";
  import TwistyPlayer from "../TwistyPlayer.svelte";

  export let imageAlg: IAlgorithmClass
  export let activeAlg: IAlgorithmClass
  export let options: IOptions

  export let isAlgVisDisplayed: boolean
  export let toggleDisplay: () => void
</script>
<!-- svelte-ignore a11y-click-events-have-key-events -->

<div class="flex flex-row items-center justify-center cursor-pointer relative aspect-square sm:h-[128px] sm:w-[128px] h-[35%] w-[35%]">
  {#if !isAlgVisDisplayed}
    <div on:click={toggleDisplay}>
      <AlgImage {imageAlg} options={options} />
    </div>
    {:else}
    <slot name="algAnimation" />
    <div
      class="absolute left-0 bottom-0 h-5 w-5 sm:h-7 sm:w-7 bg-red-300 dark:bg-red-500 rounded grid place-items-center font-black select-none"
      on:click={toggleDisplay}>
      x
    </div>
  {/if}
</div>
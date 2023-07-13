<script lang="ts">
  import type { IOptions } from "../scripts/types"
  import TwistyPlayer from "./TwistyPlayer.svelte"
  import type { IAlgorithmClass } from "../scripts/alg";
  import AlgVisualsVertical from "./templates/AlgVisualsVertical.svelte";

  export let imageAlg: IAlgorithmClass
  export let activeAlg: IAlgorithmClass
  export let options: IOptions
  export let Layout = AlgVisualsVertical

  // TODO: add back the setup move in ALG

  export let isAlgVisDisplayed: boolean = false
  export const toggleDisplay = () => { isAlgVisDisplayed = !isAlgVisDisplayed }
</script>

<!-- TODO: make container query -->
<!-- TODO: clean up code, move Image logic to algCard tbh and use slots for images and twistyplayer  -->

<svelte:component this={Layout} {imageAlg} {activeAlg} {options} {toggleDisplay} {isAlgVisDisplayed}>
  <svelte:fragment slot="algAnimation">
    <TwistyPlayer activeAlg={activeAlg.alg} options={options} isLefty={activeAlg.isLefty} />
  </svelte:fragment>

</svelte:component>

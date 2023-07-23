<script lang="ts">
  import type { IOptions } from "../../scripts/types"
  import TwistyPlayer from "../TwistyPlayer.svelte"
  import AlgVisualsVertical from "../AlgVisualsVertical.svelte";
  import { cubePNG, Axis, Masking, ICubeOptions } from "sr-visualizer";
  import { puzzleMapping } from "../../scripts/config/puzzle";
  import type { IAlgorithmClass } from "../../scripts/alg/algorithm";

  export let imageAlg: IAlgorithmClass
  export let activeAlg: IAlgorithmClass
  export let options: IOptions
  export let Layout = AlgVisualsVertical

  export let isAlgVisDisplayed: boolean = false
  export const toggleDisplay = () => { isAlgVisDisplayed = !isAlgVisDisplayed }

  const FIXED_SIZE_TEMP = 128
  let vcpuzzle = puzzleMapping[imageAlg.puzzle]?.vc

  const vcImage = (node: HTMLElement) => {
    let imageOptions: ICubeOptions = {
      cubeOpacity: 65,
      cubeColor: "black",
      viewportRotations: [
        [Axis.Y, 30],
        [Axis.X, -30],
      ],
      cubeSize: typeof vcpuzzle === 'number' ? vcpuzzle : 3,
      view: options.vcparams!.view,
      width: FIXED_SIZE_TEMP,
      height: FIXED_SIZE_TEMP,
      mask: options.vcparams?.stage! as Masking,
      case: (imageAlg.setup ?? '') + imageAlg.notation('vc') + " " + options.vcparams?.rot!
    }
    cubePNG(node, imageOptions)
    return {
      destroy(){}
    }
  };
</script>

<!-- TODO: make container query -->
<!-- svelte-ignore a11y-click-events-have-key-events -->

<svelte:component this={Layout} {toggleDisplay} {isAlgVisDisplayed}>
  <svelte:fragment slot="algAnimation" let:css>
    <TwistyPlayer options={options} algorithm={activeAlg} />
    <div class={css.main} on:click={toggleDisplay}>
      x
    </div>
  </svelte:fragment>
  
  <svelte:fragment slot="hoverOverlay" let:css>
    <span class={css.overlay} >
      <span>View Alg</span>
    </span>
  </svelte:fragment>

  <svelte:fragment slot="image" let:css>
    {#if options.imgSource == "vc"}
      <div class={css.vcImg} use:vcImage /> 
    {:else if options.imgSource == "cubingjs"}
      <TwistyPlayer options={options} algorithm={imageAlg} _2D={true} />
    {/if}
  </svelte:fragment>

</svelte:component>

<script lang="ts">
  import TwistyPlayer from "../TwistyPlayer.svelte"
  import AlgVisualsVertical from "../AlgVisualsVertical.svelte";
  import { cubePNG, Axis, Masking, ICubeOptions } from "sr-visualizer";
  import type { IAlgorithmClass } from "../../scripts/alg/algorithm";
  import type { IConfig } from "../../scripts/config";

  export let imageAlg: IAlgorithmClass
  export let activeAlg: IAlgorithmClass
  export let config: IConfig
  export let Layout = AlgVisualsVertical

  export let isAlgVisDisplayed: boolean = false
  export const toggleDisplay = () => { isAlgVisDisplayed = !isAlgVisDisplayed }

  const FIXED_SIZE_TEMP = 128
  
  const vcImage = (node: HTMLElement) => {
    if (typeof config.vc !== 'number') return
    let imageOptions: ICubeOptions = {
      cubeOpacity: 65,
      cubeColor: "black",
      viewportRotations: [
        [Axis.Y, 30],
        [Axis.X, -30],
      ],
      cubeSize: config.vc,
      view: config.visualCubeConfig.view,
      width: FIXED_SIZE_TEMP,
      height: FIXED_SIZE_TEMP,
      mask: config.visualCubeConfig.stage as Masking,
      case: (imageAlg.setup ?? '') + ' ' + imageAlg.notation('vc') + " " + config.visualCubeConfig.rot
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
    <TwistyPlayer config={config} algorithm={activeAlg} />
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
    {#if config.imgSource == "vc"}
      <div class={css.vcImg} use:vcImage /> 
    {:else if config.imgSource == "cubingjs"}
      <TwistyPlayer config={config} algorithm={imageAlg} _2D={true} />
    {/if}
  </svelte:fragment>

</svelte:component>

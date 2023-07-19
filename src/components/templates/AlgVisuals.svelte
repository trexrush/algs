<script lang="ts">
  import type { IOptions } from "../../scripts/types"
  import TwistyPlayer from "../TwistyPlayer.svelte"
  import type { IAlgorithmClass } from "../../scripts/alg";
  import AlgVisualsVertical from "../AlgVisualsVertical.svelte";
  import { convert4x4Notation, expandAlgWithTriggers } from "../../scripts/alg";
  import { puzzleMapping } from "../../scripts/alg";
  import { cubePNG, Axis, Masking, ICubeOptions } from "sr-visualizer";
  import { onMount } from "svelte";

  export let imageAlg: IAlgorithmClass
  export let activeAlg: IAlgorithmClass
  export let options: IOptions
  export let Layout = AlgVisualsVertical

  // TODO: add back the setup move in ALG

  export let isAlgVisDisplayed: boolean = false
  export const toggleDisplay = () => { isAlgVisDisplayed = !isAlgVisDisplayed }


  const FIXED_SIZE_TEMP = 128

  let vcpuzzle = puzzleMapping[imageAlg.puzzle]?.vc
  let setupAUF: string = imageAlg.setup ? imageAlg.setup + ' ' : ''

  // LIFECYCLE //

  let mounted = false
  onMount(() => { mounted = true });
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
      case: options.puzzle == '4x4x4' 
      // TODO: implement generic expand
        ? setupAUF + convert4x4Notation(expandAlgWithTriggers(imageAlg.alg, options.puzzle) + "" + options.vcparams?.rot!, 'vc')
        : setupAUF + expandAlgWithTriggers(imageAlg.alg, options.puzzle) + "" + options.vcparams?.rot!,
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
    <TwistyPlayer activeAlg={activeAlg.alg} options={options} isLefty={activeAlg.isLefty} />
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
    {#if mounted}
      <TwistyPlayer imageAlg={setupAUF + imageAlg.alg} options={options} />
    {/if}
  {/if}

  <!-- / -->
  </svelte:fragment>

</svelte:component>

<script lang="ts">
  import TwistyPlayer from "../TwistyPlayer.svelte"
  import AlgVisualsVertical from "../AlgVisualsVertical.svelte"
  import { cubePNG, Axis, Masking, ICubeOptions } from "sr-visualizer"
  import type { IAlgorithmClass } from "../../scripts/alg/algorithm"
  import type { IConfig } from "../../scripts/config"
  import { PNG, type PNGVisualizerOptions, Type } from "sr-puzzlegen"
  import type { ICase } from "../../scripts/config/set/dataFormat"

  export let imageAlg: IAlgorithmClass
  export let activeAlg: IAlgorithmClass
  export let config: IConfig
  export let Layout = AlgVisualsVertical
  export let caso: ICase

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

  const pgImage = (node: HTMLElement) => {
    // hardcoded everything for now, TODO: add a new config section for puzzleGen and unhardcode in a future commit
    const op: PNGVisualizerOptions = { 
      puzzle: {
        scale: 5,
        translation: { z: -16 },
        // rotations: [{ x: 66, y: 0, z: 0 }],
        scheme: config.name == 'Megaminx OLL' 
        ? { // OLL
          U: { value: '#333', stroke: '#222'},
          F: { value: '#b7c7cc', stroke: '#b7c7cc' },
          R: { value: '#ccccb7', stroke: '#ccccb7' },
          BR: { value: '#ccb7c7', stroke: '#ccb7c7' },
          BL: { value: '#ccc5b7', stroke: '#ccc5b7' },
          L: { value: '#c2ccb7', stroke: '#c2ccb7' },
        }
        : { // PLL
          U: { value: '#222', stroke: '#111' },
          F: { value: '#5dc9ea', stroke: '#1aa2cb' },
          L: { value: '#ffffa5', stroke: '#c1c185' },
          BL: { value: '#ff66d8', stroke: '#bc52a2' },
          R: { value: '#ffae0c', stroke: '#c4870e' },
          BR: { value: '#93ff0f', stroke: '#70cc00' },
        },
        case: caso.imageAlg
          ? caso.imageAlg
          : (imageAlg.setup ?? '') + ' ' + imageAlg.notation('vc') + " " + config.visualCubeConfig.rot,
        // mask: {
        //   F: [0,1,5,6,7,8,9,10],
        //   R: [0,3,4,5,6,7,8,9],
        //   L: [0,1,2,3,7,8,9,10],
        //   BR: [0,1,2,3,4,5,9,10],
        //   BL: [0,1,2,3,4,5,6,7],
        //   d: [0,1,2,3,4,5,6,7,8,9,10],
        //   b: [0,1,2,3,4,5,6,7,8,9,10],
        //   dl: [0,1,2,3,4,5,6,7,8,9,10],
        //   dr: [0,1,2,3,4,5,6,7,8,9,10],
        //   bl: [0,1,2,3,4,5,6,7,8,9,10],
        //   br: [0,1,2,3,4,5,6,7,8,9,10]
        // },
      }
    }

    PNG(node, Type.MEGAMINX_TOP, op)
    return {
      destroy(){}
    }
  }

</script>

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
      <!-- TODO: this is very prototyped, add another imgSource for puzzlegen -->
    {:else if config.imgSource == "cubingjs"}
      <div class={css.vcImg} use:pgImage /> 
      <!-- <TwistyPlayer config={config} algorithm={imageAlg} _2D={true} /> -->
    {/if}
  </svelte:fragment>

</svelte:component>

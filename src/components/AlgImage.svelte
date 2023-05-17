<script lang="ts">
  import { DefaultOptions } from "../scripts/types";
  import type { IOptions } from "../scripts/types";
  import TwistyPlayer from "./TwistyPlayer.svelte";
  import { cubePNG, cubeSVG, Axis, Masking } from "sr-visualizer";
  import { onMount } from "svelte";

  export let imageAlg: string;
  export let options: IOptions;
  export let size: number;

  // https://experiments.cubing.net/cubing.js/twisty/misc-2d-stickerings.html
  // local images get those yep
  let imgSource: string = options.imgSource || DefaultOptions.imgSource;
  let stage: string = options.vcparams?.stage || DefaultOptions.vcparams.stage;
  let view: "plan" | "trans" = options.vcparams?.view || DefaultOptions.vcparams.view;
  let rot: string = options.vcparams?.rot || DefaultOptions.vcparams.rot;
  let puzzle: number | "mega" =
    options.vcparams?.puzzle || DefaultOptions.vcparams.puzzle;
  let colorScheme: string =
    options.vcparams?.colorScheme || DefaultOptions.vcparams.colorScheme;

  let visualCubeImage: HTMLElement;
  const configVisualCubeImage = () => {
    cubePNG(visualCubeImage, {
      cubeOpacity: 65,
      cubeColor: "black",
      viewportRotations: [
        [Axis.Y, 30],
        [Axis.X, -30],
      ],
      cubeSize: puzzle != "mega" ? puzzle : 3,
      view: view,
      width: size,
      height: size,
      mask: stage as Masking,
      case: imageAlg + "" + rot,
    });
  };

  onMount(() => {
    if (imgSource == "vc") {
      configVisualCubeImage();
    }
  });
</script>

{#if imgSource == "vc"}
  <div class="vc cursor-pointer transition-transform hover:translate-y-[-8px]" bind:this={visualCubeImage} />
{:else if imgSource == "cubingjs"}
  <TwistyPlayer {imageAlg} options={options} {size} />
{/if}

<style>
</style>
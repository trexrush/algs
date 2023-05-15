<script lang="ts">
  import { DefaultData } from "../scripts/types";
  import type { IData } from "../scripts/types";
  import TwistyPlayer from "./TwistyPlayer.svelte";
  import { cubePNG, cubeSVG, Axis, Masking } from "sr-visualizer";
  import { onMount } from "svelte";

  export let imageAlg: string;
  export let data: IData;
  export let size: number;

  // https://experiments.cubing.net/cubing.js/twisty/misc-2d-stickerings.html
  // local images get those yep
  let imgSource: string = data.imgSource || DefaultData.imgSource;
  let stage: string = data.vcparams?.stage || DefaultData.vcparams.stage;
  let view: "plan" | "trans" = data.vcparams?.view || DefaultData.vcparams.view;
  let rot: string = data.vcparams?.rot || DefaultData.vcparams.rot;
  let puzzle: number | "mega" =
    data.vcparams?.puzzle || DefaultData.vcparams.puzzle;
  let colorScheme: string =
    data.vcparams?.colorScheme || DefaultData.vcparams.colorScheme;

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
  <TwistyPlayer {imageAlg} {data} {size} />
{/if}

<style>
</style>
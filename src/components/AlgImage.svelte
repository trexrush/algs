<script lang="ts">
  import { puzzleDefinitionMapping } from "../scripts/algConstants";
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
  let imgSource: string = options.imgSource!
  let stage: string = options.vcparams?.stage!
  let view: "plan" | "trans" = options.vcparams?.view!
  let rot: string = options.vcparams?.rot!
  let puzzle: number | string = puzzleDefinitionMapping[options.puzzle]?.vc!!
  let colorScheme: string =
    options.vcparams?.colorScheme!

  let visualCubeImage: HTMLElement;
  const configVisualCubeImage = () => {
    cubePNG(visualCubeImage, {
      cubeOpacity: 65,
      cubeColor: "black",
      viewportRotations: [
        [Axis.Y, 30],
        [Axis.X, -30],
      ],
      cubeSize: typeof puzzle === 'number' ? puzzle : 3,
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

<div class="relative group">
    <span class="absolute grid items-center text-center w-full h-full text-2xl drop-shadow-md font-extrabold z-10 transition-all duration-400 ease-in-out group-hover:backdrop-blur-[1px] group-hover:bg-opacity-30 group-hover:opacity-100 opacity-0" >
        <span>View Alg</span>
    </span>
    <div class="transition-all ease-in-out duration-300 group-hover:translate-y-[-2px] group-hover:mix-blend-soft-light">
        {#if imgSource == "vc"}
        <div class="cursor-pointer  " bind:this={visualCubeImage} /> 
        {:else if imgSource == "cubingjs"}
        <TwistyPlayer {imageAlg} options={options} {size} />
        {/if}
    </div>
</div>

<style>
</style>
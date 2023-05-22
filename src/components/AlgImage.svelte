<script lang="ts">
  import { expandAlgWithTriggers } from "../scripts/alg";
  import { puzzleDefinitionMapping } from "../scripts/algConstants";
  import type { IOptions } from "../scripts/types";
  import TwistyPlayer from "./TwistyPlayer.svelte";
  import { cubePNG, Axis, Masking } from "sr-visualizer";
  import { onMount } from "svelte";

  export let imageAlg: string
  export let options: IOptions
  export let size: number

  let puzzle: number | string = puzzleDefinitionMapping[options.puzzle]?.vc!!

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
      view: options.vcparams!.view,
      width: size,
      height: size,
      mask: options.vcparams?.stage! as Masking,
      case: expandAlgWithTriggers(imageAlg, options.puzzle) + "" + options.vcparams?.rot!,
    });
  };

  onMount(() => {
    if (options.imgSource == "vc") {
      configVisualCubeImage();
    }
  });
</script>

<div class="relative group">
    <span class="absolute grid items-center text-center w-full h-full text-2xl drop-shadow-md font-extrabold z-10 transition-all duration-400 ease-in-out group-hover:backdrop-blur-[1px] group-hover:bg-opacity-30 group-hover:opacity-100 opacity-0" >
        <span>View Alg</span>
    </span>
    <div class="transition-all ease-in-out duration-300 group-hover:translate-y-[-2px] group-hover:mix-blend-soft-light">
        {#if options.imgSource == "vc"}
        <div class="cursor-pointer  " bind:this={visualCubeImage} /> 
        {:else if options.imgSource == "cubingjs"}
        <TwistyPlayer {imageAlg} options={options} {size} />
        {/if}
    </div>
</div>

<style>
</style>
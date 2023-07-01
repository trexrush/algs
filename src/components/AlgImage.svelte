<script lang="ts">
  import { convert4x4Notation, expandAlgWithTriggers } from "../scripts/alg";
  import { puzzleDefinitionMapping } from "../scripts/alg";
  import type { IAlg, IOptions } from "../scripts/types";
  import TwistyPlayer from "./TwistyPlayer.svelte";
  import { cubePNG, Axis, Masking } from "sr-visualizer";
  import { onMount } from "svelte";

  export let imageAlg: IAlg
  export let options: IOptions
  export let size: number

  let vcpuzzle: number | string = puzzleDefinitionMapping[options.puzzle]?.vc!!
  let setupAUF: string = imageAlg.setup ? imageAlg.setup + ' ' : ''
  
  let visualCubeImage: HTMLElement;
  const configVisualCubeImage = () => {
    cubePNG(visualCubeImage, {
      cubeOpacity: 65,
      cubeColor: "black",
      viewportRotations: [
        [Axis.Y, 30],
        [Axis.X, -30],
      ],
      cubeSize: typeof vcpuzzle === 'number' ? vcpuzzle : 3,
      view: options.vcparams!.view,
      width: size,
      height: size,
      mask: options.vcparams?.stage! as Masking,
      case: options.puzzle == '4x4x4' 
        ? setupAUF + convert4x4Notation(expandAlgWithTriggers(imageAlg.alg, options.puzzle) + "" + options.vcparams?.rot!, 'vc')
        : setupAUF + expandAlgWithTriggers(imageAlg.alg, options.puzzle) + "" + options.vcparams?.rot!,
    });
  };

  onMount(() => {
    if (options.imgSource == "vc") {
      configVisualCubeImage();
    }
  });
</script>

<!-- TODO: Scale on size better -->
<div class="relative group
child:transition-all child:duration-300 child:ease-in-out hover:translate-y-[-2px]">
  <span class="absolute grid items-center text-center w-full h-full 
  text-2xl drop-shadow-md font-extrabold z-10 
  group-hover:backdrop-blur-[1px] group-hover:bg-opacity-30 group-hover:opacity-100 opacity-0" >
    <span>View Alg</span>
  </span>
  <div class="group-hover:opacity-30">
    {#if options.imgSource == "vc"}
      <div class="cursor-pointer  " bind:this={visualCubeImage} /> 
    {:else if options.imgSource == "cubingjs"}
        <TwistyPlayer imageAlg={setupAUF + imageAlg.alg} options={options} {size} />
    {/if}
  </div>
</div>

<style>
</style>
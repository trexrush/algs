<!-- credit to anicolao https://github.com/cubing/cubing.js/issues/223#issuecomment-1249980565 -->
<script lang="ts">
  import { TwistyPlayer } from "cubing/twisty";
  import { onMount } from "svelte";
  import { expandAlgWithTriggers } from "../scripts/alg";
  import type { IOptions, twistyPuzzleType } from "../scripts/types";
  import { DefaultOptions } from "../scripts/types";

  export let options: IOptions
  export let size: number
  let stage: string = options.twistyplayerparams?.stage || DefaultOptions.twistyplayerparams.stage;
  let rot: string = options.twistyplayerparams?.rot || DefaultOptions.twistyplayerparams.rot;
  let cameraX: number = options.twistyplayerparams?.cameraX || DefaultOptions.twistyplayerparams.cameraX;
  let cameraY: number = options.twistyplayerparams?.cameraY || DefaultOptions.twistyplayerparams.cameraY;
  let puzzle: twistyPuzzleType = options.twistyplayerparams?.puzzle || DefaultOptions.twistyplayerparams.puzzle;
  let tempo: number = options.twistyplayerparams?.tempo || DefaultOptions.twistyplayerparams.tempo;
  
  export let setup = "";
  export let backView = false;
  export let hintFacelets = false;
  export let drag = false;
  let twistyDiv: HTMLDivElement
  
  // canvas elements are undefined until load so this logic must be defined in onMount
  let setAlg = (alg: string) => { return }
  
  export let imageAlg: string | null = null
  export let activeAlg: string | null = null
  $: {
    if (!imageAlg && activeAlg) {
      setAlg(activeAlg)
    }
  }
  
  onMount(async () => {
    const twistyPlayer: TwistyPlayer = new TwistyPlayer();
    if (twistyDiv) {

      setAlg = (alg: string) => {
        twistyPlayer.alg = ". . " + expandAlgWithTriggers(alg, puzzle) + " . ."
        twistyPlayer.jumpToStart()
        twistyPlayer.controller.animationController.playPause()
      }
      
      twistyPlayer.background = "none";
      twistyPlayer.experimentalSetupAnchor = "end";
      twistyPlayer.experimentalFaceletScale = 0.88; // works here but not in vanillaJS??????
      twistyPlayer.tempoScale = tempo;
      twistyPlayer.cameraLatitudeLimit = 50;
      
      twistyPlayer.visualization = imageAlg ? "experimental-2D-LL" : "3D"
      if (imageAlg) { twistyPlayer.alg = expandAlgWithTriggers(imageAlg, puzzle) }
      twistyPlayer.style.height = `${size}px`;
      twistyPlayer.style.width = `${size}px`;
      twistyPlayer.experimentalStickering = stage;
      twistyPlayer.cameraLongitude = cameraX
      twistyPlayer.cameraLatitude = cameraY
      
      twistyPlayer.experimentalDragInput = drag ? "auto" : "none";
      twistyPlayer.controlPanel = "none"
      twistyPlayer.experimentalSetupAlg = setup + " " + rot;
      twistyPlayer.backView = backView ? "top-right" : "none";
      twistyPlayer.hintFacelets = hintFacelets ? "auto" : "none";
      twistyPlayer.puzzle = puzzle
      
      twistyDiv.appendChild(twistyPlayer);
      // console.log(twistyPlayer.experimentalModel.twistySceneModel.stickeringMask)

      if (!imageAlg) {
        twistyPlayer.play()
        twistyPlayer.onclick = () => { twistyPlayer.controller.animationController.playPause(); }
      }
    }
  });

</script>

<div class="h-full w-full transition-transform duration-300 ease-in-out hover:translate-y-[-8px] hover:scale-[1.05]" bind:this={twistyDiv} />

<style>
</style>

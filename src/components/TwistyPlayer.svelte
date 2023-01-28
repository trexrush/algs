<!-- credit to anicolao https://github.com/cubing/cubing.js/issues/223#issuecomment-1249980565 -->
<script lang="ts">
  import { TwistyPlayer } from "cubing/twisty";
  import { onMount } from "svelte";
  import { removePrePostAUF } from "../scripts/alg";
  import type { IData, twistyPuzzleType } from "../scripts/types";
  import { DefaultData } from "../scripts/types";

  export let data: IData
  export let size: number
  let stage: string = data.twistyplayerparams?.stage || DefaultData.twistyplayerparams.stage;
  let rot: string = data.twistyplayerparams?.rot || DefaultData.twistyplayerparams.rot;
  let cameraX: number = data.twistyplayerparams?.cameraX || DefaultData.twistyplayerparams.cameraX;
  let cameraY: number = data.twistyplayerparams?.cameraY || DefaultData.twistyplayerparams.cameraY;
  let puzzle: twistyPuzzleType = data.twistyplayerparams?.puzzle || DefaultData.twistyplayerparams.puzzle;
  let tempo: number = data.twistyplayerparams?.tempo || DefaultData.twistyplayerparams.tempo;
  
  export let setup = "";
  export let backView = false;
  export let hintFacelets = false;
  export let drag = false;
  let twistyDiv: HTMLDivElement
  
  // canvas elements are undefined until load so this logic must be defined in there
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
        twistyPlayer.alg = ". . " + removePrePostAUF(alg) + " . ."
        twistyPlayer.jumpToStart()
        twistyPlayer.controller.animationController.playPause()
      }
      
      twistyPlayer.background = "none";
      twistyPlayer.experimentalSetupAnchor = "end";
      twistyPlayer.experimentalFaceletScale = 0.88; // works here but not in vanillaJS??????
      twistyPlayer.tempoScale = tempo;
      twistyPlayer.cameraLatitudeLimit = 50;
      
      twistyPlayer.visualization = imageAlg ? "experimental-2D-LL" : "3D"
      if (imageAlg) { twistyPlayer.alg = removePrePostAUF(imageAlg) }
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
      console.log(twistyPlayer.experimentalModel.twistySceneModel.stickeringMask)

      if (!imageAlg) {
        twistyPlayer.play()
        twistyPlayer.onclick = () => { twistyPlayer.controller.animationController.playPause(); }
      }
    }
  });

</script>

<div class="h-32 w-32" bind:this={twistyDiv} />

<style>
  div {
      transition: transform 0.3s ease;
  }
  div:hover {
    transform: translate(0px, -8px) scale(1.05);
  }
</style>

<!-- credit to anicolao https://github.com/cubing/cubing.js/issues/223#issuecomment-1249980565 -->
<script lang="ts">
  import type { Alg } from "cubing/dist/types/alg";
  import { TwistyPlayer } from "cubing/twisty";
  import { getContext, onMount } from "svelte";
  import type { IData } from "../scripts/types";
  import { DefaultData } from "../scripts/types";

  let data: IData = getContext('data')
  let stage: string = data.twistyplayerparams?.stage || DefaultData.twistyplayerparams.stage;
  let rot: string = data.twistyplayerparams?.rot || DefaultData.twistyplayerparams.rot;
  let cameraX: number = data.twistyplayerparams?.cameraX || DefaultData.twistyplayerparams.cameraX;
  let cameraY: number = data.twistyplayerparams?.cameraY || DefaultData.twistyplayerparams.cameraY;
  let size: number = getContext('size');

  let setAlg = (alg: string) => {
    twistyPlayer.alg = ". . " + removePrePostAUF(alg) + " . ."
    twistyPlayer.jumpToStart()
  }
  export let activeAlg: string
  $: {
    setAlg(activeAlg)
    twistyPlayer.controller.animationController.playPause()
  }

  // export let toggle: boolean

  const twistyPlayer: TwistyPlayer = new TwistyPlayer();
  export let controlPanel = "none";
  export let scramble = "";
  export let backView = false;
  export let hintFacelets = false;
  export let drag = false;

  let twistyDiv: HTMLDivElement

  const removePrePostAUF = (a: string): string => {
    // remove brackets and replace with a pause after
    return a.replace(/\[(.*)\]/, '$1 . ')
  }

  onMount(async () => {
    if (twistyDiv) {
      twistyPlayer.background = "none";
      twistyPlayer.experimentalSetupAnchor = "end";
      twistyPlayer.experimentalFaceletScale = 0.88; // works here but not in vanillaJS??????
      twistyPlayer.tempoScale = 4;

      twistyPlayer.style.height = `${size}px`;
      twistyPlayer.style.width = `${size}px`;
      twistyPlayer.experimentalStickering = stage;
      twistyPlayer.cameraLongitude = cameraX
      twistyPlayer.cameraLatitude = cameraY
      
      twistyPlayer.experimentalDragInput = drag ? "auto" : "none";
      controlPanel === "none" && (twistyPlayer.controlPanel = "none");      
      twistyPlayer.experimentalSetupAlg = scramble + " " + rot;
      twistyPlayer.backView = backView ? "top-right" : "none";
      twistyPlayer.hintFacelets = hintFacelets ? "auto" : "none";
      
      twistyDiv.appendChild(twistyPlayer);
      twistyPlayer.play()
      twistyPlayer.onclick = () => { twistyPlayer.controller.animationController.playPause(); }
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

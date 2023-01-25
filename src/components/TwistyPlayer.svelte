<!-- credit to anicolao https://github.com/cubing/cubing.js/issues/223#issuecomment-1249980565 -->
<script lang="ts">
  import type { Alg } from "cubing/dist/types/alg";
  import { TwistyPlayer } from "cubing/twisty";
  import { onMount } from "svelte";

  const twistyPlayer: TwistyPlayer = new TwistyPlayer();
  export let controlPanel = "none";
  export let scramble = "";
  export let alg: Alg | string = "";
  export let backView: Boolean = false;
  export let hintFacelets: Boolean = false;
  export let size = 128;
  export let drag = true;
  export let stage = "full";
  let twistyDiv: HTMLDivElement

  onMount(async () => {
    if (twistyDiv) {
      twistyPlayer.background = "none";
      twistyPlayer.visualization = "PG3D";
      controlPanel === "none" && (twistyPlayer.controlPanel = "none");
      const model = twistyPlayer.experimentalModel;
      twistyPlayer.experimentalSetupAlg = scramble;
      twistyPlayer.experimentalSetupAnchor = "end";
      twistyPlayer.experimentalDragInput = drag ? "auto" : "none";
      twistyPlayer.experimentalFaceletScale = 0.95; // works here but not in vanillaJS??????
      twistyPlayer.alg = alg;
      twistyPlayer.tempoScale = 4;
      twistyPlayer.backView = backView ? "top-right" : "none";
      twistyPlayer.hintFacelets = hintFacelets ? "auto" : "none";
      twistyPlayer.style.height = `${size}px`;
      twistyPlayer.style.width = `${size}px`;
      twistyPlayer.experimentalStickering = stage.toUpperCase();
      twistyPlayer.onclick = () => twistyPlayer.play();
      twistyDiv.appendChild(twistyPlayer);
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

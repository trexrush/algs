<!-- credit to anicolao https://github.com/cubing/cubing.js/issues/223#issuecomment-1249980565 -->
<script lang="ts">
  import { TwistyPlayer } from "cubing/twisty";
  import { onMount } from "svelte";
  import { convert4x4Notation, expandAlgWithTriggers } from "../scripts/alg";
  import type { IOptions, twistyPuzzleType } from "../scripts/types";
  import { DefaultOptions } from "../scripts/types";
  import { puzzleMapping } from "../scripts/alg";

  const FIXED_SIZE_TEMP = 120
  export let options: IOptions
  export let isLefty: boolean = false
  let puzzle: twistyPuzzleType = puzzleMapping[options.puzzle]?.type || DefaultOptions.puzzle
  let puzzleChirality: twistyPuzzleType = options.puzzle == puzzle ? puzzle : options.puzzle  // bit of a hack

  export let setup = "";
  export let backView = false;
  export let hintFacelets = false;
  export let drag = false;
  let twistyDiv: HTMLDivElement
  
  const setAlg = (alg: string) => {
    twistyPlayer.cameraLongitude = isLefty ? -options.twistyplayerparams!.cameraX! : options.twistyplayerparams!.cameraX!
    twistyPlayer.alg = ". . " + expandAlgWithTriggers(alg, puzzleChirality) + " . ."
    // temp hack for 4x4
    if (puzzle == '4x4x4') twistyPlayer.alg = ". . " + convert4x4Notation(expandAlgWithTriggers(alg, puzzleChirality) + " . .", 'cubingjs')
    twistyPlayer.jumpToStart()
    twistyPlayer.controller.animationController.playPause()
  }
  
  export let imageAlg: string | null = null
  export let activeAlg: string | null = null

  $: {
    if (!imageAlg && activeAlg) {
      setAlg(activeAlg)
    }
  }

  const twistyPlayer: TwistyPlayer = new TwistyPlayer({
    experimentalSetupAlg: setup + " " + options.twistyplayerparams!.rot!,
    experimentalSetupAnchor: "end",
    puzzle: options.puzzle,
    visualization: imageAlg ? "experimental-2D-LL" : "3D",
    hintFacelets: hintFacelets ? "auto" : "none",
    experimentalStickering: options.twistyplayerparams!.stage!,
    background: "none",
    controlPanel: "none",
    backView: backView ? "top-right" : "none",
    experimentalDragInput: drag ? "auto" : "none",
    cameraLatitude: options.twistyplayerparams!.cameraY!,
    cameraLongitude: isLefty ? -options.twistyplayerparams!.cameraX! : options.twistyplayerparams!.cameraX!,
    cameraDistance: puzzle == 'megaminx' ? 5.5 : 5,
    cameraLatitudeLimit: 50,
    tempoScale: options.twistyplayerparams!.tempo!,
  });

  if (imageAlg) { twistyPlayer.alg = expandAlgWithTriggers(imageAlg, puzzleChirality) }
  twistyPlayer.experimentalFaceletScale = 0.88, // works here but not in vanillaJS??????
  twistyPlayer.style.height = `${FIXED_SIZE_TEMP}px`
  twistyPlayer.style.width = `${FIXED_SIZE_TEMP}px`

  onMount(async () => {
    twistyDiv.appendChild(twistyPlayer);

    if (!imageAlg) {
      twistyPlayer.play()
      twistyPlayer.onclick = () => { twistyPlayer.controller.animationController.playPause(); }
    }
  });

</script>

<div class="h-full w-full" bind:this={twistyDiv} />

<style>
</style>

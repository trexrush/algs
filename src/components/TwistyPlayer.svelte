<!-- credit to anicolao https://github.com/cubing/cubing.js/issues/223#issuecomment-1249980565 -->
<script lang="ts">
  import { TwistyPlayer } from "cubing/twisty";
  import { onMount } from "svelte";
  import { expandAlgWithTriggers } from "../scripts/alg";
  import type { IOptions, twistyPuzzleType } from "../scripts/types";
  import { DefaultOptions } from "../scripts/types";
  import { puzzleDefinitionMapping } from "../scripts/algConstants";

  export let options: IOptions
  export let size: number
  export let isLefty: boolean = false
  let puzzle: twistyPuzzleType = puzzleDefinitionMapping[options.puzzle]?.type || DefaultOptions.puzzle
  // bit of a hack
  let puzzleChirality: twistyPuzzleType = options.puzzle == puzzle ? puzzle : options.puzzle

  //TODO: export a twisty player (so make this a wrapper you import into AlgCard and AlgImage (with alg logic in there) rather than an element
  
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
        twistyPlayer.style.height = `${size}px`
        twistyPlayer.style.width = `${size}px`

    setAlg = (alg: string) => {
        twistyPlayer.alg = ". . " + expandAlgWithTriggers(alg, puzzleChirality) + " . ."
        twistyPlayer.jumpToStart()
        twistyPlayer.controller.animationController.playPause()
    }
      
      twistyDiv.appendChild(twistyPlayer);
      // console.log(twistyPlayer.experimentalModel.twistySceneModel.stickeringMask)

      if (!imageAlg) {
        twistyPlayer.play()
        twistyPlayer.onclick = () => { twistyPlayer.controller.animationController.playPause(); }
    }
  });

</script>

<div class="h-full w-full" bind:this={twistyDiv} />

<style>
</style>

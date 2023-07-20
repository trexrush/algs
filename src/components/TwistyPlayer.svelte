<!-- credit to anicolao https://github.com/cubing/cubing.js/issues/223#issuecomment-1249980565 -->
<script lang="ts">
  import { TwistyPlayer } from "cubing/twisty";
  import type { IAlgorithmClass } from "../scripts/alg";
  import type { IOptions } from "../scripts/types";

  export let algorithm: IAlgorithmClass
  export let options: IOptions
  export let _2D = false
  
  export let drag = true;
  const FIXED_SIZE_TEMP = 120
  
  let tw: TwistyPlayer

  const setPlayer = (algObj: IAlgorithmClass, twComponent: TwistyPlayer) => {
    twComponent = new TwistyPlayer({
      puzzle: algObj.puzzle,
      // TODO: move this into a method in the algClass
      alg: (algObj.setup ? ". . " + algObj.setup : ". ") + " . " + algObj.expand() + " . .",
      experimentalSetupAlg: options.twistyplayerparams!.rot!,
      visualization: _2D ? "experimental-2D-LL" : "3D",
      experimentalStickering: options.twistyplayerparams!.stage!,
      tempoScale: options.twistyplayerparams!.tempo!,
      cameraLatitude: options.twistyplayerparams!.cameraY!,
      // TODO: same as above but just move it to another func in this file
      cameraLongitude: algObj.isLefty ? -options.twistyplayerparams!.cameraX! : options.twistyplayerparams!.cameraX!,
      cameraDistance: algObj.puzzle == 'megaminx' ? 5.5 : 5,
      experimentalDragInput: drag ? "auto" : "none",

      experimentalSetupAnchor: "end",
      hintFacelets: "none",
      background: "none",
      controlPanel: "none",
      backView: "none",
      cameraLatitudeLimit: 50,
    });

    twComponent.experimentalFaceletScale = 0.88, // works here but not in vanillaJS??????
    twComponent.style.maxHeight = `${FIXED_SIZE_TEMP}px`
    twComponent.style.maxWidth = `${FIXED_SIZE_TEMP}px`

    return twComponent
  }

  const updatePlayer = (algObj: IAlgorithmClass, twComponent: TwistyPlayer) => {
    twComponent.cameraLongitude = algObj.isLefty ? -options.twistyplayerparams!.cameraX! : options.twistyplayerparams!.cameraX!
    twComponent.alg = (algObj.setup ? ". . " + algObj.setup : ". ") + " . " + algObj.expand() + " . ."

    return twComponent
  }

  const twisty = (node: HTMLElement, alg: IAlgorithmClass) => {
    (async () => {
      tw = setPlayer(alg, tw)
      node.appendChild(tw);
      if (!_2D) {
        tw.play()
        tw.onclick = () => { tw.controller.animationController.playPause(); }
      }
    })()
    
    return {
      update(){
        tw = updatePlayer(algorithm, tw)
        tw.jumpToStart()
        tw.controller.animationController.playPause()
      },
      destroy(){},
    }
  };

</script>

<div use:twisty={algorithm}/>

<style>
</style>

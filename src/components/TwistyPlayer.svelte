<!-- credit to anicolao https://github.com/cubing/cubing.js/issues/223#issuecomment-1249980565 -->
<script lang="ts">
  import { TwistyPlayer } from "cubing/twisty";
  import type { IAlgorithmClass } from "../scripts/alg/algorithm";
  import type { IConfig } from "../scripts/config";

  export let algorithm: IAlgorithmClass
  export let config: IConfig
  export let _2D = false
  
  export let drag = true;
  
  let tw: TwistyPlayer
  $: displayAlg = (algorithm.setup ? ". . " + algorithm.setup : ". ") + " . " + algorithm.notation('cubingjs') + " . ."
  $: puzzleAngle = algorithm.isLefty ? -config.twistyPlayerConfig.cameraX : config.twistyPlayerConfig.cameraX

  let x: number
  let y: number

  const updateHeight = (twP: TwistyPlayer, size: number) => {
    twP.style.height = `${size}px`
    twP.style.width = `${size}px`
    return twP
  }

  $: x != null && (() => {
    const size = Math.min(x, y)
    updateHeight(tw, size)
  })()

  const setPlayer = (algObj: IAlgorithmClass, twComponent: TwistyPlayer) => {
    twComponent = new TwistyPlayer({
      puzzle: algObj.puzzle,
      alg: displayAlg,
      experimentalSetupAlg: config.twistyPlayerConfig.rot,
      visualization: _2D ? "experimental-2D-LL" : "3D",
      experimentalStickering: config.twistyPlayerConfig.stage,
      tempoScale: config.twistyPlayerConfig.tempo,
      cameraLatitude: config.twistyPlayerConfig.cameraY,
      cameraLongitude: puzzleAngle,
      cameraDistance: algObj.puzzle == 'megaminx' ? 5.5 : 5,
      experimentalDragInput: drag ? "auto" : "none",

      experimentalSetupAnchor: "end",
      hintFacelets: "none",
      background: "none",
      controlPanel: "none",
      backView: "none",
      cameraLatitudeLimit: 50,
    });

    twComponent.experimentalFaceletScale = 0.88
    // twComponent.experimentalModel.anchorTransformation = { }
    return twComponent
  }

  const updatePlayer = (twComponent: TwistyPlayer) => {
    twComponent.cameraLongitude = puzzleAngle
    twComponent.alg = displayAlg

    return twComponent
  }

  const twisty = (node: HTMLElement, alg: IAlgorithmClass) => {
    (async () => {
      tw = setPlayer(alg, tw)
      tw = updateHeight(tw, x)

      node.appendChild(tw);
      if (!_2D) {
        tw.play()
        tw.onclick = () => { tw.controller.animationController.playPause(); }
      }
    })()
    
    return {
      update(){
        tw = updatePlayer(tw)
        tw.jumpToStart()
        tw.controller.animationController.playPause()
      },
      destroy(){},
    }
  };

</script>

<div use:twisty={algorithm} bind:clientHeight={y} bind:clientWidth={x}/>

<style>
</style>

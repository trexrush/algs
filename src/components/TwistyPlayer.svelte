<!-- credit to anicolao https://github.com/cubing/cubing.js/issues/223#issuecomment-1249980565 -->
<script lang="ts">
  import { TwistyPlayer } from "cubing/twisty";
  import type { IAlgorithmClass } from "../scripts/alg/algorithm";
  import type { IConfig } from "../scripts/config";

  export let algorithm: IAlgorithmClass
  export let config: IConfig
  export let _2D = false
  
  export let drag = false;
  
  let tw: TwistyPlayer
  $: displayAlg = (algorithm.setup ? ". . " + algorithm.setup : ". ") + " . " + algorithm.notation('cubingjs') + " . ."
  $: puzzleAngle = algorithm.isLefty ? -config.twistyPlayerConfig.cameraX : config.twistyPlayerConfig.cameraX

  let x: number
  let y: number

  const updateHeight = (twComp: TwistyPlayer, size: number) => {
    if (Number.isNaN(size) || size == 0) { // fallback needed in case reactive statement doesnt trigger
      twComp.style.height = `120px`
      twComp.style.width = `120px`
    } else { 
      twComp.style.height = `${size}px`
      twComp.style.width = `${size}px`
    }
    twComp.style.maxHeight = `100%`
    twComp.style.maxWidth = `100%`

    return twComp
  }

  $: x != null && x != undefined && (() => {
    console.log("X IS DEFINED", tw.style.height, x, y)
    const size = Math.min(x, y)
    tw = updateHeight(tw, size)
    console.log("SIZE IS SET", tw.style.height, x, y)
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
    tw = setPlayer(alg, tw)
    tw = updateHeight(tw, Math.min(x, y))
    console.log("SET", tw.style.height, x, y)
    node.appendChild(tw);
    if (!_2D) {
      tw.play()
      tw.onclick = () => { tw.controller.animationController.playPause(); }
    }
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

<div class="w-full h-full" use:twisty={algorithm} bind:clientHeight={y} bind:clientWidth={x}/>

<style>
</style>

<!-- credit to anicolao https://github.com/cubing/cubing.js/issues/223#issuecomment-1249980565 -->
<script lang="ts">
  import { TwistyPlayer } from "cubing/twisty";
  import type { IAlgorithmClass } from "../scripts/alg";
  import type { IOptions } from "../scripts/types";

  export let algorithm: IAlgorithmClass
  export let options: IOptions
  export let _2D = false
  
  export let drag = true;
  
  let tw: TwistyPlayer
  $: displayAlg = (algorithm.setup ? ". . " + algorithm.setup : ". ") + " . " + algorithm.notation('cubingjs') + " . ."
  $: puzzleAngle = algorithm.isLefty ? -options.twistyplayerparams!.cameraX! : options.twistyplayerparams!.cameraX!

  let x: number
  let y: number
  let size: number

  const updateHeight = (size: number) => {
    tw.style.height = `${size}px`
    tw.style.width = `${size}px`
  }

  $: size = Math.min(x, y) //, console.log("SIZE IN REACTIVE STATEMENT ", size, algorithm.alg)
  $: x != null && updateHeight(size) //, console.log("SIZE IN REACTIVE STATEMENT ", size, algorithm.alg)

  const setPlayer = (algObj: IAlgorithmClass, twComponent: TwistyPlayer) => {
    twComponent = new TwistyPlayer({
      puzzle: algObj.puzzle,
      alg: displayAlg,
      experimentalSetupAlg: options.twistyplayerparams!.rot!,
      visualization: _2D ? "experimental-2D-LL" : "3D",
      experimentalStickering: options.twistyplayerparams!.stage!,
      tempoScale: options.twistyplayerparams!.tempo!,
      cameraLatitude: options.twistyplayerparams!.cameraY!,
      // TODO: same as above but just move it to another func in this file
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
    twComponent.style.height = `${size}px`
    twComponent.style.width = `${size}px`

    // twComponent.experimentalFaceletScale = 0.88
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

      // console.log(size)

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

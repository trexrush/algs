<script lang="ts">
  import { styles } from '../scripts/styles';
  import AlgVis from './AlgVis.svelte';

  export let imgparams = {
    stage: "fl",
    view: "plan",
    rot: "",
    size: 128,
  }
  export let twistyplayerparams = {
    stage: 'full',
  }
  export let alg: string = "";

  // styling of card
  export let fontSize: string = '36px'

</script>

<div>
  <p use:styles={{ fontSize: fontSize }} class=" m-1 p-1 w-full h-[2em] text-right pr-5 rounded-2xl bg-stone-200">{alg}</p>
 <AlgVis {alg} {imgparams} {twistyplayerparams} ></AlgVis>
</div>

<style>
  p {
    font-size: var(--fontSize);
    box-shadow: 2px 2px rgb(41 37 36);;
  }
  div {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
</style>

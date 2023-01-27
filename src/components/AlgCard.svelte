<script lang="ts">
  import { writable } from "svelte/store";
  import { onMount } from "svelte";
  import type { ICase, IData } from "../scripts/types";
  import AlgVis from "./AlgVis.svelte";

  export let caso: ICase;
  export let data: IData
  export let size: number

  const activeAlg = writable(caso.algs[0])
  let setActive = (alg: string) => {
      activeAlg.set(alg)
  }

  let elementList: HTMLElement[] = []
  let activeElement: number = 0

  let changeActiveElement = (algElementIndex: number, alg: string) => {
    // prevent unnecessary dom updates
    if (elementList.length == 1) {
      return
    }

    activeElement = algElementIndex

    setActive(alg)
  }

  onMount(async () => {
    activeElement = 0
  })
</script>
<!-- svelte-ignore a11y-click-events-have-key-events -->

<div class="card m-4 ml-0 w-11/12 flex flex-row relative items-center justify-center">
  <div class="casename absolute top-0 left-0 px-2 pb-1 rounded-sm"><b>{caso.name}</b></div>
  <div class="algs flex flex-col m-1 p-1 w-full items-end pr-5 mr-7 rounded-md justify-center">
    {#each caso.algs as alg, i}
      <p class="{activeElement == i ? 'selected text-stone-600' : 'unselected text-stone-400'} hover:text-stone-900 cursor-pointer overflow-x-visible w-fit" on:click={() => (changeActiveElement(i, alg))} bind:this={elementList[i]}>
        {alg}
      </p>
    {/each}
  </div>
  <AlgVis activeAlg={$activeAlg} imageAlg={caso.algs[0]} {data} {size}/>
</div>

<style>
  p {
    font-size: 24px;
    transition: all .2s;
  }
  .algs {
    /* box-shadow: 2px 2px rgb(41 37 36); */
    height: 100px;
    background-color: rgba(28, 25, 23, 0.07);
  }
  .selected {
    font-size: 23px;
  }  
  .unselected {
    font-size: 20px;
  }
  p:hover {
    font-size: 25px;
  }
  .casename {
    /* background-color: rgba(28, 25, 23, 0.05); */
    font-size: 22px;
  }
</style>

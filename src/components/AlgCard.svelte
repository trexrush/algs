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

<div class="card m-4 ml-0 mt-0 pt-4 flex flex-row items-center justify-center">
  <AlgVis activeAlg={$activeAlg} imageAlg={caso.algs[0]} {data} {size}/>
  <div class="algs flex flex-col relative m-1 p-1 w-full items-start pl-5 ml-7 rounded-md justify-center shadow-lg">
    {#if caso.comment}
    <div class="comment absolute text-right w-5/6 top-0 right-2 text-stone-400"><b>{caso.comment}</b></div>
    {/if}
    <div class="casename absolute top-0 left-0 px-2 pb-1 rounded-sm"><b>{caso.name}</b></div>
    {#each caso.algs as alg, i}
      <p class="alg {activeElement == i ? 'sm:selected-m selected text-stone-600' : 'unselected text-stone-400'} hover:text-stone-900 cursor-pointer overflow-x-visible w-fit" on:click={() => (changeActiveElement(i, alg))} bind:this={elementList[i]}>
        {alg}
      </p>
    {/each}
  </div>
</div>

<style>
  .alg {
    transition: all .2s;
  }
  .alg:hover, .alg:active {
    font-size: 22px;
  }
  .algs {
    /* box-shadow: 2px 2px rgb(41 37 36); */
    height: 6em;
    background-color: rgba(28, 25, 23, 0.07);
  }
  .selected {
    font-size: 20px;
    font-weight: bold;
  }
  .unselected {
    font-size: 17.5px;
  }  
  .card {
    width: 95%;
  }
  .casename {
    transform: translateY(-1.5em);
    font-size: 20px;
  }
  .comment {
    transform: translateY(95px);
    color: rgba(28, 25, 23, 0.2);
    font-size: 13px;
  }
  @media (max-width: 1000px) {
    .alg:hover, .alg:active {
      font-size: 2.2vw;
    }
    .selected {
      font-size: 2vw;
    }  
    .unselected {
      font-size: 1.75vw;
    }
    .casename {
      /* background-color: rgba(28, 25, 23, 0.05); */
      font-size: 2vw;
    }
    .comment {
      font-size: 1.3vw;
    }
  }
</style>

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

<div class="card m-4 ml-0 mt-0 pt-4 flex flex-row relative items-center justify-center">
  <div class="casename absolute top-0 left-0 px-2 pb-1 rounded-sm"><b>{caso.name}</b></div>
  {#if caso.comment}
    <div class="comment absolute bottom-0 right-40 text-right text-stone-400">{caso.comment}</div>
  {/if}
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
  p:hover {
    font-size: 1.3vw;
  }
  .algs {
    /* box-shadow: 2px 2px rgb(41 37 36); */
    height: 6em;
    background-color: rgba(28, 25, 23, 0.07);
  }
  .selected {
    font-size: 1.2vw;
    font-weight: bold;
  }  
  .unselected {
    font-size: 1.1vw;
  }
  .card {
    width: 95%;
  }
  .casename {
    /* background-color: rgba(28, 25, 23, 0.05); */
    font-size: 22px;
  }
  .comment {
    transform: translateY(8px);
    color: rgba(28, 25, 23, 0.4);
    font-size: 1vw;
  }
</style>

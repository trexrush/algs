<script lang="ts">
  import { writable } from "svelte/store";
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
</script>
<!-- svelte-ignore a11y-click-events-have-key-events -->

<div class="w-[95%] m-4 ml-0 mt-0 pt-4 flex flex-row items-center justify-center">
  <AlgVis activeAlg={$activeAlg} imageAlg={caso.algs[0]} {data} {size}/>
  <div class="h-[6em] bg-stone-900/[.07] flex flex-col relative m-1 p-1 w-full items-start pl-5 ml-7 rounded-md justify-center shadow-lg">
    {#if caso.comment}
    <div class="text-stone-900/[.3] text-[15px] translate-y-[100px] max-[1000px]:text-[1.5vw] absolute text-right w-5/6 top-0 right-2"><b>{caso.comment}</b></div>
    {/if}
    <div class="max-[1000px]:text-[2vw] text-[20px] translate-y-[-1.5em] absolute top-0 left-0 px-2 pb-1 rounded-sm"><b>{caso.name}</b></div>
    {#each caso.algs as alg, i}
      <p class="hover:text-stone-900 hover:text-[22px] max-[1000px]:hover:text-[2.2vw] {activeElement == i ? 'text-[20px] max-[1000px]:text-[2vw] font-bold text-stone-600' : 'text-[17.5px] max-[1000px]:text-[1.75vw] text-stone-400'} transition-all cursor-pointer overflow-x-visible w-fit" on:click={() => (changeActiveElement(i, alg))} bind:this={elementList[i]}>
        {alg}
      </p>
    {/each}
  </div>
</div>

<style>
</style>

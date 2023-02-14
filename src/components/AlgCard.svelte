<script lang="ts">
  import { writable } from "svelte/store";
  import type { ICase, IData } from "../scripts/types";
  import AlgVis from "./AlgVis.svelte";

  export let caso: ICase;
  export let data: IData
  export let size: number
  export let setName: string

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
<!-- svelte-ignore a11y-missing-content -->

<div id={setName + "-" + caso.name} class="w-[95%] m-4 ml-0 mt-0 pt-4 flex flex-row items-center justify-center">
  <AlgVis activeAlg={$activeAlg} imageAlg={caso.algs[0]} {data} {size}/>
  <div class="h-[6em] bg-stone-900/[.07] dark:bg-stone-50/[.07] flex flex-col relative m-1 p-2 w-full items-start ml-5 rounded-md justify-center shadow-lg">
    <a href="#{setName}-{caso.name}" class="text-[3.2vw] sm:text-[20px] translate-y-[-1.5em] absolute top-0 left-0 px-2 pb-1 rounded-sm"><b>{caso.name}</b></a>
    {#if caso.comment}
    <div class="text-[2.3vw] md:text-[16px] leading-none text-stone-900/[.35] dark:text-stone-50/[.2] translate-y-[100px] absolute text-right w-5/6 top-0 right-2"><b>{caso.comment}</b></div>
    {/if}
    {#each caso.algs as alg, i}
      <p class="{activeElement == i ? 'text-[3.2vw] sm:text-[20px] font-bold text-stone-600 dark:text-stone-400' : 'text-[2.8vw] sm:text-[17.5px] text-stone-400 dark:text-stone-500'} hover:text-[3.6vw] sm:hover:text-[22px] leading-none hover:text-stone-900 dark:hover:text-stone-100 transition-all cursor-pointer overflow-x-visible w-fit" on:click={() => (changeActiveElement(i, alg))} bind:this={elementList[i]}>
        {alg}
      </p>
    {/each}
  </div>
</div>

<style>
</style>

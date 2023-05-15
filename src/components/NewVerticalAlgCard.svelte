<script lang="ts">
  import { writable } from "svelte/store";
  import type { ICaseV2, IData } from "../scripts/types";
  import AlgVis from "./AlgVis.svelte";

  export let caso: ICaseV2;
  export let data: IData
  export let size: number
  export let setName: string

  const activeAlg = writable(caso.algs[0]["alg"])
  let setActive = (alg: string) => {
      activeAlg.set(alg)
  }

  let elementList: HTMLElement[] = []
  let activeElement: number = 0

  let changeActiveElement = (algElementIndex: number, setup: string, alg: string) => {
    // prevent unnecessary dom updates
    if (elementList.length == 1) {
      return
    }

    activeElement = algElementIndex

    setActive(setup + " " + alg)
  }
</script>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-missing-content -->

<div id={setName + "-" + caso.name} class="w-[95%] m-4 ml-0 mt-0 pt-4 flex flex-row items-center justify-center">
  <AlgVis activeAlg={$activeAlg} imageAlg={caso.algs[0]["alg"]} {data} {size}/>
  <div class="min-h-[6em] h-fit bg-stone-900/[.07] dark:bg-stone-50/[.07] flex flex-col relative m-1 p-2 w-full items-start ml-5 rounded-md justify-center shadow-lg">
    <a href="#{setName}-{caso.name}" class="text-[3.2vw] sm:text-[20px] translate-y-[-1.5em] absolute top-0 left-0 px-2 pb-1 rounded-sm"><b>{caso.name}</b></a>
    {#if caso.note}
    <div class="text-[2.3vw] md:text-[16px] leading-none text-stone-900/[.35] dark:text-stone-50/[.2] translate-y-[100px] absolute text-right w-5/6 top-0 right-2"><b>{caso.note}</b></div>
    {/if}
    {#each caso.algs as alg, i}
      <div class="leading-none w-full cursor-pointer overflow-x-visible flex justify-between">
        <span class="{activeElement == i ? 'w-fit text-[3.2vw] sm:text-[20px] font-bold text-stone-600 dark:text-stone-400' : 'text-[2.8vw] sm:text-[17.5px] text-stone-400 dark:text-stone-500'} hover:text-[3.6vw] sm:hover:text-[22px] hover:text-stone-900 dark:hover:text-stone-100 transition-all" on:click={() => (changeActiveElement(i, alg.setup || "", alg.alg))} bind:this={elementList[i]}>{alg.alg}</span>
        {#if alg.tags}{#each alg.tags as tag}
          <span class="bg-green-500/[.4] rounded-sm text-sm m-1 px-1">{tag}</span>
        {/each}{/if}
      </div>
    {/each}
  </div>
</div>

<style>
</style>

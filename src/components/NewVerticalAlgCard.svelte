<script lang="ts">
  import { type Writable, writable } from "svelte/store";
  import type { IAlgV2, ICaseV2, IOptions } from "../scripts/types";
  import AlgVisuals from "./AlgVisuals.svelte";
  import { expandAlgWithTriggers } from "../scripts/alg";
  import { puzzleDefinitionMapping } from "../scripts/algConstants";

  export let caso: ICaseV2;
  export let options: IOptions
  export let size: number
  export let setName: string

  const activeAlg: Writable<IAlgV2> = writable(caso.algs[0])
  let setActive = (alg: IAlgV2) => {
      activeAlg.set(alg)
  }
  let toggleDisplay: () => void
  let toggled: boolean

  let elementList: HTMLElement[] = []
  let activeElement: number = 0

  let changeActiveElement = (algElementIndex: number, alg: IAlgV2) => {
    // prevent unnecessary dom updates
    if (elementList.length == 1) {
      return
    }
    activeElement = algElementIndex
    setActive(alg)
  }

  let algWithSetup = (alg:IAlgV2) => {
    return alg.setup ? alg.setup + " . . " + alg.alg : alg.alg
  }

  let puzzle = puzzleDefinitionMapping[options.puzzle]!.type
</script>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-missing-content -->

<div id={setName + "-" + caso.name} class="w-[95%] m-4 ml-0 mt-0 pt-4 flex flex-row items-center justify-center">
  <AlgVisuals activeAlg={algWithSetup($activeAlg)} imageAlg={caso.algs[0]["alg"]} options={options} size={size} bind:toggleDisplay={toggleDisplay} bind:isAlgVisDisplayed={toggled}/>
  <div class="flex flex-col justify-start items-start relative m-1 p-2 w-full min-h-[6em] h-fit ml-5 rounded-md 
  bg-stone-900/[.07] dark:bg-stone-50/[.07] shadow-lg hover:shadow-2xl hover:-translate-y-[1px]">
    <div class="absolute top-0 right-0 w-full flex justify-between items-center gap-1 px-2 pb-1 translate-y-[-1.7em]">
      <div class="text-stone-500 text-[2.7vw] sm:text-[15px] flex gap-2 items-baseline">
        <a href="#{setName}-{caso.name}" class="dark:text-white text-[3.2vw] sm:text-[20px]">
          <b>{caso.name}</b>
        </a>
        {#if caso.altNames?.length}<span>AKA</span>{#each caso.altNames as altName}
        <span class="">{altName}</span>
        {/each}{/if}
      </div>
      <!-- <span class="my-[2px] px-2 py-[1px] text-sm font-light bg-stone-50/[.15] rounded-lg shadow-md cursor-pointer
      bg-gradient-to-r from-red-600/40 to-lime-600/40
      transition-all hover:saturate-150 hover:brightness-125"
      on:click={() => { /* TODO: mirror algs for this alg */ }} title="Display the mirror cases of algs"><b>{"Mirror Alg"}</b></span> -->
    </div> 
    {#if caso.note}
    <div class="absolute text-[2.3vw] top-0 right-2 w-5/6
    text-right md:text-[16px] leading-none text-stone-900/[.35] dark:text-stone-50/[.2] translate-y-[100px]">
      <b>{caso.note}</b>
    </div>
    {/if}
    {#each caso.algs as alg, i}
    <div class="flex items-center gap-1 relative w-full leading-none overflow-x-visible">
      <span class="my-[2px] p-[1px] px-2 text-sm bg-stone-50/[.15] text-red-300 rounded-md shadow-md cursor-pointer"
      on:click={() => { changeActiveElement(i, alg); if (!toggled) (toggleDisplay()) }} title="View Alg">▶</span>
      <!-- <span class="my-[2px] p-[1px] px-1 text-sm bg-stone-50/[.15] rounded-md shadow-md cursor-pointer"
      on:click={() => { /* expandAlgWithTriggers(alg.alg, puzzle) doesnt work, need to have state for displayed alg (doesnt affect activeAlg) */ }} title="Expand Alg">⟰</span> -->
      <!-- TODO: add dialog with the expanded alg on hover, also process algorithm so you can style each trigger individually -->
      <span class="{activeElement == i ? 'text-[2.9vw] sm:text-[18.5px] font-bold bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500' : 'text-[2.8vw] sm:text-[17.5px] text-stone-400 dark:text-stone-500'}
      hover:text-[2.95vw] sm:hover:text-[19px] hover:text-stone-900 dark:hover:text-stone-100 transition-all cursor-pointer
      {alg.tags?.includes("Lefty") ? "dark:text-green-200/40" : "dark:text-red-200/40" }" 
      on:click={() => (changeActiveElement(i, alg))} bind:this={elementList[i]}> <!-- title={ expandAlgWithTriggers(alg.alg, puzzle) } -->
      {alg.alg}
    </span>
      <span class="my-[2px] p-[1px] text-sm bg-stone-50/[.15] rounded-md shadow-md cursor-pointer"
      on:click={() => { navigator.clipboard.writeText(alg.alg); changeActiveElement(i, alg) }} title="Copy to Clipboard">🔗</span>
      <hr class="flex-grow border-s-4 border-stone-800/70"/>
      <span class="flex m-1 justify-end items-center gap-1 cursor-default text-stone-500">
        {#if alg.tags?.filter((t) => t != "Lefty").length }<span>Tags:</span>{#each alg.tags as tag}
        {#if tag != 'Lefty'}<span class="px-1 bg-yellow-500/[.2] rounded-md md:text-sm text-xs text-white">{tag}</span>{/if}
        {/each}{/if}
      </span>
    </div>
    {/each}
  </div>
</div>

<style>
</style>

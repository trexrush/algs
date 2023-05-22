<script lang="ts">
  import { type Writable, writable } from "svelte/store";
  import type { IAlgV2, ICaseV2, IOptions } from "../scripts/types";
  import AlgVisuals from "./AlgVisuals.svelte";
  import { puzzleDefinitionMapping } from "../scripts/algConstants";
  import NewAlgListing from "./NewAlgListing.svelte";
  import { mirrorAlg, mirrorAlgOverrideTriggers } from "../scripts/alg";

  export let size: number
  export let setName: string
  
  // always "non-mirrored"
  export let caso: ICaseV2;
  export let options: IOptions
  
  // changes based on if mirrored or not
  const isMirrored: Writable<boolean> = writable(false)
  const activeAlg: Writable<IAlgV2> = writable(structuredClone(caso.algs[0]))
  let pzl = puzzleDefinitionMapping[options.puzzle]!.standard

  $: ((mirror: boolean) => {
    $activeAlg = structuredClone(caso.algs[activeElement])
    $activeAlg.alg = mirror ? mirrorAlgOverrideTriggers($activeAlg.alg, pzl) : caso.algs[activeElement].alg
    pzl = mirror ? puzzleDefinitionMapping[pzl]!.mirror : puzzleDefinitionMapping[options.puzzle]!.standard
    if ($activeAlg.setup) $activeAlg.setup = mirror ? mirrorAlg($activeAlg.setup, pzl) : caso.algs[activeElement].setup
    $activeAlg.isLefty = mirror ? !caso.algs[activeElement].isLefty : caso.algs[activeElement].isLefty
  })($isMirrored)

  let elementList: NewAlgListing[] = []
  let activeElement: number = 0
  let changeActiveElement = (algElementIndex: number) => {
    // prevent unnecessary dom updatesr
    if (elementList.length == 1) {
      return
    }
    activeElement = algElementIndex
    activeAlg.set(caso.algs[algElementIndex])
  }

  let toggleDisplay: () => void
  let toggled: boolean

  let algWithSetup = (alg:IAlgV2) => {
    return alg.setup ? alg.setup + " . . " + alg.alg : alg.alg
  }

</script>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-missing-content -->

<div id={setName + "-" + caso.name} class="w-[95%] m-4 ml-0 mt-0 pt-4 flex flex-row items-center justify-center">
  <AlgVisuals activeAlg={algWithSetup($activeAlg)} imageAlg={caso.algs[0]["alg"]} options={options} size={size} isLefty={$activeAlg.isLefty} bind:toggleDisplay={toggleDisplay} bind:isAlgVisDisplayed={toggled}/>
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
      <span class="my-[2px] px-2 py-[1px] sm:text-sm text-[2.2vw] font-light bg-stone-50/[.15] rounded-lg shadow-md cursor-pointer select-none
      bg-gradient-to-r from-red-600/40 to-lime-600/40
      transition-all hover:saturate-150 hover:brightness-125"
      on:click={() => { isMirrored.set(!$isMirrored) }} title="Display the mirror cases of algs"><b>{"Mirror algs for case"}</b></span>
    </div> 
    {#if caso.note}
    <div class="absolute text-[2.3vw] top-0 right-2 w-5/6
    text-right md:text-[16px] leading-none text-stone-900/[.35] dark:text-stone-50/[.2] translate-y-[100px]">
      <b>{caso.note}</b>
    </div>
    {/if}
    {#each caso.algs as eachAlg, i}
    <div class="flex items-center gap-1 relative w-full leading-none overflow-x-visible">
      <span class="my-[2px] sm:p-[1px] sm:px-2 p-1 px-1 sm:text-sm text-[1.5vw]
      bg-stone-50/[.15] hover:bg-stone-50/[.3] transition-colors duration-75 text-red-300 rounded-md shadow-md cursor-pointer"
      on:click={() => { changeActiveElement(i); if (!toggled) (toggleDisplay()) }} title="View Alg">
        ▶
      </span>
      <div on:click={() => changeActiveElement(i)}>
        <NewAlgListing alg={eachAlg} isActive={activeElement == i} isLefty={eachAlg.isLefty} isMirrored={$isMirrored} pzl={pzl} bind:this={elementList[i]}/>
      </div>
      <hr class="flex-grow border-s-4 border-stone-800/70"/>
      <span class="flex m-1 justify-end items-center gap-1 cursor-default text-xs text-stone-500">
        {#if eachAlg.tags }<span class="max-sm:invisible">Tags</span>{#each eachAlg.tags as tag}
        <span class="px-[.15rem] py-0 sm:px-1 bg-yellow-500/[.2] rounded-md md:text-sm text-[1.5vw] text-white">{tag}</span>
        {/each}{/if}
      </span>
    </div>
    {/each}
  </div>
</div>

<style>
</style>

<script lang="ts">
  import { algDelimiterWithTriggers, expandAlgWithTriggers, isTriggerRegex, mirrorAlg } from "../scripts/alg";
  import { puzzleDefinitionMapping } from "../scripts/algConstants";
  import type { IAlgV2, twistyPuzzleTypeWithChirality } from "../scripts/types";

  // always "non mirrored"
  export let pzl: twistyPuzzleTypeWithChirality = '3x3x3'
  export let alg: IAlgV2
  export let isLefty: boolean = false
  //TODO: move to activated on the set
  let isExpanded: boolean = true

  // either mirrored or nonmirrored
  let displayPzl = pzl //isMirrored ? puzzleDefinitionMapping[pzl]!.mirror : pzl
  let displayAlg = alg.alg //isMirrored ? mirrorAlg(expandAlgWithTriggers(alg.alg, pzl), pzl) : alg.alg
  let displayLefty = isLefty

  export let isActive: boolean
  export let isMirrored: boolean = true;
  $: {
    ((state: boolean) => {
      displayAlg = state ? mirrorAlg(expandAlgWithTriggers(alg.alg, pzl), pzl) : alg.alg
      displayPzl = state ? puzzleDefinitionMapping[pzl]!.mirror : pzl
      displayLefty = state ? !isLefty : isLefty
      // temp
      isExpandable = state ? false : expandAlgWithTriggers(alg.alg, pzl) != displayAlg
    })(isMirrored)
  }
  let isExpandable: boolean = isMirrored ? false : expandAlgWithTriggers(alg.alg, pzl) != displayAlg
  $: isExpanded = isExpandable ? false : true;

</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
{#if isExpandable}
<span class="my-[2px] p-[1px] px-1 text-sm bg-stone-50/[.15] rounded-md shadow-md cursor-pointer select-none"
on:click={() => { isExpanded = !isExpanded }} title="Expand Alg">expand</span>
{/if}
<span
  class="{isActive
    ? 'text-[2.9vw] sm:text-[18.5px] font-bold bg-clip-text text-transparent'
    : 'text-[2.8vw] sm:text-[17.5px]'}
      hover:text-[2.95vw] sm:hover:text-[19px] hover:text-stone-900 dark:hover:text-stone-100 transition-all duration-100 cursor-pointer group
      {displayLefty
    ? isActive ? 'bg-gradient-to-r from-teal-500 via-green-500 to-lime-500' : 'dark:text-lime-100/40'
    : isActive ? 'bg-gradient-to-r from-red-500 via-orange-500 to-amber-500' : 'dark:text-red-100/40'}">
  {#if !isExpanded}
    {#each displayAlg.split(algDelimiterWithTriggers) as movesOrTrigger}
      {#if movesOrTrigger.match(isTriggerRegex) != null}
        <span class="{ isActive ? 'font-extrabold' : 'font-bold'}"
        title={expandAlgWithTriggers(movesOrTrigger, displayPzl)}>
          {movesOrTrigger.replace(isTriggerRegex, '$1') + " "}
        </span>
      {:else}
        {movesOrTrigger + " "}
      {/if}
    {/each}
  {:else} 
    <span>{expandAlgWithTriggers(displayAlg, displayPzl)}</span>
  {/if}

</span>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<span class="my-[2px] p-[1px] text-[2vw] sm:text-sm bg-stone-50/[.07] rounded-md shadow-md cursor-pointer"
on:click={() => { navigator.clipboard.writeText(expandAlgWithTriggers(displayAlg, displayPzl)) }} title="Copy to Clipboard">
 <!--TODO: ^ on click animate a toast or scale up the button for a split second  -->
  🔗
</span>

<script lang="ts">
  import { algDelimiterWithTriggers, checkIfHasTriggers, expandAlgWithTriggers, isTriggerRegex, mirrorAlgOverrideTriggers } from "../scripts/alg";
  import { puzzleDefinitionMapping } from "../scripts/algConstants";
  import { type IAlg, modifiersList, type twistyPuzzleTypeWithChirality } from "../scripts/types";

  // always "non mirrored"
  export let pzl: twistyPuzzleTypeWithChirality = '3x3x3'
  export let alg: IAlg
  export let isLefty: boolean = false
  //TODO: move to activated on the set
  let isExpanded: boolean = true

  // either mirrored or nonmirrored
  let displayPzl = pzl
  let displayAlg = alg.alg
  let displayLefty = isLefty

  export let isActive: boolean
  export let isMirrored: boolean = true;
  $: {
    ((state: boolean) => {
      displayAlg = state ? mirrorAlgOverrideTriggers(alg.alg, pzl) : alg.alg
      displayPzl = state ? puzzleDefinitionMapping[pzl]!.mirror : pzl
      displayLefty = state ? !isLefty : isLefty
      // temp
      isExpandable = state ? false : checkIfHasTriggers(displayAlg)
    })(isMirrored)
  }
  let isExpandable: boolean = isMirrored ? false : checkIfHasTriggers(alg.alg)
  $: isExpanded = isExpandable ? false : true;

</script>

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
        {#each movesOrTrigger.replace(isTriggerRegex, '$1').split(' ') as triggerOrModifier}
            {#if modifiersList.find((item) => item == triggerOrModifier) != undefined} <!-- MODIFIER -->
              <span class="bg-transparent text-[1.5vw] group-hover:text-[1.6vw] sm:text-[10px] group-hover:sm:text-[12px] text-stone-500 self-start">{triggerOrModifier + "-"}</span>
            {:else} <!-- TRIGGER -->
              <span>{triggerOrModifier + " "}</span>
            {/if}
          {/each}
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
<!-- svelte-ignore a11y-click-events-have-key-events -->
{#if isExpandable}
<span class="my-[2px] p-[1px] px-1 sm:text-sm text-[1.5vw] bg-stone-50/[.15] rounded-md shadow-md cursor-pointer select-none"
on:click={() => { isExpanded = !isExpanded }} title="Expand Alg">{!isExpanded ? 'Expand' : 'Triggers'}</span>
{/if}

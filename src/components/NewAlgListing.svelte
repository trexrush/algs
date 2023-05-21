<script lang="ts">
  import { algDelimiterWithTriggers, expandAlgWithTriggers, isTriggerRegex } from "../scripts/alg";
  import type { IAlgV2, twistyPuzzleTypeWithChirality } from "../scripts/types";

  export let isLefty: boolean = false
  export let isMirrored: boolean = false;
  export let isActive: boolean

  export let pzl: twistyPuzzleTypeWithChirality = '3x3x3'
  export let alg: IAlgV2;

  let displayedPzl = pzl
  let displayedAlg = alg.alg
  
  let isExpandable: boolean = expandAlgWithTriggers(displayedAlg, displayedPzl) != displayedAlg
  let isExpanded: boolean = isExpandable ? false : true;

</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
{#if isExpandable}
<span class="my-[2px] p-[1px] px-1 text-sm bg-stone-50/[.15] rounded-md shadow-md cursor-pointer"
on:click={() => { isExpanded = !isExpanded }} title="Expand Alg">⟰</span>
{/if}
<span
  class="{isActive
    ? 'text-[2.9vw] sm:text-[18.5px] font-bold bg-clip-text text-transparent'
    : 'text-[2.8vw] sm:text-[17.5px]'}
      hover:text-[2.95vw] sm:hover:text-[19px] hover:text-stone-900 dark:hover:text-stone-100 transition-all duration-100 cursor-pointer group
      {isLefty
    ? isActive ? 'bg-gradient-to-r from-green-500 to-lime-500' : 'dark:text-lime-100/40'
    : isActive ? 'bg-gradient-to-r from-red-500 to-orange-500' : 'dark:text-red-100/40'}">
  {#if !isExpanded}
    {#each displayedAlg.split(algDelimiterWithTriggers) as movesOrTrigger}
      {#if movesOrTrigger.match(isTriggerRegex) != null}
        <span class="{ isActive ? 'font-extrabold' : 'font-bold'}"
        title={expandAlgWithTriggers(movesOrTrigger, displayedPzl)}>
          {movesOrTrigger.replace(isTriggerRegex, '$1') + " "}
        </span>
      {:else}
        {movesOrTrigger + " "}
      {/if}
    {/each}
  {:else} 
    <span>{expandAlgWithTriggers(displayedAlg, displayedPzl)}</span>
  {/if}

</span>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<span class="my-[2px] p-[1px] text-sm bg-stone-50/[.07] rounded-md shadow-md cursor-pointer"
on:click={() => { navigator.clipboard.writeText(displayedAlg) }} title="Copy to Clipboard">
  🔗
</span>

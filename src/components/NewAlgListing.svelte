<script lang="ts">
  import { expandAlgWithTriggers, getTriggerAlg, isTriggerRegex } from "../scripts/alg";
  import type { IAlgV2, twistyPuzzleTypeWithChirality } from "../scripts/types";

  export let isLefty: boolean = false
  export let isMirrored: boolean = false;
  export let isActive: boolean

  export let pzl: twistyPuzzleTypeWithChirality = '3x3x3'
  export let alg: IAlgV2;

  let displayedAlg = alg.alg
  
  let isExpandable: boolean = expandAlgWithTriggers(displayedAlg, pzl) != displayedAlg
  let isExpanded: boolean = false;

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
    {#each displayedAlg.split(' ') as moveOrTrigger}
      {#if moveOrTrigger.match(isTriggerRegex) != null}
        <span class="{ isActive ? 'font-extrabold' : 'font-bold'}"
        title={expandAlgWithTriggers(moveOrTrigger, pzl)}>
          {moveOrTrigger.replace(isTriggerRegex, '$1') + " "}
        </span>
      {:else}
        {moveOrTrigger + " "}
      {/if}
    {/each}
  {:else} 
    <span>{expandAlgWithTriggers(displayedAlg, pzl)}</span>
  {/if}

</span>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<span class="my-[2px] p-[1px] text-sm bg-stone-50/[.07] rounded-md shadow-md cursor-pointer"
on:click={() => { navigator.clipboard.writeText(alg.alg) }} title="Copy to Clipboard">
  🔗
</span>

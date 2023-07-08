<!-- <svelte:options immutable={true} /> -->

<script lang="ts">
  import type { ComponentType } from "svelte";
  import type { IAlgorithmClass } from "../../scripts/alg";
  import type { IAlg } from "../../scripts/types";
  import { tooltip } from "../../scripts/utilities";
  import AlgListingVertical from "../AlgListingVertical.svelte";

  export let isActive: boolean
  export let algorithm: IAlgorithmClass
  export let Layout: ComponentType = AlgListingVertical
  export let playAlg: () => void

  let isExpanded = false
  // let displayAlg
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<svelte:component this={Layout} {isActive} {algorithm}>
  <svelte:fragment slot="play" let:css={css}>
    <span class="{css.main}"
    on:click={playAlg} use:tooltip title="View Alg">
      ▶
    </span>
  </svelte:fragment>

  <svelte:fragment slot="setup" let:css={css}>
    {#if algorithm.setup}
      <span class={css.main}>
        {algorithm.setup}
      </span>
    {/if}
  </svelte:fragment>

  <svelte:fragment slot="display" let:css={css}>
    {#if !algorithm.isExpandable()}
      <span class={css.alg}>{algorithm.alg}</span>
    {:else if isExpanded}
      <span class={css.expand}>{algorithm.expand}</span>
    {:else}
      {#each algorithm.components as component }
        {#if !component.resultModifiers } <!-- MOVE/ALG -->
          <span class={css.expandMove}>{component.alg + " "}</span>
        {:else} <!-- TRIGGER -->
          <span class="{css.expandTrigger}" use:tooltip={{ placement: 'top' }} title={component.resultMoves}>
            {#each component.resultModifiers as mods} <!-- MODIFIER -->
              <span class={css.expandMods}>
                {mods}
              </span>
            {/each}
            <span class={css.expandTriggerBase}> <!-- TRIGGER BASE -->
              {component.baseTrigger + " "}
            </span>
          </span>
        {/if}
      {/each}
    {/if} 
  </svelte:fragment>

  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <svelte:fragment slot="copy" let:css={css}>
    <span class="{css.main}"
    on:click={() => { navigator.clipboard.writeText(algorithm.expand) }} use:tooltip title="Copy to Clipboard">
      🔗
    </span>
  </svelte:fragment>
  
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <svelte:fragment slot="expand" let:css={css}>
    {#if algorithm.isExpandable()}
      <span class="{css.main}"
      on:click={() => { isExpanded = !isExpanded }} use:tooltip title="Expand Alg">
        {!isExpanded ? '➡️' : '⬅️'}
      </span>
    {/if}
  </svelte:fragment>
</svelte:component>
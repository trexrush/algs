<script lang="ts">
  import type { ComponentType, SvelteComponentTyped } from "svelte";
  import { AlgBuilder, type IAlgorithmClass } from "../../scripts/alg";
  import type { IAlg } from "../../scripts/types";
  import { tooltip } from "../../scripts/utilities";
  import AlgListingVertical from "../AlgListingVertical.svelte";

  // temp (also isMirror, pzl)
  export let alg: IAlg

  export let isActive: boolean
  export let algorithm: IAlgorithmClass = AlgBuilder().withPuzzle('3x3x3').withAlgData(alg).build()
  export let Layout: ComponentType<SvelteComponentTyped<{ algorithm: IAlgorithmClass, isActive: boolean }>> = AlgListingVertical

  $: {
    ((alg: IAlg) => (
      AlgBuilder()
        .withPuzzle('3x3x3')
        .withAlgData(alg)
        .build()
    ))(alg)
  }

  let isExpanded = false
</script>

<svelte:component this={Layout} {isActive} {algorithm}>
  <svelte:fragment slot="setup" let:css={css}>
    {#if algorithm.setup}
      <span class={css.main}>
        {algorithm.setup}
      </span>
    {/if}
  </svelte:fragment>

  <svelte:fragment slot="display" let:css={css}>
    {#if algorithm.isExpandable()}
      {#each algorithm.components as component }
        {#if component.alg } <!-- MOVE/ALG -->
          <span class={css.expandMove}>{component.alg + " "}</span>
        {:else} <!-- TRIGGER -->
          <span class="group/trigger {css.expandTrigger}" use:tooltip={{ placement: 'top' }} title={component.resultMoves}>
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
    {:else} 
      <span class={css.alg}>{algorithm.alg}</span>
    {/if}
  </svelte:fragment>

  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <svelte:fragment slot="copy" let:css={css}>
    <span class="cursor-pointer select-none {css.main}"
    on:click={() => { navigator.clipboard.writeText(algorithm.expand) }} use:tooltip title="Copy to Clipboard">
      🔗
    </span>
  </svelte:fragment>
  
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <svelte:fragment slot="expand" let:css={css}>
    {#if algorithm.isExpandable()}
      <span class="cursor-pointer select-none {css.main}"
      on:click={() => { isExpanded = !isExpanded }} use:tooltip title="Expand Alg">
        {!isExpanded ? '➡️' : '⬅️'}
      </span>
    {/if}
    </svelte:fragment>

</svelte:component>
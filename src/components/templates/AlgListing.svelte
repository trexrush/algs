<script lang="ts">
  import { AlgBuilder, type IAlgorithmClass } from "../../scripts/alg";
  import type { IAlg } from "../../scripts/types";
  import { tooltip } from "../../scripts/utilities";
  import AlgListingVertical from "../AlgListingVertical.svelte";

  //temp
  export let alg: IAlg
  // isMirror
  // pzl
  let css

  export let isActive: boolean
  let algorithm: IAlgorithmClass = AlgBuilder().withPuzzle('3x3x3').withAlgData(alg).build()

  $: {
    ((alg: IAlg) => (
      AlgBuilder()
        .withPuzzle('3x3x3')
        .withAlgData(alg)
        .build()
    ))(alg)
  }

  $: {
    console.log(isActive)
  }

  let isExpanded = false
  // let a = algorithm.alg // expanded logic
</script>

<svelte:component this={AlgListingVertical} {isActive} {algorithm}>
  <svelte:fragment slot="setup" let:css={css}>
    {#if algorithm.setup}
    <span class={css.setup.main}>
      {algorithm.setup}
    </span>
    {/if}
  </svelte:fragment>

  <svelte:fragment slot="display" let:css={css}>
    {#if algorithm.isExpandable()}
      {#each algorithm.components as component }
      {#if component.alg } <!-- its a move -->
        <span class={css.display.expandMove}>{component.alg + " "}</span>
        {:else} <!-- its a trigger -->
        <span class="group/trigger {css.display.expandTrigger}" use:tooltip={{ placement: 'top' }} title={component.resultMoves}>
          {#each component.resultModifiers as mods}
          <!-- MODIFIER -->
          <span class={css.display.expandMods}>
            {mods}
          </span>
          {/each}
          <!-- TRIGGER -->
          <span class={css.display.expandTriggerBase}>
            {component.baseTrigger + " "}
          </span>
        </span>
        {/if}
      {/each}
    {:else} 
      <!-- group-hover:text-stone-900 dark:group-hover:text-stone-100 -->
      <span class={css.display.alg}>{algorithm.alg}</span>
    {/if}
  </svelte:fragment>

  <svelte:fragment slot="copy" let:css={css}>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <span class="cursor-pointer select-none {css.copy.main}"
    on:click={() => { navigator.clipboard.writeText(algorithm.expand) }} use:tooltip title="Copy to Clipboard">
    <!--TODO: ^ on click animate a toast or scale up the button for a split second  -->
      🔗
    </span>
  </svelte:fragment>

  <svelte:fragment slot="expand" let:css={css}>
    {#if algorithm.isExpandable()}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <span class="cursor-pointer select-none {css.expand.main}"
      on:click={() => { isExpanded = !isExpanded }} use:tooltip title="Expand Alg">
        {!isExpanded ? '➡️' : '⬅️'}
      </span>
    {/if}
    </svelte:fragment>

</svelte:component>
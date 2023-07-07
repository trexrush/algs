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
        <!-- group-hover:text-stone-900 dark:group-hover:text-stone-100 -->
          <span class={css.display.expandMove}>{component.alg + " "}</span>
          {:else} <!-- its a trigger -->
        <!-- { isActive ? 'font-extrabold' : 'font-bold'}  -->
        <span class="group/trigger"
        use:tooltip={{ placement: 'top' }} title={component.resultMoves}>
          <!-- TRIGGER -->
          <!-- {isActive ? 'group-hover:text-white/40' : algorithm.isLefty ? 'group-hover:text-lime-300' : 'group-hover:text-red-300'} -->
          {#each component.resultModifiers as mods}
            <!-- MODIFIER -->
            <!-- mx-[1px] text-[1.5vw] sm:text-[10px] text-stone-500 transition-all duration-100 group-hover:text-[1.6vw] group-hover:sm:text-[10.7px] -->
            <!-- {algorithm.isLefty ? 'group-hover/trigger:text-lime-100' : 'group-hover/trigger:text-red-100'} -->
            <span class="">
              {mods}
            </span>
          {/each}
          <span class="">
            {component.baseTrigger + " "}
          </span>
        </span>
        {/if}
      {/each}
    {:else} 
      <!-- group-hover:text-stone-900 dark:group-hover:text-stone-100 -->
      <span class="">{algorithm.alg}</span>
    {/if}
  </svelte:fragment>

  <svelte:fragment slot="copy">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- my-[2px] p-[1px] text-[2vw] sm:text-sm bg-stone-50/[.07] rounded-md shadow-md  -->
    <span class="cursor-pointer select-none"
    on:click={() => { navigator.clipboard.writeText(algorithm.expand) }} use:tooltip title="Copy to Clipboard">
    <!--TODO: ^ on click animate a toast or scale up the button for a split second  -->
      🔗
    </span>
  </svelte:fragment>

  <svelte:fragment slot="expand">
    {#if algorithm.isExpandable()}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- my-[2px] p-[1px] px-1 sm:text-sm text-[1.5vw] bg-stone-50/[.15] rounded-md shadow-md  -->
      <span class="cursor-pointer select-none"
      on:click={() => { isExpanded = !isExpanded }} use:tooltip title="Expand Alg">
        {!isExpanded ? '➡️' : '⬅️'}
      </span>
    {/if}
    </svelte:fragment>

</svelte:component>
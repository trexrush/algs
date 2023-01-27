<script lang="ts">
  import type { ISet } from "../scripts/types";
  import AlgCard from "./AlgCard.svelte";

  export let set: ISet;
</script>

<!-- TODO: make sets collapsible -->
<div class="bg flex flex-col w-11/12 mb-5 items-center rounded-xl">
  <div class="text-4xl text-center"><b>{set.name}</b></div>
  {#if set.cases}
    {#each set.cases as caso}
       <AlgCard caso={caso} />
    {/each}
  {/if}
  {#if set.sets}
    {#each set.sets as subSet}
      <svelte:self set={subSet} />
    {/each}
  {/if}
</div>

<style>
  .bg {
    background-color: rgba(28, 25, 23, .07);
  }
</style>

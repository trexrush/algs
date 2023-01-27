<script lang="ts">
  import type { IData, ISet } from "../scripts/types";
  import AlgCard from "./AlgCard.svelte";

  export let set: ISet;
  export let data: IData;
  export let size: number;
  let collapsed: boolean = false;
  const toggleSection = () => {
    collapsed = !collapsed;
    console.log(collapsed);
  };
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->

<!-- TODO: make sets collapsible -->
<div class="bg flex flex-col w-11/12 mb-5 items-center rounded-xl">
  <div class="text-4xl my-2 text-center cursor-pointer" on:click={toggleSection}>
    <b>{set.name}</b>
  </div>
  {#if !collapsed}
    {#if set.cases}
      {#each set.cases as caso}
        <AlgCard {caso} {data} {size} />
      {/each}
    {/if}
    {#if set.sets}
      {#each set.sets as subSet}
        <svelte:self set={subSet} {data} {size} />
      {/each}
    {/if}
  {/if}
</div>

<style>
  .bg {
    background-color: rgba(28, 25, 23, 0.07);
  }
</style>

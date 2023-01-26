<script lang="ts">
  import SetCard from "../components/SetCard.svelte";
  import type { IAlgSet } from "../scripts/types";
  import { setContext } from "svelte";
  export let algset: IAlgSet;
  export let size: number = 128;

  setContext("data", algset.data);
  setContext("size", size);
</script>

<div class=" relative text-8xl w-full text-center">{algset.data.name}</div>
{#each algset.sets as set}
  {#if set.cases && set.cases.length > 0}
    <SetCard {set} />
  {/if}
{/each}

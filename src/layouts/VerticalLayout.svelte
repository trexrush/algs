<script lang="ts">
  import SetCard from "../components/SetCard.svelte";
  import type { IAlgSet } from "../scripts/types";
  import { setContext } from "svelte";
  export let algset: IAlgSet;
  export let size: number = 128;

  setContext("data", algset.data);
  setContext("size", size);
</script>

<div class=" relative text-7xl w-full text-center my-5">{algset.data.name}</div>
{#each algset.sets as set}
    <SetCard {set} />
{/each}

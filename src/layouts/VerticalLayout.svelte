<script lang="ts">
    import SetCard from "../components/SetCard.svelte";
    import type { IAlgSet } from "../scripts/types";
    export let algset: IAlgSet;
    export let size: number = 128;
  </script>
  
  <div class=" relative text-7xl w-full text-center my-5">{algset.data.name}</div>
  {#each algset.sets as set}
      <SetCard {set} data={algset.data} {size}/>
  {/each}
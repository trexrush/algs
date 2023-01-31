<script lang="ts">
    import SetCard from "../components/SetCard.svelte";
    import type { IData, ISet } from "../scripts/types";
    export let sets: ISet[]
    export let data: IData
    export let size: number = 128;
  </script>
  
  <div class=" relative text-7xl w-full text-center my-5">{data.name}</div>
  {#each sets as set}
      <SetCard {set} {data} {size}/>
  {/each}
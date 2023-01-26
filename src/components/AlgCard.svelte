<script lang="ts">
  import { onDestroy, setContext } from "svelte";
  import { readable, writable } from "svelte/store";
  import { onMount } from "svelte";
  import type { ICase } from "../scripts/types";
  import AlgVis from "./AlgVis.svelte";
  export let caso: ICase;

  const activeAlg = writable(caso.algs[0])
  let setActive = (alg: string) => {
      activeAlg.set(alg)
  }

  let elementList: HTMLElement[] = []
  let activeElement: number = 0

  // this is the only way it worked since we are dealing with tailwind classes that freak out when 2 of the same type are present on an element
  let changeActiveElement = (algElementIndex: number, alg: string) => {
    // prevent unnecessary dom updates
    if (elementList.length == 1) {
      return
    }

    elementList[activeElement].classList.remove('text-stone-600')
    elementList[activeElement].classList.add('text-stone-400')
    elementList[activeElement].classList.remove('text-3xl')
    activeElement = algElementIndex
    elementList[activeElement].classList.remove('text-stone-400')
    elementList[activeElement].classList.add('text-stone-600')
    elementList[activeElement].classList.add('text-3xl')

    setActive(alg)
  }

  onMount(async () => {    
    elementList[activeElement].classList.remove('text-stone-400')
    elementList[activeElement].classList.add('text-stone-600')
    elementList[activeElement].classList.add('text-3xl')
  })
</script>
<!-- svelte-ignore a11y-click-events-have-key-events -->

<div class="card m-5 ml-0 w-11/12 flex flex-row items-center justify-center">
  <div class="algs flex flex-col m-1 p-1 w-full text-right pr-5 mr-7 rounded-md justify-center">
    {#each caso.algs as alg, i}
      <p class="text-2xl text-stone-400 hover:text-4xl hover:text-stone-900 cursor-pointer overflow-x-visible" on:click={() => (changeActiveElement(i, alg))} bind:this={elementList[i]}>
        {alg}
      </p>
    {/each}
  </div>
  <AlgVis activeAlg={$activeAlg} alg={caso.algs[0]}/>
</div>

<!-- <div class="bg-stone-200 bg-stone-400 bg-stone-600 bg-stone-800"></div> -->
<style>
  p {
    transition: all .2s;
  }
  .algs {
    /* box-shadow: 2px 2px rgb(41 37 36); */
    height: 100px;
  }
</style>

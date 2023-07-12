<script lang="ts">
  import AlgListing from "./AlgListing.svelte";
  import AlgVisuals from "../AlgVisuals.svelte";
  import type { ICase, IOptions } from "../../scripts/types";
  import { AlgBuilder,  type IAlgorithmClass } from "../../scripts/alg";
  import { tooltip } from "../../scripts/utilities";
  import CaseCardVertical from "../CaseCardVertical.svelte";
  import type { ComponentType } from "svelte";

  export let caso: ICase
  export let options: IOptions
  export let Layout: ComponentType = CaseCardVertical
  let algorithmList = caso.algs.map(a => AlgBuilder().withPuzzle(options.puzzle).withAlgData(a).build() as IAlgorithmClass)

  // ACTIVE
  let activeAlg: IAlgorithmClass
  let activeElement: number = 0

  $: activeElement, (() => { activeAlg = algorithmList[activeElement] as IAlgorithmClass })()

  let algWithSetup = (alg: IAlgorithmClass) => { // REMOVE AFTER CHANGING ALGVISUALS
    return alg.setup ? alg.setup + " . . " + alg.alg : alg.alg
  }
  
  let toggleDisplay: () => void
  let toggled: boolean

</script>

<svelte:component this={Layout} {caso}>
  <svelte:fragment slot="visuals">
    <AlgVisuals 
      activeAlg={activeAlg} 
      imageAlg={algorithmList[0]} 
      options={options}
      bind:toggleDisplay={toggleDisplay} 
      bind:isAlgVisDisplayed={toggled}
    />
  </svelte:fragment>
  
  <svelte:fragment slot="caseName" let:css>
    <a href="#{caso.name}" 
      on:click={(e) => { 
        e.preventDefault()
        const elem = e.currentTarget
        navigator.clipboard.writeText(elem.href ?? '')
        window.location.assign(elem.href)
      }} 
      class={css.main}
    >
      <span class={css.hash}># </span>
      <b>
        {caso.name}
      </b>
    </a>  
  </svelte:fragment>
  
  <svelte:fragment slot="altNames">
    {#if caso.altNames?.length}
    <span>AKA</span>
    {#each caso.altNames as altName}
    <a id="{altName}" href="#{altName}">{altName}</a>
    {/each}
    {/if}
  </svelte:fragment>
  
  
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <svelte:fragment slot="mirrorToggle" let:css>
    <span class={css.main}
    on:click={() => { algorithmList = algorithmList.map(a => a.mirror()) }} use:tooltip title="Display the mirror cases of algs"><b>{"Mirror L/R"}</b></span>
  </svelte:fragment>
  
  <svelte:fragment slot="note" let:css>
    {#if caso.note}
    <div class={css.main}>
      <b>{caso.note}</b>
    </div>
    {/if}
  </svelte:fragment>
  
  <!-- svelte-ignore a11y-missing-content -->
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <svelte:fragment slot="algorithmList" let:css>
    {#each algorithmList as eachAlg, i}
      <div class={css.main}>
        <div on:click={() => activeElement = i}>
          <AlgListing 
            algorithm={eachAlg} 
            isActive={activeElement == i} 
            playAlg={() => { activeElement = i; if (!toggled) (toggleDisplay()) }} 
          />
        </div>
        <hr class={css.line}/>
        <span class={css.tagList}>
          {#if eachAlg.tags }
            <span class={css.tagName}>Tags</span>
            {#each eachAlg.tags as tag}
            <span class={css.tag}>{tag}</span>
          {/each}
          {/if}
        </span>
      </div>
    {/each}
  </svelte:fragment>
</svelte:component>

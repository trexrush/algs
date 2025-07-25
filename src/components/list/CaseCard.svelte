<script lang="ts">
  import AlgListing from "./AlgListing.svelte";
  import AlgVisuals from "./AlgVisuals.svelte";
  import { AlgBuilder } from "../../scripts/alg";
  import { tooltip } from "../../scripts/utilities";
  import CaseCardVertical from "./vertical/CaseCardVertical.svelte";
  import type { ComponentType } from "svelte";
  import type { ICase } from "../../types/dataFormat";
  import type { IAlgorithmClass } from "../../types/algorithmClass";
  import type { IDisplayConfig } from "../../types/displayConfig";

  export let caso: ICase
  export let config: IDisplayConfig
  export let Layout: ComponentType = CaseCardVertical
  let algorithmList = caso.algs.map(a => AlgBuilder().withPuzzle(config.type).withAlgData(a).build() as IAlgorithmClass)

  let activeAlg: IAlgorithmClass
  let activeElement: number = 0
  $: activeElement, (() => { activeAlg = algorithmList[activeElement] as IAlgorithmClass })()
  
  let toggleDisplay: () => void
  let toggled: boolean

  let imageAlg: IAlgorithmClass = caso.imageAlg ?
    AlgBuilder().withPuzzle(config.type).withAlgData({
      alg: caso.imageAlg
    }).build() as IAlgorithmClass :
    algorithmList[0]

</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->

<svelte:component this={Layout} {caso} mirror={activeAlg.isMirror}>
  <svelte:fragment slot="visuals">
    <AlgVisuals 
      activeAlg={activeAlg} 
      imageAlg={imageAlg} 
      config={config}
      {caso}
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
  
  <svelte:fragment slot="altNames" let:css>
    {#if caso.altNames?.length}
    <span class={css.aka}>AKA</span>
    {#each caso.altNames as altName}
    <a id="{altName}" href="#{altName}" class={css.list}>{altName}</a>
    {/each}
    {/if}
  </svelte:fragment>
  
  
  <svelte:fragment slot="mirrorToggle" let:css>
    <span class={css.main}
    on:click={() => { algorithmList = algorithmList.map(a => a.mirror()) }} use:tooltip title="Display the mirror cases of algs">
      <b>{"Mirror Case Algs"}</b>
    </span>
  </svelte:fragment>
  
  <!-- <svelte:fragment slot="note" let:css>
    {#if caso.note}
    <div class={css.main}>
      <b>{caso.note}</b>
    </div>
    {/if}
  </svelte:fragment> -->
  
  <svelte:fragment slot="algorithmList" let:css>
    {#each algorithmList as eachAlg, i}
      <li class={css.main}>
        <div on:click={() => activeElement = i}>
          <AlgListing 
            algorithm={eachAlg} 
            isActive={activeElement == i} 
            playAlg={() => { activeElement = i; if (!toggled) (toggleDisplay()) }} 
          />
        </div>
        <hr class={css.line}/>
        <span class={css.tagList}>
          {#if eachAlg?.tags }
            <span class={css.tagName}>Tags</span>
            {#each eachAlg.tags as tag}
            <span class={css.tag}>{tag}</span>
          {/each}
          {/if}
        </span>
      </li>
    {/each}
  </svelte:fragment>
</svelte:component>

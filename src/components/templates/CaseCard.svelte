<script lang="ts">
  import AlgListing from "./AlgListing.svelte";
  import AlgVisuals from "../AlgVisuals.svelte";
  import { type Writable, writable } from "svelte/store";
  import type { IAlg, ICase, IOptions } from "../../scripts/types";
  import { puzzleDefinitionMapping } from "../../scripts/alg";
  import { mirrorAlgOverrideTriggers } from "../../scripts/alg";
  import { tooltip } from "../../scripts/utilities";
  import CaseCardVertical from "../CaseCardVertical.svelte";
  import type { ComponentType } from "svelte";

  export let size: number // REMOVE
  // always "non-mirrored"
  export let caso: ICase
  export let options: IOptions
  export let Layout: ComponentType = CaseCardVertical
  
  // stateful
  const isMirrored: Writable<boolean> = writable(false) // REMOVE
  const activeAlg: Writable<IAlg> = writable(structuredClone(caso.algs[0])) // CHANGE
  let pzl = puzzleDefinitionMapping[options.puzzle]!.standard // REMOVE

  // $: ((mirror: boolean) => { // REMOVE
  //   $activeAlg = structuredClone(caso.algs[activeElement])
  //   $activeAlg.alg = mirror ? mirrorAlgOverrideTriggers($activeAlg.alg, pzl) : caso.algs[activeElement].alg
  //   pzl = mirror ? puzzleDefinitionMapping[pzl]!.mirror : puzzleDefinitionMapping[options.puzzle]!.standard
  //   if ($activeAlg.setup) $activeAlg.setup = mirror ? mirrorAlgOverrideTriggers($activeAlg.setup, pzl) : caso.algs[activeElement].setup
  //   $activeAlg.isLefty = mirror ? !caso.algs[activeElement].isLefty : caso.algs[activeElement].isLefty
  // })($isMirrored)

  let elementList: AlgListing[] = []
  let activeElement: number = 0
  let changeActiveElement = (algElementIndex: number) => {
    // prevent unnecessary dom updatesr
    if (elementList.length == 1) {
      return
    }
    activeElement = algElementIndex
    activeAlg.set(caso.algs[algElementIndex])
  }

  let algWithSetup = (alg:IAlg) => { // REMOVE
    return alg.setup ? alg.setup + " . . " + alg.alg : alg.alg
  }
  
  let toggleDisplay: () => void
  let toggled: boolean

  const copyAndRedirect = (e: Event) => { 
    e.preventDefault()
    const elem: HTMLAnchorElement = e.currentTarget as HTMLAnchorElement
    navigator.clipboard.writeText(elem.href ?? '')
    window.location.replace(elem.href)
  }

</script>

<svelte:component this={Layout} {caso}>
  <svelte:fragment slot="visuals">
    <AlgVisuals 
      activeAlg={algWithSetup($activeAlg)} 
      imageAlg={caso.algs[0]} 
      options={options} 
      size={size} 
      isLefty={$activeAlg.isLefty} 
      bind:toggleDisplay={toggleDisplay} 
      bind:isAlgVisDisplayed={toggled}
    />
  </svelte:fragment>
  
  <svelte:fragment slot="caseName" let:css={css}>
    <a href="#{caso.name}" on:click={e => copyAndRedirect(e)} class={css.main}>
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
  <svelte:fragment slot="mirrorToggle" let:css={css}>
    <span class={css.main}
    on:click={() => { isMirrored.set(!$isMirrored); console.log("TOGGLE", $isMirrored) }} use:tooltip title="Display the mirror cases of algs"><b>{"Mirror L/R"}</b></span>
  </svelte:fragment>
  
  <svelte:fragment slot="note" let:css={css}>
    {#if caso.note}
    <div class={css.main}>
      <b>{caso.note}</b>
    </div>
    {/if}
  </svelte:fragment>
  
  <!-- svelte-ignore a11y-missing-content -->
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <svelte:fragment slot="algorithmList" let:css={css}>
    {#each caso.algs as eachAlg, i}
      <div class={css.main}>
        <div on:click={() => changeActiveElement(i)}>
          <AlgListing 
            alg={eachAlg} 
            isActive={activeElement == i} 
            playAlg={() => { changeActiveElement(i); if (!toggled) (toggleDisplay()) }} 
            bind:this={elementList[i]}
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

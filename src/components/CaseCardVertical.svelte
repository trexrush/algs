<script lang="ts">
  import type { IDataCase } from "../scripts/types";

  export let caso: IDataCase
  export let mirror: boolean
  
  $: localStyles = {
    container: 'w-full px-1 flex flex-row items-center justify-center',
    card: 'flex flex-col justify-start items-start relative m-1 p-2 w-full min-h-[6em] h-fit rounded-md bg-stone-600/10 dark:bg-stone-300/10 shadow-xl dark:shadow-lg hover:shadow-2xl',
    aboveCard: "absolute top-0 right-0 w-full flex justify-between items-center gap-1 px-2 pb-1 translate-y-[-1.3em]",
    nameGroup: "text-stone-500 text-[2.7vw] sm:text-[15px] flex gap-2 items-baseline",
    mirrorButtonColors: `hover:border-[1px] ${ mirror 
      ? 'hover:bg-red-500/10 text-red-700 dark:text-red-500 border-red-900/20 dark:border-red-500/20' 
      : 'hover:bg-lime-500/10 text-lime-700 dark:text-lime-500 border-lime-700/20 dark:border-lime-500/20'}`
  };

  $: Styles = {
    caseName: {
      main: 'dark:text-white text-black text-[3.2vw] sm:text-[20px] group',
      hash: 'group-hover:opacity-100 opacity-0 transition-opacity duration-100',
    },
    mirrorToggle: {
      main: `my-[2px] px-2 py-[1px] sm:text-sm text-[2.2vw] font-light rounded-lg hover:shadow-md cursor-pointer select-none transition-all ${localStyles.mirrorButtonColors}`,
    },
    note: {
      main: 'absolute text-[2.3vw] top-0 right-2 w-5/6 text-right md:text-[16px] leading-none text-stone-900/[.35] dark:text-stone-50/[.2] translate-y-[100px]',
    },
    algorithmList: {
      main: 'flex items-center gap-1 py-[2px] relative w-full sm:-ml-4 leading-none overflow-x-visible',
      line: 'flex-grow border-s-4 dark:border-stone-800/40 border-stone-400/40',
      tagList: 'flex m-1 justify-end items-center gap-1 cursor-default text-xs text-stone-500',
      tagName: 'max-sm:invisible',
      tag: 'px-[.15rem] py-0 sm:px-1 dark:bg-yellow-500/[.2] bg-yellow-700/60 rounded-md md:text-sm text-[1.5vw] text-white',
    }
  };


</script>

<div id={caso.name} class={localStyles.container}>
  <slot name="visuals" />
  <div class={localStyles.card}>
    <div class={localStyles.aboveCard}>
      <div class={localStyles.nameGroup}>
        <slot name="caseName" css={Styles.caseName} />
        <slot name="altNames" />
      </div>
      <slot name="mirrorToggle" css={Styles.mirrorToggle} />
    </div> 
    <!-- <slot name="note" css={Styles.note} /> -->
    <slot name="algorithmList" css={Styles.algorithmList} />
  </div>
</div>

<script lang="ts">
  import type { ICase } from "../scripts/types";

  export let caso: ICase
  
  const localStyles = {
    container: 'w-full px-1 pt-4 flex flex-row items-center justify-center',
    card: 'flex flex-col justify-start items-start relative m-1 p-2 w-full min-h-[6em] h-fit rounded-md bg-stone-900/[.07] dark:bg-stone-50/[.07] shadow-lg hover:shadow-2xl',
    aboveCard: "absolute top-0 right-0 w-full flex justify-between items-center gap-1 px-2 pb-1 translate-y-[-1.7em]",
    nameGroup: "text-stone-500 text-[2.7vw] sm:text-[15px] flex gap-2 items-baseline",
  };

  const Styles = {
    caseName: {
      main: 'dark:text-white text-[3.2vw] sm:text-[20px] group',
      hash: 'group-hover:opacity-100 opacity-0 transition-opacity duration-100',
    },
    mirrorToggle: {
      main: "my-[2px] px-2 py-[1px] sm:text-sm text-[2.2vw] font-light bg-stone-50/[.15] rounded-lg shadow-md cursor-pointer select-none bg-gradient-to-r from-red-600/40 from-30% to-lime-600/40 to-70% transition-all hover:saturate-150 hover:brightness-125",
    },
    note: {
      main: 'absolute text-[2.3vw] top-0 right-2 w-5/6 text-right md:text-[16px] leading-none text-stone-900/[.35] dark:text-stone-50/[.2] translate-y-[100px]',
    },
    algorithmList: {
      main: 'flex items-center gap-1 py-[2px] relative w-full sm:-ml-4 leading-none overflow-x-visible',
      line: 'flex-grow border-s-4 border-stone-800/70',
      tagList: 'flex m-1 justify-end items-center gap-1 cursor-default text-xs text-stone-500',
      tagName: 'max-sm:invisible',
      tag: 'px-[.15rem] py-0 sm:px-1 bg-yellow-500/[.2] rounded-md md:text-sm text-[1.5vw] text-white',
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
    <slot name="note" css={Styles.note} />
    <slot name="algorithmList" css={Styles.algorithmList} />
  </div>
</div>

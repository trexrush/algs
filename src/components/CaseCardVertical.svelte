<script lang="ts">
  import { ICase } from "../types/dataFormat";
  
  export let caso: ICase
  export let mirror: boolean
  
  $: commonStyles = {
    mirrorButtonColors: `hover:border-[1px] ${ mirror 
      ? 'hover:bg-red-500/10 text-red-700 dark:text-red-500 border-red-900/20 dark:border-red-500/20' 
      : 'hover:bg-lime-500/10 text-lime-700 dark:text-lime-500 border-lime-700/20 dark:border-lime-500/20'}`
  };

  $: Styles = {
    caseName: {
      main: 'dark:text-white text-black text-[3.2vw] sm:text-[20px] group',
      hash: 'group-hover:opacity-100 opacity-0 transition-opacity duration-100',
    },
    altNames: {
      aka: 'scale-80',
      list: 'font-bold'
    },
    mirrorToggle: {
      main: `my-[2px] px-2 py-[1px] sm:text-sm text-[2.2vw] font-light rounded-lg hover:shadow-md cursor-pointer select-none transition-all ${commonStyles.mirrorButtonColors}`,
    },
    note: {
      main: 'absolute text-[7px] top-0 right-2 w-5/6 text-righttext-[16px] leading-none text-stone-900/[.35] dark:text-stone-50/[.2] translate-y-[100px]',
    },
    algorithmList: {
      main: 'flex items-center gap-1 md:py-[2px] relative w-full leading-none',
      line: 'grow border-s-4 overflow-clip dark:border-stone-800/40 border-stone-400/40',
      tagList: 'hidden sm:flex m-1 justify-end items-center gap-1 cursor-default text-[10px] text-stone-500',
      tagName: 'max-md:invisible',
      tag: 'px-[.15rem] py-0 md:px-1 dark:bg-yellow-500/[.2] bg-yellow-700/80 rounded-md md:text-xs text-white',
    }
  };


</script>

<div id={caso.name} class='w-full px-1 md:flex md:flex-row items-center grid grid-cols-5 gap-2'>
  <div class="overflow-clip aspect-square md:basis-32">
    <slot name="visuals" />
  </div>
  <div class='flex flex-col md:grow col-span-4
  justify-start items-start p-1'>
    <div class='w-full flex justify-between items-baseline gap-1 -mb-2'>
      <div class='text-stone-500 text-[2.7vw] md:text-[15px] flex gap-2'>
        <slot name="caseName" css={Styles.caseName} />
        <slot name="altNames" css={Styles.altNames} />
      </div>
      <slot name="mirrorToggle" css={Styles.mirrorToggle} />
    </div> 
    <ul class="min-h-[6em] h-fit w-full rounded-md bg-stone-600/10 dark:bg-stone-300/10 shadow-xl dark:shadow-lg hover:shadow-2xl p-1 pt-2">
      <slot name="algorithmList" css={Styles.algorithmList} />
    </ul>
    <!-- <slot name="note" css={Styles.note} /> -->
  </div>
</div>

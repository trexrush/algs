<script lang="ts">
  import { IAlgorithmClass } from "../types/algorithmClass";


  export let algorithm: IAlgorithmClass
  export let isActive: boolean

  
  $: commonStyles = {
    button: `my-[1px] p-[1px] text-[7px] sm:text-sm dark:bg-stone-50/5 bg-stone-200/20 rounded-[.2em] dark:shadow-md shadow-sm cursor-pointer select-none`,
    greyText: 'dark:text-stone-500 text-stone-400',
    lightTextOnHover: 'group-hover:text-stone-900 dark:group-hover:text-stone-100',
    redGradient: 'bg-gradient-to-r dark:from-red-500 dark:via-orange-500 dark:to-amber-500 from-red-700 via-orange-700 to-amber-700',
    greenGradient: 'bg-gradient-to-r dark:from-teal-500 dark:via-green-500 dark:to-lime-500 from-teal-600 via-green-600 to-lime-600',
    fadedColorText: `${ algorithm.isLefty ? 'dark:text-lime-100/40 text-lime-950/50' : 'dark:text-red-100/40 text-red-900/50' }`,
    moveWeight: `${ isActive ? 'font-semibold' : 'font-extralight'}`,
    triggerWeight: `${ isActive ? 'font-extrabold' : 'font-semibold'}`,
  };
  
  $: localStyles = {
    main: `transition-all duration-100 origin-left cursor-pointer group text-[2.4vw] sm:text-[17.5px] hover:scale-[1.01] leading-none`,
    gradient: `${ algorithm.isLefty ? commonStyles.greenGradient : commonStyles.redGradient }`,
    active: `bg-clip-text text-transparent`,
    
    
  };
  
  $: Styles = {
    setup: { 
      main: `px-1 rounded-sm text-[2vw] sm:text-[13px] ${commonStyles.greyText} font-bold` 
    },
    display: {
      triggerGroup: `group/trigger last:child:-ml-1 ml-1`,
      triggerBase: ` ${commonStyles.triggerWeight} ${algorithm.isLefty ? 'dark:group-hover:text-lime-300 group-hover:text-lime-500' : 'dark:group-hover:text-red-300 group-hover:text-red-500'}`,
      mods: `${commonStyles.greyText} mx-[1px] text-[5px] sm:text-[10px] transition-all duration-100
        ${algorithm.isLefty ? 'dark:group-hover/trigger:text-lime-100 group-hover/trigger:text-lime-500' : 'dark:group-hover/trigger:text-red-100 group-hover/trigger:text-red-500'}`,
      alg: `${commonStyles.lightTextOnHover}`,
    },
    copy: {
      main: `${commonStyles.button}`
      // TODO: ^ on click animate a toast or scale up the button for a split second
    },
    expand: {
      main: `px-1 ${commonStyles.button}`
    },
    play: {
      main: `!dark:bg-stone-500/40 !bg-stone-100/30 ${commonStyles.button} max-sm:hidden px-1 -ml-2 dark:text-red-300 text-red-600 dark:hover:bg-stone-50/30 hover:bg-stone-500/30 transition-colors duration-75`
    },
  };
</script>

<slot name="play" css={Styles.play}/>
<span class="{isActive && localStyles.active} {commonStyles.moveWeight} {localStyles.main} {isActive ? localStyles.gradient : commonStyles.fadedColorText}">
  <slot name="setup" css={Styles.setup} />
  <slot name="display" css={Styles.display}/>
</span>
<slot name="copy" css={Styles.copy} />
<slot name="expand" css={Styles.expand} />
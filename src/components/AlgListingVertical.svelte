<script lang="ts">
  import type { IAlgorithmClass } from "../scripts/alg";

  export let algorithm: IAlgorithmClass
  export let isActive: boolean

  let commonStyles = {
    button: `my-[2px] p-[1px] 
      sm:text-sm text-[2vw]
      bg-stone-50/[.07] rounded-[.01em] shadow-md
      cursor-pointer select-none`,
    text: 'text-stone-500',
    lightText: 'group-hover:text-stone-900 dark:group-hover:text-stone-100',
  };
  
  let localStyles = {
    main: `hover:text-[2.95vw] sm:hover:text-[19px] transition-all duration-100 cursor-pointer group`,
    active: `text-[2.9vw] sm:text-[18.5px] font-semibold bg-clip-text text-transparent`,
    normal: `text-[2.8vw] sm:text-[17.5px] font-extralight`,
    redGradient: 'bg-gradient-to-r from-red-500 via-orange-500 to-amber-500',
    greenGradient: 'bg-gradient-to-r from-teal-500 via-green-500 to-lime-500'
  
  };
  
  let Styles = {
    setup: { 
      main: `px-1 rounded-sm text-[2vw] sm:text-[13px] ${commonStyles.text} font-bold` 
    },
    display: {
      triggerGroup: `group/trigger ${ isActive ? 'font-extrabold' : 'font-bold'}`,
      triggerBase: `${isActive ? 'group-hover:text-white/40' : algorithm.isLefty ? 'group-hover:text-lime-300' : 'group-hover:text-red-300'}`,
      mods: `mx-[1px] text-[1.5vw] sm:text-[10px] ${commonStyles.text} transition-all duration-100 group-hover:text-[1.6vw] group-hover:sm:text-[10.7px] ${algorithm.isLefty ? 'group-hover/trigger:text-lime-100' : 'group-hover/trigger:text-red-100'}`,
      alg: `${commonStyles.lightText}`,
    },
    copy: {
      main: `${commonStyles.button}`
      // TODO: ^ on click animate a toast or scale up the button for a split second
    },
    expand: {
      main: `px-1 ${commonStyles.button}`
    },
    play: {
      main: `max-sm:hidden px-1 text-red-300 text-[1.3vw] hover:bg-stone-50/[.3] ${commonStyles.button} transition-colors duration-75`
    },
  };

</script>

<slot name="play" css={Styles.play}/>
<span class="{isActive ? localStyles.active : localStyles.normal}
    {localStyles.main} {algorithm.isLefty
  ? (isActive ? localStyles.greenGradient : 'text-lime-100/40')
  : (isActive ? localStyles.redGradient : 'text-red-100/40')}">
  <slot name="setup" css={Styles.setup} />
  <slot name="display" css={Styles.display} />
</span>
<slot name="copy" css={Styles.copy} />
<slot name="expand" css={Styles.expand} />

<style lang="postcss">
  /* .button {
    @apply my-[2px] sm:text-sm p-[1px] text-[2vw] bg-stone-50/[.07] rounded-[.01em] shadow-md cursor-pointer select-none;
  } */
</style>
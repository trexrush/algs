<script lang="ts">
  import type { IAlgorithmClass } from "../scripts/alg";

  export let algorithm: IAlgorithmClass
  export let isActive: boolean

  const commonStyles = {
    button: `my-[2px] p-[1px] 
            sm:text-sm 
            rounded-md shadow-md cursor-pointer select-none`,
  };
  const localStyles = {
    main: `hover:text-[2.95vw] sm:hover:text-[19px] transition-all duration-100 cursor-pointer group`,
    left: `${isActive ? 'bg-gradient-to-r from-teal-500 via-green-500 to-lime-500' : 'text-lime-100/40'}`,
    right: `${isActive ? 'bg-gradient-to-r from-red-500 via-orange-500 to-amber-500' : 'text-red-100/40'}`,
    active: "text-[2.9vw] sm:text-[18.5px] font-semibold bg-clip-text text-transparent",
    normal: "text-[2.8vw] sm:text-[17.5px] font-extralight",
  };
  const Styles = {
    setup: { 
      main: `px-1 rounded-sm text-[2vw] sm:text-[13px] text-stone-500 font-bold bg-stone-200/[.07]` 
    },
    display: {
      triggerGroup: `group/trigger ${ isActive ? 'font-extrabold' : 'font-bold'}`,
      triggerBase: `${isActive ? 'group-hover:text-white/40' : algorithm.isLefty ? 'group-hover:text-lime-300' : 'group-hover:text-red-300'}`,
      mods: `mx-[1px] text-[1.5vw] sm:text-[10px] text-stone-500 transition-all duration-100 group-hover:text-[1.6vw] group-hover:sm:text-[10.7px] 
      ${algorithm.isLefty ? 'group-hover/trigger:text-lime-100' : 'group-hover/trigger:text-red-100'}`,
      alg: `group-hover:text-stone-900 dark:group-hover:text-stone-100`,
    },
    copy: {
      main: `${commonStyles.button} text-[2vw] bg-stone-50/[.07]`
      // TODO: ^ on click animate a toast or scale up the button for a split second
    },
    expand: {
      main: `${commonStyles.button} px-1 text-[1.5vw] bg-stone-50/[.15]`
    },
    play: {
      main: `${commonStyles.button} sm:p-[1px] sm:px-2px-1 text-red-300 text-[1.3vw] bg-stone-50/[.15] hover:bg-stone-50/[.3] 
      transition-colors duration-75`
    },
  };

</script>

<slot name="play" css={Styles.play}/>
<span class="{localStyles.main} {isActive ? localStyles.active : localStyles.normal} {algorithm.isLefty ? localStyles.left : localStyles.right}">
  <slot name="setup" css={Styles.setup} />
  <slot name="display" css={Styles.display} />
</span>
<slot name="copy" css={Styles.copy} />
<slot name="expand" css={Styles.expand} />

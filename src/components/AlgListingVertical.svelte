<script lang="ts">
  import type { IAlgorithmClass } from "../scripts/alg";
  //TODO: move to activated on the set

  export let algorithm: IAlgorithmClass
  export let isActive: boolean

  const Styles = {
    container: {
      main: `hover:text-[2.95vw] sm:hover:text-[19px] transition-all duration-100 cursor-pointer group`,
      left: `${isActive ? 'bg-gradient-to-r from-teal-500 via-green-500 to-lime-500' : 'text-lime-100/40'}`,
      right: `${isActive ? 'bg-gradient-to-r from-red-500 via-orange-500 to-amber-500' : 'text-red-100/40'}`,
      active: "text-[2.9vw] sm:text-[18.5px] font-semibold bg-clip-text text-transparent",
      normal: "text-[2.8vw] sm:text-[17.5px] font-extralight",
    },
    setup: { 
      main: `px-1 rounded-sm text-[2vw] sm:text-[13px] text-stone-500 font-bold bg-stone-200/[.07]` 
    },
    display: {
      expandMove: `group-hover:text-stone-900 dark:group-hover:text-stone-100`,
    }
  };
</script>

<span class="{Styles.container.main} {isActive ? Styles.container.active : Styles.container.normal} {algorithm.isLefty ? Styles.container.left : Styles.container.right}">
  <slot name="setup" css={Styles} />
  <slot name="display" css={Styles} />
</span>
<slot name="copy" css={Styles} />
<slot name="expand" css={Styles} />

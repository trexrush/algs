<script lang="ts">
  export let isAlgVisDisplayed: boolean
  export let toggleDisplay: () => void

  $: Styles = {
    anim: {
      main: "absolute left-0 bottom-0 h-5 w-5 sm:h-7 sm:w-7 bg-red-300 dark:bg-red-500 rounded grid place-items-center font-black select-none"
    },
    hoverOverlay: {
      overlay: `absolute grid items-center text-center w-full h-full 
        text-2xl drop-shadow-md font-extrabold z-10 
        group-hover:backdrop-blur-[2px] group-hover:bg-opacity-30 group-hover:opacity-100 opacity-0`
    },
    image: {
      vcImg: "cursor-pointer"
    }
  };
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->

<div class="flex flex-row items-center justify-center cursor-pointer relative aspect-square sm:h-[128px] sm:w-[128px] h-[35%] w-[35%]">
  {#if !isAlgVisDisplayed}
    <div on:click={toggleDisplay}>
      <div class="relative group
      child:transition-all child:duration-300 child:ease-in-out">
        <slot name="hoverOverlay" css={Styles.hoverOverlay}/>
        <div class="group-hover:opacity-25 group-hover:scale-[.97]">
          <slot name="image" css={Styles.image}/>
        </div>
      </div>
    </div>
  {:else}
    <slot name="algAnimation" css={Styles.anim}/>
  {/if}
</div>
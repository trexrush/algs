<script lang="ts">
  import { onMount } from "svelte";
  import { image, timeout } from "./scripts/stores";
  import TwistyPlayer from "./TwistyPlayer.svelte";
  
  export let imgparams = {
    stage: "fl",
    view: "plan",
    rot: "",
    size: 128,
  }
  export let twistyplayerparams = {
    stage: 'full',
  }
  export let alg: string = "";

  let visualCubeImage: HTMLImageElement
  let twizzle: Boolean = false;
  const setTwizzle = () => {
    twizzle = !twizzle;
    console.log("twizze");
  };

  //   TODO: cache image so you dont fetch every time you generate the twizzle
  //   idk if this part of the code is even doing anything tbh
  onMount(async () => {
    if ($image.length < 1 || $timeout == true) {
        let url = `https://cubing.net/api/visualcube/?fmt=svg&bg=t&view=${imgparams.view}&size=${imgparams.size}&stage=${imgparams.stage.toLowerCase()}&case=${alg}${imgparams.rot}`
        const vcImage = await fetch(url, {headers: { 'mode':'no-cors'}})
        const blob = await vcImage.blob()
        $image = URL.createObjectURL(blob)
    }
    console.log($image)
    visualCubeImage.src = $image
})
</script>
<!-- svelte-ignore a11y-click-events-have-key-events -->

 <div class="relative">
    {#if !twizzle}
      <img bind:this={visualCubeImage} class="h-[{imgparams.size}px] w-[{imgparams.size}px]"
        on:click={setTwizzle}
        src='https://cubing.net/api/visualcube/?fmt=svg&bg=t&view={imgparams.view}&size={imgparams.size}&stage={imgparams.stage.toLowerCase()}&case={alg}{imgparams.rot}'
        alt="Alg Vis"
      />
    {:else}
      <TwistyPlayer {alg} stage={twistyplayerparams.stage}/>
      <div class=" absolute right-1 top-1 w-7 h-7 bg-red-300 rounded text-center" on:click={setTwizzle} >X</div>
    {/if}
  </div>

<style>

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  img {
    cursor: pointer;
    transition: transform .3s;
  }
  img:hover {
    transform: translate(0px, -8px) scale(1.1);
  }

</style>


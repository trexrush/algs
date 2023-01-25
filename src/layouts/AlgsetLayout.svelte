<script type="ts">
//   type IAlgset = string[];
//   interface IAlgsetData {
//     name: string;
//     image?: "vc" | "cubingjs" | "custom" | "local" | "none";
//     imgparams?: {
//       stage?: string;
//       view?: "plan" | "trans";
//       rot?: string;
//       puzzle?: string; // useless atm TODO: standardize this for the page + twistyplayer + visualcube
//       size?: number;
//       // rest is default
//     };
//     twistyplayerparams?: {
//       stage?: string;
//     };
//   }

  import SvelteAlgCard from "../components/SvelteAlgCard.svelte";
  export let data //: IAlgsetData;
  export let algset //: IAlgset;
</script>

<div class=" text-8xl w-full text-center">{data.name}</div>
{#each algset as alg}
  <SvelteAlgCard
    {alg}
    imgparams={data.imgparams}
    twistyplayerparams={data.twistyplayerparams}
  />
{/each}

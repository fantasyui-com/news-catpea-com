<script>
  import { onMount } from 'svelte';

  import startCase from "lodash/startCase.js";
  import img from '../../modules/img/index.js';
  import calculatePercent from 'calculate-percent';

  export let track;
  export let upcoming;
  export let playing;

  let live = false;
  onMount(() => {
    live = true;
  });




</script>

<style>

.header {

    background-repeat:no-repeat;
    background-position: center center;
    background-image:url('/radio-header.jpg');
    color:#FFF;
    font-family:Arial, Helvetica, sans-serif;
    min-height:23rem;
    filter: saturate(20%) brightness(20%);
}

</style>



<div class="card bg-dark text-white mb-5 shadow" style="min-height: 10rem;">

  <div style="max-height: 20rem; overflow: hidden;">
  {#if track.info.image}
    <img loading="lazy" src={img.lg(track.info.image)} class="card-img d-lg-none" alt={track.info.title} style="filter: saturate(20%) brightness(20%);">
    <img loading="lazy" src={img.lg(track.info.image)} class="card-img d-none d-lg-block" alt={track.info.title} style="position: relative; top: -50%; filter: saturate(20%) brightness(20%);">
  {:else}
    <div class="card-img header" alt={track.info.title}></div>
  {/if}
  </div>

  <div class="card-img-overlay">

    <h5 class="card-title text-muted d-lg-none">Now playing:</h5>
    <h3 class="card-title text-center d-lg-none pb-3">{@html track.info.title.replace(/ ([^ ]+$)/, '&nbsp;$1')}</h3>

    <h2 class="card-title text-muted d-none d-lg-block">Now playing:</h2>
    <h1 class="card-title text-center d-none d-lg-block pb-3">{@html track.info.title.replace(/ ([^ ]+$)/, '&nbsp;$1')}</h1>

    <p class="card-title text-center text-muted py-4">Upcoming: {@html upcoming.info.title.replace(/ ([^ ]+$)/, '&nbsp;$1')} <small class:d-none={calculatePercent(upcoming.meta.loaded,upcoming.meta.total) == 100}>({calculatePercent(upcoming.meta.loaded,upcoming.meta.total)}%)<small></p>

    <slot/>

  </div>



</div>

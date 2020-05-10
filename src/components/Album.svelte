<script>
  import { onMount } from 'svelte';
  import startCase from "lodash/startCase.js";
  import img from '../modules/img/index.js';

  export let data;
  export let duration;
  export let seek;
  export let playing;
  let live = false;
  onMount(() => {
    live = true;
  });

  function calculatePercent(value, upper, precision=0){
  let percent = (100.0 * parseFloat(value) / parseFloat(upper)) / 100;
  return  parseInt(percent * 100);
  }

  function displayTime(){
    let a = parseInt(seek) || 0;
    let b = parseInt(duration) || 0;

    // console.log(a,b)

    let response = ""
    response += new Date(a * 1000).toISOString().substr(14, 5);
    response += " / ";
    response += new Date(b * 1000).toISOString().substr(14, 5);

    // console.log(response);
    return response;
  }
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


<!-- <div class="card bg-dark text-white mb-5">

  <div class="card-body rounded" style="min-height: 5rem;">
    <h4 class="card-title">Now playing:</h4>
    <h1 class="card-title">{data.title}</h1>
  </div>

  <div class="card-body rounded">
    <slot/>
  </div>


  <div class="card-footer">
   <small class="text-muted">{displayTime(seek, duration)}</small>
  <div class="progress">
    <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: {calculatePercent(seek,duration,1)}%" aria-valuenow="{calculatePercent(seek,duration,1)}" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
  </div>

</div> -->





<div class="card bg-dark text-white mb-5 shadow">

  <div style="max-height: 20rem; overflow: hidden;">
  {#if data.image}
    <img src={img.lg(data.image)} class="card-img d-lg-none" alt={data.title} style="filter: saturate(20%) brightness(20%);">
    <img src={img.lg(data.image)} class="card-img d-none d-lg-block" alt={data.title} style="position: relative; top: -50%; filter: saturate(20%) brightness(20%);">
  {:else}
    <div class="card-img header" alt={data.title}></div>
  {/if}
  </div>

  <div class="card-img-overlay">

    <h4 class="card-title" class:invisible={!playing} class:visible={playing}>Now playing:</h4>
    <h1 class="card-title">{data.title}</h1>
    <slot/>

  </div>

  <div class="card-footer">
  <!-- {seek}/{duration} = {calculatePercent(seek,duration,1)}% -->
  <small class="text-muted">{displayTime(seek, duration)}</small>
  <div class="progress">
    <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: {calculatePercent(seek,duration,1)}%" aria-valuenow="{calculatePercent(seek,duration,1)}" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
  </div>

</div>

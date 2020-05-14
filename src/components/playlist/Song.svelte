<script>

  import img from '../../modules/img/index.js';
  import { onMount } from 'svelte';
  import { get } from 'svelte/store';
  import startCase from "lodash/startCase.js";
  import oneof from "oneof";

  import Progress from '../Progress.svelte';

  export let read;
  export let track;
  export let active;

  let live = false;

  onMount(() => {
    live = true;
  });

</script>

<style>

  .active {
    background: var(--secondary) !important;
    color: var(--light);
  }

  .clickable {
    cursor: pointer;
    transition: filter .5s, -webkit-filter .5s, background 1s, color .5s;
  }

  .clickable:hover:not(.active){
    background: var(--primary) !important;
    color: var(--light);
  }

  .illustration {
    border-width: 0;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  }

</style>

{#if track.info.image}
  <div class="card mb-2 clickable bg-image illustration" class:active={active} style="min-height: 100px; {live?`background-image: linear-gradient(135deg, rgba(33,33,33,0.55) 0%, rgba(0,43,54,1) 100%), url(${img.md(track.info.image)});`:''}">
    <div class="card-body">
      <p class="card-title"><img src="/icons/volume-up.svg" alt="" width="32" height="32" style="filter: invert(1);">&nbsp;{track.info.title}</p>
      <p class="card-text">
      {#if live}
        <small>{track.info.published}</small><br>
        <small>{track.info.ago}</small>
      {:else}
        <small>{track.info.published}</small>
      {/if}
      </p>
    </div>
    <div class="card-footer" class:invisible={track.meta.loaded==0}>
      <Progress color="warning" val={track.meta.loaded} max={track.meta.total}/>
    </div>
  </div>
{:else}
  <div class="card mb-2 clickable" class:active={active} style="min-height: 100px;">
    <div class="card-body">
      <p class="card-title"><img src="/icons/volume-up.svg" alt="" width="32" height="32" style="filter: invert(1);">&nbsp;{track.info.title}</p>
      <p class="card-text">
      {#if live}
        <small>{track.info.published}</small><br>
        <small>{track.info.ago}</small>
      {:else}
        <small>{track.info.published}</small>
      {/if}
      </p>
    </div>
    <div class="card-footer" class:invisible={track.meta.loaded==0}>
      <Progress color="warning" val={track.meta.loaded} max={track.meta.total}/>
    </div>
  </div>
{/if}

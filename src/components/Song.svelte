<script>

  import img from '../modules/img/index.js';
  import { onMount } from 'svelte';
  import { get } from 'svelte/store';
  import startCase from "lodash/startCase.js";
  import oneof from "oneof";

  export let read;
  export let data;
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

{#if data.image}
  <div class="card mb-2 clickable bg-image illustration" class:active={active} style="min-height: 100px; background-image: linear-gradient(135deg, rgba(33,33,33,0.55) 0%, rgba(0,43,54,1) 100%), url('{img.md(data.image)}');">
    <div class="card-body">
      <p class="card-title"><img src="/icons/volume-up.svg" alt="" width="32" height="32" style="filter: invert(1);">&nbsp;{data.title}</p>
      <p class="card-text">
      {#if live}
        <small>{data.published}</small><br>
        <small>{data.ago}</small>
      {:else}
        <small>{data.published}</small>
      {/if}
      </p>
    </div>
  </div>
{:else}
  <div class="card mb-2 clickable" class:active={active} style="min-height: 100px;">
    <div class="card-body">
      <p class="card-title"><img src="/icons/volume-up.svg" alt="" width="32" height="32" style="filter: invert(1);">&nbsp;{data.title}</p>
      <p class="card-text">
      {#if live}
        <small>{data.published}</small><br>
        <small>{data.ago}</small>
      {:else}
        <small>{data.published}</small>
      {/if}
      </p>
    </div>
  </div>
{/if}

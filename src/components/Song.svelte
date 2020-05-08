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

.illustration {
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    color:#FFF;
    font-family: Arial, Helvetica, sans-serif;
}

</style>

{#if data.image}

  <div class="card mb-2" class:bg-dark={!active} class:bg-info={active} style="cursor: pointer; min-height: 100px;">
    <div class="row no-gutters">

      <div class="col-md-8">
        <div class="card-body">
          <p class="card-title" class:text-muted={!active} class:text-white={active}>{data.title}</p>
          <p class="card-text">
          {#if live}
            <small class:text-muted={!active} class:text-white={active}>{data.published}</small><br>
            <small class:text-muted={!active} class:text-white={active}>{data.ago}</small>
          {:else}
            <small class:text-muted={!active} class:text-white={active}>{data.published}</small>
          {/if}
          </p>
        </div>
      </div>

      <div class="col-md-4 rounded illustration" style="background-image:url('{img.md(data.image)}');">
        <!-- <img src={img.sm(data.image)} class="card-img shadow" alt={data.title}> -->
      </div>

    </div>
  </div>

{:else}

  <div class="card mb-2" class:bg-dark={!active} class:bg-info={active} style="cursor: pointer; min-height: 100px;">
    <div class="card-body">
      <h5 class="card-title" class:text-muted={!active} class:text-white={active}>{data.title}</h5>
      <p class="card-text">
      {#if live}
        <small class:text-muted={!active} class:text-white={active}>{data.published}</small><br>
        <small class:text-muted={!active} class:text-white={active}>{data.ago}</small>
      {:else}
        <small class:text-muted={!active} class:text-white={active}>{data.published}</small>
      {/if}
      </p>
    </div>
  </div>

{/if}

<!--
<div class="media mb-3 rounded" class:bg-dark={!active} class:bg-info={active} style="cursor: pointer; min-height: 100px;">

  <div class="media-body p-4">
    <div class="text-truncate">
      <h6 class="mt-0 mb-0" class:text-white={active}> {data.title} </h6>
    </div>
    {#if live}
      <small class:text-muted={!active} class:text-white={active}>{data.ago}</small>
    {:else}
      <small class:text-muted={!active} class:text-white={active}>{data.published}</small>
    {/if}
  </div>

  {#if data.image}
    <img src={img.sm(data.image)} class="rounded" alt={data.title}>
  {/if}

</div> -->

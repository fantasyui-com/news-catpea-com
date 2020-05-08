<script>

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


  const icons = [
    //'radio-icon-a.jpg',
    //'radio-icon-b.jpg',
    'radio-icon-c.jpg',
    'radio-icon-d.jpg'
  ]


</script>

<div class="media mb-3 rounded" class:bg-dark={!active} class:bg-info={active} style="cursor: pointer;">
  <div style="width: 64px; overflow: hidden;" class="mr-3">
  {#if data.image}
  <img src={data.image} style="height: 64px; width: auto;" class="rounded" alt={data.title}>
  {:else}
  <img src="{oneof(icons)}" style="height: 64px; width: auto;" class="rounded" alt={data.title}>
  {/if}
  </div>
  <div class="media-body pt-2">
    <h6 class="mt-0 mb-0" class:text-white={active}>{data.title}</h6>
    {#if live}
      <small class:text-muted={!active} class:text-white={active}>{data.published} &middot; {data.ago}</small>
    {:else}
      <small class:text-muted={!active} class:text-white={active}>{data.published}</small>
    {/if}
  </div>
</div>

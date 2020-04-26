<script>
  import { onMount, onDestroy } from 'svelte';
  import { slide } from 'svelte/transition';
  import { get } from 'svelte/store';
  import moment from "moment";
  import db from '../modules/db/index.js';
  import configuration from '../modules/configuration/index.js';
  export let segment;
  export let opened = false;

  let live = false;

  const conf = configuration();

  onDestroy(() => {

  });

  onMount(() => {
    live = true;
  });


  export let lg;
  export let base;
  export let collection;
  export let index;

  $: hasNext = (((index+1)+1) <= collection.length);
  $: hasPrev = ((index-1) >= 0);

  $: next = hasNext?collection[index+1]:collection[0];
  $: prev = hasPrev?collection[index-1]:collection[0];

</script>

<style>

</style>

<nav class="d-none d-md-block" style="position: fixed; left: 1rem; top: 5rem;">


  {#if hasNext}
    <a class="btn btn-lg btn-outline-info mb-2 d-block" title={prev.title} href="{base}/{next.id}"><img src="/icons/chevron-double-left.svg" alt="" width="16" height="16" style="filter: invert(1);"></a>
  {:else}
    <a class="btn btn-lg btn-outline-danger mb-2 d-block disabled" title={prev.title} href="{base}/{next.id}"><img src="/icons/chevron-double-left.svg" alt="" width="16" height="16" style="filter: invert(1);"></a>
  {/if}

  {#if hasPrev}
    <a class="btn btn-lg btn-outline-info mb-2 d-block" title={prev.title} href="{base}/{prev.id}"><img src="icons/chevron-double-right.svg" alt="" width="16" height="16" style="filter: invert(1);"></a>
  {:else}
    <a class="btn btn-lg btn-outline-danger mb-2 d-block disabled" title={prev.title} href="{base}/{prev.id}"><img src="icons/chevron-double-right.svg" alt="" width="16" height="16" style="filter: invert(1);"></a>

  {/if}

  <hr class="mb-4 border-0">

  <a class="btn btn-lg btn-outline-info mb-2 d-block" href="/"><img src="/icons/view-stacked.svg" alt="" width="16" height="16" style="filter: invert(1);"></a>

  <a class="btn btn-lg btn-outline-info mb-2 d-block" href="/category"><img src="/icons/card-list.svg" alt="" width="16" height="16" style="filter: invert(1);"></a>

  <a class="btn btn-lg btn-outline-info mb-2 d-block" href="/tag"><img src="/icons/tag.svg" alt="" width="16" height="16" style="filter: invert(1);"></a>



</nav>

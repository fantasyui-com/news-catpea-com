<script>

  let live = false;

  import { onMount, onDestroy } from 'svelte';

  import { slide } from 'svelte/transition';
  import startCase from "lodash/startCase.js";

  export let post;

  export let description;
  export let posts = false;
  export let categories = false;
  export let tags = false;

  export let untag = false;
  export let uncategorize = false;

  export let opened = false;

  onMount(function(){
    live = true;
  })

</script>
<div class="card mb-3 shadow">
  <div class="card-header" on:click={()=>opened=!opened}>
    <div class="text-truncate small">
    {#if live}<button class="btn btn-outline-info btn-sm d-inline mr-2 focus-0"><img src="/icons/{opened?'arrows-collapse':'arrows-expand'}.svg" alt="" width="16" height="16" style="filter: invert(1);"></button>{/if}
    {description}
    </div>
  </div>

  {#if (live?opened:true) }
    <div class="card-body" in:slide={{ duration: 1500 }} out:slide={{ duration: 100 }}>
      {#if posts}<a class="btn btn-sm btn-outline-info mt-1" href="/"><img src="/icons/view-stacked.svg" alt="" width="16" height="16" style="filter: invert(1);"> All Posts</a>{/if}
      {#if categories}<a class="btn btn-sm btn-outline-info mt-1" href="/category"><img src="/icons/card-list.svg" alt="" width="16" height="16" style="filter: invert(1);"> Browse Categories</a>{/if}
      {#if tags}<a class="btn btn-sm btn-outline-info mt-1" href="/tag"><img src="/icons/tag.svg" alt="" width="16" height="16" style="filter: invert(1);"> Browse Tags</a>{/if}
      {#if untag}<a class="btn btn-sm btn-outline-warning mt-1" href="/read/{post}"><img src="/icons/x-octagon.svg" alt="" width="16" height="16" style="filter: invert(1);"> Untag</a>{/if}
      {#if uncategorize}<a class="btn btn-sm btn-outline-warning mt-1" href="/read/{post}"><img src="/icons/x-octagon.svg" alt="" width="16" height="16" style="filter: invert(1);"> Uncategorize</a>{/if}
    </div>
  {/if}
</div>

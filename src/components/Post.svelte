<script>

  import { onMount } from 'svelte';
  import { get } from 'svelte/store';

  import startCase from "lodash/startCase.js";

   export let read;
   export let data;

   let { id, title, category, tags, audio, date, draft, deleted, html, published, ago, today } = data;

  let live = false;
  onMount(() => {
    live = true;
  });

</script>


<div class="card mb-5 article-link shadow" class:border-danger={live && $today}>
  <div class="card-body py-4 px-3">

    <h5 class="card-title pb-2"><a class="text-light" href={read}>{title}</a></h5>

    <h6 class="card-subtitle ml-3 mb-2"><img src="/icons/envelope.svg" alt="" width="16" height="16" style="filter: invert(1);"> Posted {live?$ago:published} in <a href="/category/{category}">{startCase(category)}</a>.</h6>

    <p class="card-text">
      <small class="ml-3 d-block">
        {#if tags.length}
          <img src="/icons/tag.svg" alt="" width="16" height="16" style="filter: invert(1);">
          Tagged with
          {#each tags.split(' ') as tag, index}
            <a class="text-warning" href="/tag/{tag}">{tag}</a>{#if tags.split(' ').length !== (index+1)},&nbsp{:else}.{/if}
          {/each}
        {/if}
      </small>
    </p>

    <a href={read} class="btn btn-outline-success btn-sm ml-3 mb-2"><img src="/icons/file-earmark-text.svg" alt="" width="16" height="16" style="filter: invert(1);"> Read</a>
    <a href={audio} class="btn btn-outline-info btn-sm ml-3 mb-2" class:d-none={!audio}><img src="/icons/play.svg" alt="" width="16" height="16" style="filter: invert(1);"> Listen</a>

  </div>
</div>

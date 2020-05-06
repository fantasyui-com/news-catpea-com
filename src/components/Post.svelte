<script>

  import { onMount } from 'svelte';
  import { get } from 'svelte/store';

  import startCase from "lodash/startCase.js";

   export let read;
   export let data;

  let live = false;

  onMount(() => {
    live = true;
  });

</script>

{#if data.image}

<div class="card mb-5 article-link shadow" class:border-danger={live && data.today}>
  <div class="row no-gutters">

    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title"><a class="text-light" href={read}>{data.title}</a></h5>
        <h6 class="card-subtitle ml-3 mb-2"><img src="/icons/envelope.svg" alt="" width="16" height="16" style="filter: invert(1);"> Posted {live?data.ago:data.published} in <a href="/category/{data.category}">{startCase(data.category)}</a>.</h6>
        <p class="card-text">
          <small class="ml-3 d-block">
            {#if data.tags.length}
              <img src="/icons/tag.svg" alt="" width="16" height="16" style="filter: invert(1);">
              Tagged with
              {#each data.tags.split(' ') as tag, index}
                <a class="text-warning" href="/tag/{tag}">{tag}</a>{#if data.tags.split(' ').length !== (index+1)},&nbsp{:else}.{/if}
              {/each}
            {/if}
          </small>
        </p>
        <a href={read} class="btn btn-outline-success btn-sm ml-3"><img src="/icons/file-earmark-text.svg" alt="" width="16" height="16" style="filter: invert(1);"> Read</a>
        <a href={data.audio} class="btn btn-outline-info btn-sm ml-3" class:d-none={!data.audio}><img src="/icons/play.svg" alt="" width="16" height="16" style="filter: invert(1);"> Listen</a>
      </div>
    </div>
    <div class="col-md-4">
      <a href={read}><img src="{data.image}" class="card-img" alt="Illustration"></a>
    </div>
  </div>
</div>

{:else}

<div class="card mb-5 article-link shadow" class:border-danger={live && data.today}>
  <div class="card-body py-4 px-3">
    <h5 class="card-title"><a class="text-light" href={read}>{data.title}</a></h5>
    <h6 class="card-subtitle ml-3 mb-2"><img src="/icons/envelope.svg" alt="" width="16" height="16" style="filter: invert(1);"> Posted {live?data.ago:data.published} in <a href="/category/{data.category}">{startCase(data.category)}</a>.</h6>
    <p class="card-text">
      <small class="ml-3 d-block">
        {#if data.tags.length}
          <img src="/icons/tag.svg" alt="" width="16" height="16" style="filter: invert(1);">
          Tagged with
          {#each data.tags.split(' ') as tag, index}
            <a class="text-warning" href="/tag/{tag}">{tag}</a>{#if data.tags.split(' ').length !== (index+1)},&nbsp{:else}.{/if}
          {/each}
        {/if}
      </small>
    </p>
    <a href={read} class="btn btn-outline-success btn-sm ml-3"><img src="/icons/file-earmark-text.svg" alt="" width="16" height="16" style="filter: invert(1);"> Read</a>
    <a href={data.audio} class="btn btn-outline-info btn-sm ml-3" class:d-none={!data.audio}><img src="/icons/play.svg" alt="" width="16" height="16" style="filter: invert(1);"> Listen</a>
  </div>
</div>

{/if}

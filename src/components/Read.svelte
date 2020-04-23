<script>

  import { onMount } from 'svelte';

  import startCase from "lodash/startCase.js";

  export let data;

  let { id, title, category, tags, audio, date, draft, deleted, html, published, ago, today } = data;

  let live = false;
  onMount(() => {
    live = true;
  });

</script>





<a href={audio} class="btn btn-lg btn-outline-info mb-4" class:d-inline-block={audio} class:d-none={!audio}><img src="/icons/play.svg" alt="" width="16" height="16" style="filter: invert(1);"> Listen</a>

<div class="small">
    Posted {live?$ago:published}

    in <a href="/category/{category}">{startCase(category)}</a>.
    {#if tags.length}
      Tagged with
      {#each tags.split(' ') as tag, index}
        <a href="/tag/{tag}">{tag}</a>{#if tags.split(' ').length !== (index+1)},&nbsp;{:else}.{/if}
      {/each}
    {/if}
</div>

<hr class="border-info mb-5">

<div class="mb-4">
  <h1 class="lead">{title}</h1>
</div>

<div class="ml-3">
  <p>{@html html}</p>
</div>




<hr class="border-info my-5">

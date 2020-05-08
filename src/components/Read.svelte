<script>

  import { onMount } from 'svelte';

  import startCase from "lodash/startCase.js";

  export let data;

  let live = false;

  onMount(() => {
    live = true;
  });

</script>




<div class="pb-4" class:d-block={data.image} class:d-none={!data.image}><img src={data.image} class="rounded bg-info img-fluid" style="smax-width: 25rem; height:auto;"></div>

<a href={data.audio} target="_blank" class="btn btn-lg btn-outline-info mb-4" class:d-inline-block={data.audio} class:d-none={!data.audio}><img src="/icons/play.svg" alt="" width="16" height="16" style="filter: invert(1);"> Listen</a>


<div class="small">
    Posted {live?data.ago:data.published}

    in <a href="/category/{data.category}">{startCase(data.category)}</a>.
    {#if data.tags.length}
      Tagged with
      {#each data.tags.split(' ') as tag, index}
        <a href="/tag/{tag}">{tag}</a>{#if data.tags.split(' ').length !== (index+1)},&nbsp;{:else}.{/if}
      {/each}
    {/if}
</div>

<hr class="mb-5" class:border-info={!data.today} class:border-danger={data.today}>

<div class="mb-4">
  <h1 class="lead">{data.title}</h1>
</div>

<div class="ml-3">
  <p>{@html data.html}</p>
</div>




<hr class="my-5" class:border-info={!data.today} class:border-danger={data.today}>

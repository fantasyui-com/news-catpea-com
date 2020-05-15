<script>

  import { onMount } from 'svelte';

  import startCase from "lodash/startCase.js";

  export let read;
  export let track;

  let live = false;

  onMount(() => {
    live = true;
  });

</script>





<!-- <div class="mb-4">
  <h2>{track.info.title}</h2>
</div> -->

<div class="small">
    <a class="text-light" href={read}>{track.info.title}</a>,

    Posted {live?track.info.ago:track.info.published}

    in <a href="/category/{track.info.category}">{startCase(track.info.category)}</a>.
    {#if track.info.tags.length}
      Tagged with
      {#each track.info.tags.split(' ') as tag, index}
        <a href="/tag/{tag}">{tag}</a>{#if track.info.tags.split(' ').length !== (index+1)},&nbsp;{:else}.{/if}
      {/each}
    {/if}
</div>

<hr class="mb-5" class:border-info={!track.info.today} class:border-danger={track.info.today}>

<div class="pb-4" class:d-block={track.info.image} class:d-none={!track.info.image}><img loading="lazy" src={track.info.image} class="rounded bg-info img-fluid" style="smax-width: 25rem; height:auto;"></div>

<hr class="mb-5" class:d-block={track.info.image} class:d-none={!track.info.image} class:border-info={!track.info.today} class:border-danger={track.info.today}>



<div class="ml-3">
  <p>{@html track.info.html}</p>
</div>




<hr class="my-5" class:border-info={!track.info.today} class:border-danger={track.info.today}>

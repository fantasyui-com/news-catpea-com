<script>
  import startCase from "lodash/startCase.js";
  export let data;

</script>





<a href={data.audio} class="btn btn-lg btn-outline-info mb-4" class:d-inline-block={data.audio} class:d-none={!data.audio}><img src="/icons/play.svg" alt="" width="16" height="16" style="filter: invert(1);"> Listen</a>

<div class="small">
    Posted {data.ago}
    in <a href="/category/{data.category}">{startCase(data.category)}</a>.
    {#if data.tags.length}
      Tagged with
      {#each data.tags.split(' ') as tag, index}
        <a href="/tag/{tag}">{tag}</a>{#if data.tags.split(' ').length !== (index+1)},&nbsp;{:else}.{/if}
      {/each}
    {/if}
</div>

<hr class="border-info mb-5">

<div class="mb-4">
  <h1 class="lead">{data.title}</h1>
</div>

<div class="ml-3">
  <p>{@html data.html}</p>
</div>




<hr class="border-info my-5">

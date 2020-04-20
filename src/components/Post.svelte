<script>
  import startCase from "lodash/startCase.js";

  export let data;
  export let read;

</script>

<div class="card mb-5 article-link">
  <div class="card-body py-4 px-3">
    <h5 class="card-title pb-2"><a class="text-light" href={read}>{data.title} &raquo;</a></h5>
    <h6 class="card-subtitle ml-3"><img src="/icons/envelope.svg" alt="" width="16" height="16"> Posted {data.ago} in <a href="/category/{data.category}">{startCase(data.category)}</a>.</h6>
    <small class="ml-3">
      {#if data.tags.length}
        <img src="/icons/tag.svg" alt="" width="16" height="16">
        Tagged with
          {#each data.tags.split(' ') as tag, index}
            <a class="text-warning" href="/tag/{tag}">{tag}</a>
            {#if data.tags.split(' ').length !== (index+1)},{/if}
          {/each}
        {/if}
      </small>
  </div>
</div>

<script>

  export let lg;
  export let base;
  export let collection;
  export let index;

  $: hasNext = (((index+1)+1) <= collection.length);
  $: hasPrev = ((index-1) >= 0);

  $: next = hasNext?collection[index+1]:collection[0];
  $: prev = hasPrev?collection[index-1]:collection[0];

</script>

<nav aria-label="Post Navigation">

  <ul class="pagination" class:pagination-sm={!lg} class:pagination-lg={lg}>

    {#if hasNext}
      <li class="page-item"><a class="page-link bg-dark border-0" title={prev.title} href="{base}/{next.id}">&laquo; Older</a></li>
    {:else}
      <li class="page-item disabled"><span class="page-link bg-dark border-0"><s>&times; Older</s></span></li>
    {/if}

    {#if hasPrev}
      <li class="page-item"><a class="page-link bg-dark border-0" title={prev.title} href="{base}/{prev.id}">Newer &raquo;</a></li>
    {:else}
      <li class="page-item disabled"><span class="page-link bg-dark border-0"><s>Newer &times;</s></span></li>
    {/if}

  </ul>

</nav>

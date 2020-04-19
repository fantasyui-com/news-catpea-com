<!-- prints contents of post -->
<script context="module">
  // the (optional) preload function takes a
  // `{ path, params, query }` object and turns it into
  // the data we need to render the page
  export async function preload(page, session) {
    // the `slug` parameter is available because this file
    // is called [slug].svelte
    const { post } = page.params;

    // `this.fetch` is a wrapper around `fetch` that allows
    // you to make credentialled requests on both
    // server and client
    // const res = await this.fetch(`blog/${slug}.json`);
    // const article = await res.json();

    return { post };
  }
</script>

<script>
  export let post;

  import { onMount, beforeUpdate, afterUpdate, onDestroy } from 'svelte';

  import moment from "moment";
  import db from '../../modules/db/index.js';

  let collection = db();

  function recalculateTimestamps(){
    collection = collection.map(i=>{ i.ago = moment(i.date).from(moment()); return i; })
  }

  let intervalId = null;
  intervalId = setInterval(recalculateTimestamps,60000)
  recalculateTimestamps();


  function idToIndex(id){
    let response = 0;
    let filtered = collection.filter(o=>o.id===id);
    if(filtered.length > 0){
      let selected = filtered.pop();
      response = collection.indexOf(selected);
    }
    return response;
  }



  $: index = idToIndex(post);
  $: item = collection[index];

  $: hasNext = (((index+1)+1) <= collection.length);
  $: hasPrev = ((index-1) >= 0);

  $: next = hasNext?collection[index+1]:collection[0];
  $: prev = hasPrev?collection[index-1]:collection[0];





  onDestroy(() => {
    clearInterval(intervalId);
  });

  onMount(() => {

  });




</script>

<main role="main">
  <section>
    <div class="container">

    <div class="row mt-5">
      <div class="col-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6 offset-xxl-3 col-xxl-6">
      <span class="text-warning small">Reading post with navigation in all categories</span> &middot <a class="small" href="/explore">list available categories</a>
      </div>
    </div>

      <div class="row mt-5">
      <div class="col-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6 offset-xxl-3 col-xxl-6">

      <nav aria-label="" class="my-5">
        <ul class="pagination pagination-sm">



          {#if hasNext}
          <li class="page-item"><a class="page-link bg-dark border-0" title={prev.title} href="/read/{next.id}">&laquo; Older</a></li>
          {:else}
          <li class="page-item disabled"><span class="page-link bg-dark border-0"><s>&times; Older</s></span></li>
          {/if}
          {#if hasPrev}
            <li class="page-item"><a class="page-link bg-dark border-0" title={prev.title} href="/read/{prev.id}">Newer &raquo;</a></li>
          {:else}
            <li class="page-item disabled"><span class="page-link bg-dark border-0"><s>Newer &times;</s></span></li>
          {/if}


        </ul>
      </nav>

        <div class="mb-5">
          <div>
            <a href="/read/{item.id}" class="text-muted lead">{item.title} </a>
          </div>
          <div class="ml-3">
            <span class="text-warning small">&mdash; {item.ago}</span> &middot; <span class="text-info small">{item.category}</span>
          </div>
        </div>

        <p>{@html item.html}</p>

        <nav aria-label="" class="my-5">
          <ul class="pagination pagination-lg">



          {#if hasNext}
          <li class="page-item"><a class="page-link bg-dark border-0" title={prev.title} href="/read/{next.id}">&laquo; Older</a></li>
          {:else}
          <li class="page-item disabled"><span class="page-link bg-dark border-0"><s>&times; Older</s></span></li>
          {/if}
          {#if hasPrev}
            <li class="page-item"><a class="page-link bg-dark border-0" title={prev.title} href="/read/{prev.id}">Newer &raquo;</a></li>
          {:else}
            <li class="page-item disabled"><span class="page-link bg-dark border-0"><s>Newer &times;</s></span></li>
          {/if}

          </ul>
        </nav>

      </div>
    </div>
  </div>
</section>
</main>

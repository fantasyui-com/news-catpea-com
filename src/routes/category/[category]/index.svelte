<!-- lists posts in a category -->
<script context="module">
  // the (optional) preload function takes a
  // `{ path, params, query }` object and turns it into
  // the data we need to render the page
  export async function preload(page, session) {
    // the `slug` parameter is available because this file
    // is called [slug].svelte
    const { category } = page.params;


    // `this.fetch` is a wrapper around `fetch` that allows
    // you to make credentialled requests on both
    // server and client
    // const res = await this.fetch(`blog/${slug}.json`);
    // const article = await res.json();

    return { category };
  }
</script>

<script>
  export let category;

  import { onMount, beforeUpdate, afterUpdate, onDestroy } from 'svelte';

  import moment from "moment";
  import startCase from "lodash/startCase.js";
  import db from '../../../modules/db/index.js';

  $: collection = db().filter(o=>o.category === category);

  function recalculateTimestamps(){
    collection = collection.map(i=>{ i.ago = moment(i.date).from(moment()); return i; })
  }

  let intervalId = null;
  intervalId = setInterval(recalculateTimestamps,60000)


  onDestroy(() => {
    clearInterval(intervalId);
  });

  onMount(() => {
    recalculateTimestamps();
  });




</script>



<style>

</style>

<svelte:head>
  <title>CATPEA! NEWS</title>
</svelte:head>


<!-- <Icon name="squirrel" color="dark" class="mr-2"/> -->
<main role="main">
  <section>
    <div class="container">
      <!-- <div class="row mt-5">
      <div class="col-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6 offset-xxl-3 col-xxl-6">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb bg-dark">
            <li class="breadcrumb-item"><a href=".">News</a></li>
            <li class="breadcrumb-item active" aria-current="page">Research</li>
          </ol>
        </nav>
      </div>
      </div> -->

      <div class="row mt-5">
        <div class="col-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6 offset-xxl-3 col-xxl-6">
        <span class="text-warning small">Showing posts in {category} category only</span> &middot <a class="small" href="/">show all posts</a> &middot <a class="small" href="/explore">list available categories</a>
        </div>
      </div>

      <div class="row mt-5">
      <div class="col-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6 offset-xxl-3 col-xxl-6">

          {#each collection as item, i}
          <div class="mb-5">
            <h1 class="lead"><a href="/explore/{category}/read/{item.id}" class="text-muted">{item.title}</a></h1>
            <small class="ml-3">
              &mdash;
              <span class="text-warning">Posted {item.ago}</span>
              &middot;
              in <span class="text-info"></span>
              <a href="/explore/{item.category}">{startCase(item.category)}</a>
              {#if item.tags.length}&middot; {#each item.tags.split(' ') as tag}<a href="/tags/{tag}">#{tag}</a>&nbsp;{/each}{/if}
            </small>
          </div>
          {/each}

        </div>
      </div>
    </div>
  </section>
</main>

<footer class="text-muted">
  <div class="container">
    <p class="float-right">
      <a href="#top">back to top</a>
    </p>
    <p><a href="https://catpea.com/">catpea.com</a></p>
  </div>
</footer>

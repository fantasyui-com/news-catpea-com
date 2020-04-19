<script>

  import { onMount, beforeUpdate, afterUpdate, onDestroy } from 'svelte';


  import moment from "moment";
  import startCase from "lodash/startCase.js";

  import db from '../modules/db/index.js';


  let collection = db();

  function recalculateTimestamps(){
    collection = collection.map(i=>{ i.ago = moment(i.date).from(moment()); return i; })
  }

  let intervalId = null;

  intervalId = setInterval(recalculateTimestamps,60000)
  recalculateTimestamps();

  onDestroy(() => {
    clearInterval(intervalId);
  });

  onMount(() => {
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

    <div class="row mt-5">
      <div class="col-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6 offset-xxl-3 col-xxl-6">
      <span class="text-warning small">Showing all posts</span> &middot <a class="small" href="/explore">list categories</a> &middot <a class="small" href="/tags">list tags</a>
      </div>
    </div>


      <div class="row mt-5">
      <div class="col-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6 offset-xxl-3 col-xxl-6">



          <!-- {#each collection as item, i}
            <div class="mb-5">
              <div>

              </div>
              <div class="ml-3">
                <span class="text-warning small">&mdash; {item.ago}</span> &middot; <span class="small">in</span> <a class="small" href="/explore/{item.category}">{item.category}</a> &middot; {#each item.tags.split(' ') as tag}<a class="small" href="/tags/{tag}">#{tag}</a>{/each}
              </div>
            </div>
          {/each} -->

          {#each collection as item, i}
            <div class="mb-5">
              <h1 class="lead"><a href="/read/{item.id}" class="text-muted">{item.title}</a></h1>
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

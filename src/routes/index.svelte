<script>

  import { onMount, beforeUpdate, afterUpdate, onDestroy } from 'svelte';


  import moment from "moment";

  import db from '../modules/db/index.js';
  import Icon from '../../../catpea-com/src/controls/Icon.svelte';

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



          {#each collection as item, i}
            <div class="mb-5">
              <div>
                <a href="/read/{item.id}" class="text-muted lead">{item.title}</a>
              </div>
              <div class="ml-3">
                <span class="text-warning small">&mdash; {item.ago}</span> &middot; <span class="text-info small">{item.category}</span>
              </div>
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

<script>

  import { onMount, beforeUpdate, afterUpdate, onDestroy } from 'svelte';
  import moment from "moment";
  import Post from '../components/Post.svelte';
  import Sub from '../components/Sub.svelte';
  import db from '../modules/db/index.js';


  let collection = db();

  function recalculateTimestamps(){
    collection = collection.map(i=>{ i.ago = moment(i.date).from(moment()); return i; })
    collection.map(i=>{ i.today = (moment().diff(moment(i.date), 'days') < 1); return i; })

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

<main role="main">
  <section>
    <div class="container">

      <div class="row mt-5">
        <div class="col-12 offset-md-1 col-md-10 offset-xxl-3 col-xxl-6">
        <Sub description="Showing all posts" categories=true tags=true></Sub>
        </div>
      </div>

      <div class="row mt-5">
      <div class="col-12 offset-md-1 col-md-10 offset-xxl-3 col-xxl-6">
          {#each collection as data}
            <Post {data} read="/read/{data.id}"/>
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

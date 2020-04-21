<script>

  import { onMount, beforeUpdate, afterUpdate, onDestroy } from 'svelte';
  import moment from "moment";

  import Post from '../components/Post.svelte';
  import Sub from '../components/Sub.svelte';
  import Tail from '../components/Tail.svelte';
  import db from '../modules/db/index.js';
  import configuration from '../modules/configuration/index.js';

  const conf = configuration();

  let collection = db();
  function recalculateTimestamps(){
    collection = collection.map(i=>{ i.ago = moment(i.date).from(moment()); return i; })
    collection.map(i=>{ i.today = (moment().diff(moment(i.date), 'days') < 1); return i; })
  }

  let intervalId = null;
  intervalId = setInterval(recalculateTimestamps,60000)
  onDestroy(() => {
    clearInterval(intervalId);
  });

  recalculateTimestamps();

  onMount(() => {
  });

</script>

<style>

</style>

<svelte:head>
  <title>{conf.title}</title>
</svelte:head>

<main role="main">
  <section>
    <div class="container">

      <div class="row mt-5">
        <div class="{conf.column}">
        <Sub description="Showing all {collection.length} posts" categories=true tags=true></Sub>
        </div>
      </div>

      <div class="row mt-5">
        <div class="{conf.column}">
          {#each collection as data}
            <Post {data} read="/read/{data.id}"/>
          {/each}
        </div>
      </div>

    </div>
  </section>
</main>

<Tail/>

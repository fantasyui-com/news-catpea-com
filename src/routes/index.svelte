<script>

  import { onMount, onDestroy } from 'svelte';
  import moment from "moment";
  import Post from '../components/Post.svelte';
  import Sub from '../components/Sub.svelte';
  import Tail from '../components/Tail.svelte';

  import db from '../modules/db/index.js';
  import configuration from '../modules/configuration/index.js';

  const conf = configuration();
  let live = false;
  let intervalId = null;

  let collection = db();

  function recalculateTimestamps(){
    collection = collection.map(o=>{ o.ago = moment(o.date).from(moment()); return o; });
    collection = collection.map(o=>{ o.today = (moment().diff(moment(o.date), 'days') < 1); return o; });

    if(conf.blinkenlighten){
      collection = collection.map(o=>{ o.ago = moment(  moment(o.date).add(parseInt(31*Math.random()), 'days')  ).from(moment()); return o; });
      collection = collection.map((o,i)=>{ o.today = (Math.random() < 0.5); return o; });
    }
  }

  recalculateTimestamps();

  onDestroy(() => {
    clearInterval(intervalId);
  });

  onMount(() => {
    live = true;
    intervalId = setInterval(recalculateTimestamps, conf.recalculateInterval)
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
        <Sub description="Showing All {collection.length} Posts" opened categories=true tags=true></Sub>
        </div>
      </div>

      <div class="row mt-5">
        <div class="{conf.column}">
          {#each collection as data}
            <Post {data} read="/read/{data.id}"/>
          {/each}
        </div>
      </div>

      <div class="row mt-5">
        <div class="{conf.column}">
        <Sub description="Showing All {collection.length} Posts" opened categories=true tags=true></Sub>
        </div>
      </div>

    </div>
  </section>
</main>

<Tail/>

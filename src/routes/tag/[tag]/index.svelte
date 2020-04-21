<!-- lists posts in a category -->
<script context="module">
  // the (optional) preload function takes a
  // `{ path, params, query }` object and turns it into
  // the data we need to render the page
  export async function preload(page, session) {
    // the `slug` parameter is available because this file
    // is called [slug].svelte
    const { tag } = page.params;


    // `this.fetch` is a wrapper around `fetch` that allows
    // you to make credentialled requests on both
    // server and client
    // const res = await this.fetch(`blog/${slug}.json`);
    // const article = await res.json();

    return { tag };
  }
</script>

<script>
  export let tag;

  import { onMount, beforeUpdate, afterUpdate, onDestroy } from 'svelte';
  import Sub from '../../../components/Sub.svelte';
  import Tail from '../../../components/Tail.svelte';
  import Post from '../../../components/Post.svelte';

  import moment from "moment";
  import startCase from "lodash/startCase.js";

  import db from '../../../modules/db/index.js';
  import configuration from '../../../modules/configuration/index.js';

  const conf = configuration();

  $: collection = db().filter(o=>o.tags.split(' ').includes(tag));

  function recalculateTimestamps(){
    collection = collection.map(i=>{ i.ago = moment(i.date).from(moment()); return i; })
    collection.map(i=>{ i.today = (moment().diff(moment(i.date), 'days') < 1); return i; })
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
  <title>{conf.title}</title>
</svelte:head>

<main role="main">
  <section>
    <div class="container">
      <div class="row mt-5">
        <div class="col-12 offset-md-1 col-md-10 offset-xxl-3 col-xxl-6">
          <Sub description="Showing posts tagged {tag}" posts tags categories></Sub>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-12 offset-md-1 col-md-10 offset-xxl-3 col-xxl-6">
          {#each collection as data}
            <Post {data} read="/tag/{tag}/read/{data.id}"/>
          {/each}
        </div>
      </div>
    </div>
  </section>
</main>

<Tail/>

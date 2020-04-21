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
  import Sub from '../../../components/Sub.svelte';
  import Tail from '../../../components/Tail.svelte';
  import Post from '../../../components/Post.svelte';


  import moment from "moment";
  import startCase from "lodash/startCase.js";
  import db from '../../../modules/db/index.js';
  import configuration from '../../../modules/configuration/index.js';

  const conf = configuration();

  $: collection = db().filter(o=>o.category === category);

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

<!-- <Icon name="squirrel" color="dark" class="mr-2"/> -->
<main role="main">
  <section>
    <div class="container">
      <div class="row mt-5">
        <div class="{conf.column}">
        <Sub description="Showing posts in {category} category" posts categories tags></Sub>
        </div>
      </div>
      <div class="row mt-5">
        <div class="{conf.column}">
          {#each collection as data}
            <Post {data} read="/category/{category}/read/{data.id}"/>
          {/each}
        </div>
      </div>
    </div>
  </section>
</main>

<Tail/>

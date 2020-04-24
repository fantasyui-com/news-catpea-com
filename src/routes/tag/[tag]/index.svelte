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

  const filter = o => o.tags.split(' ').includes(tag);

  const conf = configuration();
  let live = false;
  let intervalId = null;

  let collection = db().filter(filter);

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
          <Sub description="Index Of {collection.length} Post{collection.length==1?'':'s'} Tagged With {tag}" posts tags categories></Sub>
        </div>
      </div>

      <div class="row mt-5">
        <div class="{conf.column}">
          {#each collection as data}
            <Post {data} read="/tag/{tag}/read/{data.id}"/>
          {/each}
        </div>
      </div>

      <div class="row mb-5">
        <div class="{conf.column}">
          <Sub description="Index Of {collection.length} Post{collection.length==1?'':'s'} Tagged With {tag}" posts tags categories></Sub>
        </div>
      </div>

    </div>
  </section>
</main>

<Tail/>

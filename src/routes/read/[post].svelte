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
  import Sub from '../../components/Sub.svelte';
  import Read from '../../components/Read.svelte';
  import Tail from '../../components/Tail.svelte';
  import Flip from '../../components/Flip.svelte';
  import Side from '../../components/Side.svelte';

  import moment from "moment";
  import startCase from "lodash/startCase.js";

  import db from '../../modules/db/index.js';
  import configuration from '../../modules/configuration/index.js';

  const conf = configuration();
  $: index = idToIndex(post);
  $: item = collection[index];

  let collection = db();

  let live = false;
  let intervalId = null;

  function recalculateTimestamps(){
    collection = collection.map(o=>{ o.ago = moment(o.date).from(moment()); return o; });
    collection = collection.map(o=>{ o.today = (moment().diff(moment(o.date), 'days') < 1); return o; });

    if(conf.blinkenlighten){
      collection = collection.map(o=>{ o.ago = moment(  moment(o.date).subtract(parseInt(31*Math.random()), 'days')  ).from(moment()); return o; });
      collection = collection.map((o,i)=>{ o.today = (Math.random() < 0.5); return o; });
    }
  }

  function idToIndex(id){
    let response = 0;
    let filtered = collection.filter(o=>o.id===id);
    if(filtered.length > 0){
      let selected = filtered.pop();
      response = collection.indexOf(selected);
    }
    return response;
  }

  onDestroy(() => {
    clearInterval(intervalId);
  });

  onMount(() => {
    live = true;
    intervalId = setInterval(recalculateTimestamps, conf.recalculateInterval)
  });

  recalculateTimestamps();


</script>

<svelte:head>
  <title>{conf.title}</title>
</svelte:head>

<!-- <Side {index} {collection} base="/read"/> -->

<main role="main">
  <section>
    <div class="container">

      <div class="row mt-5">
        <div class="{conf.column}">
        <Sub description="Post# {collection.length - (index )}: Navigating All {collection.length} Post{collection.length==1?'':'s'}" posts tags></Sub>
        </div>
      </div>

      <div class="row">
        <div class="{conf.column}">
          <Flip {index} {collection} base="/read"/>
        </div>
      </div>

      <div class="row">
        <div class="{conf.column}">
          <Read data={item} {...{item}}/>
        </div>
      </div>

      <div class="row">
        <div class="{conf.column}">
          <Flip lg {index} {collection} base="/read"/>
        </div>
      </div>

      <div class="row mb-5">
        <div class="{conf.column}">
        <Sub description="Post# {collection.length - (index )}: Navigating All  {collection.length} Post{collection.length==1?'':'s'}" opened posts tags></Sub>
        </div>
      </div>

    </div>
  </section>
</main>

<Tail/>

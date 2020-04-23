<!-- prints contents of post -->
<script context="module">
  // the (optional) preload function takes a
  // `{ path, params, query }` object and turns it into
  // the data we need to render the page
  export async function preload(page, session) {
    // the `slug` parameter is available because this file
    // is called [slug].svelte
    const { tag, post } = page.params;

    // `this.fetch` is a wrapper around `fetch` that allows
    // you to make credentialled requests on both
    // server and client
    // const res = await this.fetch(`blog/${slug}.json`);
    // const article = await res.json();

    return { tag, post };
  }
</script>

<script>
  export let tag;
  export let post;

  import { onMount, beforeUpdate, afterUpdate, onDestroy } from 'svelte';
  import Sub from '../../../../components/Sub.svelte';
  import Tail from '../../../../components/Tail.svelte';
  import Read from '../../../../components/Read.svelte';
  import Flip from '../../../../components/Flip.svelte';

  import moment from "moment";
  import startCase from "lodash/startCase.js";

  import db from '../../../../modules/db/index.js';
  import configuration from '../../../../modules/configuration/index.js';

  const conf = configuration();

  let collection = db().filter(o=>o.tags.split(' ').includes(tag));

  function recalculateTimestamps(){
    collection = collection.map(i=>{ i.ago = moment(i.date).from(moment()); return i; })
  }

  let intervalId = null;
  intervalId = setInterval(recalculateTimestamps,60000)
  recalculateTimestamps();


  function idToIndex(id){
    let response = 0;
    let filtered = collection.filter(o=>o.id===id);
    if(filtered.length > 0){
      let selected = filtered.pop();
      response = collection.indexOf(selected);
    }
    return response;
  }



  $: index = idToIndex(post);
  $: item = collection[index];

  $: hasNext = (((index+1)+1) <= collection.length);
  $: hasPrev = ((index-1) >= 0);

  $: next = hasNext?collection[index+1]:collection[0];
  $: prev = hasPrev?collection[index-1]:collection[0];





  onDestroy(() => {
    clearInterval(intervalId);
  });

  onMount(() => {

  });




</script>

<svelte:head>
  <title>{conf.title}</title>
</svelte:head>

<main role="main">
  <section>
    <div class="container">
      <div class="row mt-5">
        <div class="{conf.column}">
          <Sub post={post} description="Navigating {collection.length} Post{collection.length==1?'':'s'} Tagged With {tag}" posts categories tags untag></Sub>
        </div>
      </div>
      <div class="row">
        <div class="{conf.column}">
          <Flip {index} {collection} base="/tag/{tag}/read"/>
        </div>
      </div>
      <div class="row">
        <div class="{conf.column}">
          <Read data={item}/>
        </div>
      </div>
      <div class="row">
        <div class="{conf.column}">
          <Flip lg {index} {collection} base="/tag/{tag}/read"/>
        </div>
      </div>
      <div class="row mb-5">
        <div class="{conf.column}">
          <Sub post={post} description="Navigating {collection.length} Post{collection.length==1?'':'s'} Tagged With {tag}" opened posts categories tags untag></Sub>
        </div>
      </div>
    </div>
  </section>
</main>
<Tail/>

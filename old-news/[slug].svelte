<!-- src/routes/blog/[slug].svelte -->
<script context="module">
  // the (optional) preload function takes a
  // `{ path, params, query }` object and turns it into
  // the data we need to render the page
  export async function preload(page, session) {
    // the `slug` parameter is available because this file
    // is called [slug].svelte
    const { slug } = page.params;

    // `this.fetch` is a wrapper around `fetch` that allows
    // you to make credentialled requests on both
    // server and client
    // const res = await this.fetch(`blog/${slug}.json`);
    // const article = await res.json();

    return { slug };
  }
</script>

<script>
  export let slug;

  import { onMount, beforeUpdate, afterUpdate, onDestroy } from 'svelte';

  import moment from "moment";
  import db from '../../modules/db/index.js';

  let collection = db().filter(o=>o.category === slug);
  // let types = Object.keys(collection.reduce((a,c)=>{a.type = c.type},{}));

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



  $: index = idToIndex(slug);
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
                <a href="type/{slug}/read/{item.id}" class="text-muted lead">{item.title}</a>
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

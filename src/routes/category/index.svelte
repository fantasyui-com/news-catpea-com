<!-- lists available categories -->
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
  import { onDestroy } from 'svelte';

  import Sub from '../../components/Sub.svelte';
  import Tail from '../../components/Tail.svelte';

  import moment from "moment";
  import startCase from "lodash/startCase.js";

  import db from '../../modules/db/index.js';
  import configuration from '../../modules/configuration/index.js';

  const conf = configuration();

  export let slug;

  let collection = db();
  let metadata = {

    quarantine:{
      about:'Describes my poetic adventures during the 2020 Pandemic.',
      note:'Includes many poems from my studies and experiments with poetry.',
    },
    research:{
      about:'Describes my early Svelte and Bootstrap research.',
      note:'It also contains early notes on user interface design.',
    }

  }

  let list = [];
  function reducer(accumulator,current){
    if(!accumulator[current.category]){
      accumulator[current.category] = {
        id: current.category,
        count: 0,
        latest:new Date(current.date)
      };
    }
    accumulator[current.category].count++;

    if( (new Date(current.date) - new Date(accumulator[current.category].latest)) > 0 ){
      accumulator[current.category].latest = new Date(current.date);
    }
    return accumulator;
  }

  let typeOverview = collection.reduce((a,c)=>reducer(a,c),{});

  Object.keys(typeOverview).forEach(function(key){
    let {count, latest, id} = typeOverview[key];
    let name = startCase(key);
    list.push({id, name, count, latest});
  })

  function recalculateTimestamps(){
    collection.map(i=>{ i.ago = moment(i.date).from(moment()); return i; })
    collection.map(i=>{ i.today = (moment().diff(moment(i.date), 'days') < 1); return i; })

    list.map(i=>{ i.ago = moment(i.latest).from(moment()); return i; })
    list.map(i=>{ i.today = collection.filter(o=>o.category === i.id).filter(o=>o.today).length; return i; });
  }

  let intervalId = null;
  intervalId = setInterval(recalculateTimestamps,60000)
  recalculateTimestamps();

  onDestroy(() => {
    clearInterval(intervalId);
  });


</script>

<svelte:head>
  <title>{conf.title}</title>
</svelte:head>

<main role="main">
  <section>
    <div class="container">

    <div class="row mt-5">
      <div class="col-12 offset-md-1 col-md-10 offset-xxl-3 col-xxl-6">
      <span class="text-warning small"></span>
      <Sub description="Listing of all categories" posts tags></Sub>
      </div>
    </div>

      <div class="row mt-5">
        <div class="col-12 offset-md-1 col-md-10 offset-xxl-3 col-xxl-6">
          <div class="list-group">
            {#each list as type}
              <a href="/category/{type.id}" class="list-group-item list-group-item-action bg-dark" class:active={slug==type.id}>
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">{type.name} {#if type.today}<span class="badge badge-danger badge-pill">{type.today}</span>{/if}</h5>
                  <small class="text-muted">Updated {type.ago}</small>
                </div>

                {#if metadata[type.id]}
                  <p class="mb-1">{metadata[type.id].about}</p>
                  <small class="text-muted">{metadata[type.id].note}</small>
                {/if}
                <small class="text-muted">Contains {type.count} post{type.count==1?'':'s'}, {type.today} in the last 24 hours.</small>

              </a>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </section>
</main>

<Tail/>

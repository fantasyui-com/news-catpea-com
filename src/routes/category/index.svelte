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
  import { onMount, onDestroy } from 'svelte';


  import Sub from '../../components/Sub.svelte';
  import Tail from '../../components/Tail.svelte';

  import moment from "moment";
  import startCase from "lodash/startCase.js";

  import db from '../../modules/db/index.js';
  import configuration from '../../modules/configuration/index.js';

  const conf = configuration();

  export let slug;

  let collection = db();
  let typeOverview = {};
  let list = [];
  let metadata = {

    quarantine:{
      about:'Describes my poetic adventures during the 2020 Pandemic.',
      note:'Includes many poems from my studies and experiments with poetry.',
    },

    research:{
      about:'Describes my early Svelte and Bootstrap research.',
      note:'It also contains early notes on user interface design.',
    },

    theme:{
      about:'Bootstrap Theme Development and CSS Functions/Tooling',
      note:'Log of features being added to the flagship theme.',
    },

  }

  function reducer(accumulator,current){
    if(!accumulator[current.category]){
      accumulator[current.category] = {
        id: current.category,
        name: startCase(current.category),
        count: 0,
        latest:new Date(current.date),
        published: current.published,
      };
    }
    accumulator[current.category].count++;
    if( (new Date(current.date) - new Date(accumulator[current.category].latest)) > 0 ){
      accumulator[current.category].latest = new Date(current.date);
    }
    return accumulator;
  }



  function recalculateTimestamps(){

    collection = collection.map(o=>{ o.ago = moment(o.date).from(moment()); return o; });
    collection = collection.map(o=>{ o.today = (moment().diff(moment(o.date), 'days') < 1); return o; });

    if(conf.blinkenlighten){
      collection = collection.map(o=>{ o.date = moment(o.date).add(parseInt(31*Math.random()), 'days'); return o; });
      collection = collection.map(o=>{ o.ago = moment(  moment(o.date).add(parseInt(31*Math.random()), 'days')  ).from(moment()); return o; });
      collection = collection.map((o,i)=>{ o.today = (Math.random() < 0.5); return o; });
    }

    typeOverview = collection.reduce((a,c)=>reducer(a,c),{});
    list = Object.keys(typeOverview).map(key=>typeOverview[key])

    list.map(i=>{ i.ago = moment(i.latest).from(moment()); return i; })
    list.map(i=>{ i.today = collection.filter(o=>o.category === i.id).filter(o=>o.today).length; return i; });


  }

  let intervalId = null;

  intervalId = setInterval(recalculateTimestamps, conf.recalculateInterval);

  recalculateTimestamps();

  onDestroy(() => {
    clearInterval(intervalId);
  });

  let live = false;
  onMount(() => {
    live = true;
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
        <span class="text-warning small"></span>
        <Sub description="Listing Of All {list.length} Categories" posts tags></Sub>
        </div>
      </div>

      <div class="row mt-5">
        <div class="{conf.column}">
          {#each list as type}
            <div class="card mb-5 article-link shadow" class:border-danger={live && type.today}>
              <div class="card-body py-4 px-3">
                <h5 class="card-title pb-2"><a class="text-light" href="/category/{type.id}">{type.name} &raquo; {#if live && type.today}<span class="badge badge-danger badge-pill float-right">{type.today}</span>{/if}</a></h5>
                <h6 class="card-subtitle ml-3 mb-3"><img src="/icons/envelope.svg" alt="" width="16" height="16" style="filter: invert(1);"> Updated {live?type.ago:type.published}.</h6>
                <p class="card-text ml-3">
                  {#if metadata[type.id]}
                    {metadata[type.id].about}
                    {metadata[type.id].note}
                    Contains {type.count} post{type.count==1?'':'s'}{#if live}, {type.today} in the last 24 hours.{:else}.{/if}
                  {/if}
                </p>
                <a class="btn btn-outline-info ml-3" href="/category/{type.id}">Browse {type.name} &raquo;</a>
              </div>
            </div>
          {/each}
        </div>
      </div>

      <div class="row mb-5">
        <div class="{conf.column}">
        <span class="text-warning small"></span>
        <Sub description="Listing Of All {list.length} Categories" opened posts tags></Sub>
        </div>
      </div>

    </div>
  </section>
</main>

<Tail/>

<script>
  import { onMount, onDestroy } from 'svelte';

  import Sub from '../../components/Sub.svelte';
  import Tail from '../../components/Tail.svelte';

  import moment from "moment";
  import startCase from "lodash/startCase.js";

  import db from '../../modules/db/index.js';
  import configuration from '../../modules/configuration/index.js';

  const conf = configuration();

  let collection = db();

  let overview = {};
  let list = []

  function reducer(accumulator, current){
    for(const tag of current.tags.split(' ')){
      if(!accumulator[tag]){
        accumulator[tag] = {
          id: tag,
          name: tag,
          count: 0, // uniformly incremented below
          latest: new Date(current.date), // temporarily assuming first known date being the latest
          published: current.published,
        };
      }
      accumulator[tag].count++;
      if( (new Date(current.date) - new Date(accumulator[tag].latest)) > 0 ){
        accumulator[tag].latest = new Date(current.date);
      }
    } // for tag
    return accumulator;
  };


  function recalculateTimestamps(){

    collection = collection.map(o=>{ o.ago = moment(o.date).from(moment()); return o; });
    collection = collection.map(o=>{ o.today = (moment().diff(moment(o.date), 'days') < 1); return o; });

    if(conf.blinkenlighten){
      //collection = collection.map(o=>{ o.date = moment(o.date).add(parseInt(31*Math.random()), 'days'); return o; });
      collection = collection.map(o=>{ o.ago = moment(  moment(o.date).add(parseInt(31*Math.random()), 'days')  ).from(moment()); return o; });
      collection = collection.map((o,i)=>{ o.today = (Math.random() < 0.5); return o; });
    }

    overview = collection.reduce((a,c)=>reducer(a,c),{});
    list = Object.keys(overview).map(key=>overview[key])
    
    list.map(i=>{ i.ago = moment(i.latest).from(moment()); return i; })
    list.map(i=>{ i.today = collection.filter(o=>o.tags.split(' ').includes(i.id)).filter(o=>o.today).length; return i; });


  }

  let intervalId = null;
  intervalId = setInterval(recalculateTimestamps, conf.recalculateInterval)

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
        <Sub description="Listing Of All {list.length} Tags" posts categories></Sub>
        </div>
      </div>

      <div class="row mt-5">
        <div class="{conf.column}">
          {#each list as tag}
            <div class="card mb-5 article-link shadow" class:border-danger={live && tag.today}>
              <div class="card-body py-4 px-3">
                <h5 class="card-title pb-2"><a class="text-light" href="/tag/{tag.id}">{tag.name} &raquo; {#if live && tag.today}<span class="badge badge-danger badge-pill float-right">{tag.today}</span>{/if}</a></h5>
                <h6 class="card-subtitle ml-3 mb-3"><img src="/icons/envelope.svg" alt="" width="16" height="16" style="filter: invert(1);"> Updated {live?tag.ago:tag.published}.</h6>
                <p class="card-text ml-3">
                   Contains {tag.count} post{tag.count==1?'':'s'}{#if live}, {tag.today} in the last 24 hours.{:else}.{/if}
                </p>
                <a class="btn btn-outline-info ml-3" href="/tag/{tag.id}">Browse {tag.name} &raquo;</a>
              </div>
            </div>
          {/each}
        </div>
      </div>

      <div class="row mb-5">
        <div class="{conf.column}">
        <Sub description="Listing Of All {list.length} Tags" opened posts categories></Sub>
        </div>
      </div>

    </div>
  </section>
</main>
<Tail/>

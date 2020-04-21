<script>
  import { onDestroy } from 'svelte';
  import Sub from '../../components/Sub.svelte';
  import Tail from '../../components/Tail.svelte';

  import moment from "moment";
  import startCase from "lodash/startCase.js";

  import db from '../../modules/db/index.js';
  import configuration from '../../modules/configuration/index.js';

  const conf = configuration();

  let collection = db();

  function reducer(accumulator, current){

    for(const tag of current.tags.split(' ')){

      if(!accumulator[tag]){
        accumulator[tag] = {
          id: tag,
          name: tag,
          count: 0, // uniformly incremented below
          latest: new Date(current.date) // temporarily assuming first known date being the latest
        };
      }

      accumulator[tag].count++;
      if( (new Date(current.date) - new Date(accumulator[tag].latest)) > 0 ){
        accumulator[tag].latest = new Date(current.date);
      }

    } // for tag

    return accumulator;
  };

  const overview = collection.reduce((a,c)=>reducer(a,c),{});
  // const list = [];
  // Object.keys(overview).forEach(function(key){ list.push(overview[key]); })
  const list = Object.keys(overview).map(key=>overview[key])


  function recalculateTimestamps(){

    collection.map(i=>{ i.ago = moment(i.date).from(moment()); return i; })
    collection.map(i=>{ i.today = (moment().diff(moment(i.date), 'days') < 1); return i; })

    list.map(i=>{i.ago = moment(i.latest).from(moment()); return i; })
    list.map(i=>{ i.today = collection.filter(o=>o.tags.split(' ').includes(i.id)).filter(o=>o.today).length; return i; });

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
      <div class="{conf.column}">
      <Sub description="Listing of all tags" posts categories></Sub>
      </div>
    </div>
      <div class="row mt-5">
        <div class="{conf.column}">
          {#each list as tag}
            <div class="card mb-5 article-link shadow" class:border-danger={tag.today}>
              <div class="card-body py-4 px-3">
                <h5 class="card-title pb-2"><a class="text-light" href="/tag/{tag.id}">{tag.name} &raquo; {#if tag.today}<span class="badge badge-danger badge-pill float-right">{tag.today}</span>{/if}</a></h5>
                <h6 class="card-subtitle ml-3 mb-3"><img src="/icons/envelope.svg" alt="" width="16" height="16" style="filter: invert(1);"> Updated {tag.ago}.</h6>
                <p class="card-text ml-3">
                   Contains {tag.count} post{tag.count==1?'':'s'}, {tag.today} in the last 24 hours.
                </p>
                <a class="btn btn-outline-info ml-3" href="/tag/{tag.id}">Browse {tag.name} &raquo;</a>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </section>
</main>
<Tail/>

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
      <div class="col-12 offset-md-1 col-md-10 offset-xxl-3 col-xxl-6">
      <Sub description="Listing of all tags" posts categories></Sub>
      </div>
    </div>

      <div class="row mt-5">
        <div class="col-12 offset-md-1 col-md-10 offset-xxl-3 col-xxl-6">
          <div class="list-group">
            {#each list as tag}
              <a href="/tag/{tag.id}" class="list-group-item list-group-item-action bg-dark">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">{tag.name} {#if tag.today}<span class="badge badge-danger badge-pill">{tag.today}</span>{/if}</h5>
                  <small class="text-muted">updated {tag.ago}</small>
                </div>
                <small class="text-muted">Contains {tag.count} post{tag.count==1?'':'s'}, {tag.today} in the last 24 hours.</small>
              </a>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </section>
</main>

<Tail/>

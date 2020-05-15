<script>

  import { onMount, onDestroy } from 'svelte';

  import moment from "moment";
  import {Howl, Howler} from 'howler';
  import shuffle from "lodash/shuffle";

  import Post from '../components/Post.svelte';
  import Lyrics from '../components/Lyrics.svelte';
  import Sub from '../components/Sub.svelte';
  import Tail from '../components/Tail.svelte';
  import Spinner from '../components/Spinner.svelte';

  import Playlist from '../components/Playlist.svelte';

  import db from '../modules/db/index.js';
  import configuration from '../modules/configuration/index.js';

  const conf = configuration();
  let live = false;
  let intervalId = null;

  let collection = db()
    .filter(o=>o.audio)
    .filter(o=>o.tags.split(' ').includes('Listen'));

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
    //stop();
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
    <div class="container pt-5">
      <Playlist {collection}/>
    </div>
  </section>
</main>

<Tail/>

<!-- <Spinner style="position: absolute; top:1rem; right:1rem;" class={live?'d-none':''}/> -->

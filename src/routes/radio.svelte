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

  import Song from '../components/Song.svelte';
  import Album from '../components/Album.svelte';

  import db from '../modules/db/index.js';
  import configuration from '../modules/configuration/index.js';

  const conf = configuration();
  let live = false;
  let intervalId = null;

  let collection = db().filter(o=>o.audio);

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
    stop();
  });

  onMount(() => {
    live = true;
    intervalId = setInterval(recalculateTimestamps, conf.recalculateInterval)
  });

  // 
  // // Abstraction layer
  // const player = {
  //   load:function(){
  //
  //   },
  //   start:function(){
  //
  //   },
  //   stop:function(){
  //
  //   },
  //   song: {
  //     playProgress:0,
  //     loadProgress:0,
  //   }
  // };




  let active = 0;
  let data = collection[0];

  let sound = null;

  let seek = null;
  let seeker = null;
  let duration = null;

  //
  let playing = false;

  let repeatAll = true;
  let repeatOne = false;

  function selectSong(index){
    stop();
    active = index;
    data = collection[active];
    play();
  }

  function replay(){
    playing = true;
    /// if(document) document.querySelector("html").focus();
    play();
  }

  function play(){
    console.log('Play', data.title);
    playing = true;
    seeker = setInterval(function(){
      if(sound) seek = sound.seek();
    },100)
    /// if(document) document.querySelector("html").focus();
    if(sound) sound.stop();
    sound = new Howl({src: [data.audio]});
    sound.play();
    sound.once('load', function(){
      duration = sound.duration();
    });
    sound.once('end', function(){
      console.log('End Fired');
      if(repeatAll) nextSong();
      if(repeatOne) replay();
    });
  }

  function stop(){
    clearInterval(seeker);
    playing = false;
    /// if(document) document.querySelector("html").focus();
    if(sound) sound.unload();
  }

  function previousSong(){
    stop();
    let candidate = active - 1;
    if(candidate < 0) candidate = collection.length-1;
    active = candidate;
    /// if(document) document.querySelector("html").focus();
    data = collection[active];
    play();
  }

  function nextSong(){
    stop();
    let candidate = active + 1;
    if((candidate+1)>collection.length) candidate = 0;
    active = candidate;
    /// if(document) document.querySelector("html").focus();
    data = collection[active];
    play();
  }

  function doShuffle(){
    collection = shuffle(collection);
    //active = collection.indexOf(data);
    /// if(document) document.querySelector("html").focus();
    active = 0;
    data = collection[active];
    play();
  }

  function doRepeatAll(){
    repeatAll = true;
    repeatOne = false;
    /// if(document) document.querySelector("html").focus();
  }

  function doRepeatOne(){
    repeatAll = false;
    repeatOne = true;
    /// if(document) document.querySelector("html").focus();
  }

</script>

<style>

</style>

<svelte:head>
  <title>{conf.title}</title>
</svelte:head>

<main role="main">
  <section>
    <div class="container mt-5">











        <div class="row d-lg-none my-3">
          <div class="col">
          <button  on:click={play} type="button" class="btn btn-lg btn-primary btn-block" class:bg-dark={!playing} class:text-dark={playing} class:bg-warning={playing}><img src="/icons/play.svg" alt="" width="32" height="32" style="filter: invert(1);"> Play</button>
          </div>
          <div class="col">
          <button on:click={stop} type="button" class="btn bg-dark btn-lg btn-block" class:bg-dark={playing} class:text-dark={!playing} class:bg-warning={!playing}><img src="/icons/stop.svg" alt="" width="32" height="32" style="filter: invert(1);"> Stop</button>
          </div>
          <div class="col">
          <button on:click={replay} type="button" class="btn bg-dark text-light btn-lg btn-block"><img src="/icons/skip-start.svg" alt="" width="32" height="32" style="filter: invert(1);"> Replay</button>
          </div>
        </div>

        <div class="row d-lg-none my-3">
          <div class="col">
          <button on:click={previousSong} type="button" class="btn bg-dark btn-block text-light btn-lg d-inline-block"><img src="/icons/skip-backward.svg" alt="" width="32" height="32" style="filter: invert(1);"> Previous</button>
          </div>
          <div class="col">
          <button on:click={nextSong}     type="button" class="btn bg-secondary btn-block text-dark btn-lg d-inline-block">Next <img src="/icons/skip-forward.svg" alt="" width="32" height="32" style="filter: invert(1);"></button>
          </div>
        </div>

        <div class="row d-lg-none my-3">
          <div class="col">
          <button on:click={doRepeatAll} type="button" class="btn btn-sm btn-block" class:bg-dark={!repeatAll} class:text-dark={repeatAll} class:bg-warning={repeatAll}><img src="/icons/arrow-repeat.svg" alt="Repeat All" width="16" height="16" style="filter: invert(1);"> All</button>
          </div>
          <div class="col">
          <button on:click={doRepeatOne} type="button" class="btn btn-sm btn-block" class:bg-dark={!repeatOne} class:text-dark={repeatOne} class:bg-warning={repeatOne}><img src="/icons/arrow-clockwise.svg" alt="Repeat One" width="16" height="16" style="filter: invert(1);"> One</button>
          </div>
          <div class="col">
          <button on:click={doShuffle} type="button" class="btn bg-dark btn-sm btn-block"><img src="/icons/shuffle.svg" alt="Shuffle" width="16" height="16" style="filter: invert(1);"> Shuffle</button>
          </div>
        </div>


        <div class="row">
          <div class="col">
            <Album {data} {duration} {seek} {playing}/>
          </div>
        </div>

        <div class="row d-none d-lg-flex my-3">
          <div class="col">
          <button  on:click={play} type="button" class="btn btn-lg btn-block" class:bg-dark={!playing} class:text-white={playing} class:bg-primary={playing}><img src="/icons/play.svg" alt="" width="32" height="32" style="filter: invert(1);"> Play</button>
          </div>
          <div class="col">
          <button on:click={stop} type="button" class="btn bg-dark btn-lg btn-block" class:bg-dark={playing} class:text-dark={!playing} class:bg-warning={!playing}><img src="/icons/stop.svg" alt="" width="32" height="32" style="filter: invert(1);"> Stop</button>
          </div>
          <div class="col">
          <button on:click={replay} type="button" class="btn bg-dark text-light btn-lg btn-block"><img src="/icons/skip-start.svg" alt="" width="32" height="32" style="filter: invert(1);"> Replay</button>
          </div>

          <div class="col">
          <button on:click={previousSong} type="button" class="btn bg-dark btn-block text-light btn-lg d-inline-block"><img src="/icons/skip-backward.svg" alt="" width="32" height="32" style="filter: invert(1);"> Previous</button>
          </div>
          <div class="col">
          <button on:click={nextSong}     type="button" class="btn bg-secondary btn-block text-dark btn-lg d-inline-block">Next <img src="/icons/skip-forward.svg" alt="" width="32" height="32" style="filter: invert(1);"></button>
          </div>
        </div>

        <div class="row d-none d-lg-flex my-3">
          <div class="col-6"> </div>
          <div class="col">
          <button on:click={doRepeatAll} type="button" class="btn btn-sm btn-block" class:bg-dark={!repeatAll} class:text-dark={repeatAll} class:bg-warning={repeatAll}><img src="/icons/arrow-repeat.svg" alt="Repeat All" width="16" height="16" style="filter: invert(1);"> All</button>
          </div>
          <div class="col">
          <button on:click={doRepeatOne} type="button" class="btn btn-sm btn-block" class:bg-dark={!repeatOne} class:text-dark={repeatOne} class:bg-warning={repeatOne}><img src="/icons/arrow-clockwise.svg" alt="Repeat One" width="16" height="16" style="filter: invert(1);"> One</button>
          </div>
          <div class="col">
          <button on:click={doShuffle} type="button" class="btn bg-dark btn-sm btn-block"><img src="/icons/shuffle.svg" alt="Shuffle" width="16" height="16" style="filter: invert(1);"> Shuffle</button>
          </div>
        </div>

    <div class="row">




      <div class="col-lg-8">
         <Lyrics {data}/>
      </div>




      <div class="col-lg-4">



        <!-- <div class="mb-3 text-center">
          <div class="row">
            <div class="col">
            <button on:click={previousSong} type="button" class="btn bg-dark btn-lg btn-block d-inline-block"><img src="/icons/skip-backward.svg" alt="" width="32" height="32" style="filter: invert(1);"> Previous</button>
            </div>
            <div class="col">
            <button on:click={nextSong}     type="button" class="btn bg-dark btn-lg btn-block d-inline-block">Next <img src="/icons/skip-forward.svg" alt="" width="32" height="32" style="filter: invert(1);"></button>
            </div>
          </div>
        </div> -->

        {#each collection as data, index}
          <div on:click={()=>selectSong(index)}>
            <Song active={index==active} {data} read="/read/{data.id}"/>
          </div>
        {/each}

      </div>




    </div>











    </div>
  </section>
</main>

<Tail/>

<!-- <Spinner style="position: absolute; top:1rem; right:1rem;" class={live?'d-none':''}/> -->

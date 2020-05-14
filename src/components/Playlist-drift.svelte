<script>

  import mitt from 'mitt';

  import Song from './Song.svelte';
  import Progress from './Progress.svelte';
  import { onMount, onDestroy } from 'svelte';

  const emitter = mitt();
  export let collection = [];

  onDestroy(() => {
    emitter.emit('stop');
  });


  let playlist = collection.map(o=>({blob: null, audio: null, info:o, meta:{loaded: 0, total: 0, currentTime: 0, duration: 0 }}));

  let play = false;
  let selected = 0;
  let track = playlist[0];



  emitter.on('play', async ({index}) => {
    play = true;
    let stopped = playlist.filter(track=>track.audio).filter(track=>!track.audio.paused).map(track=>{track.audio.pause(); track.audio.currentTime=0; return track;});
    try {
      track.audio.currentTime = 0;
      await track.audio.play();
      console.log("playing");
    } catch(err) {
      console.error("not playing", err);
    }
    emitter.emit('preload', {index: index+1});
  });

  emitter.on('stop', () => {
    play = false;
    let stopped = playlist.filter(track=>track.audio).filter(track=>!track.audio.paused).map(track=>{track.audio.pause(); track.audio.currentTime=0; return track;});
  });



  emitter.on('load', ({index, play}) => {
    let track = playlist[index];
    console.log(`load got track ${track.info.title}`);
    console.log(`load loading ${track.info.audio}`);
    emitter.emit('download', {index});
  })



  emitter.on('preload', ({index, play}) => {
  });




  emitter.on('download', ({index}) => {

    let track = playlist[index];

    if(track.audio){
      // got the data already,
      // and made the audio object

    }

    try{
      track.xhr.abort();
    }catch(e){
      // let it silently fail
    }

    console.log(`Download of ${track.info.title} initializing...`);
    console.log(`Downloading ${track.info.audio}.`);

    track.xhr = new XMLHttpRequest();
    track.xhr.responseType = "blob";

    track.xhr.addEventListener('loadstart', ()=>{

    });

    track.xhr.addEventListener('load', ()=>{
      track.blob = xhr.response;
      track.audio = new Audio(window.URL.createObjectURL(track.blob));
    });

    track.xhr.addEventListener('loadend', ()=>{
      // The loadend event is fired when a request has completed, whether successfully
      // (after load) or unsuccessfully (after abort or error).
    });

    track.xhr.addEventListener('progress', (event)=>{
      track.meta.loaded = event.loaded;
      track.meta.total = event.total;
      playlist = playlist;
    });

    track.xhr.addEventListener('error', ()=>{

    });

    track.xhr.addEventListener('abort', ()=>{

    });

    track.xhr.open("GET", track.info.audio);
    track.xhr.send();

    // note The XMLHttpRequest.abort() method aborts the request if it has already
    // been sent. When a request is aborted, its readyState is changed to
    // XMLHttpRequest.UNSENT (0) and the request's status code is set to 0.

  })

  emitter.on('audioready', ({index, play}) => {
    let track = playlist[index];
    console.log(`audio ready track ${track.info.title}`);
    track.audio.play();
  })

  emitter.on('select', ({index}) => {
    console.log(`Selecting ${playlist[index].info.title}`);
    selected = index;
    track = playlist[selected];
    emitter.emit('load', {index});
  });


  // Init
  onMount(() => {

    setInterval(function(){
      track = playlist[selected];
      playlist = playlist;
    },300)

  });

</script>

<style>
</style>

<div class="row">




  <div class="col-lg-8">

  {#if play}
    <button on:click={()=>emitter.emit('stop')} type="button" class="btn bg-dark btn-lg btn-block"><img src="/icons/stop.svg" alt="" width="32" height="32" style="filter: invert(1);"> Stop</button>
  {:else}
    <button  on:click={()=>{emitter.emit('select', {index:selected})}} type="button" class="btn btn-lg btn-primary btn-block"><img src="/icons/play.svg" alt="" width="32" height="32" style="filter: invert(1);"> Play</button>
  {/if}


  {#if play}
    Play Mode
  {:else}
    Stop Mode
  {/if}


  Loading
  <Progress color="warning" val={track.meta.loaded} max={track.meta.total}/>

  Playing
  <Progress color="warning" val={track.meta.currentTime} max={track.meta.duration}/>



  <hr>

  <ol>{@html Object.keys(track.meta).map(k=>`${k}: ${track.meta[k]}`).map(s=>`<li>${s}</li>`).join('')}</ol>
  <ol>{@html Object.keys(track.info).map(k=>`${k}: ${track.info[k]}`).map(s=>`<li>${s}</li>`).join('')}</ol>






  </div>


  <div class="col-lg-4">
    {#each collection as data, index}
      <div on:click={()=>emitter.emit('select',{ index})}>
        <Song active={selected == index} {data} read="/read/{data.id}"/>
      </div>
    {/each}
  </div>


</div>

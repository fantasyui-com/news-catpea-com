<script>
  import Aural from './playlist/aural/index.js';
  import Song from './Song.svelte';
  import Progress from './Progress.svelte';
  import { onMount, onDestroy } from 'svelte';
  export let collection = [];

  onDestroy(() => {
    stop();
  });

  let playlist = collection.map(o=>({
    song: null,
    info:{...o},
    meta:{loaded: 0, total: 0, currentTime: 0, duration: 0 }
  }));

  let playing = false;
  let selected = 0;
  let track = playlist[0];

  async function play({index}){
    stop();
    track = playlist[index];
    playing = true;
    try {
      track.song.audio.currentTime = 0;
      await track.song.audio.play();
    } catch(err) {
      console.error("not playing", err);
    }
    //TODO: PRELOAD


  };

  function stop(){
    playing = false;
    let stopped = playlist
    .filter(track=>track.song)
    .filter(track=>track.song.audio)
    .filter(track=>!track.song.audio.paused)
    .map(track=>{track.song.audio.pause(); track.song.audio.currentTime=0; return track;});
  };

  function load({index, autoplay}){
    if(!playlist[index].song){
      const aural = new Aural(playlist[index].info.audio);
      aural.on('load', ()=>{
        if(autoplay) load({index: (index+2<playlist.length)?index+1:0, autoplay:false}); // PREFETCH NEXT
        aural.on('timeupdate', (event)=>{
          playlist[index].meta.currentTime = event.currentTime;
        })
        aural.on('loadeddata', (event)=>{
          playlist[index].meta.duration = event.duration;
        })
        if(autoplay) play({index});
      })
      aural.on('progress', (event)=>{
        playlist[index].meta.loaded = event.loaded;
        playlist[index].meta.total = event.total;
      })
      playlist[index].song = aural;
    }else{
      if(autoplay) play({index});
      if(autoplay) load({index: (index+2<playlist.length)?index+1:0, autoplay:false}); // PREFETCH NEXT
    }
  }

  function select({index}){
    selected = index;
    track = playlist[selected];
    load({index, autoplay:true});
  };

  // Init
  onMount(() => {
    setInterval(function(){
      track = playlist[selected];
      // playlist = playlist;
    },300)
  });

</script>

<style>
</style>

<div class="row">




  <div class="col-lg-8">

  {#if playing}
    <button on:click={stop} type="button" class="btn bg-dark btn-lg btn-block"><img src="/icons/stop.svg" alt="" width="32" height="32" style="filter: invert(1);"> Stop</button>
  {:else}
    <button on:click={()=>select({index:selected})} type="button" class="btn btn-lg btn-primary btn-block"><img src="/icons/play.svg" alt="" width="32" height="32" style="filter: invert(1);"> Play</button>
  {/if}


  {#if playing}
    <div>Play Mode</div>
  {:else}
    <div>Stop Mode</div>
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
      <div on:click={()=>select({index})}>
        <Song active={selected == index} {data} read="/read/{data.id}"/>
      </div>
    {/each}
  </div>


</div>

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

  let playlist = collection.map(o=>({data: {}, info:o, meta:{ currentTime: 0, duration: 0, ready: false, }}));

  let play = false;
  let selected = 0;
  let track = playlist[0];




   emitter.on('play', async ({index}) => {
    play = true;

    let stopped = playlist.filter(track=>track.data.src).filter(track=>!track.data.paused).map(track=>{track.data.pause(); track.data.currentTime=0; return track;});

    try {
      track.data.currentTime = 0;
      await track.data.play();
      console.log("playing");
    } catch(err) {
      console.error("not playing", err);
    }

    emitter.emit('preload', {index: index+1});
  });

  emitter.on('stop', () => {
    play = false;

    let stopped = playlist.filter(track=>track.data.src).filter(track=>!track.data.paused).map(track=>{track.data.pause(); track.data.currentTime=0; return track;});


  });

  emitter.on('load', ({index, play}) => {
    let track = playlist[index];
    console.log(`load got track ${track.info.title}`);
    console.log(`load loading ${track.info.audio}`);
    if(!track.data.src) track.data = new Audio(track.info.audio);
    if(track.data.readyState === 4){
      console.log(`bootleg canplaythrough ${track.info.title}`);
      track.meta.ready = true;
      if(play) emitter.emit('play', {index});
    }

    track.data.addEventListener('loadeddata', () => {
      track.meta.duration = track.data.duration;
    });

    track.data.addEventListener('progress', function(event){

      if(event.lengthComputable) {
        // browsers don't quite support progress here
        // track.meta.total = event.total
        // track.meta.loaded = event.loaded
      }

    });

    track.data.addEventListener('timeupdate', (event) => {
      track.meta.currentTime = track.data.currentTime;
    });
    track.data.addEventListener('canplaythrough', () => {
      if(track.meta.ready) return;
      track.meta.ready = true;
      console.log(`real canplaythrough ${track.info.title}`);
      if(play) emitter.emit('play', {index});
    });
  })

  emitter.on('preload', ({index, play}) => {

    let nextIndex = index; // index is already incemented
    if((nextIndex+1)>playlist.length) nextIndex = 0; // loop

    let track = playlist[index];
    console.log(`pre-load got track ${track.info.title}`);
    console.log(`pre-load loading ${track.info.audio}`);
    if(!track.data.src) track.data = new Audio(track.info.audio);
    if(track.data.readyState === 4){
      track.meta.ready = true;
      console.log(`Pre-loaded ${track.info.title}`);
    }
    track.data.addEventListener('loadeddata', () => {
      track.meta.duration = track.data.duration;
    });
    track.data.addEventListener('timeupdate', (event) => {
      track.meta.currentTime = track.data.currentTime;
    });
    track.data.addEventListener('canplaythrough', () => {
      if(track.meta.ready) return;
      track.meta.ready = true;
      console.log(`Pre-loaded ${track.info.title}`);
    });
  });
















  emitter.on('select', ({index}) => {
    console.log(`Selecting ${playlist[index].info.title}`);
    selected = index;
    track = playlist[selected];
    console.log(`Loading ${track.info.title}`);
    emitter.emit('load', {index, play:true});
  });

  // Init
  onMount(() => {

    setInterval(function(){
      track = playlist[selected];
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

  <ol>{@html Object.keys(track.data).map(k=>`${k}: ${track.data[k]}`).map(s=>`<li>${s}</li>`).join('')}</ol>
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

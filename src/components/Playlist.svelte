<script>
  import calculatePercent from 'calculate-percent';

  import Aural from './playlist/aural/index.js';
  import Song from './playlist/Song.svelte';
  import Cover from './playlist/Cover.svelte';
  import Lyrics from './playlist/Lyrics.svelte';
  import Progress from './Progress.svelte';

  import { onMount, onDestroy } from 'svelte';
  export let collection = [];

  function displayTime(seek, duration){
    let a = parseInt(seek) || 0;
    let b = parseInt(duration) || 0;
    let response = ""
    response += new Date(a * 1000).toISOString().substr(14, 5);
    response += " / ";
    response += new Date(b * 1000).toISOString().substr(14, 5);
    return response;
  }

  onDestroy(() => {
    stop();
  });

  let playlist = collection.map(o=>({
    song: null,
    info:{...o},
    meta:{

      // Stats
      loaded: 0,
      total: 0,
      currentTime: 0,
      duration: 0,

      // Flags
      downloading: false, // to totally skip downloaded logic
      downloaded: false, // to check if not downloaded
      played: false, // to see that it has been played to the end

    }
  }));
  let playing = false;
  let selected = 0;
  let track = null;
  let upcoming = null;

  function next(index){
    let nextIndex = index+1;
    let lastIndex = playlist.length-1
    // console.log('Next request base index: ', index);
    if( nextIndex <= lastIndex ){
      // console.log('Next request base index %d, returning %d ', index, nextIndex);
      return nextIndex;
    }else{
      // console.log('Next request base index %d, returning %d (index+1=%d overflowed %d)', index, 0, nextIndex, lastIndex);
      return 0;
    }
  }

  function prev(index){
    if( index-1 < 0 ){
      return playlist.length-1;
    }else{
      return index-1;
    }
  }

  async function play(index, at=0){

    console.log(`Play triggered for ${index}, current value of select is ${selected}, at is ${at}`);

    let isAudioReady = (track.song)&&(track.song.audio)&&(track.meta.downloaded);
    if(!isAudioReady) {
      // nothing to do the selected track is not ready
      return;
    }

    playing = true;

    let newTime = track.meta.duration * (at/100);
    console.log('newTime', newTime, track.meta.duration );
    halt();

    try {
        track.song.audio.currentTime = newTime;
        await track.song.audio.play();
    } catch(err) {
      console.error("not playing", err);
      playing = false;
    }
  };

  function halt(){
    let stopped = playlist
    .filter(track=>track.song)
    .filter(track=>track.song.audio)
    .filter(track=>!track.song.audio.paused)
    .map(track=>{track.song.audio.pause(); track.song.audio.currentTime=0; return track;});
  };

  function stop(){
    playing = false;
    halt();
  };

  function preload(index){
    load(index, false);
  }

  function load(index, autoplay, at){
    console.log(`Loading of ${index}`);


    let isDownloading = playlist[index].meta.downloading
    if(isDownloading) return;

    let hasDownloaded = playlist[index].meta.downloaded;

    if(!hasDownloaded){
      console.log(`Downloading file for ${index}`);
      const aural = new Aural(playlist[index].info.audio);


      playlist[index].meta.downloading = true;
      if(index == selected){
        track.meta.downloading = true;
      } else if(index == next(selected)){
        upcoming.meta.downloading = true;
      }

      aural.on('load', ()=>{

        playlist[index].meta.downloading = false;
        playlist[index].meta.downloaded = true;

        if(index == selected){
          track.meta.downloading = false;
          track.meta.downloaded = true;
        } else if(index == next(selected)){
          upcoming.meta.downloading = false;
          upcoming.meta.downloaded = true;
        }

        // now that this file has loaded, preload the next one while this is playing.
        if(autoplay) preload(next(index));

        aural.on('timeupdate', (event)=>{

          //console.log('timeupdate index=%d selected=%d', index, selected);
          if(index == selected){
            //console.log('timeupdate for selected', event.currentTime);
            track.meta.currentTime = event.currentTime;
          }else{
            playlist[index].meta.currentTime = event.currentTime;
          }

        })
        aural.on('loadeddata', (event)=>{
          //console.log('loadeddata index=%d selected=%d duration=%d', index, selected, event.duration);
          playlist[index].meta.duration = event.duration;
          if(index == selected) track.meta.duration = event.duration;
        })
        aural.on('ended', (event)=>{
          // now that playing has ended select & play the next one
          playlist[index].meta.played = true;
          select(next(selected));
        })

        // now that the file has loaded, play it
        if(autoplay){
         if( index == selected ){
           play(index, at); // PLAY
         }else{
           console.log('File (%s, index %d) was downloaded but is no longer selected, selection is %d', playlist[index].info.title, index, selected);
         }
       }// autoplay

      })

      aural.on('progress', (event)=>{

        // Update visible objects (for svelte)
        if(index == selected){
          track.meta.loaded = event.loaded;
          track.meta.total = event.total;
        } else if(index == next(selected)){
          upcoming.meta.loaded = event.loaded;
          upcoming.meta.total = event.total;
        }

        // This Svelte write is still required for the list of songs to detect change
        playlist[index].meta.loaded = event.loaded;
        playlist[index].meta.total = event.total;

      }) // progress

      playlist[index].song = aural;

    }else{
      console.log(`File already downloaded ${index}`);
      if( (autoplay) && (index == selected) ) play(index, at);
      if(autoplay) preload(next(index))

    }
  }

  function select(index, at=0){
    console.log(`Selection of ${index}`);

    let isTrackValid = (track.song)&&(track.song.audio)&&(track.meta.downloaded);
    if(isTrackValid){
      let songIsPlaying = track.meta.currentTime > 0;
      let selectedAndRequestedAreTheSame = (index == selected);
      let alreadyPlayingTheSameSong = (selectedAndRequestedAreTheSame && songIsPlaying);
      if(alreadyPlayingTheSameSong) {
        console.log('select: The same thing is already playing, seek to 0;');
        track.song.audio.currentTime = track.meta.duration * (at/100);
        return;
      }
    }
    selected = index;
    track = playlist[selected];
    upcoming = playlist[next(selected)];
    load(selected, true, at);
  };

  function previousSong(){
    select(prev(selected));
  }

  function nextSong(){
    select(next(selected));
  }

  function seek(at, e, t){
    // console.log();
    // console.log();
    // console.log();
    // console.log();
    // console.log('offsetX:', e.offsetX);
    // console.log('getBoundingClientRect:', t.getBoundingClientRect().width);
    // console.log('offsetWidth:', t.offsetWidth);
    // console.log('at:', at);
     select(selected, at);
  }

  // Init
  let live = false;
  onMount(() => {

    selected = 0;
    track = playlist[selected];
    upcoming = playlist[next(selected)];
    select(selected); // can't play at init as audio is disabled in browsers unless there is interaction, but the user may interact, and the audio could play....
    live = true;
  });


</script>

<style>
</style>



{#if track && upcoming}
  <div class="row">
    <div class="col-lg-6 py-3">
      {#if playing}
        <button on:click={stop} type="button" class="btn bg-dark btn-lg btn-warning btn-block"><img src="/icons/stop.svg" alt="" width="32" height="32" style="filter: invert(1);"> Stop</button>
      {:else}
        <button on:click={()=>select(selected)} type="button" class="btn btn-lg btn-primary btn-block"><img src="/icons/play.svg" alt="" width="32" height="32" style="filter: invert(1);"> Play</button>
      {/if}
    </div>
    <div class="col-lg-3 py-3">
      <button on:click={previousSong} type="button" class="btn bg-dark btn-block text-light btn-lg d-inline-block"><img src="/icons/skip-backward.svg" alt="" width="32" height="32" style="filter: invert(1);"> Previous</button>
    </div>
    <div class="col-lg-3 py-3">
      <button on:click={nextSong} type="button" class="btn bg-secondary btn-block text-dark btn-lg d-inline-block">Next <img src="/icons/skip-forward.svg" alt="" width="32" height="32" style="filter: invert(1);"></button>
    </div>
  </div>

  <div class="row my-2" class:invisible={track.meta.loaded==track.meta.total}>
    <div class="col">
      <div>
        Please stand-by downloading {track.info.title}
        <Progress color="warning" val={track.meta.loaded} max={track.meta.total}/>
      </div>
    </div>
  </div>
  <div class="row">

    <div class="col-lg-8">
      <div class:d-none={!track.meta.downloaded}>
        <Cover {track} {upcoming} {playing}/>
        <div class="mb-5">
          <small class="text-info">Seek: {displayTime(track.meta.currentTime, track.meta.duration)} (click to interact)</small>
          <div class="progress bg-danger" on:click={function(e){ seek(calculatePercent(e.offsetX, this.getBoundingClientRect().width), e,this) }} style="height: 3rem; cursor: pointer;">
            <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: {calculatePercent(track.meta.currentTime,track.meta.duration,1)}%" aria-valuenow="{calculatePercent(track.meta.currentTime,track.meta.duration,1)}" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
        <Lyrics {track} read="/read/{track.info.id}"/>
        <div class:invisible={upcoming.meta.loaded==upcoming.meta.total}>
          Preloading Upcoming ({upcoming.info.title}) #{next(selected)}
          <Progress color="warning" val={upcoming.meta.loaded} max={upcoming.meta.total}/>
        </div>
      </div>
    </div>

    <div class="col-lg-4">
      {#each playlist as track, index}
        <div on:click={()=>select(index, 0)}>
          <Song active={selected == index} {track} read="/read/{track.info.id}"/>
        </div>
      {/each}
    </div>
  </div>
{/if}

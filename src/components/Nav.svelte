<script>

  import { onMount, onDestroy } from 'svelte';
  import { slide } from 'svelte/transition';

  import moment from "moment";

  import db from '../modules/db/index.js';
  import configuration from '../modules/configuration/index.js';

  const conf = configuration();

  export let segment;
  export let opened = false;

  let collection = db();
  let today = 0;

  function recalculateTimestamps(){
    collection.map(i=>{ i.ago = moment(i.date).from(moment()); return i; })
    collection.map(i=>{ i.today = (moment().diff(moment(i.date), 'days') < 1); return i; })
    today = collection.filter(o=>o.today).length;
  }

  let intervalId = null;
  intervalId = setInterval(recalculateTimestamps,60000)

  onDestroy(() => {
    clearInterval(intervalId);
  });

  onMount(() => {
    recalculateTimestamps();
  });

</script>

<style>
@keyframes shakeme {
    0% { bottom: 2px;}
    10% { bottom: 0px;}
   20% { bottom: 2px;}
    30% { bottom: 0px;}
   40% { bottom: 2px;}
    50% { bottom: 0px;}
   60% { bottom: 2px;}
    70% { bottom: 0px;}
   80% { bottom: 2px;}
    90% { bottom: 0px;}
   100% { bottom: 2px;}
}
.shake:hover, .shake.shake-force {
  position: relative;
  animation-name: shakeme;
  animation-duration: 0.8s;
   animation-iteration-count: infinite;
  animation-timing-function: linear;
  fill: silver;
}

.shake.shake-slow {
   animation-duration: 1.8s ! important;
}

.shake {
  display:inline-block;
  fill: gray;
}

</style>

<header>

{#if opened}
  <div class="bg-dark" in:slide={{ duration: 1500 }} out:slide={{ duration: 500 }}>
    <div class="container">
      <div class="row">

      <div class="col">
        <div class="shake shake-force text-primary d-block text-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" fill="currentColor" stroke="currentColor" stroke-width="0" aria-hidden="true" class="mr-2" viewBox="0 0 16 16" focusable="false"><path fill-rule="evenodd" d="M12 1C9.79 1 8 2.31 8 3.92c0 1.94.5 3.03 0 6.08 0-4.5-2.77-6.34-4-6.34.05-.5-.48-.66-.48-.66s-.22.11-.3.34c-.27-.31-.56-.27-.56-.27l-.13.58S.7 4.29.68 6.87c.2.33 1.53.6 2.47.43.89.05.67.79.47.99C2.78 9.13 2 8 1 8S0 9 1 9s1 1 3 1c-3.09 1.2 0 4 0 4H3c-1 0-1 1-1 1h6c3 0 5-1 5-3.47 0-.85-.43-1.79-1-2.53-1.11-1.46.23-2.68 1-2 .77.68 3 1 3-2 0-2.21-1.79-4-4-4zM2.5 6c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5z"/></svg>

        </div>
      </div>

        <!-- <div class="col-sm-8 col-md-7 py-4">
          <h4 class="text-white">About</h4>
          <p class="text-muted">Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information.</p>
        </div>
        <div class="col-sm-4 offset-md-1 py-4">
          <h4 class="text-white">Contact</h4>
          <ul class="list-unstyled">
            <li><a href="." class="text-white">Follow on Twitter</a></li>
            <li><a href="." class="text-white">Like on Facebook</a></li>
            <li><a href="." class="text-white">Email me</a></li>
          </ul>
        </div> -->

      </div>
    </div>
  </div>
{/if}

<div name="top" class="navbar navbar-dark bg-dark shadow-sm">
  <div class="container d-flex justify-content-between">

    <div class="navbar-brand d-flex align-items-center text-info">
      <svg on:click={()=>opened=!opened} class:text-danger={today==1} class:text-warning={today>1} xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" stroke="currentColor" stroke-width="0" aria-hidden="true" class="mr-2" viewBox="0 0 16 16" focusable="false"><path fill-rule="evenodd" d="M12 1C9.79 1 8 2.31 8 3.92c0 1.94.5 3.03 0 6.08 0-4.5-2.77-6.34-4-6.34.05-.5-.48-.66-.48-.66s-.22.11-.3.34c-.27-.31-.56-.27-.56-.27l-.13.58S.7 4.29.68 6.87c.2.33 1.53.6 2.47.43.89.05.67.79.47.99C2.78 9.13 2 8 1 8S0 9 1 9s1 1 3 1c-3.09 1.2 0 4 0 4H3c-1 0-1 1-1 1h6c3 0 5-1 5-3.47 0-.85-.43-1.79-1-2.53-1.11-1.46.23-2.68 1-2 .77.68 3 1 3-2 0-2.21-1.79-4-4-4zM2.5 6c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5z"/></svg>
      <a href="/"><strong>{conf.title}{#if today}&nbsp;<sup><span class="badge badge-danger badge-pill">{today}</span></sup>{/if}</strong></a>
    </div>

    <!-- <button class="navbar-toggler" type="button" on:click={()=>opened=!opened} aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> -->
  </div>
</div>

</header>

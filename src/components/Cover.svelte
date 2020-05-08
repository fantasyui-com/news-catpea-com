<script>

  import { onMount } from 'svelte';

  import startCase from "lodash/startCase.js";

  export let data;


  let live = false;

  onMount(() => {
    live = true;
  });

</script>

<style>
  .bg-alpha {
    background: rgba(0, 43, 54, 0.26);

  }
</style>

<div class="card bg-dark text-white">
  <div class="bg-dark" style="min-height: 20rem;">
    {#if data.image}
      <img src={data.image} class="card-img" alt={data.title}>
    {:else}
      <img src="audio-icon.png" class="card-img" alt={data.title}>
    {/if}
  </div>
  <div class="card-img-overlay">
    <div class="rounded bg-alpha p-4">
    <!-- ... -->
    </div>
  </div>
</div>

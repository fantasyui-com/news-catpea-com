<script>

  import { onMount } from 'svelte';
  import moment from "moment";

  import Post from '../components/Post.svelte';
  import Sub from '../components/Sub.svelte';
  import Tail from '../components/Tail.svelte';
  import db from '../modules/db/index.js';
  import configuration from '../modules/configuration/index.js';

  const conf = configuration();

  let collection = db();

  let live = false;
  onMount(() => {
    live = true;
  });

</script>

<style>

</style>

<svelte:head>
  <title>{conf.title}</title>
</svelte:head>

<main role="main">
  <section>
    <div class="container">

      <div class="row mt-5">
        <div class="{conf.column}">
        <Sub description="Showing All {collection.length} Posts" opened categories=true tags=true></Sub>
        </div>
      </div>

      <div class="row mt-5">
        <div class="{conf.column}">
          {#each collection as data}
            <Post {data} read="/read/{data.id}"/>
          {/each}
        </div>
      </div>

      <div class="row mt-5">
        <div class="{conf.column}">
        <Sub description="Showing All {collection.length} Posts" opened categories=true tags=true></Sub>
        </div>
      </div>

    </div>
  </section>
</main>

<Tail/>

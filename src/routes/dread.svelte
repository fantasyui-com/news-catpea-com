<script>


  import { onMount, beforeUpdate, afterUpdate, onDestroy } from 'svelte';
  import { stores } from '@sapper/app';
  const { page } = stores();

  import moment from "moment";
  import db from '../modules/db/index.js';
  import Icon from '../../../catpea-com/src/controls/Icon.svelte';

  let collection = db();

  function recalculateTimestamps(){
    collection = collection.map(i=>{ i.ago = moment(i.date).from(moment()); return i; })
  }

  let intervalId = null;
  intervalId = setInterval(recalculateTimestamps,60000)
  recalculateTimestamps();


  $: id = $page.query.id;
  $: index = collection.indexOf(collection.filter(o=>o.id===id).pop());
  $: item = collection[index];
  $: prev = collection[index+1];
  $: next = collection[index-1];


  onDestroy(() => {
    clearInterval(intervalId);
  });

  onMount(() => {
  
  });


</script>

<svelte:head>
  <title>Post Reader</title>
</svelte:head>



<main role="main">
  <section>
    <div class="container">
      <div class="row mt-5">
      <div class="col-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6 offset-xxl-3 col-xxl-6">

        <div class="mb-5">
          <div>
            <a href="/read?id={item.id}" class="text-muted lead">{item.title}</a>
          </div>
          <div class="ml-3">
            <span class="text-warning small">&mdash; {item.ago}</span> &middot; <a href="/{item.category}" class="small">{item.category}</a>
          </div>
        </div>

        <p>{@html item.html}</p>

        <nav aria-label="" class="my-5">
          <ul class="pagination pagination-lg">


            {#if prev}
            <li class="page-item"><a class="page-link bg-dark border-primary" title={prev.title} href="/read?id={prev.id}">Older</a></li>
            {/if}

            {#if next}
            <li class="page-item"><a class="page-link bg-dark border-primary" title={prev.title} href="/read?id={next.id}">Newer</a></li>
            {/if}

          </ul>
        </nav>

      </div>
    </div>
  </div>
</section>
</main>

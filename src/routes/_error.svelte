<script>
  import startCase from 'lodash/startCase.js';
  export let status;
  export let error;

  const dev = process.env.NODE_ENV === 'development';
</script>

<style>

</style>

<svelte:head>
  <title>News every hour, on the hour. - news.catpea.com</title>
</svelte:head>

<div class="container">
  <div class="row">
    <div class="col">

      <div class="card border-warning mb-3" style="margin-top: 35vh;">
        <div class="card-header">Error: {startCase(error.message)}</div>
        <div class="card-body text-warning">
          <h5 class="card-title">HTTP Status: {status}</h5>
          {#if dev && error.stack}
            {#each error.stack.split('\n') as line}
              <p class="card-text">{line}</p>
            {/each}
          {/if}
        </div>
      </div>

    </div>
  </div>
</div>

<script>
  import startCase from "lodash/startCase.js";

  export let description;
  export let posts = false;
  export let categories = false;
  export let tags = false;



</script>

<div class="card mb-5 article-link">
  <div class="card-body p-1">

      <div class="float-left py-1 ml-2">{description}</div>

      {#if posts}<a class="btn btn-sm btn-outline-info float-right mr-2" href="/"><img src="/icons/eye.svg" alt="" width="16" height="16"> Posts</a>{/if}
      {#if categories}<a class="btn btn-sm btn-outline-info float-right mr-2" href="/category"><img src="/icons/eye.svg" alt="" width="16" height="16"> Categories</a>{/if}
      {#if tags}<a class="btn btn-sm btn-outline-info float-right mr-2" href="/tag"><img src="/icons/eye.svg" alt="" width="16" height="16"> Tags</a>{/if}

  </div>
</div>

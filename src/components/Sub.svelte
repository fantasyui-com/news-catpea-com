<script>
  import startCase from "lodash/startCase.js";

  export let post;

  export let description;
  export let posts = false;
  export let categories = false;
  export let tags = false;

  export let untag = false;
  export let uncategorize = false;



</script>

<!-- <div class="card mb-3 article-link">
  <div class="card-body p-1">

      <div class="float-lg-left py-1 mx-1 small text-info mb-2 mb-lg-0"><img src="/icons/info-circle.svg" alt="" width="16" height="16" style="filter: invert(1);"> {description}</div>

      {#if posts}<a class="btn btn-sm btn-outline-info float-lg-right mx-1 mb-2 mb-lg-0" href="/"><img src="/icons/view-stacked.svg" alt="" width="16" height="16" style="filter: invert(1);"> All Posts</a>{/if}
      {#if categories}<a class="btn btn-sm btn-outline-info float-lg-right mx-1 mb-2 mb-lg-0" href="/category"><img src="/icons/card-list.svg" alt="" width="16" height="16" style="filter: invert(1);"> Browse Categories</a>{/if}
      {#if tags}<a class="btn btn-sm btn-outline-info float-lg-right mx-1 mb-2 mb-lg-0" href="/tag"><img src="/icons/tag.svg" alt="" width="16" height="16" style="filter: invert(1);"> Browse Tags</a>{/if}

      {#if untag}<a class="btn btn-sm btn-outline-warning float-lg-right mx-1 mb-2 mb-lg-0" href="/read/{post}"><img src="/icons/x-octagon.svg" alt="" width="16" height="16" style="filter: invert(1);"> Untag</a>{/if}
      {#if uncategorize}<a class="btn btn-sm btn-outline-warning float-lg-right mx-1 mb-2 mb-lg-0" href="/read/{post}"><img src="/icons/x-octagon.svg" alt="" width="16" height="16" style="filter: invert(1);"> Uncategorize</a>{/if}

  </div>
</div> -->


<div class="card mb-3 shadow">
  <div class="card-body">
    {#if posts}<a class="btn btn-sm btn-outline-info mt-1" href="/"><img src="/icons/view-stacked.svg" alt="" width="16" height="16" style="filter: invert(1);"> All Posts</a>{/if}
    {#if categories}<a class="btn btn-sm btn-outline-info mt-1" href="/category"><img src="/icons/card-list.svg" alt="" width="16" height="16" style="filter: invert(1);"> Browse Categories</a>{/if}
    {#if tags}<a class="btn btn-sm btn-outline-info mt-1" href="/tag"><img src="/icons/tag.svg" alt="" width="16" height="16" style="filter: invert(1);"> Browse Tags</a>{/if}
    {#if untag}<a class="btn btn-sm btn-outline-warning mt-1" href="/read/{post}"><img src="/icons/x-octagon.svg" alt="" width="16" height="16" style="filter: invert(1);"> Untag</a>{/if}
    {#if uncategorize}<a class="btn btn-sm btn-outline-warning mt-1" href="/read/{post}"><img src="/icons/x-octagon.svg" alt="" width="16" height="16" style="filter: invert(1);"> Uncategorize</a>{/if}
  </div>
  <div class="card-footer">
    <img class="mr-2" src="/icons/info-circle.svg" alt="" width="16" height="16" style="filter: invert(1);"> <small>{description}</small>
  </div>
</div>

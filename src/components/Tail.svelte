<script>
import configuration from '../modules/configuration/index.js';
const conf = configuration();
</script>

<footer class="text-muted mt-5 mb-3">
  <div class="container">
    <div class="row">
      <div class="{conf.column}">

        <a class="btn btn-sm btn-outline-info float-right mr-2" href="#top">back to top</a>
        <a class="btn btn-sm btn-outline-info float-left ml-2" href="http://catpea.com/">catpea.com</a>
        <a class="btn btn-sm btn-outline-info float-left ml-2" href="http://news.catpea.com/">news.catpea.com</a>

      </div>
    </div>
    <div class="row">
      <div class="{conf.column} small text-center p-3">
        <a href="{conf.url}">{conf.title}</a>
         is part of the
        <a href="http://catpea.com">Cat Pea Fun Factory</a>
      </div>
    </div>
  </div>
</footer>

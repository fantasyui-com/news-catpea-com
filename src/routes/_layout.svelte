<script>
  import { onMount, onDestroy } from 'svelte';
  import Nav from '../components/Nav.svelte';
  import Spinner from '../components/Spinner.svelte';
  export let segment;
  let live = false;
  onMount(() => {
    live = true;
  });
</script>

<style lang="scss" global>
  @import "../../catpea-com/src/style/index.scss";
</style>

<Nav {segment} opened={false}/>

<slot></slot>
<!--
  Fails when JavaScript is turned off, it keeps spinning....
  this website requires that the static version is fully functional...
  <Spinner style="position: fixed; top:5rem; left:50%; transform: translate(-50%, 0);" class={live?'d-none':''}/>
-->

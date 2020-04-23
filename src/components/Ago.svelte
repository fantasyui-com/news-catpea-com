<script>
import { onMount, onDestroy } from 'svelte';

  import moment from "moment";

  export let date;
  let display;

  let intervalId = null;

  function recalculate(){
    display = moment(date).from(moment());
  }

  onMount(() => {
    intervalId = setInterval(recalculateTimestamps, 30*1000)
    recalculate();
  });

  onDestroy(() => {
    clearInterval(intervalId);
  });

  // Initial display is set to a standard date, this will be picked up when scraping, and remain as the timestamp for nojs clients.
  display = moment(date).format('MMMM Do YYYY, h:mm:ss a');

</script>

{display}

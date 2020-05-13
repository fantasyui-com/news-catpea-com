<script>
  import calculatePercent from 'calculate-percent';

  export let color = 'primary';
  export let val = 0;
  export let min = 0;
  export let max = 100;

 // calculatePercent(val, max, min);

</script>

<div class="progress">
  <div class="progress-bar progress-bar-striped bg-{color}" role="progressbar" style="width: {calculatePercent(val, max, min)}%" aria-valuenow="{calculatePercent(val, max, min)}" aria-valuemin="0" aria-valuemax="100"></div>
</div>

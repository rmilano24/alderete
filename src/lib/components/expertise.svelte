<script lang="ts">
  export let number: string;
  export let skill: string;
  export let noBorder: boolean = false;
  export let neverBorder: boolean = false; // new prop
</script>

<div class={`pb-16 max-md:pb-6 ${
  neverBorder
    ? ''
    : noBorder
      ? 'border-b border-primary-300'
      : 'border-b border-primary-300'
}`}>
  <span class="block max-md:text-sm text-teal-100">{number}</span>
  <h2 class="text-4xl max-md:text-2xl font-reckless mt-2 text-teal-100">{skill}</h2>
</div>
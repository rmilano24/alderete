<script lang="ts">
  export let number: string;
  export let skill: string;
  export let noBorder: boolean = false;
  export let neverBorder: boolean = false; // new prop
</script>

<div class={`pb-16 ${
  neverBorder
    ? ''
    : noBorder
      ? 'border-b border-primary-300 lg:border-b-0'
      : 'border-b border-primary-300'
}`}>
  <span class="block text-teal-100">{number}</span>
  <h2 class="text-4xl font-reckless mt-2 text-teal-100">{skill}</h2>
</div>
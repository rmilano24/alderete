<script>
   export let number = "01"
   export let value = "Create good vibes"
   export let valuetext = " Short text about creating good vibes. We can use AI to help us generate content. A little more text would look better here."  
  
</script>

<div class="border-b border-primary-300 pb-16 max-md:pb-12 last:border-b-0">
    <div class="flex flex-row max-md:flex-col justify-between">
        <div class="w-1/2 max-md:w-full">
            <span class="block text-teal-100 max-md:text-sm">{number}</span>
            <h2 class="text-4xl max-md:text-3xl font-reckless mt-2 text-teal-100">{value}</h2>
        </div>
        <div class="w-1/2 max-md:w-full">
            <p class="text-teal-100 text-lg mt-9 max-md:mt-6">{valuetext}</p>
        </div>
    </div>
</div>	
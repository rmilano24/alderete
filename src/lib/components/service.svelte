<script>
   export let number = "01"
   export let service = "Restorative Dentistry"
   export let servicetext = "Short text about creating good vibes. We can use AI to help us generate content. A little more text would look better here."  
   export let serviceitem = "Tooth Colored Composite Fillings"  
   export let serviceitems = [];
</script>

<div class="border-b border-primary-300 pb-16 last:border-0">
    <div class="flex flex-row max-lg:flex-col justify-between">
        <div class="w-3/4 max-lg:w-full">
            <span class="block text-teal-100 max-md:text-sm">{number}</span>
            <h2 class="text-3xl font-reckless mt-1 text-teal-100">{service}</h2>
            <p class="text-teal-100 text-xl mt-5 max-w-3/4 max-lg:max-w-full">{servicetext}</p>
            <a href="/contact" class="text-teal-400 mt-12 inline-block font-family-matter font-semibold group max-lg:hidden">
				<div class="flex flex-row items-center">
					<div>Request appointment</div>
					<div class="ml-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1"> 
						<svg width="20" height="11" viewBox="0 0 20 11" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M15 1.5L19 5.5M19 5.5L15 9.5M19 5.5H1" stroke="#1AD2D4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
					</div>
				</div>
			</a>
        </div>
        <div class="w-1/4 max-lg:w-full">
            <ul class="mt-21 max-lg:mt-12 text-teal-100 text-lg">
                {#each serviceitems as item}
                    <li class="mt-6 first:mt-0"><svg class="inline mr-2 mt-[-4px]" width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.293 1.26788C8.48053 1.08041 8.73484 0.975098 9 0.975098C9.26516 0.975098 9.51947 1.08041 9.707 1.26788L15.707 7.26788C15.8945 7.45541 15.9998 7.70972 15.9998 7.97488C15.9998 8.24005 15.8945 8.49436 15.707 8.68188L9.707 14.6819C9.5184 14.864 9.2658 14.9648 9.0036 14.9626C8.7414 14.9603 8.49059 14.8551 8.30518 14.6697C8.11977 14.4843 8.0146 14.2335 8.01233 13.9713C8.01005 13.7091 8.11084 13.4565 8.293 13.2679L12.586 8.97488H1C0.734784 8.97488 0.48043 8.86953 0.292893 8.68199C0.105357 8.49445 0 8.2401 0 7.97488C0 7.70967 0.105357 7.45531 0.292893 7.26778C0.48043 7.08024 0.734784 6.97488 1 6.97488H12.586L8.293 2.68188C8.10553 2.49436 8.00021 2.24005 8.00021 1.97488C8.00021 1.70972 8.10553 1.45541 8.293 1.26788Z" fill="#1AD2D4"/>
                    </svg>
                    {item}</li>
                {/each}
            </ul>

            <a href="/contact" class="text-teal-400 mt-12 inline-block font-family-matter font-semibold group min-lg:hidden">
				<div class="flex flex-row items-center">
					<div>Request appointment</div>
					<div class="ml-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1"> 
						<svg width="20" height="11" viewBox="0 0 20 11" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M15 1.5L19 5.5M19 5.5L15 9.5M19 5.5H1" stroke="#1AD2D4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
					</div>
				</div>
			</a>

        </div>
    </div>
</div>	
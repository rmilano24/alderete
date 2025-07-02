<script lang="ts">
	import home_hero from '$lib/images/bg_home-hero.jpg';
	import jim from '$lib/images/jim-alderete.jpg';
	import cta from '$lib/images/cta.jpg';
</script>

<svelte:head>
	<title>SvelteKit + TypeScript + TailwindCSS starter</title>
</svelte:head>



<section id="home-hero" class="h-screen bg-cover bg-center flex items-end" style="background-image: url('{home_hero}')">
	<div class="w-full m-12">
		<div class="flex ml-4 mb-4">
			<div class="glass rounded-2xl border border-white/20 p-8 mr-6 max-w-[500px] shadow-[0_4px_100px_0px_rgba(0,0,0,0.6)]">
				<h5 class="text-white uppercase text font-matter tracking-widest after:bg-white after:content-[''] after:h-2 after:ml-8 after:w-4">A trusted santa cruz dentist, since 2009</h5>
				<h1 class="text-5xl text-white font-reckless mt-8 max-w-xl">Exceptional care for <span class="italic">all ages</span></h1>
			</div>
			<div class="glass rounded-2xl border border-white/20 min-w-64 shadow-[0_4px_100px_0px_rgba(0,0,0,0.6)] flex flex-col justify-between p-8">
					<div>
						<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M1 4.55556C1 3.61256 1.3746 2.70819 2.0414 2.0414C2.70819 1.3746 3.61256 1 4.55556 1H10.3867C10.7596 1.00028 11.1231 1.11786 11.4255 1.33609C11.728 1.55432 11.9541 1.86214 12.072 2.216L14.7351 10.2036C14.87 10.6095 14.8541 11.0505 14.6902 11.4456C14.5262 11.8407 14.2253 12.1635 13.8427 12.3547L9.83022 14.3636C11.797 18.7165 15.2835 22.203 19.6364 24.1698L21.6453 20.1573C21.8365 19.7747 22.1593 19.4738 22.5544 19.3098C22.9495 19.1459 23.3905 19.13 23.7964 19.2649L31.784 21.928C32.1381 22.046 32.4462 22.2724 32.6644 22.5752C32.8827 22.878 33.0001 23.2418 33 23.6151V29.4444C33 30.3874 32.6254 31.2918 31.9586 31.9586C31.2918 32.6254 30.3874 33 29.4444 33H27.6667C12.9396 33 1 21.0604 1 6.33333V4.55556Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
					</div>
				<div class="text-3xl"><a target="_blank" href="tel:18314323231">831.432.3231</a></div>
			</div>
		</div>
	</div>
	


</section>

<section id="get-to-know-us">

	<div class="container grid grid-cols-2 gap-24 mx-auto">
		<div>
			<img class="mt-8" src={jim} alt="Jim Alderete" />
		</div>

		<div class="mt-20">
			<h5 class="text-white uppercase text font-matter tracking-widest after:bg-white after:content-[''] after:inline-block after:h-0.5 after:ml-6 after:w-8 after:relative after:bottom-[5px]">Get to know us</h5>
			<h1 class="text-5xl text-teal-100 font-reckless mt-8">Our goal is to leave you with a <span class="text-white italic">positive experience.</span></h1>
			<p class="text-teal-100 mt-8">We strive to make our office unique by providing excellent clinical skills in a warm, friendly atmosphere. Establishing rewarding and lasting relationships with patients is important to us and we pledge excellence in all we do, and we look forward to helping you make the most of your smile.</p>
			<a href="#" class="text-teal-400 mt-12 inline-block">
				<div class="flex flex-row items-center">
					<div>Learn more about us</div>
					<div class="ml-4"> 
						<svg width="20" height="11" viewBox="0 0 20 11" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M15 1.5L19 5.5M19 5.5L15 9.5M19 5.5H1" stroke="#1AD2D4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
					</div>
				</div>
			</a>
		</div>
	</div>

</section>

<div class="container seperator border-b border-teal-800 h-[1px] my-24 mx-auto"></div>

<section id="expertise">

	<div class="container m-auto">

		<h5 class="text-white uppercase text font-matter tracking-widest mb-16 after:bg-white after:content-[''] after:inline-block after:h-0.5 after:ml-6 after:w-8 after:relative after:bottom-[5px]">Our Areas of Expertise</h5>

		<div class="grid grid-cols-2 gap-16">

			<div class="border-b border-teal-800 pb-16">
				<span class="block text-teal-100">01</span>
				<h2 class="text-3xl font-reckless mt-1 text-teal-100">Family & General Dentistry</h2>
			</div>
			<div class="border-b border-teal-800 pb-16">
				<span class="block text-teal-100">02</span>
				<h2 class="text-3xl font-reckless mt-1 text-teal-100">Restorative Dentistry</h2>
			</div>
			<div class="border-b border-teal-800 pb-16">
				<span class="block text-teal-100">03</span>
				<h2 class="text-3xl font-reckless mt-1 text-teal-100">Cosmetic Dentistry</h2>
			</div>
			<div class="border-b border-teal-800 pb-16">
				<span class="block text-teal-100">04</span>
				<h2 class="text-3xl font-reckless mt-1 text-teal-100">Periodontal Services</h2>
			</div>
			<div class="border-b border-teal-800 pb-16">
				<span class="block text-teal-100">05</span>
				<h2 class="text-3xl font-reckless mt-1 text-teal-100">Surgical & Endodontic Services</h2>
			</div>
			<div class="border-b border-teal-800 pb-16">
				<span class="block text-teal-100">06</span>
				<h2 class="text-3xl font-reckless mt-1 text-teal-100">Digital x-rays and Panorex x-rays</h2>
			</div>
			<div class="border-b border-teal-800 pb-16">
				<span class="block text-teal-100">07</span>
				<h2 class="text-3xl font-reckless mt-1 text-teal-100">Intra-oral Camera</h2>
			</div>


		  </div>
	</div>

	
</section>

<section id="gallery" class="container mx-auto my-24">
	<div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
		<!-- image - start -->
		<a href="#"
			class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
			<img src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Minh Pham" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
	
			<div
				class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
			</div>
	
			<span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">VR</span>
		</a>
		<!-- image - end -->
	
		<!-- image - start -->
		<a href="#"
			class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
			<img src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=1000" loading="lazy" alt="Photo by Magicle" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
	
			<div
				class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
			</div>
	
			<span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Tech</span>
		</a>
		<!-- image - end -->
	
		<!-- image - start -->
		<a href="#"
			class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
			<img src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=1000" loading="lazy" alt="Photo by Martin Sanchez" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
	
			<div
				class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
			</div>
	
			<span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Dev</span>
		</a>
		<!-- image - end -->
	
		<!-- image - start -->
		<a href="#"
			class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
			<img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Lorenzo Herrera" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
	
			<div
				class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
			</div>
	
			<span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Retro</span>
		</a>
		<!-- image - end -->
	</div>
</section>

<section id="cta" class="h-[724px] bg-cover flex items-center justify-center" style="background-image: url('{cta}')">
	<div class="glass rounded-2xl border border-white/20 flex w-4xl flex-col items-center text-center py-16 px-32">
		<div><h1 class="text-6xl">We’re looking forward to <span class="italic">meeting you.</span></h1></div>
		<div class="mt-6"><p class="text">Feel free to drop in or give us a call at 831.432.3231.</p></div>
		<div class="mt-8"><a class="glass rounded-2xl border border-white/20 p-4 block" href="/contact">Request appointment</a></div>
	  </div>
</section>
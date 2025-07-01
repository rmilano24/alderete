<script lang="ts">
	import home_hero from '$lib/images/bg_home-hero.jpg';
	import jim from '$lib/images/jim-alderete.jpg';
	import cta from '$lib/images/cta.jpg';
</script>

<svelte:head>
	<title>SvelteKit + TypeScript + TailwindCSS starter</title>
</svelte:head>



<section id="home-hero" class="h-screen bg-cover bg-center flex items-end" style="background-image: url('{home_hero}')">
	<div class="container mx-auto">
		<div class="flex ml-4 mb-4">
			<div class="bg-teal-400 p-8 mr-4">hello world</div>
			<div class="bg-teal-400">hello world</div>
		</div>
	</div>
	
</section>

<section id="get-to-know-us">

	<div class="container grid grid-cols-2 gap-24 mx-auto">
		<div>
			<img class="mt-8" src={jim} alt="Jim Alderete" />
		</div>

		<div class="mt-20">
			<h5 class="text-white uppercase text font-matter tracking-widest after:bg-white after:content-[''] after:h-2 after:ml-8 after:w-4">Get to know us</h5>
			<h1 class="text-5xl text-teal-100 font-reckless mt-8">Our goal is to leave you with a <span class="text-white italic">positive experience.</span></h1>
			<p class="text-teal-100 mt-8">We strive to make our office unique by providing excellent clinical skills in a warm, friendly atmosphere. Establishing rewarding and lasting relationships with patients is important to us and we pledge excellence in all we do, and we look forward to helping you make the most of your smile.</p>
			<a href="#" class="text-teal-400 mt-12 block">Learn more about us</a>
		</div>
	</div>

</section>

<div class="container seperator border-b border-teal-800 h-[1px] my-24 mx-auto"></div>

<section id="expertise">

	<div class="container m-auto">

		<h5 class="text-white uppercase text font-matter tracking-widest mb-16">Our Areas of Expertise</h5>

		<div class="grid grid-cols-2 gap-16">

			<div class="border-b border-teal-800 pb-16">
				<span class="block text-teal-100">01</span>
				<h2 class="text-3xl font-reckless mt-1 text-teal-100">Family & General Dentistry</h2>
			</div>
			<div class="border-b border-teal-800 pb-16">
				<span class="block text-teal-100">01</span>
				<h2 class="text-3xl font-reckless mt-1 text-teal-100">Family & General Dentistry</h2>
			</div>
			<div class="border-b border-teal-800 pb-16">
				<span class="block text-teal-100">01</span>
				<h2 class="text-3xl font-reckless mt-1 text-teal-100">Family & General Dentistry</h2>
			</div>
			<div class="border-b border-teal-800 pb-16">
				<span class="block text-teal-100">01</span>
				<h2 class="text-3xl font-reckless mt-1 text-teal-100">Family & General Dentistry</h2>
			</div>
			<div class="border-b border-teal-800 pb-16">
				<span class="block text-teal-100">01</span>
				<h2 class="text-3xl font-reckless mt-1 text-teal-100">Family & General Dentistry</h2>
			</div>
			<div class="border-b border-teal-800 pb-16">
				<span class="block text-teal-100">01</span>
				<h2 class="text-3xl font-reckless mt-1 text-teal-100">Family & General Dentistry</h2>
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
	<div class="flex w-96 bg-gray-400 flex-col items-center text-center">
		<div><h1 class="text-5xl">We’re looking forward to meeting you.</h1></div>
		<div><p class="text">Feel free to drop in or give us a call at 831.432.3231.</p></div>
		<div><a href="">Request appointment</a></div>
	  </div>
</section>
<script lang="ts">
	import home_hero from '$lib/images/bg_home-hero.jpg';
	import jim from '$lib/images/jim-alderete.jpg';
</script>

<svelte:head>
	<title>SvelteKit + TypeScript + TailwindCSS starter</title>
</svelte:head>



<section id="home-hero" class="h-screen bg-cover bg-center" style="background-image: url('{home_hero}')">
	<div class="flex">
		
	</div>
</section>

<section id="get-to-know-us" class="container">

	<div class="container grid grid-cols-2 gap-24 mx-16">
		<div>
			<img class="mt-8" src={jim} alt="Jim Alderete" />
		</div>

		<div>
			<h5 class="text-white uppercase text">Get to know us</h5>
			<h1 class="text-5xl">Our goal is to leave you with a positive experience.</h1>
			<p class="text-blue-200">We strive to make our office unique by providing excellent clinical skills in a warm, friendly atmosphere. Establishing rewarding and lasting relationships with patients is important to us and we pledge excellence in all we do, and we look forward to helping you make the most of your smile.</p>
			<a href="#" class="text-blue-400">Learn more about us</a>
		</div>
	</div>

</section>

<div class="container seperator border-b border-white h-[1px] my-24 mx-auto"></div>

<section id="expertise">

	<div class="container m-auto">
		<div class="grid grid-cols-2 gap-4">
			<div>Family & General Dentistry</div>
			<div>Family & General Dentistry9</div>
			<div>Family & General Dentistry</div>
			<div>Family & General Dentistry9</div>
			<div>Family & General Dentistry</div>
			<div>Family & General Dentistry9</div>
			<div>Family & General Dentistry</div>
			<div>Family & General Dentistry9</div>
		  </div>
	</div>

	
</section>

<section id="gallery" class="container mx-auto">
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


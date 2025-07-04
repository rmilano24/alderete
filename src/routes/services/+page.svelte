<script lang="ts">
	import home_hero from '$lib/images/bg_home-hero.jpg';
	import cta from '$lib/images/cta.jpg';
</script>

<svelte:head>
	<title>NMBL | Branding and Design Studio in Santa Cruz, California</title>
	<meta name="description" content="NMBL | UX Design, Branding, Web Design & Development Studio in Santa Cruz | San Francisco Bay Area" />
</svelte:head>

<section id="hero">
	<div class="grid grid-cols-2 gap-4 ">
		<div class="p-24 mt-40">
			<h5 class="text-white uppercase text font-matter tracking-widest after:bg-white after:content-[''] after:inline-block after:h-0.5 after:ml-6 after:w-8 after:relative after:bottom-[5px]">What we’re good at</h5>
			<h1 class="text-5xl text-teal-100 font-reckless mt-8">Our services</h1>
			<p class="text-teal-100 mt-8 text-lg">You want your smile to be the best it can be, and we are here to help. Dr Alderete and his caring, friendly team of dental professionals are committed to providing a comfortable dental experience. Our goal is to provide dental care for you and your family in a compassionate, caring and professional environment.</p> 
			

		</div>
		<div class="h-[900px] bg-center bg-cover bg-no-repeat rounded-bl-4xl" style="background-image: url('{home_hero}')"></div>
	  </div>
</section>



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


<section id="cta" class="h-[724px] bg-cover flex items-center justify-center" style="background-image: url('{cta}')">
	<div class="glass rounded-2xl border border-white/20 flex w-4xl flex-col items-center text-center py-16 px-32">
		<div><h1 class="text-6xl">We're looking forward to <span class="italic">meeting you.</span></h1></div>
		<div class="mt-6"><p class="text">Feel free to drop in or give us a call at 831.432.3231.</p></div>
		<div class="mt-8"><a class="glass rounded-2xl border border-white/20 p-4 block" href="/contact">Request appointment</a></div>
	  </div>
</section>
<script lang="ts">
	import home_hero from '$lib/images/bg_home-hero.jpg';
	import jim from '$lib/images/jim-alderete.jpg';
</script>

<svelte:head>
	<title>SvelteKit + TypeScript + TailwindCSS starter</title>
</svelte:head>



<section id="home-hero" class="h-screen bg-cover" style="background-image: url('{home_hero}')">
	<div class="flex">
		hello
	</div>
</section>

<section id="get-to-know-us">
	<div class="flex flex-row">

		<div class="basis-1/2">
			<img class="mt-8" src={jim} alt="Jim Alderete" />
		</div>

		<div class="basis-2/2">
			<h5 class="text-white uppercase text">Get to know us</h5>
			<h1 class="text-5xl">Our goal is to leave you with a positive experience.</h1>
			<p class="text-blue-200">We strive to make our office unique by providing excellent clinical skills in a warm, friendly atmosphere. Establishing rewarding and lasting relationships with patients is important to us and we pledge excellence in all we do, and we look forward to helping you make the most of your smile.</p>
			<a href="#" class="text-blue-400">Learn more about us</a>
		</div>

	  </div>
</section>

<div class="seperator border-b border-white h-[1px] m-24"></div>

<section id="expertise">
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
</section>
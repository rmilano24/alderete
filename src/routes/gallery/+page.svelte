<script lang="ts">
	import garden from '$lib/images/gallery/garden.jpg';
	import roomleft from '$lib/images/gallery/patient-room-left.jpg';
	import awards from '$lib/images/gallery/readers-choice-award.jpg';
</script>

<svelte:head>
	<title>NMBL | Branding and Design Studio in Santa Cruz, California</title>
	<meta name="description" content="NMBL | UX Design, Branding, Web Design & Development Studio in Santa Cruz | San Francisco Bay Area" />
</svelte:head>

<h1 class="text-5xl">Hello world</h1>

<section id="gallery" class="container mx-auto my-24">
	<div class="grid grid-cols-3 gap-8">

		<div><img class="rounded-4xl" src={awards} alt="Alderete DDS" /></div>
		<div class="col-span-2 ..."><img class="rounded-4xl" src={garden} alt="Alderete DDS" /></div>
		<div class="col-span-2 ..."><img class="rounded-4xl" src={roomleft} alt="Alderete DDS" /></div>
		<div><img class="rounded-4xl" src={awards} alt="Alderete DDS" /></div>
		<div><img class="rounded-4xl" src={awards} alt="Alderete DDS" /></div>
		<div class="col-span-2 ..."><img class="rounded-4xl" src={garden} alt="Alderete DDS" /></div>
		
	  </div>

	  <div class="grid grid-cols-3 gap-8 mt-48">

		<div><img class="rounded-4xl" src={awards} alt="Alderete DDS" /></div>
		<div class="col-span-2 ..."><img class="rounded-4xl" src={garden} alt="Alderete DDS" /></div>
		<div class="col-span-2 ..."><img class="rounded-4xl" src={roomleft} alt="Alderete DDS" /></div>
		<div><img class="rounded-4xl" src={awards} alt="Alderete DDS" /></div>
		<div><img class="rounded-4xl" src={awards} alt="Alderete DDS" /></div>
		<div class="col-span-2 ..."><img class="rounded-4xl" src={garden} alt="Alderete DDS" /></div>
		
	  </div>
</section>
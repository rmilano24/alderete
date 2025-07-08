<script lang="ts">
	import garden from '$lib/images/gallery/garden.jpg';
	import roomleft from '$lib/images/gallery/patient-room-left.jpg';
	import awards from '$lib/images/gallery/readers-choice-award.jpg';
	import HeroInner from '$components/hero-inner.svelte';
</script>

<svelte:head>
	<title>NMBL | Branding and Design Studio in Santa Cruz, California</title>
	<meta name="description" content="NMBL | UX Design, Branding, Web Design & Development Studio in Santa Cruz | San Francisco Bay Area" />
</svelte:head>

<HeroInner eyebrow="A warm and friendly environment" header="Our office" text="At our office you'll find a friendly and professional staff, each dedicated to providing your family with quality care and personal attention. They are trained professionals with many years of experience, and a desire to share their knowledge so that you may achieve a healthy, attractive and comfortable mouth."/>

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
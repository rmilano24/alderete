<script lang="ts">
	import hero from '$lib/images/hero-gallery-min.jpg';
	import garden from '$lib/images/gallery/garden.jpg';
	import roomleft from '$lib/images/gallery/patient-room-left.jpg';
	import awards from '$lib/images/gallery/readers-choice-award.jpg';
	import HeroInner from '$lib/components/hero-inner.svelte';
	import waitingroom from '$lib/images/gallery/waiting-room.jpg';
	import frontdesk from '$lib/images/gallery/front-desk.jpg';
	import roomright from '$lib/images/gallery/patient-room-right.jpg';
	import flowers from '$lib/images/gallery/flowers.jpg';
	import machine from '$lib/images/gallery/3d-machine.jpg';
	import fullbuilding from '$lib/images/gallery/full-building.jpg';
</script>

<svelte:head>
	<title>Our Office | Jim Alderete DDS | A Warm and Friendly Environment | Advanced Dental Equipment</title>
	<meta name="description" content="Jim Alderete DDS | Our Services: Restorative & Cosmetic Dentistry, Periodontics, Orthodontics, Digital x-rays and Panorex x-rays | Santa Cruz, Ca" />
</svelte:head>

<HeroInner eyebrow="A warm and friendly environment" header="Our office" text="At our office you'll find a friendly and professional staff, each dedicated to providing your family with quality care and personal attention. They are trained professionals with many years of experience, and a desire to share their knowledge so that you may achieve a healthy, attractive and comfortable mouth." hero="{hero}"/>


<section id="gallery" class="container mx-auto mt-3 mb-24 max-md:mb-0 px-10 max-md:p-5 max-xl:max-w-full">

	<h5 class="text-white uppercase text font-matter tracking-widest after:bg-white after:content-[''] after:inline-block after:h-0.5 after:ml-6 after:w-8 after:relative after:bottom-[5px] mb-12 mt-24">Explore our office</h5>

	<div class="grid grid-cols-3 max-md:grid-cols-1 gap-8 max-lg:gap-6 max-md:gap-y-5 max-md:gap-x-0">
		<div><img class="rounded-4xl max-md:rounded-2xl" src={waitingroom} alt="Alderete DDS" /></div>
		<div class="col-span-2"><img class="rounded-4xl max-md:rounded-2xl" src={fullbuilding} alt="Alderete DDS" /></div>
		<div class="col-span-2"><img class="rounded-4xl max-md:rounded-2xl" src={frontdesk} alt="Alderete DDS" /></div>
		<div><img class="rounded-4xl max-md:rounded-2xl" src={awards} alt="Alderete DDS" /></div>
		<div><img class="rounded-4xl max-md:rounded-2xl" src={waitingroom} alt="Alderete DDS" /></div>
		<div class="col-span-2"><img class="rounded-4xl max-md:rounded-2xl" src={garden} alt="Alderete DDS" /></div>
	</div>

	<h5 class="text-white uppercase text font-matter tracking-widest after:bg-white after:content-[''] after:inline-block after:h-0.5 after:ml-6 after:w-8 after:relative after:bottom-[5px] mb-12 mt-24">Private treatment rooms with outside ventilation</h5>

	<div class="grid grid-cols-3 max-md:grid-cols-1 gap-8 max-lg:gap-6 max-md:gap-y-5 max-md:gap-x-0">
		<div><img class="rounded-4xl max-md:rounded-2xl" src={flowers} alt="Alderete DDS" /></div>
		<div class="col-span-2"><img class="rounded-4xl max-md:rounded-2xl" src={roomleft} alt="Alderete DDS" /></div>
		<div class="col-span-2"><img class="rounded-4xl max-md:rounded-2xl" src={roomright} alt="Alderete DDS" /></div>
		<div><img class="rounded-4xl max-md:rounded-2xl" src={machine} alt="Alderete DDS" /></div>
	</div>
</section>
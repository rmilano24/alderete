<script lang="ts">
	import Service from '$components/service.svelte';
	import home_hero from '$lib/images/bg_home-hero.jpg';
	import cta from '$lib/images/cta.jpg';
	import BottomCta from '$components/bottom-cta.svelte';
	const restorativeDentistry = ["Tooth Colored Composite Fillings", "Amalgam Fillings", "Crowns and Bridges", "Removable Bridges and Dentures", "TMD Treatment and Appliances", "Implant Restorations"];
	const CosmeticDentistry = ["White Composite Bonding", "All-Porcelain Crowns and Bridges", "Professional Whitening", "Veneers"];
	const SergicalServices = ["Extractions", "Root Canal Therapy"];
	const XrayServices = ["x-rays"];
	const CameraServices = ["Modern Camera"];
	const PeriodontalServices = ["Full check up"];
	import HeroInner from '$components/hero-inner.svelte';
</script>

<svelte:head>
	<title>Jim Alderete DDS | Dentist in Santa Cruz, Ca</title>
	<meta name="description" content="Jim Alderete DDS | Dentist in Santa Cruz, Ca" />
</svelte:head>

<HeroInner eyebrow="What we’re good at" header="Our services" text="You want your smile to be the best it can be, and we are here to help. Dr Alderete and his caring, friendly team of dental professionals are committed to providing a comfortable dental experience. Our goal is to provide dental care for you and your family in a compassionate, caring and professional environment." />


<section id="services">

	<div class="container m-auto">

		<h5 class="text-white uppercase text font-matter tracking-widest mb-16 after:bg-white after:content-[''] after:inline-block after:h-0.5 after:ml-6 after:w-8 after:relative after:bottom-[5px]">Areas of expertise</h5>

		<div class="grid grid-cols-1 gap-16">

			<Service serviceitems={restorativeDentistry} />

			<Service number="02" service="Cosmetic Dentistry" servicetext="Short text about Cosmetic Dentistry. We can use AI to help us generate content. A little more text would look better here as a brief description." serviceitems={CosmeticDentistry} />

			<Service number="03" service="Surgical & Endodontic Services" servicetext="Short text about Surgical & Endodontic Services. We can use AI to help us generate content. A little more text would look better here as a brief description." serviceitems={SergicalServices} />

			<Service number="04" service="Digital x-rays and Panorex x-rays" servicetext="Short text about Digital x-rays and Panorex x-rays. We can use AI to help us generate content. A little more text would look better here as a brief description." serviceitems={XrayServices} />

			<Service number="05" service="Intra-oral Camera" servicetext="Short text about Intra-oral Camera. We can use AI to help us generate content. A little more text would look better here as a brief description." serviceitems={CameraServices} />

			<Service number="06" service="Periodontal Services" servicetext="Short text about Periodontal Services. We can use AI to help us generate content. A little more text would look better here as a brief description." serviceitems={PeriodontalServices} />
			
		
				</div>
			</div>	
	
</section>

<BottomCta />
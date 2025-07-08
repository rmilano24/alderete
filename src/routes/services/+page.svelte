<script lang="ts">
	import Service from '$components/service.svelte';
	import home_hero from '$lib/images/bg_home-hero.jpg';
	import cta from '$lib/images/cta.jpg';
	const restorativeDentistry = ["Tooth Colored Composite Fillings", "Amalgam Fillings", "Crowns and Bridges", "Removable Bridges and Dentures", "TMD Treatment and Appliances", "Implant Restorations"];
	const CosmeticDentistry = ["White Composite Bonding", "All-Porcelain Crowns and Bridges", "Professional Whitening", "Veneers"];
	const SergicalServices = ["Extractions", "Root Canal Therapy"];
	const XrayServices = ["x-rays"];
	const CameraServices = ["Modern Camera"];
	const PeriodontalServices = ["Full check up"];
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


<section id="cta" class="h-[724px] bg-cover flex items-center justify-center mt-24" style="background-image: url('{cta}')">
	<div class="glass rounded-2xl border border-white/20 flex w-4xl flex-col items-center text-center py-16 px-32">
		<div><h1 class="text-6xl">We're looking forward to <span class="italic">meeting you.</span></h1></div>
		<div class="mt-6"><p class="text">Feel free to drop in or give us a call at 831.432.3231.</p></div>
		<div class="mt-8"><a class="glass rounded-2xl border border-white/20 p-4 block" href="/contact">Request appointment</a></div>
	  </div>
</section>
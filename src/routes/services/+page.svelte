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



<section id="services">

	<div class="container m-auto">

		<h5 class="text-white uppercase text font-matter tracking-widest mb-16 after:bg-white after:content-[''] after:inline-block after:h-0.5 after:ml-6 after:w-8 after:relative after:bottom-[5px]">Our values</h5>

		<div class="grid grid-cols-1 gap-16">

			<div class="border-b border-teal-800 pb-16">
				<div class="flex flex-row justify-between">
					<div class="w-3/4">
						<span class="block text-teal-100">01</span>
						<h2 class="text-3xl font-reckless mt-1 text-teal-100">Restorative Dentistry</h2>
						<p class="text-teal-100 text-xl mt-5 max-w-3/4">Short text about Restorative Dentistry We can use AI to help us generate content. A little more text would look better here as a brief description.</p>
						<a href="/about-us" class="text-teal-400 mt-12 inline-block">
							<div class="flex flex-row items-center">
								<div>Request appointment</div>
								<div class="ml-4"> 
									<svg width="20" height="11" viewBox="0 0 20 11" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M15 1.5L19 5.5M19 5.5L15 9.5M19 5.5H1" stroke="#1AD2D4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
									</svg>
								</div>
							</div>
						</a>
					</div>
					<div class="w-1/4">
						<ul class="mt-21 text-teal-100 text-lg">
							<li><svg class="inline mr-2" width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd" clip-rule="evenodd" d="M8.293 1.26788C8.48053 1.08041 8.73484 0.975098 9 0.975098C9.26516 0.975098 9.51947 1.08041 9.707 1.26788L15.707 7.26788C15.8945 7.45541 15.9998 7.70972 15.9998 7.97488C15.9998 8.24005 15.8945 8.49436 15.707 8.68188L9.707 14.6819C9.5184 14.864 9.2658 14.9648 9.0036 14.9626C8.7414 14.9603 8.49059 14.8551 8.30518 14.6697C8.11977 14.4843 8.0146 14.2335 8.01233 13.9713C8.01005 13.7091 8.11084 13.4565 8.293 13.2679L12.586 8.97488H1C0.734784 8.97488 0.48043 8.86953 0.292893 8.68199C0.105357 8.49445 0 8.2401 0 7.97488C0 7.70967 0.105357 7.45531 0.292893 7.26778C0.48043 7.08024 0.734784 6.97488 1 6.97488H12.586L8.293 2.68188C8.10553 2.49436 8.00021 2.24005 8.00021 1.97488C8.00021 1.70972 8.10553 1.45541 8.293 1.26788Z" fill="#1AD2D4"/>
								</svg>
								Tooth Colored Composite Fillings</li>
								<li class="mt-6"><svg class="inline mr-2" width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" clip-rule="evenodd" d="M8.293 1.26788C8.48053 1.08041 8.73484 0.975098 9 0.975098C9.26516 0.975098 9.51947 1.08041 9.707 1.26788L15.707 7.26788C15.8945 7.45541 15.9998 7.70972 15.9998 7.97488C15.9998 8.24005 15.8945 8.49436 15.707 8.68188L9.707 14.6819C9.5184 14.864 9.2658 14.9648 9.0036 14.9626C8.7414 14.9603 8.49059 14.8551 8.30518 14.6697C8.11977 14.4843 8.0146 14.2335 8.01233 13.9713C8.01005 13.7091 8.11084 13.4565 8.293 13.2679L12.586 8.97488H1C0.734784 8.97488 0.48043 8.86953 0.292893 8.68199C0.105357 8.49445 0 8.2401 0 7.97488C0 7.70967 0.105357 7.45531 0.292893 7.26778C0.48043 7.08024 0.734784 6.97488 1 6.97488H12.586L8.293 2.68188C8.10553 2.49436 8.00021 2.24005 8.00021 1.97488C8.00021 1.70972 8.10553 1.45541 8.293 1.26788Z" fill="#1AD2D4"/>
									</svg>
									Amalgam Fillings</li>
								<li class="mt-6"><svg class="inline mr-2" width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" clip-rule="evenodd" d="M8.293 1.26788C8.48053 1.08041 8.73484 0.975098 9 0.975098C9.26516 0.975098 9.51947 1.08041 9.707 1.26788L15.707 7.26788C15.8945 7.45541 15.9998 7.70972 15.9998 7.97488C15.9998 8.24005 15.8945 8.49436 15.707 8.68188L9.707 14.6819C9.5184 14.864 9.2658 14.9648 9.0036 14.9626C8.7414 14.9603 8.49059 14.8551 8.30518 14.6697C8.11977 14.4843 8.0146 14.2335 8.01233 13.9713C8.01005 13.7091 8.11084 13.4565 8.293 13.2679L12.586 8.97488H1C0.734784 8.97488 0.48043 8.86953 0.292893 8.68199C0.105357 8.49445 0 8.2401 0 7.97488C0 7.70967 0.105357 7.45531 0.292893 7.26778C0.48043 7.08024 0.734784 6.97488 1 6.97488H12.586L8.293 2.68188C8.10553 2.49436 8.00021 2.24005 8.00021 1.97488C8.00021 1.70972 8.10553 1.45541 8.293 1.26788Z" fill="#1AD2D4"/>
									</svg>
									Crowns and Bridges</li>
								<li class="mt-6"><svg class="inline mr-2" width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" clip-rule="evenodd" d="M8.293 1.26788C8.48053 1.08041 8.73484 0.975098 9 0.975098C9.26516 0.975098 9.51947 1.08041 9.707 1.26788L15.707 7.26788C15.8945 7.45541 15.9998 7.70972 15.9998 7.97488C15.9998 8.24005 15.8945 8.49436 15.707 8.68188L9.707 14.6819C9.5184 14.864 9.2658 14.9648 9.0036 14.9626C8.7414 14.9603 8.49059 14.8551 8.30518 14.6697C8.11977 14.4843 8.0146 14.2335 8.01233 13.9713C8.01005 13.7091 8.11084 13.4565 8.293 13.2679L12.586 8.97488H1C0.734784 8.97488 0.48043 8.86953 0.292893 8.68199C0.105357 8.49445 0 8.2401 0 7.97488C0 7.70967 0.105357 7.45531 0.292893 7.26778C0.48043 7.08024 0.734784 6.97488 1 6.97488H12.586L8.293 2.68188C8.10553 2.49436 8.00021 2.24005 8.00021 1.97488C8.00021 1.70972 8.10553 1.45541 8.293 1.26788Z" fill="#1AD2D4"/>
									</svg>
									Removable Bridges and Dentures</li>
								<li class="mt-6"><svg class="inline mr-2" width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" clip-rule="evenodd" d="M8.293 1.26788C8.48053 1.08041 8.73484 0.975098 9 0.975098C9.26516 0.975098 9.51947 1.08041 9.707 1.26788L15.707 7.26788C15.8945 7.45541 15.9998 7.70972 15.9998 7.97488C15.9998 8.24005 15.8945 8.49436 15.707 8.68188L9.707 14.6819C9.5184 14.864 9.2658 14.9648 9.0036 14.9626C8.7414 14.9603 8.49059 14.8551 8.30518 14.6697C8.11977 14.4843 8.0146 14.2335 8.01233 13.9713C8.01005 13.7091 8.11084 13.4565 8.293 13.2679L12.586 8.97488H1C0.734784 8.97488 0.48043 8.86953 0.292893 8.68199C0.105357 8.49445 0 8.2401 0 7.97488C0 7.70967 0.105357 7.45531 0.292893 7.26778C0.48043 7.08024 0.734784 6.97488 1 6.97488H12.586L8.293 2.68188C8.10553 2.49436 8.00021 2.24005 8.00021 1.97488C8.00021 1.70972 8.10553 1.45541 8.293 1.26788Z" fill="#1AD2D4"/>
									</svg>
									TMD Treatment and Appliances</li>
								<li class="mt-6"><svg class="inline mr-2" width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" clip-rule="evenodd" d="M8.293 1.26788C8.48053 1.08041 8.73484 0.975098 9 0.975098C9.26516 0.975098 9.51947 1.08041 9.707 1.26788L15.707 7.26788C15.8945 7.45541 15.9998 7.70972 15.9998 7.97488C15.9998 8.24005 15.8945 8.49436 15.707 8.68188L9.707 14.6819C9.5184 14.864 9.2658 14.9648 9.0036 14.9626C8.7414 14.9603 8.49059 14.8551 8.30518 14.6697C8.11977 14.4843 8.0146 14.2335 8.01233 13.9713C8.01005 13.7091 8.11084 13.4565 8.293 13.2679L12.586 8.97488H1C0.734784 8.97488 0.48043 8.86953 0.292893 8.68199C0.105357 8.49445 0 8.2401 0 7.97488C0 7.70967 0.105357 7.45531 0.292893 7.26778C0.48043 7.08024 0.734784 6.97488 1 6.97488H12.586L8.293 2.68188C8.10553 2.49436 8.00021 2.24005 8.00021 1.97488C8.00021 1.70972 8.10553 1.45541 8.293 1.26788Z" fill="#1AD2D4"/>
									</svg>
									Implant Restorations</li>
						</ul>
					</div>
				</div>
			</div>	
			
			<div class="border-b border-teal-800 pb-16">
				<div class="flex flex-row justify-between">
					<div class="w-3/4">
						<span class="block text-teal-100">02</span>
						<h2 class="text-3xl font-reckless mt-1 text-teal-100">Cosmetic Dentistry</h2>
						<p class="text-teal-100 text-xl mt-5 max-w-3/4">Short text about Cosmetic Dentistry We can use AI to help us generate content. A little more text would look better here as a brief description.</p>
						<a href="/about-us" class="text-teal-400 mt-12 inline-block">
							<div class="flex flex-row items-center">
								<div>Request appointment</div>
								<div class="ml-4"> 
									<svg width="20" height="11" viewBox="0 0 20 11" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M15 1.5L19 5.5M19 5.5L15 9.5M19 5.5H1" stroke="#1AD2D4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
									</svg>
								</div>
							</div>
						</a>
					</div>
					<div class="w-1/4">
						<ul class="mt-21 text-teal-100 text-lg">
							<li><svg class="inline mr-2" width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd" clip-rule="evenodd" d="M8.293 1.26788C8.48053 1.08041 8.73484 0.975098 9 0.975098C9.26516 0.975098 9.51947 1.08041 9.707 1.26788L15.707 7.26788C15.8945 7.45541 15.9998 7.70972 15.9998 7.97488C15.9998 8.24005 15.8945 8.49436 15.707 8.68188L9.707 14.6819C9.5184 14.864 9.2658 14.9648 9.0036 14.9626C8.7414 14.9603 8.49059 14.8551 8.30518 14.6697C8.11977 14.4843 8.0146 14.2335 8.01233 13.9713C8.01005 13.7091 8.11084 13.4565 8.293 13.2679L12.586 8.97488H1C0.734784 8.97488 0.48043 8.86953 0.292893 8.68199C0.105357 8.49445 0 8.2401 0 7.97488C0 7.70967 0.105357 7.45531 0.292893 7.26778C0.48043 7.08024 0.734784 6.97488 1 6.97488H12.586L8.293 2.68188C8.10553 2.49436 8.00021 2.24005 8.00021 1.97488C8.00021 1.70972 8.10553 1.45541 8.293 1.26788Z" fill="#1AD2D4"/>
								</svg>
								White Composite Bonding</li>
								<li class="mt-6"><svg class="inline mr-2" width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" clip-rule="evenodd" d="M8.293 1.26788C8.48053 1.08041 8.73484 0.975098 9 0.975098C9.26516 0.975098 9.51947 1.08041 9.707 1.26788L15.707 7.26788C15.8945 7.45541 15.9998 7.70972 15.9998 7.97488C15.9998 8.24005 15.8945 8.49436 15.707 8.68188L9.707 14.6819C9.5184 14.864 9.2658 14.9648 9.0036 14.9626C8.7414 14.9603 8.49059 14.8551 8.30518 14.6697C8.11977 14.4843 8.0146 14.2335 8.01233 13.9713C8.01005 13.7091 8.11084 13.4565 8.293 13.2679L12.586 8.97488H1C0.734784 8.97488 0.48043 8.86953 0.292893 8.68199C0.105357 8.49445 0 8.2401 0 7.97488C0 7.70967 0.105357 7.45531 0.292893 7.26778C0.48043 7.08024 0.734784 6.97488 1 6.97488H12.586L8.293 2.68188C8.10553 2.49436 8.00021 2.24005 8.00021 1.97488C8.00021 1.70972 8.10553 1.45541 8.293 1.26788Z" fill="#1AD2D4"/>
									</svg>
									All-Porcelain Crowns and Bridges</li>
								<li class="mt-6"><svg class="inline mr-2" width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" clip-rule="evenodd" d="M8.293 1.26788C8.48053 1.08041 8.73484 0.975098 9 0.975098C9.26516 0.975098 9.51947 1.08041 9.707 1.26788L15.707 7.26788C15.8945 7.45541 15.9998 7.70972 15.9998 7.97488C15.9998 8.24005 15.8945 8.49436 15.707 8.68188L9.707 14.6819C9.5184 14.864 9.2658 14.9648 9.0036 14.9626C8.7414 14.9603 8.49059 14.8551 8.30518 14.6697C8.11977 14.4843 8.0146 14.2335 8.01233 13.9713C8.01005 13.7091 8.11084 13.4565 8.293 13.2679L12.586 8.97488H1C0.734784 8.97488 0.48043 8.86953 0.292893 8.68199C0.105357 8.49445 0 8.2401 0 7.97488C0 7.70967 0.105357 7.45531 0.292893 7.26778C0.48043 7.08024 0.734784 6.97488 1 6.97488H12.586L8.293 2.68188C8.10553 2.49436 8.00021 2.24005 8.00021 1.97488C8.00021 1.70972 8.10553 1.45541 8.293 1.26788Z" fill="#1AD2D4"/>
									</svg>
									Professional Whitening</li>
								<li class="mt-6"><svg class="inline mr-2" width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" clip-rule="evenodd" d="M8.293 1.26788C8.48053 1.08041 8.73484 0.975098 9 0.975098C9.26516 0.975098 9.51947 1.08041 9.707 1.26788L15.707 7.26788C15.8945 7.45541 15.9998 7.70972 15.9998 7.97488C15.9998 8.24005 15.8945 8.49436 15.707 8.68188L9.707 14.6819C9.5184 14.864 9.2658 14.9648 9.0036 14.9626C8.7414 14.9603 8.49059 14.8551 8.30518 14.6697C8.11977 14.4843 8.0146 14.2335 8.01233 13.9713C8.01005 13.7091 8.11084 13.4565 8.293 13.2679L12.586 8.97488H1C0.734784 8.97488 0.48043 8.86953 0.292893 8.68199C0.105357 8.49445 0 8.2401 0 7.97488C0 7.70967 0.105357 7.45531 0.292893 7.26778C0.48043 7.08024 0.734784 6.97488 1 6.97488H12.586L8.293 2.68188C8.10553 2.49436 8.00021 2.24005 8.00021 1.97488C8.00021 1.70972 8.10553 1.45541 8.293 1.26788Z" fill="#1AD2D4"/>
									</svg>
									Veneers</li>
						</ul>
					</div>
				</div>
			</div>	

			<div class="border-b border-teal-800 pb-16">
				<div class="flex flex-row justify-between">
					<div class="w-3/4">
						<span class="block text-teal-100">03</span>
						<h2 class="text-3xl font-reckless mt-1 text-teal-100">Surgical & Endodontic Services</h2>
						<p class="text-teal-100 text-xl mt-5 max-w-3/4">Short text about Surgical & Endodontic Services We can use AI to help us generate content. A little more text would look better here as a brief description.</p>
						<a href="/about-us" class="text-teal-400 mt-12 inline-block">
							<div class="flex flex-row items-center">
								<div>Request appointment</div>
								<div class="ml-4"> 
									<svg width="20" height="11" viewBox="0 0 20 11" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M15 1.5L19 5.5M19 5.5L15 9.5M19 5.5H1" stroke="#1AD2D4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
									</svg>
								</div>
							</div>
						</a>
					</div>
					<div class="w-1/4">
						<ul class="mt-21 text-teal-100 text-lg">
							<li><svg class="inline mr-2" width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd" clip-rule="evenodd" d="M8.293 1.26788C8.48053 1.08041 8.73484 0.975098 9 0.975098C9.26516 0.975098 9.51947 1.08041 9.707 1.26788L15.707 7.26788C15.8945 7.45541 15.9998 7.70972 15.9998 7.97488C15.9998 8.24005 15.8945 8.49436 15.707 8.68188L9.707 14.6819C9.5184 14.864 9.2658 14.9648 9.0036 14.9626C8.7414 14.9603 8.49059 14.8551 8.30518 14.6697C8.11977 14.4843 8.0146 14.2335 8.01233 13.9713C8.01005 13.7091 8.11084 13.4565 8.293 13.2679L12.586 8.97488H1C0.734784 8.97488 0.48043 8.86953 0.292893 8.68199C0.105357 8.49445 0 8.2401 0 7.97488C0 7.70967 0.105357 7.45531 0.292893 7.26778C0.48043 7.08024 0.734784 6.97488 1 6.97488H12.586L8.293 2.68188C8.10553 2.49436 8.00021 2.24005 8.00021 1.97488C8.00021 1.70972 8.10553 1.45541 8.293 1.26788Z" fill="#1AD2D4"/>
								</svg>
								Extractions</li>
								<li class="mt-6"><svg class="inline mr-2" width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" clip-rule="evenodd" d="M8.293 1.26788C8.48053 1.08041 8.73484 0.975098 9 0.975098C9.26516 0.975098 9.51947 1.08041 9.707 1.26788L15.707 7.26788C15.8945 7.45541 15.9998 7.70972 15.9998 7.97488C15.9998 8.24005 15.8945 8.49436 15.707 8.68188L9.707 14.6819C9.5184 14.864 9.2658 14.9648 9.0036 14.9626C8.7414 14.9603 8.49059 14.8551 8.30518 14.6697C8.11977 14.4843 8.0146 14.2335 8.01233 13.9713C8.01005 13.7091 8.11084 13.4565 8.293 13.2679L12.586 8.97488H1C0.734784 8.97488 0.48043 8.86953 0.292893 8.68199C0.105357 8.49445 0 8.2401 0 7.97488C0 7.70967 0.105357 7.45531 0.292893 7.26778C0.48043 7.08024 0.734784 6.97488 1 6.97488H12.586L8.293 2.68188C8.10553 2.49436 8.00021 2.24005 8.00021 1.97488C8.00021 1.70972 8.10553 1.45541 8.293 1.26788Z" fill="#1AD2D4"/>
									</svg>
									Root Canal Therapy</li>
						</ul>
					</div>
				</div>
			</div>	

			<div class="border-b border-teal-800 pb-16">
				<div class="flex flex-row justify-between">
					<div class="w-3/4">
						<span class="block text-teal-100">04</span>
						<h2 class="text-3xl font-reckless mt-1 text-teal-100">Digital x-rays and Panorex x-rays</h2>
						<p class="text-teal-100 text-xl mt-5 max-w-3/4">Digital X-Rays require 90% less radiation and have the clarity of the best photography. This allows for better and earlier diagnosis.</p>
						<a href="/about-us" class="text-teal-400 mt-12 inline-block">
							<div class="flex flex-row items-center">
								<div>Request appointment</div>
								<div class="ml-4"> 
									<svg width="20" height="11" viewBox="0 0 20 11" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M15 1.5L19 5.5M19 5.5L15 9.5M19 5.5H1" stroke="#1AD2D4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
									</svg>
								</div>
							</div>
						</a>
					</div>
					<div class="w-1/4">
						<ul class="mt-21 text-teal-100 text-lg">
							<li><svg class="inline mr-2" width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd" clip-rule="evenodd" d="M8.293 1.26788C8.48053 1.08041 8.73484 0.975098 9 0.975098C9.26516 0.975098 9.51947 1.08041 9.707 1.26788L15.707 7.26788C15.8945 7.45541 15.9998 7.70972 15.9998 7.97488C15.9998 8.24005 15.8945 8.49436 15.707 8.68188L9.707 14.6819C9.5184 14.864 9.2658 14.9648 9.0036 14.9626C8.7414 14.9603 8.49059 14.8551 8.30518 14.6697C8.11977 14.4843 8.0146 14.2335 8.01233 13.9713C8.01005 13.7091 8.11084 13.4565 8.293 13.2679L12.586 8.97488H1C0.734784 8.97488 0.48043 8.86953 0.292893 8.68199C0.105357 8.49445 0 8.2401 0 7.97488C0 7.70967 0.105357 7.45531 0.292893 7.26778C0.48043 7.08024 0.734784 6.97488 1 6.97488H12.586L8.293 2.68188C8.10553 2.49436 8.00021 2.24005 8.00021 1.97488C8.00021 1.70972 8.10553 1.45541 8.293 1.26788Z" fill="#1AD2D4"/>
								</svg>
								x-rays</li>
					
						</ul>
					</div>
				</div>
			</div>	

			<div class="border-b border-teal-800 pb-16">
				<div class="flex flex-row justify-between">
					<div class="w-3/4">
						<span class="block text-teal-100">05</span>
						<h2 class="text-3xl font-reckless mt-1 text-teal-100">Intra-oral Camera</h2>
						<p class="text-teal-100 text-xl mt-5 max-w-3/4">Our intra-oral camera is a small camera that captures tooth defects with x10 magnification.</p>
						<a href="/about-us" class="text-teal-400 mt-12 inline-block">
							<div class="flex flex-row items-center">
								<div>Request appointment</div>
								<div class="ml-4"> 
									<svg width="20" height="11" viewBox="0 0 20 11" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M15 1.5L19 5.5M19 5.5L15 9.5M19 5.5H1" stroke="#1AD2D4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
									</svg>
								</div>
							</div>
						</a>
					</div>
					<div class="w-1/4">
						<ul class="mt-21 text-teal-100 text-lg">
							<li><svg class="inline mr-2" width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd" clip-rule="evenodd" d="M8.293 1.26788C8.48053 1.08041 8.73484 0.975098 9 0.975098C9.26516 0.975098 9.51947 1.08041 9.707 1.26788L15.707 7.26788C15.8945 7.45541 15.9998 7.70972 15.9998 7.97488C15.9998 8.24005 15.8945 8.49436 15.707 8.68188L9.707 14.6819C9.5184 14.864 9.2658 14.9648 9.0036 14.9626C8.7414 14.9603 8.49059 14.8551 8.30518 14.6697C8.11977 14.4843 8.0146 14.2335 8.01233 13.9713C8.01005 13.7091 8.11084 13.4565 8.293 13.2679L12.586 8.97488H1C0.734784 8.97488 0.48043 8.86953 0.292893 8.68199C0.105357 8.49445 0 8.2401 0 7.97488C0 7.70967 0.105357 7.45531 0.292893 7.26778C0.48043 7.08024 0.734784 6.97488 1 6.97488H12.586L8.293 2.68188C8.10553 2.49436 8.00021 2.24005 8.00021 1.97488C8.00021 1.70972 8.10553 1.45541 8.293 1.26788Z" fill="#1AD2D4"/>
								</svg>
								Modern Camera</li>
						</ul>
					</div>
				</div>
			</div>	

			<div class="pb-16">
				<div class="flex flex-row justify-between">
					<div class="w-3/4">
						<span class="block text-teal-100">06</span>
						<h2 class="text-3xl font-reckless mt-1 text-teal-100">Periodontal Services</h2>
						<p class="text-teal-100 text-xl mt-5 max-w-3/4">Plaque is the primary cause of periodontal disease. During your appointment, we will check your teeth and gums for evidence of decay or disease. We will screen you for oral cancer, update your medical history, and provide fluoride treatments as necessary.</p>
						<a href="/about-us" class="text-teal-400 mt-12 inline-block">
							<div class="flex flex-row items-center">
								<div>Request appointment</div>
								<div class="ml-4"> 
									<svg width="20" height="11" viewBox="0 0 20 11" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M15 1.5L19 5.5M19 5.5L15 9.5M19 5.5H1" stroke="#1AD2D4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
									</svg>
								</div>
							</div>
						</a>
					</div>
					<div class="w-1/4">
						<ul class="mt-21 text-teal-100 text-lg">
							<li><svg class="inline mr-2" width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd" clip-rule="evenodd" d="M8.293 1.26788C8.48053 1.08041 8.73484 0.975098 9 0.975098C9.26516 0.975098 9.51947 1.08041 9.707 1.26788L15.707 7.26788C15.8945 7.45541 15.9998 7.70972 15.9998 7.97488C15.9998 8.24005 15.8945 8.49436 15.707 8.68188L9.707 14.6819C9.5184 14.864 9.2658 14.9648 9.0036 14.9626C8.7414 14.9603 8.49059 14.8551 8.30518 14.6697C8.11977 14.4843 8.0146 14.2335 8.01233 13.9713C8.01005 13.7091 8.11084 13.4565 8.293 13.2679L12.586 8.97488H1C0.734784 8.97488 0.48043 8.86953 0.292893 8.68199C0.105357 8.49445 0 8.2401 0 7.97488C0 7.70967 0.105357 7.45531 0.292893 7.26778C0.48043 7.08024 0.734784 6.97488 1 6.97488H12.586L8.293 2.68188C8.10553 2.49436 8.00021 2.24005 8.00021 1.97488C8.00021 1.70972 8.10553 1.45541 8.293 1.26788Z" fill="#1AD2D4"/>
								</svg>
								Full check up</li>
						</ul>
					</div>
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
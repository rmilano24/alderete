<script lang="ts">
	import { Button, Modal, P } from "flowbite-svelte";
	let defaultModal = $state(false);
	let defaultModal2 = $state(false);

	// Function to remove padding from overscroll-contain elements
	function removeModalPadding() {
		// Immediate removal
		const overscrollElements = document.querySelectorAll('.overscroll-contain');
		overscrollElements.forEach(element => {
			(element as HTMLElement).style.padding = '0';
			(element as HTMLElement).style.border = '0';
		});
		
		// Also try after a short delay to catch any late-rendered elements
		setTimeout(() => {
			const overscrollElements = document.querySelectorAll('.overscroll-contain');
			overscrollElements.forEach(element => {
				(element as HTMLElement).style.padding = '0';
				(element as HTMLElement).style.border = '0';
			});
		}, 10);
	}

	import hero from '$lib/images/bg_home-hero.jpg';
	import jim from '$lib/images/jim-alderete.jpg';
	import ryan from '$lib/images/about/ryan-reyes.jpg';
	import cta from '$lib/images/cta-explore.jpg';
	import jimlg from '$lib/images/about/jim-alderete-lg.jpg';
	import belermine from '$lib/images/about/seals/seal-belermine.png';
	import ucsb from '$lib/images/about/seals/seal-ucsb.png';
	import uop from '$lib/images/about/seals/seal-uop.png';
	import navy from '$lib/images/about/seals/seal-navy.png';
	import Value from '$lib/components/value.svelte';
	import BottomCta from '$lib/components/bottom-cta.svelte';
	import HeroInner from '$lib/components/hero-inner.svelte';
	import Seperator from '$lib/components/seperator.svelte';

// Update the $effect to lock scroll if either modal is open
$effect(() => {
  if (defaultModal || defaultModal2) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
});
</script>

<svelte:head>
	<title>About Us | Jim Alderete DDS | Dentist and Periodontist in Santa Cruz, Ca</title>
	<meta name="description" content="Jim Alderete DDS | Dentist and Periodontist in Santa Cruz, Ca" />
</svelte:head>


<HeroInner hero="{hero}"/>



  <section id="get-to-know-us" class="mt-24 max-md:mt-14">

	<div class="container px-10 max-md:p-5 max-xl:max-w-full mx-auto">
		<h5 class="text-white uppercase text font-matter tracking-widest mb-12 max-md:mb-4 after:bg-white after:content-[''] after:inline-block after:h-0.5 after:ml-6 after:w-8 after:relative after:bottom-[5px]">Meet the Dentists</h5>
	</div>


	<div class="container px-10 max-md:p-5 max-xl:max-w-full grid grid-cols-2 max-md:grid-cols-1 gap-24 max-lg:gap-12 mx-auto">
		
		<a
  href=""
  role="button"
  tabindex="0"
  on:click|preventDefault={() => {
    defaultModal = true;
    removeModalPadding();
  }}
>
		<div class="grid relative rounded-4xl"> <!-- Container with grid and relative positioning -->
			<img src={jim} alt="Description of image" class="col-start-1 row-start-1 rounded-4xl"> <!-- Image as first grid item -->
			<div class="col-start-1 row-start-1 flex justify-center items-end"> <!-- Text as second grid item -->
				<div class="flex w-full glass rounded-2xl border border-white/20 m-4 p-8 flex-col relative">

					<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute top-6 right-6">
						<path d="M7 3H3C2.46957 3 1.96086 3.21071 1.58579 3.58579C1.21071 3.96086 1 4.46957 1 5V15C1 15.5304 1.21071 16.0391 1.58579 16.4142C1.96086 16.7893 2.46957 17 3 17H13C13.5304 17 14.0391 16.7893 14.4142 16.4142C14.7893 16.0391 15 15.5304 15 15V11M11 1H17M17 1V7M17 1L7 11" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
						

					<div class="flex items-center gap-2"></div>
					<div><h3 class="text-2xl text-white">Dr. Jim Alderete</h3></div>
					<div><h4 class="text-white uppercase text font-matter tracking-widest">Owner and General Dentist</h4></div>
				</div>
			</div>
		  </div>
		</a> 

		<Modal 
  size="xl" 
  bind:open={defaultModal} 
  class="bg-primary-400 w-full h-full max-w-none !rounded-none max-h-screen !p-0 !m-0"
>
  <!-- Custom close button -->
  <button 
    class="absolute top-4 right-4 z-50 text-white p-4 rounded-full glass border border-white/20 transition-colors duration-200 cursor-pointer"
    on:click={() => defaultModal = false}
  >
    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
    </svg>
  </button>
  
  <!-- Your existing modal content -->
  <div class="grid grid-cols-2 max-md:grid-cols-1 gap-4 !p-0 !m-0">
				<div class="p-24 max-lg:p-12 max-md:p-5 left-col max-md:order-2">
					<h5 class="text-white uppercase text font-matter tracking-widest after:bg-white after:content-[''] after:inline-block after:h-0.5 after:ml-6 after:w-8 after:relative after:bottom-[5px]">Owner and General Dentist</h5>
					<h1 class="text-5xl text-teal-100 font-reckless mt-8">Dr. Jim Alderete</h1>
					<p class="text-teal-100 mt-8 text-lg">Dr. Jim Alderete grew up in Santa Clara, attended Bellarmine College Preparatory, and graduated from UC Santa Barbara where he played Division 1 baseball for the Gauchos. He completed his DDS degree from the University of Pacific, Arthur A. Dugoni School of Dentistry in 2006.  Upon completion, Dr. Alderete served as an active duty US Naval Dental Officer for 6 years where he completed a residency program in General Dentistry at Camp Pendleton Naval Hospital.</p> 
					<p class="text-teal-100 mt-8 text-lg">
						In 2012 Dr. Alderete entered his private practice, returning to the community of Santa Cruz he has enjoyed since childhood with the skill and integrity gained from the Navy.  Together with his caring staff they take pride in providing quality dental care at the highest level. </p>
					<p class="text-teal-100 mt-8 text-lg">
					In his free time, Dr. Alderete enjoys fishing, hiking the redwoods with his family, and coaching youth sports.
					</p>


					<div id="credentials" class="glass rounded-2xl border border-white/20 min-md:hidden mt-5">
						<h5 class="text-white uppercase text font-matter tracking-widest border-b  border-white/20 px-6 py-4">Credentials</h5>
						<div class="grid grid-cols-4 max-sm:grid-cols-2 gap-5 max-sm:gap-8 p-6">
							<div class="seal">
								<img src={belermine} alt="Belermine Preparatory School">
							</div>
							<div class="seal">
								<img src={ucsb} alt="University California Santa Barbara">
							</div>
							<div class="seal">
								<img src={uop} alt="University of Pacific">
							</div>
							<div class="seal">
								<img src={navy} alt="Navy">
							</div>
						</div>
					</div>

		
					<h5 class="mt-10 text-white uppercase text font-matter tracking-widest after:bg-white after:content-[''] after:inline-block after:h-0.5 after:ml-6 after:w-8 after:relative after:bottom-[5px]">Affiliates</h5>
		
					<ul class="mt-4 text-teal-100 text-lg pb-5">
						<li class="mt-6 first:mt-0 flex items-start leading-tight">
							<svg class="mr-4 flex-shrink-0 mt-[2px]" width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd" clip-rule="evenodd" d="M8.293 1.26788C8.48053 1.08041 8.73484 0.975098 9 0.975098C9.26516 0.975098 9.51947 1.08041 9.707 1.26788L15.707 7.26788C15.8945 7.45541 15.9998 7.70972 15.9998 7.97488C15.9998 8.24005 15.8945 8.49436 15.707 8.68188L9.707 14.6819C9.5184 14.864 9.2658 14.9648 9.0036 14.9626C8.7414 14.9603 8.49059 14.8551 8.30518 14.6697C8.11977 14.4843 8.0146 14.2335 8.01233 13.9713C8.01005 13.7091 8.11084 13.4565 8.293 13.2679L12.586 8.97488H1C0.734784 8.97488 0.48043 8.86953 0.292893 8.68199C0.105357 8.49445 0 8.2401 0 7.97488C0 7.70967 0.105357 7.45531 0.292893 7.26778C0.48043 7.08024 0.734784 6.97488 1 6.97488H12.586L8.293 2.68188C8.10553 2.49436 8.00021 2.24005 8.00021 1.97488C8.00021 1.70972 8.10553 1.45541 8.293 1.26788Z" fill="#1AD2D4"/>
							</svg>
							<span>American Dental Association</span>
						</li>
						<li class="mt-6 flex items-start leading-tight">
							<svg class="mr-4 flex-shrink-0 mt-[2px]" width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd" clip-rule="evenodd" d="M8.293 1.26788C8.48053 1.08041 8.73484 0.975098 9 0.975098C9.26516 0.975098 9.51947 1.08041 9.707 1.26788L15.707 7.26788C15.8945 7.45541 15.9998 7.70972 15.9998 7.97488C15.9998 8.24005 15.8945 8.49436 15.707 8.68188L9.707 14.6819C9.5184 14.864 9.2658 14.9648 9.0036 14.9626C8.7414 14.9603 8.49059 14.8551 8.30518 14.6697C8.11977 14.4843 8.0146 14.2335 8.01233 13.9713C8.01005 13.7091 8.11084 13.4565 8.293 13.2679L12.586 8.97488H1C0.734784 8.97488 0.48043 8.86953 0.292893 8.68199C0.105357 8.49445 0 8.2401 0 7.97488C0 7.70967 0.105357 7.45531 0.292893 7.26778C0.48043 7.08024 0.734784 6.97488 1 6.97488H12.586L8.293 2.68188C8.10553 2.49436 8.00021 2.24005 8.00021 1.97488C8.00021 1.70972 8.10553 1.45541 8.293 1.26788Z" fill="#1AD2D4"/>
							</svg>
							<span>California Dental Association</span>
						</li>
						<li class="mt-6 flex items-start leading-tight">
							<svg class="mr-4 flex-shrink-0 mt-[2px]" width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd" clip-rule="evenodd" d="M8.293 1.26788C8.48053 1.08041 8.73484 0.975098 9 0.975098C9.26516 0.975098 9.51947 1.08041 9.707 1.26788L15.707 7.26788C15.8945 7.45541 15.9998 7.70972 15.9998 7.97488C15.9998 8.24005 15.8945 8.49436 15.707 8.68188L9.707 14.6819C9.5184 14.864 9.2658 14.9648 9.0036 14.9626C8.7414 14.9603 8.49059 14.8551 8.30518 14.6697C8.11977 14.4843 8.0146 14.2335 8.01233 13.9713C8.01005 13.7091 8.11084 13.4565 8.293 13.2679L12.586 8.97488H1C0.734784 8.97488 0.48043 8.86953 0.292893 8.68199C0.105357 8.49445 0 8.2401 0 7.97488C0 7.70967 0.105357 7.45531 0.292893 7.26778C0.48043 7.08024 0.734784 6.97488 1 6.97488H12.586L8.293 2.68188C8.10553 2.49436 8.00021 2.24005 8.00021 1.97488C8.00021 1.70972 8.10553 1.45541 8.293 1.26788Z" fill="#1AD2D4"/>
							</svg>
							<span>Monterey Bay Dental Society</span>
						</li>
						<li class="mt-6 flex items-start leading-tight">
							<svg class="mr-4 flex-shrink-0 mt-[2px]" width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd" clip-rule="evenodd" d="M8.293 1.26788C8.48053 1.08041 8.73484 0.975098 9 0.975098C9.26516 0.975098 9.51947 1.08041 9.707 1.26788L15.707 7.26788C15.8945 7.45541 15.9998 7.70972 15.9998 7.97488C15.9998 8.24005 15.8945 8.49436 15.707 8.68188L9.707 14.6819C9.5184 14.864 9.2658 14.9648 9.0036 14.9626C8.7414 14.9603 8.49059 14.8551 8.30518 14.6697C8.11977 14.4843 8.0146 14.2335 8.01233 13.9713C8.01005 13.7091 8.11084 13.4565 8.293 13.2679L12.586 8.97488H1C0.734784 8.97488 0.48043 8.86953 0.292893 8.68199C0.105357 8.49445 0 8.2401 0 7.97488C0 7.70967 0.105357 7.45531 0.292893 7.26778C0.48043 7.08024 0.734784 6.97488 1 6.97488H12.586L8.293 2.68188C8.10553 2.49436 8.00021 2.24005 8.00021 1.97488C8.00021 1.70972 8.10553 1.45541 8.293 1.26788Z" fill="#1AD2D4"/>
							</svg>
							<span>2019, 2024 Santa Cruz County Best Dentist <br> <span class="text-sm">(Readers Choice Awards Santa Cruz Sentinel)</span></span>
						</li>
					</ul>
		
				</div>
				<div class="h-screen max-md:h-[60vh] max-md:order-1 bg-top bg-cover bg-no-repeat right-col" style="background-image: url('{jimlg}')">
					<div class="flex flex-col h-full">
						
						<div id="credentials" class="glass rounded-2xl border border-white/20 mt-auto m-6 max-md:hidden">
							<h5 class="text-white uppercase text font-matter tracking-widest border-b  border-white/20 px-6 py-4">Credentials</h5>
							<div class="grid grid-cols-4 gap-12 max-xl:gap-8 max-lg:gap-4 p-6 pb-2">
								<div class="seal">
									<img src={belermine} alt="Belermine Preparatory School">
								</div>
								<div class="seal">
									<img src={ucsb} alt="University California Santa Barbara">
								</div>
								<div class="seal">
									<img src={uop} alt="University of Pacific">
								</div>
								<div class="seal">
									<img src={navy} alt="Navy">
								</div>
							</div>
						</div>

					</div>
				</div>
			  </div>
			  
			</Modal>

		


			<a
			href=""
			role="button"
			tabindex="0"
			on:click|preventDefault={() => {
				defaultModal2 = true;
				removeModalPadding();
			}}
		  >
		  
		<div class="grid relative rounded-4xl"> <!-- Container with grid and relative positioning -->
			<img src={ryan} alt="Description of image" class="col-start-1 row-start-1 rounded-4xl"> <!-- Image as first grid item -->
			<div class="col-start-1 row-start-1 flex justify-center items-end"> <!-- Text as second grid item -->
				<div class="flex w-full glass rounded-2xl border border-white/20 m-4 p-8 flex-col relative">

					<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute top-6 right-6">
						<path d="M7 3H3C2.46957 3 1.96086 3.21071 1.58579 3.58579C1.21071 3.96086 1 4.46957 1 5V15C1 15.5304 1.21071 16.0391 1.58579 16.4142C1.96086 16.7893 2.46957 17 3 17H13C13.5304 17 14.0391 16.7893 14.4142 16.4142C14.7893 16.0391 15 15.5304 15 15V11M11 1H17M17 1V7M17 1L7 11" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>

					<div><h3 class="text-2xl text-white">Dr. Ryan Reyes</h3></div>
					<div><h4 class="text-white uppercase text font-matter tracking-widest">Periodontics & Oral Surgery</h4></div>
				</div>
			</div>
		  </div>
		</a>  
	</div>

	<Modal 
  size="xl" 
  bind:open={defaultModal2} 
  class="bg-primary-400 w-full h-full max-w-none !rounded-none max-h-screen !p-0 !m-0"
>
  <!-- Custom close button -->
  <button 
    class="absolute top-4 right-4 z-50 text-white p-4 rounded-full glass border border-white/20 transition-colors duration-200 cursor-pointer"
    on:click={() => defaultModal2 = false}
  >
    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
    </svg>
  </button>
  
  <!-- Your existing modal content -->
  <div class="grid grid-cols-2 max-md:grid-cols-1 gap-4 !p-0 !m-0">
				<div class="p-24 max-lg:p-12 max-md:p-5 left-col max-md:order-2">
					<h5 class="text-white uppercase text font-matter tracking-widest after:bg-white after:content-[''] after:inline-block after:h-0.5 after:ml-6 after:w-8 after:relative after:bottom-[5px]">Periodontics & Oral Surgery</h5>
					<h1 class="text-5xl text-teal-100 font-reckless mt-8">Dr. Ryan Reyes</h1>
					<p class="text-teal-100 mt-8 text-lg">Dr. Ryan Reyes is a native of the San Francisco Bay area. In addition to periodontal specialty services, Dr. Reyes also provides treatment for Dental Implants and Oral Surgery. For the past 11 years, Dr. Reyes has been providing surgical services to the dental offices in the great bay area. Dr. Reyes has an experienced surgical support team who travels with him, who focuses on providing the highest quality treatment and outcomes within the comfort of the patients own dental office. Dr. Reyes' surgical support team is there for his patients from the initial consultation through post treatment care, available to assist his patients 24 hours a day. Dr. Reyes strongly believes in innovative techniques that increase his patient's comfort. He is a pinhole certified periodontist, which is a scalpel free procedure to correct gum recession. Dr. Reyes stays abreast of the latest innovations in Periodontics and Oral Surgery by attending numerous advanced continuing education courses.
					</p> 
					<p class="text-teal-100 mt-8 text-lg">
						Prior to dental school, Dr. Reyes was a Veterinary Assistant, as he has a love for animals. Outside the dental office, Dr. Reyes enjoys yoga and holistic medicine. When he is not seeing patients, you can often find him in the water surfing, enjoying everything the beautiful California beach have to offer.</p>


					

		
					
		
				</div>
				<div class="h-screen max-md:h-[60vh] max-md:order-1 bg-top bg-cover bg-no-repeat right-col" style="background-image: url('{ryan}')">
					<div class="flex flex-col h-full">
						
					

					</div>
				</div>
			  </div>
			  
			</Modal>




</section>

<style>
	/* Target the specific div with overscroll-contain class */
	.overscroll-contain {
		padding: 0 !important;
	}
	
	/* More specific selector to override any conflicting styles */
	div.overscroll-contain {
		padding: 0 !important;
	}
	
	/* Even more specific - target any element with this class */
	*[class*="overscroll-contain"] {
		padding: 0 !important;
	}
	
	/* Make left column scrollable */
	.left-col {
		overflow-y: auto;
		max-height: 100vh;
	}

	@media (max-width: 767px) {
		.left-col {
			overflow-y: visible;
		}
	}
	
	/* Prevent right column from scrolling */
	.right-col {
		overflow: hidden;
	}
	
	/* Hide the default close button */
	:global(.modal-close-button),
	:global([data-modal-hide]) {
		display: none !important;
	}
	
	/* Alternative selectors to hide default close button */
	:global(button[aria-label*="Close"]),
	:global(button[aria-label*="close"]),
	:global(.close-button),
	:global(.modal-close) {
		display: none !important;
	}
</style>

<!-- <Seperator />  

<section id="values">

	<div class="container px-10 max-md:p-5 max-xl:max-w-full m-auto">

		<h5 class="text-white uppercase text font-matter tracking-widest mb-16 after:bg-white after:content-[''] after:inline-block after:h-0.5 after:ml-6 after:w-8 after:relative after:bottom-[5px]">Our values</h5>

		<div class="grid grid-cols-1 gap-16 max-md:gap-10">

			<Value />
			<Value number="02" value="Be one team" valuetext="Short text about being one team. We can use AI to help us generate content. A little more text would look better here." />
			<Value number="03" value="Be one team" valuetext="Short text about being one team. We can use AI to help us generate content. A little more text would look better here." />
			<Value number="04" value="Put the patient first" valuetext="Short text about being one team. We can use AI to help us generate content. A little more text would look better here." />
			<Value number="05" value="Transparency" valuetext="Short text about being one team. We can use AI to help us generate content. A little more text would look better here." />
			<Value number="06" value="Be exceptional" valuetext="Short text about being one team. We can use AI to help us generate content. A little more text would look better here." />

		  </div>
	</div>

	
</section> -->


<section id="cta" class="relative mt-30 max-md:mt-13 h-[724px] max-lg:h-[500px] bg-cover flex items-center justify-center" style="background-image: url('{cta}')">
	<div class="absolute inset-0 bg-black/20 pointer-events-none z-0"></div>
	<div class="relative glass rounded-2xl border max-w-[830px] border-white/20 flex w-4xl flex-col items-center text-center py-16 px-24 mx-5 max-lg:px-12 max-sm:px-8 z-10">
		<div><h1 class="text-6xl max-lg:text-4xl font-reckless tracking-tight">Our modern equipment ensures <span class="italic">optimal results.</span></h1></div>
		<div class="mt-6"><p class="text-lg">We're always staying up to date with the latest in technology.</p></div>
		<div class="mt-8"><a class="glass rounded-2xl border border-white/20 p-4 block font-bold" href="/gallery">Explore our office</a></div>
	  </div>
</section>



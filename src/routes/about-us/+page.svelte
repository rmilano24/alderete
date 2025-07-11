<script lang="ts">
	import { Button, Modal, P } from "flowbite-svelte";
	let defaultModal = $state(false);
	let defaultModal2 = $state(false);

	import jim from '$lib/images/jim-alderete.jpg';
	import ryan from '$lib/images/about/ryan-reyes.jpg';
	import cta from '$lib/images/cta.jpg';
	import jimlg from '$lib/images/about/jim-alderete-lg.jpg';
	import belermine from '$lib/images/about/seals/seal-belermine.png';
	import ucsb from '$lib/images/about/seals/seal-ucsb.png';
	import uop from '$lib/images/about/seals/seal-uop.png';
	import navy from '$lib/images/about/seals/seal-navy.png';

	import Value from '$lib/components/value.svelte';
	import BottomCta from '$lib/components/bottom-cta.svelte';
	import HeroInner from '$lib/components/hero-inner.svelte';
</script>

<svelte:head>
	<title>Jim Alderete DDS | Dentist in Santa Cruz, Ca</title>
	<meta name="description" content="Jim Alderete DDS | Dentist in Santa Cruz, Ca" />
</svelte:head>


<HeroInner />



  <section id="get-to-know-us" class="mt-24">



	<div class="container grid grid-cols-2 max-md:grid-cols-1 gap-24 max-lg:gap-12 mx-auto">
		<a
  href=""
  role="button"
  tabindex="0"
  on:click|preventDefault={() => (defaultModal = true)}
>
		<div class="grid relative rounded-4xl"> <!-- Container with grid and relative positioning -->
			<img src={jim} alt="Description of image" class="col-start-1 row-start-1 rounded-4xl"> <!-- Image as first grid item -->
			<div class="col-start-1 row-start-1 flex justify-center items-end"> <!-- Text as second grid item -->
				<div class="flex w-full glass rounded-2xl border border-white/20 m-4 p-8 flex-col">
					<div><h3 class="text-2xl text-white">Dr. Jim Alderete</h3></div>
					<div><h4 class="text-white uppercase text font-matter tracking-widest">Owner and General Dentist</h4></div>
				</div>
			  
			</div>
		  </div>
		</a> 



		<Modal size="xl" bind:open={defaultModal} class="glass w-full h-full max-w-none !rounded-none max-h-screen">
			<div class="grid grid-cols-2 gap-4 ">
				<div class="p-24">
					<h5 class="text-white uppercase text font-matter tracking-widest after:bg-white after:content-[''] after:inline-block after:h-0.5 after:ml-6 after:w-8 after:relative after:bottom-[5px]">Get to know us</h5>
					<h1 class="text-5xl text-teal-100 font-reckless mt-8">Dr. Jim Alderete</h1>
					<p class="text-teal-100 mt-8 text-lg">Dr Jim Alderete grew up in Santa Clara, attended Bellarmine College Preparatory, and graduated from UC Santa Barbara where he played Division 1 baseball for the Gauchos. He completed his DDS degree from the University of Pacific, Arthur A. Dugoni School of Dentistry in 2006.  Upon completion, Dr. Alderete served as an active duty US Naval Officer for 6 years where he completed a residency program in General Dentistry at Camp Pendleton Naval Hospital.</p> 
					<p class="text-teal-100 mt-8 text-lg">
						In 2012 Dr. Alderete entered his private practice, returning to the community of Santa Cruz he has enjoyed since childhood with the skill and integrity gained from the Navy.  Together with his caring staff they take pride in providing quality dental care at the highest level. </p>
					<p class="text-teal-100 mt-8 text-lg">
					In his free time Dr. Alderete enjoys fishing, hiking the redwoods with his family, and coaching youth sports.
					</p>
		
					<h5 class="mt-10 text-white uppercase text font-matter tracking-widest after:bg-white after:content-[''] after:inline-block after:h-0.5 after:ml-6 after:w-8 after:relative after:bottom-[5px]">Affiliates</h5>
		
					<ul class="mt-4 text-teal-100 text-lg">
						<li>
							<svg class="inline mr-2" width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd" clip-rule="evenodd" d="M8.293 1.26788C8.48053 1.08041 8.73484 0.975098 9 0.975098C9.26516 0.975098 9.51947 1.08041 9.707 1.26788L15.707 7.26788C15.8945 7.45541 15.9998 7.70972 15.9998 7.97488C15.9998 8.24005 15.8945 8.49436 15.707 8.68188L9.707 14.6819C9.5184 14.864 9.2658 14.9648 9.0036 14.9626C8.7414 14.9603 8.49059 14.8551 8.30518 14.6697C8.11977 14.4843 8.0146 14.2335 8.01233 13.9713C8.01005 13.7091 8.11084 13.4565 8.293 13.2679L12.586 8.97488H1C0.734784 8.97488 0.48043 8.86953 0.292893 8.68199C0.105357 8.49445 0 8.2401 0 7.97488C0 7.70967 0.105357 7.45531 0.292893 7.26778C0.48043 7.08024 0.734784 6.97488 1 6.97488H12.586L8.293 2.68188C8.10553 2.49436 8.00021 2.24005 8.00021 1.97488C8.00021 1.70972 8.10553 1.45541 8.293 1.26788Z" fill="#1AD2D4"/>
								</svg>
							American Dental Association</li>
						<li class="mt-2">
							<svg class="inline mr-2" width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd" clip-rule="evenodd" d="M8.293 1.26788C8.48053 1.08041 8.73484 0.975098 9 0.975098C9.26516 0.975098 9.51947 1.08041 9.707 1.26788L15.707 7.26788C15.8945 7.45541 15.9998 7.70972 15.9998 7.97488C15.9998 8.24005 15.8945 8.49436 15.707 8.68188L9.707 14.6819C9.5184 14.864 9.2658 14.9648 9.0036 14.9626C8.7414 14.9603 8.49059 14.8551 8.30518 14.6697C8.11977 14.4843 8.0146 14.2335 8.01233 13.9713C8.01005 13.7091 8.11084 13.4565 8.293 13.2679L12.586 8.97488H1C0.734784 8.97488 0.48043 8.86953 0.292893 8.68199C0.105357 8.49445 0 8.2401 0 7.97488C0 7.70967 0.105357 7.45531 0.292893 7.26778C0.48043 7.08024 0.734784 6.97488 1 6.97488H12.586L8.293 2.68188C8.10553 2.49436 8.00021 2.24005 8.00021 1.97488C8.00021 1.70972 8.10553 1.45541 8.293 1.26788Z" fill="#1AD2D4"/>
								</svg>
							California Dental Association </li>
						<li class="mt-2">
							<svg class="inline mr-2" width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd" clip-rule="evenodd" d="M8.293 1.26788C8.48053 1.08041 8.73484 0.975098 9 0.975098C9.26516 0.975098 9.51947 1.08041 9.707 1.26788L15.707 7.26788C15.8945 7.45541 15.9998 7.70972 15.9998 7.97488C15.9998 8.24005 15.8945 8.49436 15.707 8.68188L9.707 14.6819C9.5184 14.864 9.2658 14.9648 9.0036 14.9626C8.7414 14.9603 8.49059 14.8551 8.30518 14.6697C8.11977 14.4843 8.0146 14.2335 8.01233 13.9713C8.01005 13.7091 8.11084 13.4565 8.293 13.2679L12.586 8.97488H1C0.734784 8.97488 0.48043 8.86953 0.292893 8.68199C0.105357 8.49445 0 8.2401 0 7.97488C0 7.70967 0.105357 7.45531 0.292893 7.26778C0.48043 7.08024 0.734784 6.97488 1 6.97488H12.586L8.293 2.68188C8.10553 2.49436 8.00021 2.24005 8.00021 1.97488C8.00021 1.70972 8.10553 1.45541 8.293 1.26788Z" fill="#1AD2D4"/>
								</svg>
							Monterey Bay Dental Society</li>
						<li class="mt-2">
							<svg class="inline mr-2" width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd" clip-rule="evenodd" d="M8.293 1.26788C8.48053 1.08041 8.73484 0.975098 9 0.975098C9.26516 0.975098 9.51947 1.08041 9.707 1.26788L15.707 7.26788C15.8945 7.45541 15.9998 7.70972 15.9998 7.97488C15.9998 8.24005 15.8945 8.49436 15.707 8.68188L9.707 14.6819C9.5184 14.864 9.2658 14.9648 9.0036 14.9626C8.7414 14.9603 8.49059 14.8551 8.30518 14.6697C8.11977 14.4843 8.0146 14.2335 8.01233 13.9713C8.01005 13.7091 8.11084 13.4565 8.293 13.2679L12.586 8.97488H1C0.734784 8.97488 0.48043 8.86953 0.292893 8.68199C0.105357 8.49445 0 8.2401 0 7.97488C0 7.70967 0.105357 7.45531 0.292893 7.26778C0.48043 7.08024 0.734784 6.97488 1 6.97488H12.586L8.293 2.68188C8.10553 2.49436 8.00021 2.24005 8.00021 1.97488C8.00021 1.70972 8.10553 1.45541 8.293 1.26788Z" fill="#1AD2D4"/>
								</svg>
							2019, 2024 Santa Cruz County Best Dentist <br> <span class="text-sm ml-7">(Readers Choice Awards Santa Cruz Sentinel)</span></li>
					</ul>
		
				</div>
				<div class="h-screen bg-center bg-cover bg-no-repeat" style="background-image: url('{jimlg}')">
					<div class="flex flex-col h-full">
						<div id="credentials" class="glass rounded-2xl border border-white/20 mt-auto m-6">
							<h5 class="text-white uppercase text font-matter tracking-widest border-b  border-white/20 px-6 py-4">Credentials</h5>
							<div class="grid grid-cols-4 gap-12 p-6 pb-2">
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
			on:click|preventDefault={() => (defaultModal2 = true)}
		  >
		<div class="grid relative rounded-4xl"> <!-- Container with grid and relative positioning -->
			<img src={ryan} alt="Description of image" class="col-start-1 row-start-1 rounded-4xl"> <!-- Image as first grid item -->
			<div class="col-start-1 row-start-1 flex justify-center items-end"> <!-- Text as second grid item -->
				<div class="flex w-full glass rounded-2xl border border-white/20 m-4 p-8 flex-col">
					<div><h3 class="text-2xl text-white">Dr. Jim Alderete</h3></div>
					<div><h4 class="text-white uppercase text font-matter tracking-widest">Owner and General Dentist</h4></div>
				</div>
			</div>
		  </div>
		</a>  
	</div>


	<Modal size="xl" bind:open={defaultModal2} class="glass w-full h-full max-w-none !rounded-none max-h-screen">
		<div class="grid grid-cols-2 gap-4 ">
			<div class="p-24">
				<h5 class="text-white uppercase text font-matter tracking-widest after:bg-white after:content-[''] after:inline-block after:h-0.5 after:ml-6 after:w-8 after:relative after:bottom-[5px]">Get to know us</h5>
				<h1 class="text-5xl text-teal-100 font-reckless mt-8">Dr. Ryan Reyes</h1>
				<p class="text-teal-100 mt-8 text-lg">Dr Jim Alderete grew up in Santa Clara, attended Bellarmine College Preparatory, and graduated from UC Santa Barbara where he played Division 1 baseball for the Gauchos. He completed his DDS degree from the University of Pacific, Arthur A. Dugoni School of Dentistry in 2006.  Upon completion, Dr. Alderete served as an active duty US Naval Officer for 6 years where he completed a residency program in General Dentistry at Camp Pendleton Naval Hospital.</p> 
				<p class="text-teal-100 mt-8 text-lg">
					In 2012 Dr. Alderete entered his private practice, returning to the community of Santa Cruz he has enjoyed since childhood with the skill and integrity gained from the Navy.  Together with his caring staff they take pride in providing quality dental care at the highest level. </p>
				<p class="text-teal-100 mt-8 text-lg">
				In his free time Dr. Alderete enjoys fishing, hiking the redwoods with his family, and coaching youth sports.
				</p>
	
				<h5 class="mt-10 text-white uppercase text font-matter tracking-widest after:bg-white after:content-[''] after:inline-block after:h-0.5 after:ml-6 after:w-8 after:relative after:bottom-[5px]">Affiliates</h5>
	
				<ul class="mt-4 text-teal-100 text-lg">
					<li>
						<svg class="inline mr-2" width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M8.293 1.26788C8.48053 1.08041 8.73484 0.975098 9 0.975098C9.26516 0.975098 9.51947 1.08041 9.707 1.26788L15.707 7.26788C15.8945 7.45541 15.9998 7.70972 15.9998 7.97488C15.9998 8.24005 15.8945 8.49436 15.707 8.68188L9.707 14.6819C9.5184 14.864 9.2658 14.9648 9.0036 14.9626C8.7414 14.9603 8.49059 14.8551 8.30518 14.6697C8.11977 14.4843 8.0146 14.2335 8.01233 13.9713C8.01005 13.7091 8.11084 13.4565 8.293 13.2679L12.586 8.97488H1C0.734784 8.97488 0.48043 8.86953 0.292893 8.68199C0.105357 8.49445 0 8.2401 0 7.97488C0 7.70967 0.105357 7.45531 0.292893 7.26778C0.48043 7.08024 0.734784 6.97488 1 6.97488H12.586L8.293 2.68188C8.10553 2.49436 8.00021 2.24005 8.00021 1.97488C8.00021 1.70972 8.10553 1.45541 8.293 1.26788Z" fill="#1AD2D4"/>
							</svg>
						American Dental Association</li>
					<li class="mt-2">
						<svg class="inline mr-2" width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M8.293 1.26788C8.48053 1.08041 8.73484 0.975098 9 0.975098C9.26516 0.975098 9.51947 1.08041 9.707 1.26788L15.707 7.26788C15.8945 7.45541 15.9998 7.70972 15.9998 7.97488C15.9998 8.24005 15.8945 8.49436 15.707 8.68188L9.707 14.6819C9.5184 14.864 9.2658 14.9648 9.0036 14.9626C8.7414 14.9603 8.49059 14.8551 8.30518 14.6697C8.11977 14.4843 8.0146 14.2335 8.01233 13.9713C8.01005 13.7091 8.11084 13.4565 8.293 13.2679L12.586 8.97488H1C0.734784 8.97488 0.48043 8.86953 0.292893 8.68199C0.105357 8.49445 0 8.2401 0 7.97488C0 7.70967 0.105357 7.45531 0.292893 7.26778C0.48043 7.08024 0.734784 6.97488 1 6.97488H12.586L8.293 2.68188C8.10553 2.49436 8.00021 2.24005 8.00021 1.97488C8.00021 1.70972 8.10553 1.45541 8.293 1.26788Z" fill="#1AD2D4"/>
							</svg>
						California Dental Association </li>
					<li class="mt-2">
						<svg class="inline mr-2" width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M8.293 1.26788C8.48053 1.08041 8.73484 0.975098 9 0.975098C9.26516 0.975098 9.51947 1.08041 9.707 1.26788L15.707 7.26788C15.8945 7.45541 15.9998 7.70972 15.9998 7.97488C15.9998 8.24005 15.8945 8.49436 15.707 8.68188L9.707 14.6819C9.5184 14.864 9.2658 14.9648 9.0036 14.9626C8.7414 14.9603 8.49059 14.8551 8.30518 14.6697C8.11977 14.4843 8.0146 14.2335 8.01233 13.9713C8.01005 13.7091 8.11084 13.4565 8.293 13.2679L12.586 8.97488H1C0.734784 8.97488 0.48043 8.86953 0.292893 8.68199C0.105357 8.49445 0 8.2401 0 7.97488C0 7.70967 0.105357 7.45531 0.292893 7.26778C0.48043 7.08024 0.734784 6.97488 1 6.97488H12.586L8.293 2.68188C8.10553 2.49436 8.00021 2.24005 8.00021 1.97488C8.00021 1.70972 8.10553 1.45541 8.293 1.26788Z" fill="#1AD2D4"/>
							</svg>
						Monterey Bay Dental Society</li>
					<li class="mt-2">
						<svg class="inline mr-2" width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M8.293 1.26788C8.48053 1.08041 8.73484 0.975098 9 0.975098C9.26516 0.975098 9.51947 1.08041 9.707 1.26788L15.707 7.26788C15.8945 7.45541 15.9998 7.70972 15.9998 7.97488C15.9998 8.24005 15.8945 8.49436 15.707 8.68188L9.707 14.6819C9.5184 14.864 9.2658 14.9648 9.0036 14.9626C8.7414 14.9603 8.49059 14.8551 8.30518 14.6697C8.11977 14.4843 8.0146 14.2335 8.01233 13.9713C8.01005 13.7091 8.11084 13.4565 8.293 13.2679L12.586 8.97488H1C0.734784 8.97488 0.48043 8.86953 0.292893 8.68199C0.105357 8.49445 0 8.2401 0 7.97488C0 7.70967 0.105357 7.45531 0.292893 7.26778C0.48043 7.08024 0.734784 6.97488 1 6.97488H12.586L8.293 2.68188C8.10553 2.49436 8.00021 2.24005 8.00021 1.97488C8.00021 1.70972 8.10553 1.45541 8.293 1.26788Z" fill="#1AD2D4"/>
							</svg>
						2019, 2024 Santa Cruz County Best Dentist <br> <span class="text-sm ml-7">(Readers Choice Awards Santa Cruz Sentinel)</span></li>
				</ul>
	
			</div>
			<div class="h-screen bg-center bg-cover bg-no-repeat" style="background-image: url('{jimlg}')">
				<div class="flex flex-col h-full">
					<div id="credentials" class="glass rounded-2xl border border-white/20 mt-auto m-6">
						<h5 class="text-white uppercase text font-matter tracking-widest border-b  border-white/20 px-6 py-4">Credentials</h5>
						<div class="grid grid-cols-4 gap-12 p-6 pb-2">
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

</section>



  
<div class="container seperator border-b border-teal-800 h-[1px] my-30 mx-auto"></div>

<section id="values">

	<div class="container m-auto">

		<h5 class="text-white uppercase text font-matter tracking-widest mb-16 after:bg-white after:content-[''] after:inline-block after:h-0.5 after:ml-6 after:w-8 after:relative after:bottom-[5px]">Our values</h5>

		<div class="grid grid-cols-1 gap-16">

			<Value />
			<Value number="02" value="Be one team" valuetext="Short text about being one team. We can use AI to help us generate content. A little more text would look better here." />
			<Value number="03" value="Be one team" valuetext="Short text about being one team. We can use AI to help us generate content. A little more text would look better here." />
			<Value number="04" value="Put the patient first" valuetext="Short text about being one team. We can use AI to help us generate content. A little more text would look better here." />
			<Value number="05" value="Transparency" valuetext="Short text about being one team. We can use AI to help us generate content. A little more text would look better here." />
			<Value number="06" value="Be exceptional" valuetext="Short text about being one team. We can use AI to help us generate content. A little more text would look better here." />

		  </div>
	</div>

	
</section>


<BottomCta />



<script lang="ts">
	import home_hero from '$lib/images/bg_home-hero.jpg';
	import jim from '$lib/images/jim-alderete.jpg';
	import garden from '$lib/images/gallery/garden.jpg';
	import roomleft from '$lib/images/gallery/patient-room-left.jpg';
	import awards from '$lib/images/gallery/readers-choice-award.jpg';

	import Expertise from '$components/expertise.svelte';
	import BottomCta from '$components/bottom-cta.svelte';

</script>

<svelte:head>
	<title>Jim Alderete DDS | Dentist in Santa Cruz, Ca</title>
	<meta name="description" content="Jim Alderete DDS | Dentist in Santa Cruz, Ca" />
</svelte:head>



<section id="home-hero" class="h-screen bg-cover bg-center flex items-end" style="background-image: url('{home_hero}')">
	<div class="w-full m-6 max-md:m-3">
		<div class="flex ml-4 mb-4 max-md:ml-0 max-md:mb-0">
			<div class="glass rounded-2xl border border-white/20 p-8 mr-6 max-md:mr-0 max-w-[532px] max-md:min-w-full shadow-[0_4px_100px_0px_rgba(0,0,0,0.6)]">
				<h5 class="text-white uppercase text font-matter tracking-widest after:bg-white after:content-[''] after:inline-block after:h-0.5 after:ml-6 after:w-8 after:relative after:bottom-[5px]">A trusted santa cruz dentist, since 2009</h5>
				<h1 class="text-5xl text-white font-reckless mt-8 max-w-xl">Exceptional care for <span class="italic">all ages</span></h1>
			</div>
			<div class="max-md:hidden glass rounded-2xl border border-white/20 min-w-64 shadow-[0_4px_100px_0px_rgba(0,0,0,0.6)] flex flex-col justify-between p-8">
					<div>
						<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M1 4.55556C1 3.61256 1.3746 2.70819 2.0414 2.0414C2.70819 1.3746 3.61256 1 4.55556 1H10.3867C10.7596 1.00028 11.1231 1.11786 11.4255 1.33609C11.728 1.55432 11.9541 1.86214 12.072 2.216L14.7351 10.2036C14.87 10.6095 14.8541 11.0505 14.6902 11.4456C14.5262 11.8407 14.2253 12.1635 13.8427 12.3547L9.83022 14.3636C11.797 18.7165 15.2835 22.203 19.6364 24.1698L21.6453 20.1573C21.8365 19.7747 22.1593 19.4738 22.5544 19.3098C22.9495 19.1459 23.3905 19.13 23.7964 19.2649L31.784 21.928C32.1381 22.046 32.4462 22.2724 32.6644 22.5752C32.8827 22.878 33.0001 23.2418 33 23.6151V29.4444C33 30.3874 32.6254 31.2918 31.9586 31.9586C31.2918 32.6254 30.3874 33 29.4444 33H27.6667C12.9396 33 1 21.0604 1 6.33333V4.55556Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
					</div>
				<div class="text-3xl"><a target="_blank" href="tel:18314323231">831.432.3231</a></div>
			</div>
		</div>
	</div>
	


</section>

<section id="get-to-know-us" class="mt-24">

	<div class="container grid grid-cols-2 max-lg:grid-cols-1 gap-24 mx-auto">

		<div class="grid relative rounded-4xl"> <!-- Container with grid and relative positioning -->
			<img src={jim} alt="Description of image" class="col-start-1 row-start-1 rounded-4xl"> <!-- Image as first grid item -->
			<div class="col-start-1 row-start-1 flex justify-center items-end"> <!-- Text as second grid item -->
				<div class="flex w-full glass rounded-2xl border border-white/20 m-4 p-8 flex-col">
					<div><h3 class="text-2xl text-white">Dr. Jim Alderete</h3></div>
					<div><h4 class="text-white uppercase text font-matter tracking-widest">Owner and General Dentist</h4></div>
				</div>
			  
			</div>
		  </div>

		<!-- <div>
			<img class="mt-8" src={jim} alt="Jim Alderete" />
		</div> -->

		<div class="mt-16">
			<h5 class="text-white uppercase text font-matter tracking-widest after:bg-white after:content-[''] after:inline-block after:h-0.5 after:ml-6 after:w-8 after:relative after:bottom-[5px]">Get to know us</h5>
			<h1 class="text-5xl text-teal-100 font-reckless mt-8">Our goal is to leave you with a <span class="text-white italic">positive experience.</span></h1>
			<p class="text-teal-100 mt-8">We strive to make our office unique by providing excellent clinical skills in a warm, friendly atmosphere. Establishing rewarding and lasting relationships with patients is important to us and we pledge excellence in all we do, and we look forward to helping you make the most of your smile.</p>
			<a href="/about-us" class="text-teal-400 mt-12 inline-block">
				<div class="flex flex-row items-center">
					<div>Learn more about us</div>
					<div class="ml-4"> 
						<svg width="20" height="11" viewBox="0 0 20 11" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M15 1.5L19 5.5M19 5.5L15 9.5M19 5.5H1" stroke="#1AD2D4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
					</div>
				</div>
			</a>
		</div>
	</div>

</section>

<div class="container seperator border-b border-teal-800 h-[1px] my-30 mx-auto"></div>

<section id="expertise">

	<div class="container m-auto">

		<h5 class="text-white uppercase text font-matter tracking-widest mb-16 after:bg-white after:content-[''] after:inline-block after:h-0.5 after:ml-6 after:w-8 after:relative after:bottom-[5px]">Our Areas of Expertise</h5>

		<div class="grid grid-cols-2 max-lg:grid-cols-1 gap-16">

			<Expertise number="01" skill="Family & General Dentistry"/>

			<Expertise number="02" skill="Restorative Dentistry"/>

			<Expertise number="03" skill="Cosmetic Dentistry"/>

			<Expertise number="04" skill="Periodontal Services"/>

			<Expertise number="05" skill="Surgical & Endodontic Services"/>

			<Expertise number="06" skill="Digital x-rays and Panorex x-rays"/>

			<Expertise number="07" skill="Intra-oral Camera"/>

		  </div>
	</div>

	
</section>

<section id="gallery" class="container mx-auto my-24">
	<div class="grid grid-cols-3 gap-8">
		<div><img class="rounded-4xl" src={awards} alt="Alderete DDS" /></div>
		<div class="col-span-2 ..."><img class="rounded-4xl" src={garden} alt="Alderete DDS" /></div>
		<div class="col-span-2 ..."><img class="rounded-4xl" src={roomleft} alt="Alderete DDS" /></div>
		<div class="glass border border-white/20 rounded-4xl flex items-center justify-center">
			<a class="text-center text-3xl" href="/gallery"><span class="italic">Explore</span> our office</a>
		</div>
		
	  </div>
</section>

<BottomCta />
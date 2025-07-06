<script lang="ts">
	import home_hero from '$lib/images/bg_home-hero.jpg';
	import jim from '$lib/images/jim-alderete.jpg';
	import cta from '$lib/images/cta.jpg';
	import jimlg from '$lib/images/about/jim-alderete-lg.jpg';
	import belermine from '$lib/images/about/seals/seal-belermine.png';
	import ucsb from '$lib/images/about/seals/seal-ucsb.png';
	import uop from '$lib/images/about/seals/seal-uop.png';
	import navy from '$lib/images/about/seals/seal-navy.png';
</script>

<svelte:head>
	<title>NMBL | Branding and Design Studio in Santa Cruz, California</title>
	<meta name="description" content="NMBL | UX Design, Branding, Web Design & Development Studio in Santa Cruz | San Francisco Bay Area" />
</svelte:head>


<section id="hero">
	<div class="grid grid-cols-2 gap-4 ">
		<div class="p-24 mt-40">
			<h5 class="text-white uppercase text font-matter tracking-widest after:bg-white after:content-[''] after:inline-block after:h-0.5 after:ml-6 after:w-8 after:relative after:bottom-[5px]">Get to know us</h5>
			<h1 class="text-5xl text-teal-100 font-reckless mt-8">About us</h1>
			<p class="text-teal-100 mt-8 text-lg">At our office you'll find a friendly and professional staff, each dedicated to providing your family with quality care and personal attention. They are trained professionals with many years of experience, and a desire to share their knowledge so that you may achieve a healthy, attractive and comfortable mouth.</p> 
			

		</div>
		<div class="h-[900px] bg-center bg-cover bg-no-repeat rounded-bl-4xl" style="background-image: url('{home_hero}')"></div>
	  </div>
</section>


  <section id="get-to-know-us" class="mt-24">

	<div class="container grid grid-cols-2 gap-24 mx-auto">
		<a href="#jim-alderete">
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

		<!-- <div>
			<img class="mt-8" src={jim} alt="Jim Alderete" />
		</div> -->

		<a href="#ryan-reyes">
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
	</div>

</section>



  <div id="jim-alderete" class="modal-window glass">
	<div>
	  <a href="#!" title="Close" class="modal-close glass rounded-2xl border border-white/20 p-6 m-8">
		<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M1 13L13 1M1 1L13 13" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>			
	  </a>

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
				<li>American Dental Association</li>
				<li class="mt-2">California Dental Association </li>
				<li class="mt-2">Monterey Bay Dental Society</li>
				<li class="mt-2">2019, 2024 Santa Cruz County Best Dentist <br> <span class="text-sm">(Readers Choice Awards Santa Cruz Sentinel)</span></li>
			</ul>

		</div>
		<div class="h-screen bg-center bg-cover bg-no-repeat" style="background-image: url('{jimlg}')">
			<div class="flex flex-col h-full">
				<div id="credentials" class="glass rounded-2xl border border-white/20 mt-auto m-6 p-6">
					<h5 class="text-white uppercase text font-matter tracking-widest">Credentials</h5>
					<div class="grid grid-cols-4 gap-12 ">
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
	 
	</div>
  </div>



  <div id="ryan-reyes" class="modal-window glass">
	<div class="glass">
	  <a href="#!" title="Close" class="modal-close glass rounded-2xl border border-white/20 p-6 m-8">
		<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M1 13L13 1M1 1L13 13" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>			
	  </a>

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
				<li>American Dental Association</li>
				<li class="mt-2">California Dental Association </li>
				<li class="mt-2">Monterey Bay Dental Society</li>
				<li class="mt-2">2019, 2024 Santa Cruz County Best Dentist <br> <span class="text-sm">(Readers Choice Awards Santa Cruz Sentinel)</span></li>
			</ul>

		</div>
		<div class="h-screen bg-center bg-cover bg-no-repeat" style="background-image: url('{jimlg}')"></div>
	  </div>
	 
	</div>
  </div>

<div class="container seperator border-b border-teal-800 h-[1px] my-30 mx-auto"></div>

<section id="values">

	<div class="container m-auto">

		<h5 class="text-white uppercase text font-matter tracking-widest mb-16 after:bg-white after:content-[''] after:inline-block after:h-0.5 after:ml-6 after:w-8 after:relative after:bottom-[5px]">Our values</h5>

		<div class="grid grid-cols-1 gap-16">

			<div class="border-b border-teal-800 pb-16">
				<div class="flex flex-row justify-between">
					<div class="w-1/2">
						<span class="block text-teal-100">01</span>
						<h2 class="text-3xl font-reckless mt-1 text-teal-100">Create good vibes</h2>
					</div>
					<div class="w-1/2">
						<p class="text-teal-100 text-lg mt-9">Short text about creating good vibes. We can use AI to help us generate content. A little more text would look better here.</p>
					</div>
				</div>
			</div>	
			<div class="border-b border-teal-800 pb-16">
				<div class="flex flex-row justify-between">
					<div class="w-1/2">
						<span class="block text-teal-100">01</span>
						<h2 class="text-3xl font-reckless mt-1 text-teal-100">Create good vibes</h2>
					</div>
					<div class="w-1/2">
						<p class="text-teal-100 text-lg mt-9">Short text about creating good vibes. We can use AI to help us generate content. A little more text would look better here.</p>
					</div>
				</div>
			</div>	
			<div class="border-b border-teal-800 pb-16">
				<div class="flex flex-row justify-between">
					<div class="w-1/2">
						<span class="block text-teal-100">01</span>
						<h2 class="text-3xl font-reckless mt-1 text-teal-100">Create good vibes</h2>
					</div>
					<div class="w-1/2">
						<p class="text-teal-100 text-lg mt-9">Short text about creating good vibes. We can use AI to help us generate content. A little more text would look better here.</p>
					</div>
				</div>
			</div>	
			<div class="border-b border-teal-800 pb-16">
				<div class="flex flex-row justify-between">
					<div class="w-1/2">
						<span class="block text-teal-100">01</span>
						<h2 class="text-3xl font-reckless mt-1 text-teal-100">Create good vibes</h2>
					</div>
					<div class="w-1/2">
						<p class="text-teal-100 text-lg mt-9">Short text about creating good vibes. We can use AI to help us generate content. A little more text would look better here.</p>
					</div>
				</div>
			</div>	
			<div class="pb-16">
				<div class="flex flex-row justify-between">
					<div class="w-1/2">
						<span class="block text-teal-100">01</span>
						<h2 class="text-3xl font-reckless mt-1 text-teal-100">Create good vibes</h2>
					</div>
					<div class="w-1/2">
						<p class="text-teal-100 text-lg mt-9">Short text about creating good vibes. We can use AI to help us generate content. A little more text would look better here.</p>
					</div>
				</div>
			</div>	


		  </div>
	</div>

	
</section>


<section id="cta" class="h-[724px] bg-cover flex items-center justify-center mt-32" style="background-image: url('{cta}')">
	<div class="glass rounded-2xl border border-white/20 flex w-4xl flex-col items-center text-center py-16 px-32">
		<div><h1 class="text-6xl">We're looking forward to <span class="italic">meeting you.</span></h1></div>
		<div class="mt-6"><p class="text">Feel free to drop in or give us a call at 831.432.3231.</p></div>
		<div class="mt-8"><a class="glass rounded-2xl border border-white/20 p-4 block" href="/contact">Request appointment</a></div>
	  </div>
</section>


 

  <style>
.modal-window {
  position: fixed;
  background-color: rgba(255, 255, 255, 0.25);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  visibility: hidden;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s;
  &:target {
    visibility: visible;
    opacity: 1;
    pointer-events: auto;
  }
  & > div {
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #113B49;
  }
  header {
    font-weight: bold;
  }
 
}

.modal-close {
  position: absolute;
  border-radius: 100%;
  right: 0;
  text-align: center;
  top: 0;
  text-decoration: none;
  &:hover {
    color: black;
  }
}

/* Demo Styles */


.modal-container {
  display: grid;
  justify-content: center;
  align-items: center;
  height: 100vh;
}


.modal-window div:not(:last-of-type) {
  margin-bottom: 15px;
}

.logo {
  max-width: 150px;
  display: block;
}

.btn {
  background-color: white;
  padding: 1em 1.5em;
  border-radius: 0.5rem;
  text-decoration: none;
  i {
    padding-right: 0.3em;
  }
}
  </style>
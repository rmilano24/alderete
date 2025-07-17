<script lang="ts">
	import home_hero from '$lib/images/bg_home-hero.jpg';
	import creditcare from '$lib/images/credit-care.png';
	import HeroInner from '$lib/components/hero-inner.svelte';
</script>

<svelte:head>
	<title>NMBL | Branding and Design Studio in Santa Cruz, California</title>
	<meta name="description" content="NMBL | UX Design, Branding, Web Design & Development Studio in Santa Cruz | San Francisco Bay Area" />
</svelte:head>


<HeroInner eyebrow="We’ll find a way to work with you" header="Payments and insurance" text="<b>Our Office Manager will work with you to create an individualized plan to meet your specific needs.</b> <br><br>Our fees are based on the quality materials we use and our experience performing your treatment. To facilitate our goals, we have developed the following financial options: VISA, MasterCard, CareCredit, personal check and cash. We will assist you in getting the dental care you want, and fit it into your budget. Whether you have dental insurance or not, let us help you find a way to get the <b>smile you dream of.</b>" />


<section id="payment-insurance" class="mt-24">

	<div class="container px-10 max-xl:max-w-full m-auto">

		<div class="grid grid-cols-1 gap-16">

			<div class="border-b border-primary-300 pb-16">
				<div class="flex flex-row justify-between">
					<div class="w-3/4 max-lg:w-full pr-64 max-lg:pr-0">
						<h5 class="text-white uppercase text font-matter tracking-widest mb-16 after:bg-white after:content-[''] after:inline-block after:h-0.5 after:ml-6 after:w-8 after:relative after:bottom-[5px]">Dental insurance</h5>
						<h2 class="text-3xl font-reckless mt-1 text-teal-100">We accept all major insurance's.</h2>
						<p class="text-teal-100 text-xl mt-5">Please note: All estimates are based on the benefit information we retrieve from your insurance company. It is not a guarantee of payment or coverage. We strive to give you the closest estimate as possible. Sorry, we do not participate with HMO's or reduced fee schedule plans.</p>
						<p class="text-teal-100 text-xl mt-5">Please call our office, and Sonya will be more than happy to assist you with estimating the benefits as determined by your insurance carrier.</p>
						<a href="/contact" class="text-teal-400 mt-12 inline-block">
							<div class="flex flex-row items-center">
								<div>Get in touch</div>
								<div class="ml-4"> 
									<svg width="20" height="11" viewBox="0 0 20 11" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M15 1.5L19 5.5M19 5.5L15 9.5M19 5.5H1" stroke="#1AD2D4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
									</svg>
								</div>
							</div>
						</a>
					</div>
					
				</div>
			</div>	
			
			<div class="border-b border-primary-300 pb-16">
				<div class="flex flex-row max-lg:flex-col justify-between">
					<div class="w-3/4 max-lg:w-full pr-64 max-lg:pr-0">
						<h5 class="text-white uppercase text font-matter tracking-widest mb-16 after:bg-white after:content-[''] after:inline-block after:h-0.5 after:ml-6 after:w-8 after:relative after:bottom-[5px]">CareCredit® FOR making payments:</h5>
						<h2 class="text-3xl font-reckless mt-1 text-teal-100">We’re pleased to offer our patients the CareCredit® card, North America's leading patient payment program.</h2>
						<p class="text-teal-100 text-xl mt-5">CareCredit works like a credit card, but is exclusive for healthcare services. With no up-front costs and no pre-payment penalties, CareCredit lets you pay over time and frees up cash and credit cards for the other things you want or need. You'll get low monthly payments for healthcare procedures not commonly covered by insurance, including dental procedures. Plus, you can use your card over and over for follow-up appointments.</p>
						
						<a target="_blank" href="https://www.carecredit.com/Pay/NHH727/" class="text-teal-400 mt-12 inline-block">
							<div class="flex flex-row items-center">
								<div>Learn more</div>
								<div class="ml-4"> 
									<svg width="20" height="11" viewBox="0 0 20 11" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M15 1.5L19 5.5M19 5.5L15 9.5M19 5.5H1" stroke="#1AD2D4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
									</svg>
								</div>
							</div>
						</a>
					</div>
					<div class="w-1/4 max-lg:w-full max-lg:mt-16">
						<div class="glass rounded-2xl border border-white/20 p-8 max-w-[500px]">
							<h3 class="text-2xl font-reckless text-teal-100">Financing available</h3>
							<img class="mt-6" src={creditcare} alt="Credit Care">
							<a target="_blank" href="https://www.carecredit.com/Pay/NHH727/" class="glass rounded-2xl border border-white/20 p-4 block text-center mt-8">Pay your bill</a>
						</div>
					</div>
				</div>
			</div>	

	
</section>
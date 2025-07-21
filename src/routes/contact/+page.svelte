<script lang="ts">
	import home_hero from '$lib/images/bg_home-hero.jpg';
	let success = false;
	let error = false;
	let loading = false;

	async function handleSubmit(event: Event) {
		event.preventDefault();
		loading = true;
		error = false;
		success = false;

		const form = event.target as HTMLFormElement;
		const formData = new FormData(form);
		const endpoint = "https://formsubmit.co/ryan@nmbl.digital";

		try {
			const response = await fetch(endpoint, {
				method: "POST",
				body: formData,
				headers: {
					'Accept': 'application/json'
				}
			});

			if (response.ok) {
				success = true;
				form.reset();
			} else {
				error = true;
			}
		} catch (e) {
			error = true;
		} finally {
			loading = false;
		}
	}
</script>

<svelte:head>
	<title>Jim Alderete DDS | Dentist in Santa Cruz, Ca</title>
	<meta name="description" content="Jim Alderete DDS | Dentist in Santa Cruz, Ca" />
</svelte:head>

<section id="hero">
	<div class="grid grid-cols-2 gap-4 max-lg:grid-cols-1">
		<div class="p-24 mt-40 max-lg:p-12 max-lg:mt-24">
			<h5 class="text-white uppercase text font-matter tracking-widest after:bg-white after:content-[''] after:inline-block after:h-0.5 after:ml-6 after:w-8 after:relative after:bottom-[5px]">Call us or fill out the form below</h5>
			<h1 class="text-5xl text-teal-100 font-reckless mt-8">Request appointment</h1>

			<!-- Contact Form using Formsubmit -->
			<form action="https://formsubmit.co/ryan@nmbl.digital" method="POST" class="flex flex-col gap-6">
				<input type="hidden" name="_next" value="https://flowbite-svelte-starter-six.vercel.app/thank-you" />
				<input type="hidden" name="_captcha" value="false" />
				<div class="flex flex-col gap-2">
					<input id="name" name="name" type="text" required class="rounded px-4 py-2 bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none" placeholder="Full name" />
				</div>
				
				<div class="flex flex-col gap-2">
					<input id="email" name="email" type="email" required class="rounded px-4 py-2 bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none" placeholder="Email" />
				</div>
				
				<div class="flex flex-col gap-2">
					<input id="phone" name="phone" type="tel" class="rounded px-4 py-2 bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none" placeholder="Phone number" />
				</div>

				<div class="flex flex-col gap-2">
					<input id="datetime" name="datetime" type="tel" class="rounded px-4 py-2 bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none" placeholder="Preferred dates & times" />
				</div>

				<div class="flex flex-col gap-2">
					<textarea id="message" name="message" rows="2" required class="rounded px-4 py-2 bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none" placeholder="What can we help you with?"></textarea>
				</div>
				<button type="submit" class="mt-4 bg-teal-600 hover:bg-teal-700 text-white font-matter uppercase tracking-widest py-3 px-8 rounded shadow transition">Send</button>
			</form>

		</div>
		<div class="relative h-[900px] bg-center bg-cover bg-no-repeat rounded-bl-4xl" style="background-image: url('{home_hero}')">
		</div>
	  </div>
</section>



<div id="cta-boxes" class="mt-30 max-lg:mt-14 container px-10 max-md:px-5 max-xl:max-w-full mx-auto">
	<div class="grid grid-cols-3 max-[1120px]:grid-cols-2 max-md:grid-cols-1  gap-8 container mx-auto mb-30 max-lg:mb-14">

		<div>
			
			<div class="glass rounded-2xl border border-white/20 shadow-[0_4px_100px_0px_rgba(0,0,0,0.6)] flex flex-col justify-between p-8 w-full h-56">
				<div>
					<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M1 4.55556C1 3.61256 1.3746 2.70819 2.0414 2.0414C2.70819 1.3746 3.61256 1 4.55556 1H10.3867C10.7596 1.00028 11.1231 1.11786 11.4255 1.33609C11.728 1.55432 11.9541 1.86214 12.072 2.216L14.7351 10.2036C14.87 10.6095 14.8541 11.0505 14.6902 11.4456C14.5262 11.8407 14.2253 12.1635 13.8427 12.3547L9.83022 14.3636C11.797 18.7165 15.2835 22.203 19.6364 24.1698L21.6453 20.1573C21.8365 19.7747 22.1593 19.4738 22.5544 19.3098C22.9495 19.1459 23.3905 19.13 23.7964 19.2649L31.784 21.928C32.1381 22.046 32.4462 22.2724 32.6644 22.5752C32.8827 22.878 33.0001 23.2418 33 23.6151V29.4444C33 30.3874 32.6254 31.2918 31.9586 31.9586C31.2918 32.6254 30.3874 33 29.4444 33H27.6667C12.9396 33 1 21.0604 1 6.33333V4.55556Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
				</div>

				<div class="flex gap-4">
					<div class="flex flex-col gap-1 pr-2">
						<div>
							<h5 class="text-white uppercase text font-matter tracking-widest">Phone:</h5>
						</div>
						<div class="text-xl"> <a href="tel:+18314323231">831.432.3231</a></div>
					</div>
					<div class="flex flex-col gap-1 border-l border-white/20 pl-4">
						<div>
							<h5 class="text-white uppercase text font-matter tracking-widest">Fax:</h5>
						</div>
						<div class="text-xl"> <a href="tel:+18316620889">831.662.0889</a></div>
					</div>
				</div>

			</div>
			
		</div>
		<div>
			<a target="_blank" href="https://www.google.com/maps/place/2820+Daubenbiss+Ave,+Soquel,+CA+95073/@36.987048,-121.9580871,16z/data=!3m1!4b1!4m6!3m5!1s0x808e157cb0b7d091:0x835af43a238a0650!8m2!3d36.987048!4d-121.9580871!16s%2Fg%2F11b8v7vzjt?entry=ttu&g_ep=EgoyMDI1MDcwNi4wIKXMDSoASAFQAw%3D%3D">
			<div class="glass rounded-2xl border border-white/20 shadow-[0_4px_100px_0px_rgba(0,0,0,0.6)] flex flex-col justify-between p-8 h-56">
				<div>
					<svg width="34" height="39" viewBox="0 0 34 39" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M23 16.9995C23 18.5908 22.3679 20.1169 21.2426 21.2421C20.1174 22.3674 18.5913 22.9995 17 22.9995C15.4087 22.9995 13.8826 22.3674 12.7574 21.2421C11.6321 20.1169 11 18.5908 11 16.9995C11 15.4082 11.6321 13.8821 12.7574 12.7569C13.8826 11.6317 15.4087 10.9995 17 10.9995C18.5913 10.9995 20.1174 11.6317 21.2426 12.7569C22.3679 13.8821 23 15.4082 23 16.9995Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
						<path d="M28.314 28.3134L19.828 36.7994C19.4569 37.1709 19.0162 37.4656 18.5311 37.6666C18.046 37.8677 17.5261 37.9712 17.001 37.9712C16.4759 37.9712 15.956 37.8677 15.4709 37.6666C14.9858 37.4656 14.5451 37.1709 14.174 36.7994L5.68601 28.3134C3.44845 26.0757 1.92468 23.2248 1.30738 20.1211C0.690086 17.0175 1.00699 13.8004 2.21801 10.8769C3.42904 7.9533 5.4798 5.45449 8.11097 3.69643C10.7421 1.93836 13.8355 1 17 1C20.1645 1 23.2579 1.93836 25.889 3.69643C28.5202 5.45449 30.571 7.9533 31.782 10.8769C32.993 13.8004 33.3099 17.0175 32.6926 20.1211C32.0753 23.2248 30.5516 26.0757 28.314 28.3134Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
						
				</div>
				<div class="text-xl leading-tight">2820 Daubenbiss Ave <br> Soquel, CA 95073</div>
			</div>
		</a>
		</div>
		<div>
			<a href="mailto:dr.alderete@drconnect.net">
			<div class="glass rounded-2xl border border-white/20 shadow-[0_4px_100px_0px_rgba(0,0,0,0.6)] flex flex-col justify-between p-8 h-56">
				<div>
					<svg width="34" height="27" viewBox="0 0 34 27" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M1 6.389L15.0267 15.7401C15.611 16.1299 16.2976 16.338 17 16.338C17.7024 16.338 18.389 16.1299 18.9733 15.7401L33 6.389M4.55556 25.9446H29.4444C30.3874 25.9446 31.2918 25.5699 31.9586 24.9032C32.6254 24.2364 33 23.332 33 22.389V4.61122C33 3.66823 32.6254 2.76386 31.9586 2.09706C31.2918 1.43027 30.3874 1.05566 29.4444 1.05566H4.55556C3.61256 1.05566 2.70819 1.43027 2.0414 2.09706C1.3746 2.76386 1 3.66823 1 4.61122V22.389C1 23.332 1.3746 24.2364 2.0414 24.9032C2.70819 25.5699 3.61256 25.9446 4.55556 25.9446Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>						
				</div>
				<div class="text-xl">dr.alderete@drconnect.net</div>
			</div>
			</a>	
		</div>

	  </div>
</div>
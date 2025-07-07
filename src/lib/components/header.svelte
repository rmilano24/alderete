<script lang="ts">
	import logo from '$lib/images/logo-alderete.svg';
	let showDropdown = false;
	let hideTimeout: ReturnType<typeof setTimeout>;

	function handleMouseEnter() {
		clearTimeout(hideTimeout);
		showDropdown = true;
	}

	function handleMouseLeave() {
		hideTimeout = setTimeout(() => {
			showDropdown = false;
		}, 100);
	}
</script>

<header class="rounded-2xl fixed w-[96%] m-8">

	<div class="glass rounded-2xl border border-white/20 flex h-[77px] w-full shadow-[0_4px_100px_0px_rgba(0,0,0,0.6)] -z-50">
		<div id="logo" class="w-48 m-7 flex-none">
			<a href="/"><img src={logo} alt="Alderete DDS" /></a>
		</div>

		<div class="grow border-l border-white/20">

			<nav class="flex flex-row ml-8 mt-6">
				<ul class="flex flex-row">
					<li class="uppercase font-bold"><a href="/about-us">About us</a></li>
					<li class="ml-12 uppercase font-bold"><a href="/services">Services</a></li>
					<li class="ml-12 uppercase font-bold">
						<div class="relative" on:mouseenter={handleMouseEnter} on:mouseleave={handleMouseLeave}>
							<a href="#" class="flex items-center">Patient Resources
								<svg class="ml-2 w-3 h-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
							</a>
							{#if showDropdown}
								<ul class="absolute left-0 mt-2 w-48 glass text-white rounded-lg shadow-lg z-50 py-2 rounded-2xl border border-white/20 ">
									<li><a href="/patient-resources/payment-and-insurance" class="block px-4 py-2">Payment + Insurance</a></li>
									<li><a href="/patient-resources/forms" class="block px-4 py-2">Forms</a></li>
								</ul>
							{/if}
						</div>
					</li>
					<li class="ml-12 uppercase font-bold"><a href="/contact">Contact</a></li>
				</ul>
			</nav>
		</div>

		<div class="flex-none">
			<ul class="p-2">
				<li class="inline-block font-bold">
					<a target="_blank" href="tel:18314323231">
						<svg class="inline mr-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H3.153C3.38971 0.000108969 3.6187 0.0841807 3.79924 0.23726C3.97979 0.390339 4.10018 0.602499 4.139 0.836L4.879 5.271C4.91436 5.48222 4.88097 5.69921 4.78376 5.89003C4.68655 6.08085 4.53065 6.23543 4.339 6.331L2.791 7.104C3.34611 8.47965 4.17283 9.72928 5.22178 10.7782C6.27072 11.8272 7.52035 12.6539 8.896 13.209L9.67 11.661C9.76552 11.4695 9.91994 11.3138 10.1106 11.2166C10.3012 11.1194 10.5179 11.0859 10.729 11.121L15.164 11.861C15.3975 11.8998 15.6097 12.0202 15.7627 12.2008C15.9158 12.3813 15.9999 12.6103 16 12.847V15C16 15.2652 15.8946 15.5196 15.7071 15.7071C15.5196 15.8946 15.2652 16 15 16H13C5.82 16 0 10.18 0 3V1Z" fill="white"/>
							</svg>
							
						831.432.3231
					</a>
				</li>
				<li class="inline-block ml-6"><a class="glass rounded-2xl border border-white/20 p-4 block font-bold" href="/contact">Request appointment</a></li>
			</ul>
		</div>
	</div>

</header>

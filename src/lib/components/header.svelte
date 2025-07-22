<script lang="ts">
	import logo from '$lib/images/logo-alderete.svg';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { menuOpen } from '$lib/stores/menuOpen';
	
	let showDropdown = false;
	let hideTimeout: ReturnType<typeof setTimeout>;
	let overlayOpen = false;
	let scrollY = 0;
	// let menuOpen = false; // Now using store
	let mobileDropdownOpen = false; // New variable for mobile dropdown state

	function toggleMenu() {
		menuOpen.update((v) => {
			overlayOpen = !v;
			return !v;
		});
	}

	// Handle window resize to close mobile menu when screen becomes wider
	function handleResize() {
		menuOpen.subscribe((isOpen) => {
			if (window.innerWidth > 1081 && isOpen) {
				menuOpen.set(false);
				overlayOpen = false;
			}
		});
	}

	onMount(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener('resize', handleResize);
			return () => {
				window.removeEventListener('resize', handleResize);
			};
		}
	});

	function handleMouseEnter() {
		clearTimeout(hideTimeout);
		showDropdown = true;
	}

	function handleMouseLeave() {
		hideTimeout = setTimeout(() => {
			showDropdown = false;
		}, 100);
	}

	// New function to toggle mobile dropdown
	function toggleMobileDropdown() {
		mobileDropdownOpen = !mobileDropdownOpen;
	}

	$: {
		if (typeof window !== 'undefined') {
			if (overlayOpen) {
				scrollY = window.scrollY;
				document.body.style.position = 'fixed';
				document.body.style.top = `-${scrollY}px`;
				document.body.style.width = '100vw';
				document.body.style.overflow = 'hidden';
				document.documentElement.classList.add('no-scroll');
			} else {
				document.body.style.position = '';
				document.body.style.top = '';
				document.body.style.width = '';
				document.body.style.overflow = '';
				document.documentElement.classList.remove('no-scroll');
				window.scrollTo(0, scrollY);
			}
		}
	}

	$: headerBarClass = `rounded-2xl flex h-[77px] max-md:h-[55px] w-full -z-50${!$menuOpen ? ' glass border border-white/20 shadow-[0_4px_100px_0px_rgba(0,0,0,0.6)]' : ''}`;
</script>

<header class="rounded-2xl fixed w-full p-8 max-md:p-3 z-50">

	<div class={headerBarClass}>
		<div id="logo" class="w-48 m-7 max-md:m-4 mt-[26px] max-md:mt-[20px] flex-none z-100]">
			<a href="/" on:click={() => { menuOpen.set(false); overlayOpen = false; }}><img class="max-md:max-w-[126px]" src={logo} alt="Alderete DDS" /></a>
		</div>

		<div class="grow border-l max-[1082px]:border-0 border-white/20">

			<nav class="flex flex-row ml-8 mt-[26px]">
				<ul class="flex flex-row max-[1082px]:hidden">
					<li class="uppercase font-bold"><a class="nav-underline {($page.url.pathname === '/about-us') ? 'active' : ''}" href="/about-us">About us</a></li>
					<li class="ml-12 max-xl:ml-8 uppercase font-bold"><a class="nav-underline {($page.url.pathname === '/services') ? 'active' : ''}" href="/services">Services</a></li>
					<li class="ml-12 max-xl:ml-8 uppercase font-bold">
						<div class="relative" on:mouseenter={handleMouseEnter} on:mouseleave={handleMouseLeave}>
							<a href="#" class="flex items-center">
								<span class="nav-underline {($page.url.pathname.startsWith('/patient-resources')) ? 'active' : ''}">Patient Resources</span>
								<svg class="ml-2"  width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" clip-rule="evenodd" d="M5.9998 1.7998C6.15893 1.7998 6.31155 1.86302 6.42407 1.97554C6.53659 2.08806 6.5998 2.24067 6.5998 2.3998V5.3998H9.5998C9.75893 5.3998 9.91155 5.46302 10.0241 5.57554C10.1366 5.68806 10.1998 5.84067 10.1998 5.9998C10.1998 6.15893 10.1366 6.31155 10.0241 6.42407C9.91155 6.53659 9.75893 6.5998 9.5998 6.5998H6.5998V9.5998C6.5998 9.75893 6.53659 9.91155 6.42407 10.0241C6.31155 10.1366 6.15893 10.1998 5.9998 10.1998C5.84067 10.1998 5.68806 10.1366 5.57554 10.0241C5.46302 9.91155 5.3998 9.75893 5.3998 9.5998V6.5998H2.3998C2.24067 6.5998 2.08806 6.53659 1.97554 6.42407C1.86302 6.31155 1.7998 6.15893 1.7998 5.9998C1.7998 5.84067 1.86302 5.68806 1.97554 5.57554C2.08806 5.46302 2.24067 5.3998 2.3998 5.3998H5.3998V2.3998C5.3998 2.24067 5.46302 2.08806 5.57554 1.97554C5.68806 1.86302 5.84067 1.7998 5.9998 1.7998Z" fill="white"/>
								</svg>	
							</a>
							{#if showDropdown}
								<ul class="absolute left-[-20px] mt-3 w-48 glass text-white rounded-lg shadow-lg z-50 py-2 rounded-2xl border border-white/20 min-w-54">
									<li><a href="/patient-resources/payment-and-insurance" class="block px-4 py-2 {($page.url.pathname === '/patient-resources/payment-and-insurance') ? 'active' : ''}"><span class="nav-underline">Payment + Insurance</span></a></li>
									<li><a href="/patient-resources/forms" class="block px-4 py-2 {($page.url.pathname === '/patient-resources/forms') ? 'active' : ''}"><span class="nav-underline">Forms</span></a></li>
								</ul>
							{/if}
						</div>
					</li>
					<li class="ml-12 max-xl:ml-8 uppercase font-bold"><a class="nav-underline {($page.url.pathname === '/contact') ? 'active' : ''}" href="/contact">Contact</a></li>
				</ul>
			</nav>
		</div>

		<div class="flex-none">
			<ul class="p-2">
				<li class="inline-block font-bold max-xl:hidden">
					<a target="_blank" href="tel:+18314323231">
						<svg class="inline mr-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H3.153C3.38971 0.000108969 3.6187 0.0841807 3.79924 0.23726C3.97979 0.390339 4.10018 0.602499 4.139 0.836L4.879 5.271C4.91436 5.48222 4.88097 5.69921 4.78376 5.89003C4.68655 6.08085 4.53065 6.23543 4.339 6.331L2.791 7.104C3.34611 8.47965 4.17283 9.72928 5.22178 10.7782C6.27072 11.8272 7.52035 12.6539 8.896 13.209L9.67 11.661C9.76552 11.4695 9.91994 11.3138 10.1106 11.2166C10.3012 11.1194 10.5179 11.0859 10.729 11.121L15.164 11.861C15.3975 11.8998 15.6097 12.0202 15.7627 12.2008C15.9158 12.3813 15.9999 12.6103 16 12.847V15C16 15.2652 15.8946 15.5196 15.7071 15.7071C15.5196 15.8946 15.2652 16 15 16H13C5.82 16 0 10.18 0 3V1Z" fill="white"/>
							</svg>
						831.432.3231
					</a>
				</li>
				<li class="inline-block ml-6 max-[1082px]:hidden"><a class="glass rounded-2xl border border-white/20 p-4 block font-bold" href="/contact">Request appointment</a></li>
			</ul>
		</div>
	</div>


</header>


<!-- START MOBILE NAV -->

<div class="menu" class:open={$menuOpen}>

	<a href="tel:+18314323231" class="phone-icon">
		<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M1 3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H6.28C6.48979 1.00016 6.69422 1.0663 6.86436 1.18905C7.03449 1.3118 7.1617 1.48496 7.228 1.684L8.726 6.177C8.8019 6.40534 8.79293 6.65339 8.70072 6.87564C8.60851 7.0979 8.43925 7.27945 8.224 7.387L5.967 8.517C7.07332 10.9655 9.03446 12.9267 11.483 14.033L12.613 11.776C12.7205 11.5607 12.9021 11.3915 13.1244 11.2993C13.3466 11.2071 13.5947 11.1981 13.823 11.274L18.316 12.772C18.5152 12.8383 18.6885 12.9657 18.8112 13.136C18.934 13.3064 19.0001 13.511 19 13.721V17C19 17.5304 18.7893 18.0391 18.4142 18.4142C18.0391 18.7893 17.5304 19 17 19H16C7.716 19 1 12.284 1 4V3Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>	
	</a>

	<button on:click={toggleMenu} class="menu-link">
	  <span class="hamburger-icon">
		<span class="hamburger-bar hamburger-bar-1"></span>
		<span class="hamburger-bar hamburger-bar-3"></span>
	  </span>
	</button>
	
</div>
  
  <div class="menu-overlay glass" class:open={$menuOpen}>
	<nav class="overlay-menu pl-6 min-[768px]:pl-14">
  
	  <ul class="text-left">
		<li class="font-family-reckless text-4xl tracking-tight"><a class="nav-links nav-underline" href="/about-us" on:click={() => { menuOpen.set(false); overlayOpen = false; }}>About us</a></li>
		<li class="mt-6 font-family-reckless text-4xl tracking-tight"><a class="nav-links nav-underline" href="/services" on:click={() => { menuOpen.set(false); overlayOpen = false; }}>Services</a></li>
		<li class="mt-6 font-family-reckless text-4xl tracking-tight">
			<div class="relative">
				<button on:click={toggleMobileDropdown} class="flex items-center">
					<span class="nav-underline">Patient Resources</span>
					<svg class="ml-2 transition-transform duration-200 {mobileDropdownOpen ? 'rotate-45' : ''}" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M5.9998 1.7998C6.15893 1.7998 6.31155 1.86302 6.42407 1.97554C6.53659 2.08806 6.5998 2.24067 6.5998 2.3998V5.3998H9.5998C9.75893 5.3998 9.91155 5.46302 10.0241 5.57554C10.1366 5.68806 10.1998 5.84067 10.1998 5.9998C10.1998 6.15893 10.1366 6.31155 10.0241 6.42407C9.91155 6.53659 9.75893 6.5998 9.5998 6.5998H6.5998V9.5998C6.5998 9.75893 6.53659 9.91155 6.42407 10.0241C6.31155 10.1366 6.15893 10.1998 5.9998 10.1998C5.84067 10.1998 5.68806 10.1366 5.57554 10.0241C5.46302 9.91155 5.3998 9.75893 5.3998 9.5998V6.5998H2.3998C2.24067 6.5998 2.08806 6.53659 1.97554 6.42407C1.86302 6.31155 1.7998 6.15893 1.7998 5.9998C1.7998 5.84067 1.86302 5.68806 1.97554 5.57554C2.08806 5.46302 2.24067 5.3998 2.3998 5.3998H5.3998V2.3998C5.3998 2.24067 5.46302 2.08806 5.57554 1.97554C5.68806 1.86302 5.84067 1.7998 5.9998 1.7998Z" fill="white"/>
					</svg>	
				</button>
				{#if mobileDropdownOpen}
					<div class="mt-4 ml-4 space-y-4">
						<div><a href="/patient-resources/payment-and-insurance" class="nav-underline text-2xl" on:click={() => { menuOpen.set(false); overlayOpen = false; mobileDropdownOpen = false; }}>Payment + Insurance</a></div>
						<div><a href="/patient-resources/forms" class="nav-underline text-2xl" on:click={() => { menuOpen.set(false); overlayOpen = false; mobileDropdownOpen = false; }}>Forms</a></div>
					</div>
				{/if}
			</div>
		</li>
		<li class="mt-6 font-family-reckless text-4xl tracking-tight"><a class="nav-links nav-underline" href="/contact" on:click={() => { menuOpen.set(false); overlayOpen = false; }}>Contact</a></li>
		<li>
			<a href="/contact" class="text-white mt-12 inline-block font-family-matter font-semibold group">
				<div class="flex flex-row items-center">
					<div>Request appointment</div>
					<div class="ml-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1"> 
						<svg width="20" height="11" viewBox="0 0 20 11" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M15 1.5L19 5.5M19 5.5L15 9.5M19 5.5H1" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
					</div>
				</div>
			</a>
		</li>
	  </ul>

	
	 
	</nav>
  </div>

<!-- END MOBILE NAV -->
	

<style>

.menu {
  position: fixed;
  top: 48px;
  right: 47px;
  height: 46px;
  width: 46px;
  z-index: 1000;
  display: none;
}

@media (max-width: 1081px) {
  .menu {
    display: block;
  }
}

@media (max-width: 767px) {
  .menu {
    top: 17px;
 	right: 24px;
  }
}

.phone-icon {
  position: absolute;
  right: 58px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
}

.menu-link {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 2;
}

.hamburger-icon {
  position: absolute;
  width: 24px;
  height: 8px;
  margin: auto;
  left: 0;
  top: 0;
  right: 0;
  bottom: 1px;
}

.hamburger-bar {
  background-color: #ffffff;
  height: 2px;
  width: 100%;
  border-radius: 2px;
  position: absolute;
  left: 0;
  transition: all 0.25s ease-in-out;
}

.hamburger-bar-2 {
  top: 0;
  bottom: 0;
  margin: auto;
}

.hamburger-bar-3 {
  bottom: 0;
}

.menu.open .hamburger-bar-1 {
  transform: translateY(2px) translateY(-50%) rotate(45deg);
}

.menu.open .hamburger-bar-2 {
  opacity: 0;
}

.menu.open .hamburger-bar-3 {
  transform: translateY(-6px) translateY(50%) rotate(-45deg);
}

.menu-overlay {
  color: #ffffff;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  text-align: center;
  transition: opacity 0.2s ease-in-out;
  z-index: 1;
  opacity: 0;
  visibility: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
}

.menu-overlay.open {
  opacity: 1;
  visibility: visible;
}

.nav-underline {
  position: relative;
  display: inline-block;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
}

.nav-underline::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 0;
  height: 1px;
  background: #fff;
  transition: width 0.3s cubic-bezier(0.4,0,0.2,1);
}

.nav-underline:hover::after,
.nav-underline:focus::after {
  width: 100%;
}

/* Special handling for flex links with icons */
.nav-underline.flex::after {
  width: calc(100% - 20px); /* Adjust based on icon width */
}

/* Special handling for dropdown links - underline only under text */
.nav-underline.dropdown-link {
  display: inline-block !important;
  position: relative;
}

.nav-underline.dropdown-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 0;
  height: 1px;
  background: #fff;
  transition: width 0.3s cubic-bezier(0.4,0,0.2,1);
}

.nav-underline.dropdown-link:hover::after,
.nav-underline.dropdown-link:focus::after {
  width: fit-content;
}

/* Special handling for dropdown links - underline only under text */
.nav-underline.block {
  display: inline-block !important;
  position: relative;
}

.nav-underline.block::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 0;
  height: 1px;
  background: #fff;
  transition: width 0.3s cubic-bezier(0.4,0,0.2,1);
}

.nav-underline.block:hover::after,
.nav-underline.block:focus::after {
  width: 100%;
}

/* Handle spans inside dropdown links */
.block .nav-underline::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 0;
  height: 1px;
  background: #fff;
  transition: width 0.3s cubic-bezier(0.4,0,0.2,1);
}

.block .nav-underline:hover::after,
.block .nav-underline:focus::after {
  width: 100%;
}

.nav-underline.active::after {
  width: 100% !important;
  background: #fff !important;
  height: 1px !important;
}

</style>
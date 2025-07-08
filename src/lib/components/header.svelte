<script lang="ts">
	import logo from '$lib/images/logo-alderete.svg';
	let showDropdown = false;
	let hideTimeout: ReturnType<typeof setTimeout>;
	let overlayOpen = false;
	let scrollY = 0;

	function handleMouseEnter() {
		clearTimeout(hideTimeout);
		showDropdown = true;
	}

	function handleMouseLeave() {
		hideTimeout = setTimeout(() => {
			showDropdown = false;
		}, 100);
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
</script>

<header class="rounded-2xl fixed w-full p-8 z-50">

	<div class="glass rounded-2xl border border-white/20 flex h-[77px] w-full shadow-[0_4px_100px_0px_rgba(0,0,0,0.6)] -z-50">
		<div id="logo" class="w-48 m-7 mt-[26px] flex-none">
			<a href="/"><img src={logo} alt="Alderete DDS" /></a>
		</div>

		<div class="grow border-l border-white/20">

			<nav class="flex flex-row ml-8 mt-[25px]">
				<ul class="flex flex-row max-[1082px]:hidden">
					<li class="uppercase font-bold"><a href="/about-us">About us</a></li>
					<li class="ml-12 max-xl:ml-8 uppercase font-bold"><a href="/services">Services</a></li>
					<li class="ml-12 max-xl:ml-8 uppercase font-bold">
						<div class="relative" on:mouseenter={handleMouseEnter} on:mouseleave={handleMouseLeave}>
							<a href="#" class="flex items-center">Patient Resources
								<svg class="ml-2"  width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" clip-rule="evenodd" d="M5.9998 1.7998C6.15893 1.7998 6.31155 1.86302 6.42407 1.97554C6.53659 2.08806 6.5998 2.24067 6.5998 2.3998V5.3998H9.5998C9.75893 5.3998 9.91155 5.46302 10.0241 5.57554C10.1366 5.68806 10.1998 5.84067 10.1998 5.9998C10.1998 6.15893 10.1366 6.31155 10.0241 6.42407C9.91155 6.53659 9.75893 6.5998 9.5998 6.5998H6.5998V9.5998C6.5998 9.75893 6.53659 9.91155 6.42407 10.0241C6.31155 10.1366 6.15893 10.1998 5.9998 10.1998C5.84067 10.1998 5.68806 10.1366 5.57554 10.0241C5.46302 9.91155 5.3998 9.75893 5.3998 9.5998V6.5998H2.3998C2.24067 6.5998 2.08806 6.53659 1.97554 6.42407C1.86302 6.31155 1.7998 6.15893 1.7998 5.9998C1.7998 5.84067 1.86302 5.68806 1.97554 5.57554C2.08806 5.46302 2.24067 5.3998 2.3998 5.3998H5.3998V2.3998C5.3998 2.24067 5.46302 2.08806 5.57554 1.97554C5.68806 1.86302 5.84067 1.7998 5.9998 1.7998Z" fill="white"/>
								</svg>	
							</a>
							{#if showDropdown}
								<ul class="absolute left-[-20px] mt-1 w-48 glass text-white rounded-lg shadow-lg z-50 py-2 rounded-2xl border border-white/20 min-w-54">
									<li><a href="/patient-resources/payment-and-insurance" class="block px-4 py-2">Payment + Insurance</a></li>
									<li><a href="/patient-resources/forms" class="block px-4 py-2">Forms</a></li>
								</ul>
							{/if}
						</div>
					</li>
					<li class="ml-12 max-xl:ml-8 uppercase font-bold"><a href="/contact">Contact</a></li>
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

	<!-- start mobile-nav -->

	
		<input  type="checkbox" id="overlay-input" bind:checked={overlayOpen} />
		<label class="min-[1082px]:hidden" for="overlay-input" id="overlay-button"><span></span></label>


	

  <div id="overlay" class="glass">
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </div>


	

<style>


@keyframes bugfix { from {padding:0;} to {padding:0;}}
@-webkit-keyframes bugfix { from {padding:0;} to {padding:0;}}

#overlay-button {
  position: absolute;
  right: 3em;
  top: 2.4em;
  padding: 26px 11px;
  z-index: 99999999999;
  cursor: pointer;
  user-select: none;
  span {
      height: 1.5px;
      width: 35px;
      border-radius: 2px;
      background-color: white;
      position: relative;
      display: block;
      transition: all .2s ease-in-out;
     
      &:after {
        top: 10px;
      }
      &:before, &:after {
          height: 1.5px;
          width: 35px;
          border-radius: 2px;
          background-color: white;
          position: absolute;
          content: "";
          transition: all .2s ease-in-out;
      }
    }
    &:hover span, &:hover span:before, &:hover span:after {
      background: #333332;
    }
}

input[type=checkbox] {
  display: none;
  
  &:checked ~ #overlay {
    visibility: visible;
  }
  
  &:checked ~ #overlay-button {
    &:hover span, span{
      background: transparent;
    }
    span {
      &:before {
        transform: rotate(45deg) translate(7px, 7px);
        opacity: 1;
      }
      &:after {
        transform: rotate(-45deg) translate(0px, 0px);
      }
    }
  }
}

#overlay {
  height: 100vh;
  width: 100vw;
  z-index: 999999999;
  visibility: hidden;
  position: fixed;
  &.active {
    visibility: visible;
  }
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    height: 100vh;
    padding-left: 0;
    list-style-type: none;
    li {
      padding: 1em;
      a {
        color: white;
        text-decoration: none;
        font-size: 1.5em;
        &:hover {
          color: #333332;
        }
      }
    }
  }
}

.no-scroll {
  overflow: hidden !important;
  height: 100vh !important;
}

</style>
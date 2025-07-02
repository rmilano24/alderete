<script lang="ts">
	import logo from '$lib/images/logo-alderete.svg';
</script>

<header class="container mx-auto rounded-2xl">

	<div class="glass rounded-2xl border border-white/20 container fixed top-8 flex container h-[81px]">
		<div id="logo" class="w-48 m-7 flex-none">
			<img src={logo} alt="Alderete DDS" />
		</div>

		<div class="grow border-l border-white/20">

			<nav class="flex flex-row ml-8 mt-7">
				<ul class="flex flex-row">
					<li class="uppercase font-bold"><a href="/">About us</a></li>
					<li class="ml-12 uppercase font-bold"><a href="/">Services</a></li>
					<li class="ml-12 uppercase font-bold"><a href="/">Patient Resources</a></li>
					<li class="ml-12 uppercase font-bold"><a href="/">Contact</a></li>
				</ul>
			</nav>
		</div>

		<div class="flex-none">
			<ul class="p-2">
				<li class="inline-block font-bold"><a href="/">831.432.3231</a></li>
				<li class="inline-block ml-6"><a class="glass rounded-2xl border border-white/20 p-4 block font-bold" href="">Request appointment</a></li>
			</ul>
		</div>
	</div>

</header>

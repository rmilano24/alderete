<script lang="ts">
	import logo from '$lib/images/logo-alderete.svg';
</script>

<header class="container mx-auto rounded-2xl">

	<div class="glass rounded-2xl container fixed top-8 flex border border-white/20">
		<div id="logo" class="w-48 m-8 flex-none">
			<img src={logo} alt="Alderete DDS" />
		</div>

		<div class="size-14 grow">

			<nav class="flex flex-row ml-8">
				<ul class="flex flex-row">
					<li><a href="/">About us</a></li>
					<li><a href="/">Services</a></li>
					<li><a href="/">Patient Resources</a></li>
					<li><a href="/">Contact</a></li>
				</ul>
			</nav>
		</div>

		<div class="size-14 flex-none ...">
			<ul class="flex flex-row">
				<li><a href="/">831.432.3231</a></li>
				<li><a href="/">Request appointment</a></li>
			</ul>
		</div>
	</div>

</header>

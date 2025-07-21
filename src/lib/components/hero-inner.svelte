<script>
    import home_hero from '$lib/images/bg_home-hero.jpg';
	export let eyebrow = "Get to know us"
    export let header = "About us"
	export let text = "At our office you'll find a friendly and professional staff, each dedicated to providing your family with quality care and personal attention. They are trained professionals with many years of experience, and a desire to share their knowledge so that you may achieve a healthy, attractive and comfortable mouth."
 </script>

<section id="hero">
	<div class="grid grid-cols-2 gap-4 max-lg:grid-cols-1">
		<div class="p-24 mt-40 max-lg:p-12 max-lg:mt-24">
			<h5 class="text-white uppercase text font-matter tracking-widest after:bg-white after:content-[''] after:inline-block after:h-0.5 after:ml-6 after:w-8 after:relative after:bottom-[5px]">{eyebrow}</h5>
			<h1 class="text-5xl text-teal-100 font-reckless mt-8">{header}</h1>
			<p class="text-teal-100 mt-8 text-lg leading-[32px]">{@html text}</p> 
		</div>
		<div class="relative h-[900px] bg-center bg-cover bg-no-repeat rounded-bl-4xl" style="background-image: url('{home_hero}')">
			<div class="absolute inset-0 bg-black/10 pointer-events-none z-0 rounded-bl-4xl"></div>
		</div>
	  </div>
</section>
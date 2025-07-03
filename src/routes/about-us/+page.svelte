<svelte:head>
	<title>NMBL | Branding and Design Studio in Santa Cruz, California</title>
	<meta name="description" content="NMBL | UX Design, Branding, Web Design & Development Studio in Santa Cruz | San Francisco Bay Area" />
</svelte:head>

<div id="hero" class="flex min-h-screen">
	<!-- Left Column - Text Content -->
	<div class="flex-1 flex items-center justify-center p-8 lg:p-16">
		<div class="max-w-2xl">
			<h1 class="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
				About Our Studio
			</h1>
			<p class="text-lg lg:text-xl text-gray-700 mb-8 leading-relaxed">
				We are a passionate team of designers and developers creating meaningful digital experiences. 
				Our mission is to help businesses connect with their audiences through thoughtful design and innovative technology.
			</p>
			<button class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
				Learn More
			</button>
		</div>
	</div>
	
	<!-- Right Column - Background Image -->
	<div class="flex-1 bg-cover bg-center bg-no-repeat" style="background-image: url('/src/lib/images/bg_home-hero.jpg');">
		<!-- Optional overlay for better text contrast -->
		<div class="w-full h-full bg-black bg-opacity-20"></div>
	</div>
</div>
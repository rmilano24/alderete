<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
	import { preloadFonts } from '$lib/font-loader.js';
	import { onMount } from 'svelte';
	
	let { children, data } = $props();
	
	onMount(() => {
		preloadFonts();
	});
</script>

	<Header />

	{@render children()}

	<Footer />	
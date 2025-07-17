<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
	import { preloadFonts } from '$lib/font-loader.js';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { derived } from 'svelte/store';
	
	let { children, data } = $props();
	
	onMount(() => {
		preloadFonts();
	});

	// List of routes that use BottomCta
	const bottomCtaRoutes = ['/', '/about-us', '/services'];

	const hasBottomCta = derived(page, ($page) => bottomCtaRoutes.includes($page.url.pathname));
</script>

	<Header />

	{@render children()}

	<Footer hasBottomCta={$hasBottomCta} />	
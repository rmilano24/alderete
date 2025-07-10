<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
	
	let { children, data } = $props();
	
</script>

	<Header />

	{@render children()}

	<Footer />	
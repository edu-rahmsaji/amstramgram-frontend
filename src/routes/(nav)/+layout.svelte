<script>
	import Navbar from '$lib/Navbar/Navbar.svelte';
</script>

<div class="relative w-full h-full flex flex-col">
	<main class="relative w-full flex flex-col pb-20">
		<slot />
	</main>
	<Navbar />
</div>

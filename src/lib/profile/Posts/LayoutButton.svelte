<script lang="ts">
	import type { ComponentType } from 'svelte';

	export let icon: ComponentType;
	export let href: string;
</script>

<a {href} class="relative flex-grow flex justify-center items-center">
	<svelte:component this={icon} />
</a>

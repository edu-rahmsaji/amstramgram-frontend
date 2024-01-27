<script lang="ts">
	import type { ComponentType } from 'svelte';

	export let icon: ComponentType;
	export let count: number;
	export let text: string;
</script>

<!--
@component

Renders some data in the profile page.

Includes an icon, a count and text.

-->

<div class="relative flex gap-5">
	<svelte:component this={icon} />
	{count}
	{text}
</div>

<script lang="ts">
	import { IconMenu as Menu } from '@tabler/icons-svelte';

	export let nickname: string;
</script>

<!--
@component

Renders the top navbar for the profile page.

Displays :
* The nickname of the user
* A menu button to open a small options list

-->

<nav class="relative w-full min-h-[60px] px-5 flex justify-between items-center">
	<h1>{nickname}</h1>
	<Menu />
</nav>

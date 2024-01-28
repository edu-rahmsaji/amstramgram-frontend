<script lang="ts">
	import { IconArrowNarrowLeft as LeftArrow } from '@tabler/icons-svelte';
	import { onMount } from 'svelte';

	let description: string = '';
	let image: File;

	onMount(() => {
		document.title = 'New Post - Amstramgram';
	});
</script>

<form>
	<nav class="relative w-full h-20 p-5 flex justify-start items-center">
		<!-- svelte-ignore a11y-invalid-attribute -->
		<a href="javascript:history.back()" class="flex gap-5 border-b-2 py-2 border-black">
			<LeftArrow />
			<span>Go back</span>
		</a>
	</nav>
	<textarea name="text"></textarea>
</form>

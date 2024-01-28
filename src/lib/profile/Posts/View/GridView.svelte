<script lang="ts">
	import { PUBLIC_BACKEND_URL } from '$env/static/public';
	import type { Post } from '$models/Post';

	export let posts: Post[];
</script>

<div class="relative w-full grid grid-cols-3 gap-[2px]">
	{#each posts as { imagePaths, text }}
		<div class="relative w-full aspect-square flex items-center bg-zinc-800">
			<img src="{PUBLIC_BACKEND_URL}/{imagePaths[0]}" alt={text} />
		</div>
	{/each}
</div>

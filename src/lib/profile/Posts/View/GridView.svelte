<script lang="ts">
	import type { Post } from '$models/Post';

	export let posts: Post[];
</script>

<div class="relative w-full grid grid-cols-3 gap-[2px]">
	{#each posts as { image_name, text }}
		<div class="relative w-full aspect-square flex items-center bg-zinc-800">
			<img src="/images/{image_name}" alt={text} />
		</div>
	{/each}
</div>

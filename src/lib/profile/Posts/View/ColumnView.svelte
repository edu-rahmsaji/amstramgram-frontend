<script lang="ts">
	import type { Post } from '$models/Post';
	import { IconHeart as Heart, IconBookmark as Bookmark } from '@tabler/icons-svelte';

	export let posts: Post[];

	function dateContent(created_at: Date): string {
		const today = new Date();
		const yesterday = today;
		yesterday.setDate(yesterday.getDate() - 1);

		if (created_at.toLocaleDateString('fr-CH') === today.toLocaleDateString('fr-CH')) {
			return `Today at ${created_at.toLocaleTimeString('fr-CH')}`;
		} else if (created_at.toLocaleDateString('fr-CH') === yesterday.toLocaleDateString('fr-CH')) {
			return `Yesterday at ${created_at.toLocaleTimeString('fr-CH')}`;
		} else {
			return created_at.toLocaleDateString('fr-CH');
		}
	}
</script>

<div class="relative w-full grid grid-cols-1">
	{#each posts as { image_name, text, created_at }}
		<div class="relative w-full aspect-square flex items-center bg-zinc-800">
			<img src="/images/{image_name}" alt={text} />
		</div>
		<div class="relative w-full p-5 flex flex-col gap-5">
			<div class="relative w-full flex justify-between items-center">
				<p class="font-medium text-gray-500 text-sm">{dateContent(created_at)}</p>
				<div class="relative flex gap-5">
					<Heart />
					<Bookmark />
				</div>
			</div>
			<p class="text-sm">{text}</p>
		</div>
	{/each}
</div>

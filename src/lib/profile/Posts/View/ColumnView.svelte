<script lang="ts">
	import PostComponent from '$lib/Post.svelte';
	import type { Post } from '$models/Post';

	export let posts: Post[];
</script>

<div class="relative w-full grid grid-cols-1">
	{#each posts as post}
		<PostComponent {post} />
	{/each}
</div>

<script lang="ts">
	import Post from '$lib/Post.svelte';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	onMount(() => {
		document.title = 'Home - Amstramgram';
	});
</script>

{#if data.posts.length > 0}
	<ul class="relative pb-20">
		{#each data.posts as post}
			<li>
				<Post {post} />
			</li>
		{/each}
	</ul>
{:else}
	<p>No post has been created yet...</p>
{/if}

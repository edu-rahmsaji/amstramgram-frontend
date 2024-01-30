<script lang="ts">
	import Post from '$lib/shared/Post/Post.svelte';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	onMount(() => {
		document.title = 'Home - Amstramgram';
	});
</script>

{#if !data.posts}
	<p>Something went wrong. Please try again later.</p>
{:else if data.posts.length === 0}
	<p>No post has been created yet...</p>
{:else}
	{#each data.posts as post}
		<Post {post} />
	{/each}
{/if}

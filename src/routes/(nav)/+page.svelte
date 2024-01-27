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
	{#each data.posts as post}
		<Post {post} />
	{/each}
{:else}
	<p>No post has been created yet...</p>
{/if}

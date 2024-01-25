<script lang="ts">
	import Post from '$lib/Post.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1>Welcome to Amstramgram</h1>

{#if data.posts.length > 0}
	{#each data.posts as post}
		<Post data={post} />
	{/each}
{:else}
	<p>No post has been created yet...</p>
{/if}

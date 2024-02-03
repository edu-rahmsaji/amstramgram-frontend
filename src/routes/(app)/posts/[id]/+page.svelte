<script lang="ts">
	import { IconArrowNarrowLeft } from '@tabler/icons-svelte';
	import type { PageData } from './$types';
	import Post from '$lib/shared/Post/Post.svelte';

	export let data: PageData;
</script>

<nav class="relative w-full min-h-[60px] px-5 flex justify-start items-center z-50">
	<!-- svelte-ignore a11y-invalid-attribute -->
	<a href="javascript:history.back()" class="flex gap-3 border-b-2 border-black py-1">
        <IconArrowNarrowLeft class="text-black" />
            <span>Back</span>
    </a>
</nav>
{#if !data.post}
	<p>Something went wrong. Please try again later.</p>
{:else}
	<Post post={data.post} />
{/if}

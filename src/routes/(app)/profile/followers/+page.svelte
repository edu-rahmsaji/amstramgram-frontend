<script lang="ts">
	import type { PageData } from './$types.js';
	import { onMount } from 'svelte';
	import { IconArrowNarrowLeft } from '@tabler/icons-svelte';

	export let data: PageData;

    let search 

	onMount(() => {
		document.title = 'My Followers - Amstramgram';
	});
</script>

{#if !data.followers}
	<p>Unable to retrieve your followers. Please try again later.</p>
{:else}
	<nav class="relative w-full min-h-[60px] px-5 flex justify-start items-center z-50">
		<!-- svelte-ignore a11y-invalid-attribute -->
		<a href="javascript:history.back()" class="flex gap-3 border-b-2 border-black py-1">
			<IconArrowNarrowLeft class="text-black" />
			<span>Back</span>
		</a>
	</nav>
	<input placeholder="Chercher parmi vos followers..." />
	<div class="m-5 flex flex-col gap-5">
        {#each data.followers as follower}
            <div class="relative w-full h-10 flex justify-between items-center">
                <a
                    href="/profile/{follower.id}"
                    class="relative w-full h-full flex justify-start items-center gap-5 cursor-pointer"
                >
                    <div class="relative h-full aspect-square rounded-full bg-black">
                        <!-- Avatar here -->
                    </div>
                    <div class="relative flex flex-col items-start justify-between">
                        <p class="font-medium">{follower.nickname}</p>
                    </div>
                </a>
                <button class="bg-blue-500 text-white rounded-md py-1 px-3 text-sm">
                    Follow
                </button>
            </div>
        {/each}
    </div>
{/if}

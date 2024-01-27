<script lang="ts">
	import type { Post } from '$models/Post';
	import type { LayoutParam } from '$types/profile';
    import {
        IconLayoutGrid as GridLayout,
        IconColumns1 as ColumnLayout
    } from '@tabler/icons-svelte';
	import LayoutButton from './LayoutButton.svelte';
	import GridView from './View/GridView.svelte';
	import ColumnView from './View/ColumnView.svelte';
    
	export let posts: Post[];
    export let layout: LayoutParam;
</script>

<div class="relative h-10 w-full flex flex-col">
    <div class="relative w-full flex-grow flex">
        <LayoutButton icon={GridLayout} href="/profile" />
        <LayoutButton icon={ColumnLayout} href="/profile?layout=column" />
    </div>
    <div class="relative w-1/2 h-[2px] bg-black duration-200 ease-in-out {layout === "" ? "left-0" : "left-1/2"}"></div>
</div>
{#if posts.length === 0}
    <p>You haven't posted anything yet...</p>
{:else if layout === ""}
	<GridView {posts} />
{:else if layout === "column"}
	<ColumnView {posts} />
{/if}

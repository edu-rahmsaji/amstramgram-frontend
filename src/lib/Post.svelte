<script lang="ts">
    import {
        IconHeart as Heart,
        IconBookmark as Bookmark
    } from "@tabler/icons-svelte";
	import type { Post } from "../models/Post";

    export let data: Post;
</script>

<div class="relative w-full flex flex-col">
    <div class="relative w-full h-20 p-5 flex justify-start items-center gap-5">
        <div class="relative h-full aspect-square rounded-full bg-black">
            <!-- Avatar here -->
        </div>
        <p class="font-semibold">{data.creator.nickname}</p>
    </div>
    <div class="relative w-full aspect-square flex items-center bg-zinc-800">
        <img src="/src/store/{data.image}" alt={data.description} />
    </div>
    <div class="relative w-full p-5">
        <Heart />
    </div>
    <p>{data.description}</p>
    <p>{data.created_at.toLocaleString()}</p>
</div>
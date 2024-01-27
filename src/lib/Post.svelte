<script lang="ts">
    import {
        IconHeart as Heart,
        IconBookmark as Bookmark
    } from "@tabler/icons-svelte";
	import type { Post } from "$models/Post";

    export let post: Post;

    $: ({ creator, text, image_name, created_at } = post);

    function dateContent(): string {
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

<div class="relative w-full flex flex-col">
    <div class="relative w-full h-20 p-5 flex justify-start items-center gap-5">
        <div class="relative h-full aspect-square rounded-full bg-black">
            <!-- Avatar here -->
        </div>
        <p class="font-medium">{creator.nickname}</p>
    </div>
    <div class="relative w-full aspect-square flex items-center bg-zinc-800">
        <img src="/images/{image_name}" alt={text} />
    </div>
    <div class="relative w-full p-5 flex flex-col gap-5">
        <div class="relative w-full flex justify-between items-center">
            <p class="font-medium text-gray-500 text-sm">{dateContent()}</p>
            <div class="relative flex gap-5">
                <Heart />
                <Bookmark />
            </div>
        </div>
        <p class="text-sm">{text}</p>
    </div>
</div>
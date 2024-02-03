<script lang="ts">
	import { IconHeart as Heart, IconBookmark as Bookmark } from '@tabler/icons-svelte';

    export let likes: number | undefined;
</script>

<div class="relative w-full p-5 flex flex-col gap-5">
    <div class="relative w-full flex justify-between items-center">
        <div class="relative flex gap-5">
            <div class="flex gap-1">
                <Heart />
                <span>{likes}</span>
            </div>
            <Bookmark />
        </div>
    </div>
</div>
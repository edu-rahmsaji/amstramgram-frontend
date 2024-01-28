<script lang="ts">
	import { PUBLIC_BACKEND_URL } from '$env/static/public';
	import { IconHeart as Heart, IconBookmark as Bookmark } from '@tabler/icons-svelte';
	import type { Post } from '$models/Post';

	export let post: Post;

	$: ({ user, text, imagePaths, createdAt } = post);

	function formattedDate(): string {
		const difference: number = Math.floor((Date.now() - createdAt.getTime()) / 1000);

		switch (true) {
			case difference < 60: // Less than 1 minute
				return `${difference} seconds ago`;
			case difference < 3600: // Less than 1 hour
				return `${Math.floor(difference / 60)} minute(s) ago`;
			case difference < 86400: // Less than 1 day
				return `${Math.floor(difference / 3600)} hour(s) ago`;
			case difference < 604800: // Less than 1 week
				return `${Math.floor(difference / 86400)} day(s) ago`;
			case difference < 2419200: // Less than 4 weeks
				return `${Math.floor(difference / 604800)} week(s) ago`;
			case difference < 31449600: // Less than 1 year
				return `${Math.floor(difference / 2419200)} month(s) ago`;
			default:
				return `${Math.floor(difference / 31449600)} year(s) ago`;
		}
	}
</script>

<!--
@component

Renders an all-included post with metadata and buttons.

There are three distinct sections.

__The first section displays:__
* The poster's avatar
* The poster's nickname
* The date of the post

__The second section displays either a text and/or (an) image(s):__
* If a text is set, it shows up as standalone if no images was provided
* If there's a least 1 image: displays an image carousel if there are multiple images, or a static image placeholder if there is one
* When both are set, the text is displayed under the image(s)

__The third section displays:__
* The like count of the post
* 3 buttons : like, bookmark and open the comments section

-->

<div class="relative w-full flex flex-col">
	<div class="relative w-full h-20 p-5 flex justify-start items-center gap-5">
		<div class="relative h-full aspect-square rounded-full bg-black">
			<!-- Avatar here -->
		</div>
		<div class="relative flex flex-col items-start justify-between">
			<p class="font-medium">{user.nickname}</p>
			<p class="font-medium text-gray-500 text-xs">{formattedDate()}</p>
		</div>
	</div>
	<div class="relative w-full aspect-square flex items-center bg-zinc-800">
		{#each imagePaths as imagePath}
			<img
				src="{PUBLIC_BACKEND_URL}/{imagePath}"
				alt={text}
				class="relative h-full aspect-square"
			/>
		{/each}
	</div>
	<div class="relative w-full p-5 flex flex-col gap-5">
		<div class="relative w-full flex justify-between items-center">
			<div class="relative flex gap-5">
				<Heart />
				<Bookmark />
			</div>
		</div>
		<p class="text-sm">{text}</p>
	</div>
</div>

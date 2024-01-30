<script lang="ts">
	import { PUBLIC_BACKEND_URL } from '$env/static/public';

	export let text: string;
	export let imagePaths: string[];
</script>

<div class="flex flex-col gap-5">
	<p class="text-sm text-justify px-5">{text}</p>
	{#if imagePaths.length > 0}
		<div class="relative w-full aspect-square flex items-center bg-zinc-800 overflow-x-hidden">
			{#each imagePaths as imagePath}
				<img
					src="{PUBLIC_BACKEND_URL}/{imagePath}"
					alt={text}
					class="relative h-full aspect-square"
				/>
			{/each}
		</div>
	{/if}
</div>

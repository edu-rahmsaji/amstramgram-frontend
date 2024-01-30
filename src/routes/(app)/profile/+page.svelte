<script lang="ts">
	import {
		IconCamera as PostCount,
		IconUsersGroup as Followers,
		IconUsersPlus as Followed
	} from '@tabler/icons-svelte';
	import type { PageData } from './$types';
	import { onMount } from 'svelte';
	import { Nav, Data, Posts } from '$lib/profile';

	export let data: PageData;

	onMount(() => {
		document.title = 'My Profile - Amstramgram';
	});
</script>

{#if !data.user}
	<p>Something went wrong. Please try again later.</p>
{:else}
	{@const { nickname, firstName, lastName, biography } = data.user}
	<Nav {nickname} />
	<div class="relative w-full flex flex-col p-5 gap-5">
		<div class="relative w-full h-24 flex justify-between gap-5">
			<div class="relative h-full w-1/2 flex justify-start">
				<div class="relative h-full w- aspect-square rounded-full bg-black">
					<!-- Avatar here -->
				</div>
			</div>
			<div class="relative h-full w-1/2 flex flex-col justify-between">
				<Data icon={PostCount} count={data.posts?.length} text="post(s)" />
				<Data icon={Followers} count={data.followerCount} text="follower(s)" />
				<Data icon={Followed} count={data.followedCount} text="following" />
			</div>
		</div>
		<h2 class="font-medium flex">{firstName} {lastName}</h2>
		<p class="text-sm text-justify">{biography}</p>
	</div>
	{#if !data.posts}
		<p>Something went wrong. Please try again later.</p>
	{:else}
		<Posts posts={data.posts} layout={data.layout} />
	{/if}
{/if}

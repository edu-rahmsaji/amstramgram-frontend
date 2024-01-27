<script lang="ts">
	import {
		IconCamera as PostCount,
		IconUsersGroup as Followers,
		IconUsersPlus as Followed
	} from '@tabler/icons-svelte';
	import type { PageData } from './$types';
	import { onMount } from 'svelte';
	import { getPosts } from '$mock-db/post';
	import { getFollowed, getFollowers } from '$mock-db/follows';
	import Data from '$lib/profile/Data.svelte';
	import Posts from '$lib/profile/Posts/Posts.svelte';
	import Nav from '$lib/profile/Nav.svelte';

	export let data: PageData;

	onMount(() => {
		document.title = 'My Profile - Amstramgram';
	});

	$: ({ id, nickname, first_name, last_name, biography } = data.user);
	$: posts = getPosts(id);
	$: followers = getFollowers(id);
	$: followed = getFollowed(id);
</script>

<Nav {nickname} />
<div class="relative w-full flex flex-col items-center p-5 gap-5">
	<div class="relative w-full h-24 flex justify-between gap-5">
		<div class="relative h-full flex-grow flex justify-start">
			<div class="relative h-full aspect-square rounded-full bg-black">
				<!-- Avatar here -->
			</div>
		</div>
		<div class="relative h-full flex-grow flex flex-col justify-between">
			<Data icon={PostCount} count={posts.length} text="post(s)" />
			<Data icon={Followers} count={followers.length} text="follower(s)" />
			<Data icon={Followed} count={followed.length} text="following" />
		</div>
	</div>
	<h2 class="font-medium text-gray-500 flex">{first_name} {last_name}</h2>
	<p class="text-sm text-justify">{biography}</p>
</div>
<Posts {posts} layout={data.layout} />

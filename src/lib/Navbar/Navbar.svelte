<script lang="ts">
	import Link from './Link.svelte';
	import {
		IconHome as Home,
		IconCompass as Explore,
		IconCirclePlus as AddPost,
		IconMessage as Messages,
		IconUserCircle as UserProfile
	} from '@tabler/icons-svelte';
</script>

<!--
@component

Renders a navbar adapted for devices under 1024px wide.
-->

<nav
	class="lg:hidden fixed bottom-0 left-0 w-full h-20 bg-white shadow-[0px_-4px_3px_rgba(50,50,50,0.25)] dark:shadow-[0px_-4px_3px_rgba(10,10,10,0.25)]"
>
	<ul class="relative w-full h-full py-5 flex justify-evenly items-center">
		<Link href="/" label="Home" icon={Home} />
		<Link href="/explore" label="Explore" icon={Explore} />
		<Link href="/posts/add" label="Add a post" icon={AddPost} />
		<Link href="/messages" label="Messages" icon={Messages} />
		<Link href="/profile" label="Profile" icon={UserProfile} />
	</ul>
</nav>

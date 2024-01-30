import type { Post } from '$models/Post';
import { allowedLayoutParams, type LayoutParam } from '$types/profile';
import { getFollowerCount, getFollowedCount } from '$server/follow';
import { getUserPosts } from '../../../server/post';
import { getUser } from '../../../server/user';
import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ url }) => {
	const userId = 1;
	const user = await getUser(userId);

	let posts: Post[] | null = null;
	if (user) {
		posts = await getUserPosts(user);
	}

	const followerCount = await getFollowerCount(userId);
	const followedCount = await getFollowedCount(userId);

	const layoutParam = (url.searchParams.get('layout') ?? '') as LayoutParam;

	if (!allowedLayoutParams.includes(layoutParam)) {
		redirect(302, '/profile');
	}

	return {
		user: user,
		posts,
		followerCount,
		followedCount,
		layout: layoutParam
	};
};

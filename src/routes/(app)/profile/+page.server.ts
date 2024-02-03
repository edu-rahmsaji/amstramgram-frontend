import type { Post } from '$models/Post';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { User } from '$models/User';
import { PUBLIC_BACKEND_URL } from '$env/static/public';

const allowedTypeParams = ["", "text"] as const;
export type TypeParam = typeof allowedTypeParams[number];

const getPosts = async (): Promise<Post[]> => {
	const response = await fetch(`${PUBLIC_BACKEND_URL}/api/user/1/posts`);
	return (await response.json()).data;
}

const getUser = async (): Promise<User> => {
	const response = await fetch(`${PUBLIC_BACKEND_URL}/api/user/1`);
	return (await response.json()).data;
}

export const load: PageServerLoad = async ({ locals, url }) => {
	const typeParam = (url.searchParams.get('type') ?? '') as TypeParam;

	if (!allowedTypeParams.includes(typeParam)) {
		redirect(302, '/profile');
	}

	return {
		type: typeParam,
		posts: getPosts(),
		user: await getUser(),
	};
};

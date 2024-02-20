import type { Post } from '$models/Post';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { User } from '$models/User';
import { PUBLIC_BACKEND_URL } from '$env/static/public';

const allowedTypeParams = ["", "text"] as const;
export type TypeParam = typeof allowedTypeParams[number];

const getPosts = async (userId: string): Promise<Post[]> => {
	const response = await fetch(`${PUBLIC_BACKEND_URL}/api/user/${userId}/posts`);
	return (await response.json()).data;
}

const getUser = async (id: string): Promise<User> => {
	const response = await fetch(`${PUBLIC_BACKEND_URL}/api/user/${id}`);
	return (await response.json()).data;
}

export const load: PageServerLoad = async ({ url, params }) => {
	const userId = params.id;

	if (userId === "1") {
		redirect(307, "/profile");
	}

	const typeParam = (url.searchParams.get('type') ?? '') as TypeParam;

	if (!allowedTypeParams.includes(typeParam)) {
		redirect(302, url.pathname);
	}

	return {
		type: typeParam,
		posts: getPosts(userId),
		user: await getUser(userId),
	};
};

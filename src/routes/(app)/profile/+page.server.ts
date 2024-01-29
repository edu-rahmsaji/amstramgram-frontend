import { PUBLIC_BACKEND_URL } from '$env/static/public';
import type { Post } from '$models/Post';
import type { User } from '$models/User';
import { allowedLayoutParams, type LayoutParam } from '$types/profile';
import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

const getUser = async (id: number): Promise<User | null> => {
	try {
		const userResponse = await fetch(`${PUBLIC_BACKEND_URL}/api/user/${id}`, { method: "GET" });
		return await userResponse.json();
	} catch (err) {
		console.error("Something went wrong when fetching a user : " + (err as Error).message);
		return null;
	}
}

const getPosts = async (userId: number): Promise<Post[] | null> => {
	try {
		const postResponse = await fetch(`${PUBLIC_BACKEND_URL}/api/user/${userId}/posts`, { method: "GET" });
		return await postResponse.json();
	} catch (err) {
		console.error("Something went wrong when fetching a user's posts : " + (err as Error).message);
		return null;
	}
}

export const load: PageServerLoad = async ({ url }) => {
	const userId = 1;
	const user = await getUser(userId);
	const posts = await getPosts(userId);

	const layoutParam = (url.searchParams.get('layout') ?? '') as LayoutParam;

	if (!allowedLayoutParams.includes(layoutParam)) {
		redirect(302, '/profile');
	}

	return {
		user: user,
		posts: posts,
		layout: layoutParam
	};
};

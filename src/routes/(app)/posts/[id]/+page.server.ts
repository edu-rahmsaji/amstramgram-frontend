import { PUBLIC_BACKEND_URL } from '$env/static/public';
import type { Post } from '$models/Post.js';
import { redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types.js';
import type { ApiResponse } from '$models/ApiResponse.js';

const getPost = async (id: string): Promise<Post> => {
	const response = await fetch(`${PUBLIC_BACKEND_URL}/api/posts/${id}`);
	return (await response.json()).data;
}

const deletePost = async (id: string): Promise<ApiResponse> => {
	const response = await fetch(`${PUBLIC_BACKEND_URL}/api/posts/${id}`, {
		method: "DELETE"
	});

	return await response.json();
}

export const load: PageServerLoad = async ({ params }) => {
	try {
		return {
			post: await getPost(params.id)
		}
	} catch (err) {
		console.error("An error occurred while fetching a post : " + (err as Error).message);
		return {}
	}
};

export const actions: Actions = {
	default: async ({ params }) => {
		await deletePost(params.id!);

		redirect(307, "/profile");
	}
};

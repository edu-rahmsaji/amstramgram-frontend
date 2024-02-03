import { PUBLIC_BACKEND_URL } from '$env/static/public';
import type { Post } from '$models/Post';
import type { PageServerLoad } from './$types';

const getPosts = async (): Promise<Post[]> => {
	const response = await fetch(`${PUBLIC_BACKEND_URL}/api/posts`);
	return (await response.json()).data;
}

export const load: PageServerLoad = async () => {
	try {
		return {
			posts: getPosts()
		}
	} catch (err) {
		console.error("An error occurred while fetching all the posts : " + (err as Error).message);
		return {}
	}
};

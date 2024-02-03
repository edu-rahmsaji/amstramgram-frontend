import { BACKEND_URL } from '$env/static/private';
import type { Post } from '$models/Post';
import type { PageServerLoad } from './$types';

const getPosts = async (): Promise<Post[]> => {
	const response = await fetch(`${BACKEND_URL}/api/posts`);
	return (await response.json()).data;
}

export const load: PageServerLoad = async () => {
	try {
		return {
			posts: getPosts()
		}
	} catch (err) {
		console.error("An error occurred while fetching : " + (err as Error).message);
		return {}
	}
};

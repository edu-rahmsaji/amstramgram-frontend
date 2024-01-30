import { getPosts } from '../../server/post';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	try {
		return {
			posts: await getPosts()
		}
	} catch (err) {
		console.error("An error occurred while fetching : " + (err as Error).message);
		return {
			posts: undefined
		}
	}
};

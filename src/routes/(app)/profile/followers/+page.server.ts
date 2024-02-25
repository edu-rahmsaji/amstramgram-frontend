import type { PageServerLoad } from './$types.js';
import { PUBLIC_BACKEND_URL } from '$env/static/public';
import type { User } from '$models/User.js';

const getFollowers = async (): Promise<User[]> => {
	const response = await fetch(`${PUBLIC_BACKEND_URL}/api/user/1/followers`);
	return (await response.json()).data;
}

export const load: PageServerLoad = async () => {
	return {
		followers: await getFollowers(),
	};
};

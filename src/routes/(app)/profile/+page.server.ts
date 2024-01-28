import type { User } from '$models/User';
import { allowedLayoutParams, type LayoutParam } from '$types/profile';
import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

const getUser = (): Promise<User> => {
	const userResponse = await fetch(`http://localhost:4000/api/user/${1}`, { method: "GET" });
	const user: User = await userResponse.json();
}

export const load: PageServerLoad = async ({ url }) => {
	const userId = 1;
	const userResponse = await fetch(`http://localhost:4000/api/user/${1}`, { method: "GET" });
	const user: User = await userResponse.json();

	const layoutParam = (url.searchParams.get('layout') ?? '') as LayoutParam;

	if (!allowedLayoutParams.includes(layoutParam)) {
		redirect(302, '/profile');
	}

	return {
		user: user,
		layout: layoutParam
	};
};

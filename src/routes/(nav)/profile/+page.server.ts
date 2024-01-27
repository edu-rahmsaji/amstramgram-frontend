import { getUser } from '$mock-db/user';
import { allowedLayoutParams, type LayoutParam } from '$types/profile';
import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ url }) => {
	/* const userResponse = await fetch(`http://localhost:4000/api/user/${id}`, { method: "GET" });
	const user: User = await userResponse.json(); */

	const layoutParam: LayoutParam = (url.searchParams.get('layout') ?? '') as LayoutParam;

	if (!allowedLayoutParams.includes(layoutParam)) {
		redirect(302, '/profile');
	}

	return {
		user: getUser(1),
		layout: layoutParam
	};
};

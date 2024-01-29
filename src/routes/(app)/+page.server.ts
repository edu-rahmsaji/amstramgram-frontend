import { PUBLIC_BACKEND_URL } from '$env/static/public';
import type { RawPost, Post } from '$models/Post';
import type { User } from '$models/User';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
	try {
		const postResponse = await fetch(`${PUBLIC_BACKEND_URL}/api/post`, { method: "GET" });
		const rawPosts: RawPost[] = await postResponse.json();

		const posts: Post[] = [];
		for (const rawPost of rawPosts) {
			const userResponse = await fetch(`${PUBLIC_BACKEND_URL}/api/user/${rawPost.user_id}`, { method: "GET" });
			const user: User = await userResponse.json();

			const post: Post = {
				id: rawPost.id,
				user: user,
				text: rawPost.text,
				imagePaths: rawPost.image_paths,
				createdAt: new Date(rawPost.created_at),
			}

			posts.push(post);
		}

		return {
			posts: posts
		};
	} catch (err) {
		console.error("An error occurred while fetching : " + (err as Error).message);
		return {
			posts: undefined
		}
	}
};

import type { Post, RawPost } from '../models/Post';
import type { User } from '../models/User';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
    const postResponse = await fetch("http://127.0.0.1:4000/api/posts", { method: "GET" });
    const rawPosts: RawPost[] = await postResponse.json();

	const posts: Post[] = [];
	for (const rawPost of rawPosts) {
		const userResponse = await fetch(`http://127.0.0.1:4000/api/user/${rawPost.creator_id}`, { method: "GET" });
		const user: User = await userResponse.json();

		const post: Post = {
			id: rawPost.id,
			creator: user,
			description: rawPost.description,
			image: rawPost.image,
			created_at: new Date(rawPost.created_at),
		}

		posts.push(post);
	}

	return {
		posts: posts,
	};
};
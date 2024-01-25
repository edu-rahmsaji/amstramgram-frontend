import type { Post, RawPost } from '../models/Post';
import type { User } from '../models/User';
import type { PageServerLoad } from './$types';

// When you don't have access to the database
/* const getUser = (): User => {
	return {
		id: 1,
		nickname: "novaotp",
		is_private: false,
		first_name: "Sajidur",
		last_name: "Rahman",
		email: "rahmansajidur30@gmail.com",
		created_at: new Date(),
		updated_at: new Date()
	}
}

const getPosts = (): Post[] => {
	return [
		{
			id: 1,
			creator: getUser(),
			description: "Look at my new image",
			image: "CampusEPTM_WallPaper21c_JPG100.jpeg",
			created_at: new Date()
		}
	]
} */

export const load: PageServerLoad = async () => {
    const postResponse = await fetch("http://localhost:4000/api/posts", { method: "GET" });
    const rawPosts: RawPost[] = await postResponse.json();

	const posts: Post[] = [];
	for (const rawPost of rawPosts) {
		const userResponse = await fetch(`http://localhost:4000/api/user/${rawPost.creator_id}`, { method: "GET" });
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

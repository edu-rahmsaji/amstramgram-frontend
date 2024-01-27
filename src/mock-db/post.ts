import type { Post } from '$models/Post';
import { getUser, getUsers } from './user';

const posts: Post[] = [
	{
		id: 1,
		creator: getUser(1),
		text: "i don't really know...",
		image_name: 'screen_v3.png',
		created_at: new Date()
	},
	{
		id: 2,
		creator: getUser(1),
		text: 'This is so funny !!!',
		image_name: 'screen_v2.png',
		created_at: new Date()
	},
	{
		id: 3,
		creator: getUser(2),
		text: 'Look at my new image',
		image_name: 'screen_v1.png',
		created_at: new Date()
	}
];

/**
 * Returns a list of mock posts.
 * @param id If provided, returns the mock posts matching the user id.
 */
export const getPosts = (id?: number): Post[] => {
	return id && id <= getUsers().length ? posts.filter((post) => post.creator.id === id) : posts;
};

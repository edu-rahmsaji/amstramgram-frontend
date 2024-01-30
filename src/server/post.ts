import { PUBLIC_BACKEND_URL } from "$env/static/public";
import type { Post, RawPost } from "$models/Post";
import type { User } from "$models/User";
import { getUser } from "./user";

export const getPosts = async (): Promise<Post[] | null> => {
    try {
        const postResponse = await fetch(`${PUBLIC_BACKEND_URL}/api/posts`, { method: "GET" });
		const rawPosts: RawPost[] = await postResponse.json();

        return await Promise.all(
            rawPosts.map(async (rawPost) => {
                const user = await getUser(rawPost.user_id);
                return transformRawPost(rawPost, user);
            })
        );
    } catch (err) {
        console.error(`An error occurred whilst trying to fetch all the posts : ${(err as Error).message}`);
        return null;
    }
}

export const getUserPosts = async (user: User): Promise<Post[] | null> => {
    try {
        const postResponse = await fetch(`${PUBLIC_BACKEND_URL}/api/user/${user.id}/posts`, { method: "GET" });
		const rawPosts: RawPost[] = await postResponse.json();

        return rawPosts.map(rawPost => transformRawPost(rawPost, user));
    } catch (err) {
        console.error(`An error occurred whilst trying to fetch a user's posts : ${(err as Error).message}`);
        return null;
    }
}

const transformRawPost = (rawPost: RawPost, user: User | null): Post => {
    return {
        id: rawPost.id,
        user: user,
        text: rawPost.text,
        imagePaths: JSON.parse(rawPost.image_paths),
        createdAt: new Date(rawPost.created_at),
    }
}
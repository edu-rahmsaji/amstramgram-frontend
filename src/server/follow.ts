import { PUBLIC_BACKEND_URL } from "$env/static/public";
import type { RawFollow } from "$models/Follow";
import type { User } from "$models/User";
import { getUser } from "./user";

export const getFollowers = async (id: number): Promise<User[] | null> => {
    try {
        const response = await fetch(`${PUBLIC_BACKEND_URL}/api/user/${id}/followers`, { method: "GET" });
        const rawFollows: RawFollow[] = await response.json();

        return await Promise.all(
            rawFollows.map(async (rawFollow) => {
                const transformed = await transformRawFollow(rawFollow);
                
                if (!transformed) {
                    throw new Error("Failed to fetch data about the user's followers");
                }

                const { follower } = transformed;

                if (!follower) {
                    throw new Error("Failed to fetch data about the follower");
                }

                return follower;
            })
        );
    } catch (err) {
        console.error(`An error occurred whilst trying to fetch a user's followers : ${(err as Error).message}`);
        return null;
    }
}

export const getFollowing = async (id: number): Promise<User[] | null> => {
    try {
        const response = await fetch(`${PUBLIC_BACKEND_URL}/api/user/${id}/following`, { method: "GET" });
        const rawFollows: RawFollow[] = await response.json();

        return await Promise.all(
            rawFollows.map(async (rawFollow) => {
                const transformed = await transformRawFollow(rawFollow);
                
                if (!transformed) {
                    throw new Error("Failed to fetch data about the accounts the user follows");
                }

                const { user } = transformed;

                if (!user) {
                    throw new Error("Failed to fetch data about the followed account");
                }

                return user;
            })
        );
    } catch (err) {
        console.error(`An error occurred whilst trying to fetch the accounts the user follows : ${(err as Error).message}`);
        return null;
    }
}

/**
 * Returns the user's follower count.
 * @param userId The user's id from whom to get the follower count.
 * @returns The follower count as a number, or `null` if an error occurred.
 */
export const getFollowerCount = async (userId: number): Promise<number | null> => {
    try {
        const response = await fetch(`${PUBLIC_BACKEND_URL}/api/user/${userId}/followers/count`, { method: "GET" });
        return await response.json();
    } catch (err) {
        console.error(`An error occurred whilst trying to fetch the user's follower count : ${(err as Error).message}`);
        return null;
    }
}

/**
 * Returns the user's followed count.
 * @param userId The user's id from whom to get the followed count.
 * @returns The followed count as a number, or `null` if an error occurred.
 */
export const getFollowedCount = async (userId: number): Promise<number | null> => {
    try {
        const response = await fetch(`${PUBLIC_BACKEND_URL}/api/user/${userId}/followed/count`, { method: "GET" });
        return await response.json();
    } catch (err) {
        console.error(`An error occurred whilst trying to fetch the user's followed count : ${(err as Error).message}`);
        return null;
    }
}

const transformRawFollow = async (rawFollow: RawFollow): Promise<{ user: User | null, follower: User | null } | null> => {
    try {
        const user = await getUser(rawFollow.followed_id);
        const follower = await getUser(rawFollow.follower_id);

        return { user, follower };
    } catch (err) {
        console.error(`An error occurred whilst trying to fetch a user's followers and the account the user follows : ${(err as Error).message}`);
        return null;
    }
}
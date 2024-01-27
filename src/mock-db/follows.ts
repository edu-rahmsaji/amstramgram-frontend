import type { RawFollow } from "$models/Follow"
import type { User } from "$models/User";
import { getUser } from "./user";

const rawFollows: RawFollow[] = [
    {
        id: 1,
        followed_user_id: 2,
        follower_user_id: 1,
    },
    {
        id: 2,
        followed_user_id: 3,
        follower_user_id: 1,
    },
    {
        id: 3,
        followed_user_id: 3,
        follower_user_id: 2,
    },
    {
        id: 4,
        followed_user_id: 1,
        follower_user_id: 3,
    }
];  

/**
 * Returns the list of users that follow a user.
 * @param id The id of the user from whom to get the list of users
 */
export const getFollowed = (id: number): User[] => {
    const followed: User[] = [];

    rawFollows.map(rawFollow => rawFollow.follower_user_id === id ? followed.push(getUser(id)) : null);

    return followed;
}

/**
 * Returns the list of users that the user is following.
 * @param id The id of the user from whom to get the list of users
 */
export const getFollowers = (id: number): User[] => {
    const followed: User[] = [];

    rawFollows.map(rawFollow => rawFollow.followed_user_id === id ? followed.push(getUser(id)) : null);

    return followed;
}
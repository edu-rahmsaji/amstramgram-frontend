import { PUBLIC_BACKEND_URL } from "$env/static/public";
import type { RawUser, User } from "$models/User";

export const getUser = async (id: number): Promise<User | null> => {
    try {
        const userResponse = await fetch(`${PUBLIC_BACKEND_URL}/api/user/${id}`, { method: "GET" });
        const user: RawUser = await userResponse.json();

        return transformRawUser(user);
    } catch (err) {
        console.error(`An error occurred whilst trying to fetch a user : ${(err as Error).message}`);
        return null;
    }
}

const transformRawUser = (rawUser: RawUser): User => {
    return {
        id: rawUser.id,
        nickname: rawUser.nickname,
        isPrivate: rawUser.is_private,
        firstName: rawUser.first_name,
        lastName: rawUser.last_name,
        email: rawUser.email,
        biography: rawUser.biography,
        createdAt: new Date(rawUser.created_at),
        updatedAt: new Date(rawUser.updated_at)
    }
}
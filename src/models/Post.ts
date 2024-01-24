import type { User } from "./User";

export interface RawPost {
    id: number;
    creator_id: number;
    description: string;
    image: string;
    created_at: Date;
    updated_at: Date;
}

export interface Post {
    id: number;
    creator: User;
    description: string;
    image: string;
    created_at: Date;
}
import type { User } from "./User";

export interface RawPost {
    id: number;
    creator_id: number;
    text: string;
    image_name: string;
    created_at: Date;
    updated_at: Date;
}

export interface Post {
    id: number;
    creator: User;
    text: string;
    image_name: string;
    created_at: Date;
}
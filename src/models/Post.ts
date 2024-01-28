import type { User } from './User';

export interface RawPost {
	id: number;
	user_id: number;
	text: string;
	image_paths: string[];
	created_at: string;
	updated_at: string;
}

export interface Post {
	id: number;
	user: User;
	text: string;
	imagePaths: string[];
	createdAt: Date;
}

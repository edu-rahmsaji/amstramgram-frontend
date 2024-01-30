import type { User } from './User';

export interface RawPost {
	id: number;
	user_id: number;
	text: string;
	/** A parsable array. */
	image_paths: string;
	created_at: string;
	updated_at: string;
}

export interface Post {
	id: number;
	user: User | null;
	text: string;
	imagePaths: string[];
	createdAt: Date;
}

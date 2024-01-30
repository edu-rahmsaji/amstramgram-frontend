export interface RawUser {
	id: number;
	nickname: string;
	is_private: boolean;
	first_name: string;
	last_name: string;
	email: string;
	biography: string;
	created_at: string;
	updated_at: string;
}

export interface User {
	id: number;
	nickname: string;
	isPrivate: boolean;
	firstName: string;
	lastName: string;
	email: string;
	biography: string;
	createdAt: Date;
	updatedAt: Date;
}

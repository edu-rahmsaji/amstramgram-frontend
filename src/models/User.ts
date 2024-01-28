export interface RawUser {
	id: number;
	nickname: string;
	is_private: boolean;
	first_name: string;
	last_name: string;
	email: string;
	biography: string;
	created_at: Date;
	updated_at: Date;
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

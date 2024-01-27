export interface User {
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

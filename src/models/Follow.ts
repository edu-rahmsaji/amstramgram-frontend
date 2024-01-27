import type { User } from './User';

export interface RawFollow {
	id: number;
	followed_user_id: number;
	follower_user_id: number;
}

export interface Follow {
	id: number;
	followed_user: User;
	follower_user: User;
}

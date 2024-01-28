import type { User } from './User';

export interface RawFollow {
	id: number;
	followed_id: number;
	follower_id: number;
}

export interface Follow {
	id: number;
	user: User;
	follower: User;
}

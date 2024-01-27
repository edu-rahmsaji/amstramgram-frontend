import type { User } from '$models/User';

/**
 * Returns a list of mock users.
 */
export const getUsers = (): User[] => {
	return [
		{
			id: 1,
			nickname: 'novaotp',
			is_private: false,
			first_name: 'Sajidur',
			last_name: 'Rahman',
			email: 'rahmansajidur30@gmail.com',
			biography:
				"I'm a little potato, wandering around like a tomato, moving like a carrot and smelling like an onion.",
			created_at: new Date(),
			updated_at: new Date()
		},
		{
			id: 2,
			nickname: 'endergastro',
			is_private: true,
			first_name: 'Leny',
			last_name: 'Bressoud',
			email: 'leny.bressoud@gmail.com',
			biography:
				"I'm a little potato, wandering around like a tomato, moving like a carrot and smelling like an onion.",
			created_at: new Date(),
			updated_at: new Date()
		},
		{
			id: 3,
			nickname: 'gabmuraz',
			is_private: false,
			first_name: 'Gabriel',
			last_name: 'Vannay',
			email: 'gabvannay@gmail.com',
			biography:
				"I'm a little potato, wandering around like a tomato, moving like a carrot and smelling like an onion.",
			created_at: new Date(),
			updated_at: new Date()
		}
	];
};

/**
 * Returns a mock user.
 * @param id If provided, returns the mock user matching the id.
 */
export const getUser = (id?: number): User => {
	const users = getUsers();

	return id && id <= users.length
		? users.find((user) => user.id === id)!
		: users.at(Math.floor(Math.random() * users.length))!;
};

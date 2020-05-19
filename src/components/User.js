import React from 'react';
import { useTasks } from './useTasks';

const Users = () => {
	const users = useTasks('users');

	return (
		<ul>
			{users.map((task) => {
				return <li key={task.id}>{task.name}</li>;
			})}
		</ul>
	);
};

export default Users;

import React from 'react';
import { useTasks } from './useTasks';

const TaskList = ({ taskName }) => {
	const tasks = useTasks(taskName);

	return (
		<ul>
			{tasks.map((task) => {
				return <li key={task.id}>{task.title}</li>;
			})}
		</ul>
	);
};

export default TaskList;

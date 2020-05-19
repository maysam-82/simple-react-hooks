import React from 'react';
import { useTasks } from './useTasks';

const TaskList = ({ taskName }) => {
	const tasks = useTasks(taskName);

	return (
		<div>
			{tasks.map((task) => {
				return <li key={task.id}>{task.title}</li>;
			})}
		</div>
	);
};

export default TaskList;

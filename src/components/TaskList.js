import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TaskList = ({ taskName }) => {
	const [tasks, setTasks] = useState([]);

	const fetchTasks = async (taskName) => {
		const response = await axios.get(
			`https://jsonplaceholder.typicode.com/${taskName}`
		);
		setTasks(response.data);
	};
	// By using of `useEffect` we are combining both `componentDidMount` and `componentDidUpdate` together.
	// By adding `[taskName]`  we are telling react that if value of this props is change the arrow function to be called and state to be updated; otherwise, the arrow function inside `useEffect` will not be called.
	useEffect(() => {
		fetchTasks(taskName);
	}, [taskName]);

	return <div>{tasks.length}</div>;
};

export default TaskList;

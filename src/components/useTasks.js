// We can reuse `useTasks` every where just by getting taskName argument

import { useState, useEffect } from 'react';
import axios from 'axios';
export const useTasks = (taskName) => {
	const [tasks, setTasks] = useState([]);

	const fetchTasks = async (taskName) => {
		const response = await axios.get(
			`https://jsonplaceholder.typicode.com/${taskName}`
		);
		setTasks(response.data);
	};
	// By using of `useEffect` we are combining both `componentDidMount` and `componentDidUpdate` together.
	// By adding `[taskName]`  we are telling react that if value of this props is change the arrow function to be called and state to be updated; otherwise, the arrow function inside `useEffect` will not be called.
	// If we do not use [] as a second argument, we will have an infinity loop.
	// If we only use and empty array [] or we use same value in array [2], arrow function will be called  one time only. Just like `componentDidMount`
	// If we have an object inside of an array like [{color:red}] , arrow function will be called for a second time.
	useEffect(() => {
		fetchTasks(taskName);
	}, [taskName]);
	return tasks;
};

import React, { useState } from 'react';

const App = () => {
	// `useState` will return two items. The first one is a current value of a piece of state and
	// the second one is a setter function which will update the value of first item. We can pass an initial value for that piece of state as well.
	const [taskName, setTaskName] = useState('posts');
	return (
		<div>
			<div>
				<button onClick={() => setTaskName('posts')}>Posts</button>
				<button onClick={() => setTaskName('todos')}>Todos</button>
			</div>
			{taskName}
		</div>
	);
};
export default App;

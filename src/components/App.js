import React, { Component } from 'react';

export default class App extends Component {
	state = {
		taskName: 'posts',
	};
	render() {
		return (
			<div>
				<div>
					<button onClick={() => this.setState({ taskName: 'posts' })}>
						Posts
					</button>
					<button onClick={() => this.setState({ taskName: 'todos' })}>
						Todos
					</button>
				</div>
				{this.state.taskName}
			</div>
		);
	}
}

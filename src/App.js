import React, { Component } from 'react'
import './App.css'
import Todos from './Todos'
import AddForm from './AddForm'

class App extends Component {
	state = {
		todos: [
			{ id: 1, content: 'Attend Meeting at 4' },
			{ id: 2, content: 'Exercise for 15 minutes' },
			{ id: 3, content: 'Drink Water' },
		],
	}
	deleteTodo = (id) => {
		const todos = this.state.todos.filter((todo) => {
			return todo.id !== id
		})
		this.setState({
			todos,
		})
	}
	addTodo = (todo) => {
		todo.id = Math.random()
		let todos = [...this.state.todos, todo]
		this.setState({
			todos,
		})
	}
	render() {
		return (
			<div className="todo-app">
				<h1 className="center grey-text">KEEP NOTES</h1>
				<div className="app_body">
					<AddForm addTodo={this.addTodo} />
					<Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
					<footer className='footer'>
						© 2020 Made by <a href="instagram.com/rishabh_kumarr">Rishabh</a>,
						LLC. All rights reserved.
					</footer>
				</div>
			</div>
		)
	}
}

export default App

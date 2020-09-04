import React, { Component } from 'react'
import './Addform.css'

class AddForm extends Component {
	state = {
		content: '',
	}
	handleChange = (e) => {
		this.setState({
			content: e.target.value,
		})
	}
	handleSubmit = (e) => {
		e.preventDefault()
		this.props.addTodo(this.state)
		this.setState({
			content: '',
		})
	}
	render() {
		return (
			<div className='thisform'>
				<form onSubmit={this.handleSubmit} className='this-form'>
					<label> ADD NOTE</label>
					<input
						type="text"
						onChange={this.handleChange}
						value={this.state.content}
					/>
				</form>
			</div>
		)
	}
}

export default AddForm

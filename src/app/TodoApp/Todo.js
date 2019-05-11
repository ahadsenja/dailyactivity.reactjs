import React from 'react'

import TodoForm from './TodoForm'
import TodoList from './TodoList'


class Todo extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            time: '',
            activity: '',
            todos: [],
            mode: 'add'
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    addTodo = (event) => {
        event.preventDefault()
        const { todos } = this.state
        const todo = {
            time: this.state.time,
            activity: this.state.activity
        }
        todos.push(todo)
        this.setState({ todos })

        this.resetForm()
    }

    deleteTodo = (i) => {
        const { todos } = this.state
        todos.splice(i, 1)
        this.setState({
            todos
        })
    }

    resetForm = () => {
        this.setState({
            time: '',
            activity: ''
        })
    }

    selectTodo = (todo) => {
        this.setState({
            time: todo.time,
            activity: todo.activity,
            mode: 'udpate'
        })
    }

    render() {
        return (
            <div className='container'>
                <TodoForm 
                    dataState={this.state}
                    addTodo={this.addTodo}
                    handleChange={this.handleChange}
                />
                <TodoList 
                    dataState={this.state}
                    deleteTodo={this.deleteTodo}
                    selectTodo={this.selectTodo}
                />
            </div>
        )
    }
}

export default Todo
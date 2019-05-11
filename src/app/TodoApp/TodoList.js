import React from 'react'

import './todo.css'


class TodoList extends React.Component {

    render() {
        const { todos } = this.props.dataState

        return (
            <div>
                <div className='row'>
                    <div className='col-sm-8 offset-2'>
                        <table className='table table-hover'>
                            <thead>
                                <tr style={{height: 40}}>
                                    <th style={{width: 140}}>Time</th>
                                    <th style={{width: 500}}>Activity</th>
                                    <th style={{width: 180}}>Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    todos.map((todo, i) =>
                                        <tr key={i}>
                                            <td>{todo.time}</td>
                                            <td>{todo.activity}</td>
                                            <td>
                                                <button className='btn btn-warning' onClick={this.props.selectTodo.bind(this, todo)}>Edit</button>

                                                <span className='btn-todo-list-action'></span>

                                                <button className='btn btn-danger' onClick={this.props.deleteTodo.bind(this, i)}>Delete</button>
                                            </td>                                            
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default TodoList
import React from 'react'

import './todo.css'


class TodoForm extends React.Component {

    render() {
        const { time, activity } = this.props.dataState

        return (
            <div>
                <div align='center'>
                    <br/>
                    <h3><b>Daily activity app</b></h3>
                </div>
                <div className='row'>
                    <div className='col-sm-8 offset-3'>
                        <form ref='formulir' className='form-inline'>
                            <div className='form-group mb-2'>
                                <label className='sr-only'>Time</label>
                                <input type='text' name='time' className='form-control' placeholder='Time' value={time} onChange={this.props.handleChange} />
                            </div>
            
                            <div className='form-group mx-sm-3 mb-2'>
                                <label className='sr-only'>Activity</label>
                                <input type='text' name='activity' className='form-control' placeholder='Your activity' value={activity} onChange={this.props.handleChange} />
                            </div>
            
                            <button className='btn btn-outline-secondary mb-2'>Cancel</button>

                            <span className='btn-todo-form-action'></span>

                            <button className='btn btn-primary mb-2' type='submit' onClick={ this.props.addTodo} mode='add'>Save</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default TodoForm
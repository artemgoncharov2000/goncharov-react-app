import React from 'react'
import './Task.css'

class Task extends React.Component {

    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        let updatedTask = {...this.props.task}
        let completed = this.props.task.completed
        updatedTask.completed = !completed

        this.props.setCompleted(updatedTask, this.props.index)
    }

    render() {
        return (
            <div className="container">
                <div className="header">
                    <div className='id'>{this.props.task.id}</div>
                    <div className='name'>{this.props.task.name}</div>
                </div>
                <div className="body">
                    <div className='description'>{this.props.task.description}</div>
                </div>
                <div className="footer">
                    <div className='status'> Status: {this.props.task.completed ? 'completed' : 'not completed'}</div>
                    <button className='done-button' onClick={this.handleClick}>Done!</button>
                </div>
            </div>
        )
    }

}

export default Task;
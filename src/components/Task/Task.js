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
                    <p className="description">{this.props.task.description}</p>
                </div>
                <div className="footer">
                    <div className='status'>{this.props.task.completed ? 'Completed' : 'Not completed'}</div>
                    <button className='doneButton' onClick={this.handleClick}>Done!</button>
                </div>
            </div>
        )
    }

}

export default Task;
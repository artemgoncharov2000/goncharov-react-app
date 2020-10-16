import React from 'react'
import './Task.css'
class Task extends React.Component {

    printTaskInfo = () => {
        console.log("Task " + this.props.id + " competed status = " + this.props.completed)
    }

    render() {
        return (
            <div className="container">
                <div className="header">
                    <div className='id'>{this.props.id}</div>
                    <div className='name'>{this.props.name}</div>
                </div>
                <div className="body">
                    <div className='description'>{this.props.description}</div>
                </div>
                <div className="footer">
                    <div className='status'> Status: {this.props.completed ? 'completed' : 'not completed'}</div>
                    <button className='done-button' onClick={this.printTaskInfo}>Done!</button>
                </div>
            </div>
        )
    }

}

export default Task;
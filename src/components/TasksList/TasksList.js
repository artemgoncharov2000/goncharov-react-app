import React from 'react'
import Task from "../Task/Task";
import './TasksList.css'
import TaskAdd from "../TaskAdd/TaskAdd";
class TasksList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        }
        this.setCompleted = this.setCompleted.bind(this)
        this.addNewTask = this.addNewTask.bind(this)
    }

    setCompleted(updatedTask, index) {
        let updatedTasks = [...this.state.tasks]
        updatedTasks[index] = updatedTask

        this.setState(() => ({
            tasks: updatedTasks
        }))
    }

    addNewTask(newTask) {
        this.setState(prevState => ({
            tasks: [...prevState.tasks, newTask]
        }))
    }

    render() {
        return (
            <div className="tasks-container">
                {this.state.tasks.map((it, i) => (
                    <Task
                        className="task"
                        setCompleted={this.setCompleted}
                        key={i}
                        index={i}
                        task={it}
                    />
                ))}
                <TaskAdd addNewTask={this.addNewTask} tasks={this.state.tasks}/>
            </div>

        )
    }
}

export default TasksList
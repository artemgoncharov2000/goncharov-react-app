import React from 'react'
import {Task} from "../Task/Task"
import {TaskAdd} from "../TaskAdd/TaskAdd"
import classNames from 'classnames/bind'
import styles from './TasksList.module.scss'
import { connect } from "react-redux";

const cx = classNames.bind(styles)

// class TasksList extends React.Component {
//
//     constructor(props) {
//         super(props)
//         this.state = {
//             tasks: []
//         }
//         this.setCompleted = this.setCompleted.bind(this)
//         this.addNewTask = this.addNewTask.bind(this)
//     }
//
//     setCompleted(updatedTask, index) {
//         let updatedTasks = [...this.state.tasks]
//         updatedTasks[index] = updatedTask
//
//         this.setState(() => ({
//             tasks: updatedTasks
//         }))
//     }
//
//     addNewTask(newTask) {
//         this.setState(prevState => ({
//             tasks: [...prevState.tasks, newTask]
//         }))
//     }
//
//     render() {
//         return (
//             <div className={cx('container')}>
//                 {this.state.tasks.map((it, i) => (
//                     <Task
//                         setCompleted={this.setCompleted}
//                         key={i}
//                         index={i}
//                         task={it}
//                     />
//                 ))}
//                 <TaskAdd addNewTask={this.addNewTask} tasks={this.state.tasks}/>
//             </div>
//
//         )
//     }
// }

const mapStateToProps = (state) => ({
    tasks: state.tasks.tasks
})

const TasksListComponent = ({tasks}) => {

    return (
        <div className={cx('container')}>
            {
                tasks.map((it, i) => (
                <Task
                    key={i}
                />
            ))}
            <TaskAdd/>
        </div>
    )
}

//export default TasksList

export const TasksList = connect(mapStateToProps)(TasksListComponent)
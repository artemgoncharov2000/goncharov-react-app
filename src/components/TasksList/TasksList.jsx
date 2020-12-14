import React from 'react'
import {Task} from "../Task/Task"
import {TaskAdd} from "../TaskAdd/TaskAdd"
import classNames from 'classnames/bind'
import styles from './TasksList.module.scss'
import { connect } from "react-redux";

const cx = classNames.bind(styles)

const mapStateToProps = (state) => ({
    tasksList: state.tasksList.tasksList
})

const TasksListComponent = ({tasksList}) => {
    return (
        <div className={cx('container')}>
            {
                tasksList.map((task, i) => (
                <Task
                    key={i}
                    task={task}
                />
            ))}
            <TaskAdd/>
        </div>
    )
}

export const TasksList = connect(mapStateToProps)(TasksListComponent)
import React from 'react'
import classNames from 'classnames/bind'
import styles from './Task.module.scss'
import {completeTask} from "../../../actions/actions";
import {connect} from "react-redux";

const cx = classNames.bind(styles)

const mapDispatchToProps = (dispatch) => ({
    dispatchOnStatusChange: (taskId) => dispatch(completeTask(taskId))
})

const TaskComponent = ({
                           task,
                           dispatchOnStatusChange
                       }) => {
    const onStatusChange = (e) => {
        e.preventDefault()
        dispatchOnStatusChange(task.id)
    }

    return (
        <div className={cx('container')}>
            <div className={cx('header')}>
                {/*<div className={cx('id')}>{task.id + 1}</div>*/}
                <div className={cx('name')}>{task.name}</div>
            </div>
            <div className={cx('body')}>
                <p className={cx('description')}>{task.description}</p>
            </div>
            <div className={cx('footer')}>
                {/*<div className={cx('status')}>{task.completed ? 'Completed' : 'Not completed'}</div>*/}
                <button className={cx('doneButton')} onClick={onStatusChange}>Done!</button>
            </div>
        </div>
    )

}

export const Task = connect(null, mapDispatchToProps)(TaskComponent)
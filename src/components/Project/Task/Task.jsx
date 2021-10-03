import React from 'react'
import classNames from 'classnames/bind'
import styles from './Task.module.scss'
import {connect} from "react-redux";

const cx = classNames.bind(styles)

const Task = ({task}) => {

    return (
        <div className={cx('container')}>
            <div className={cx('header')}>
                <div className={cx('name')}>{task.title}</div>
            </div>
            <div className={cx('body')}>
                <p className={cx('description')}>{task.description}</p>
            </div>
            <div className={cx('footer')}>
                <button className={cx('doneButton')} >Done!</button>
            </div>
        </div>
    )

}

export default Task;
import React from 'react'
import classNames from 'classnames/bind'
import styles from './Task.module.scss'

const cx = classNames.bind(styles)

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
            <div className={cx('container')}>
                <div className={cx('header')}>
                    <div className={cx('id')}>{this.props.task.id}</div>
                    <div className={cx('name')}>{this.props.task.name}</div>
                </div>
                <div className={cx('body')}>
                    <p className={cx('description')}>{this.props.task.description}</p>
                </div>
                <div className={cx('footer')}>
                    <div className={cx('status')}>{this.props.task.completed ? 'Completed' : 'Not completed'}</div>
                    <button className={cx('doneButton')} onClick={this.handleClick}>Done!</button>
                </div>
            </div>
        )
    }

}

export default Task;
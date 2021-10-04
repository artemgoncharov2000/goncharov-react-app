import React from 'react'
import classNames from 'classnames/bind'
import styles from './Task.module.scss'
import Checkbox from '../../../icons/checkbox.svg'
import EmptyCheckbox from '../../../icons/empty-checkbox.svg';
const cx = classNames.bind(styles);

const Task = ({task}) => {

    return (
        <div className={cx('container')}>
            <img src={ task.completed ? Checkbox : EmptyCheckbox } width={25} height={25} />
            <div className={cx('title')}>{task.title}</div>
        </div>
    )
}

export default Task;
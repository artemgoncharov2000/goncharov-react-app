import React, {useState} from 'react'
import classNames from 'classnames/bind'
import styles from './TaskAdd.module.scss'
import { connect } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
const cx = classNames.bind(styles)


const mapDispatchToProps = (dispatch) => ({
    dispatchOnAddNewTask: (newTask) => dispatch(createTask(newTask))
})


const TaskAddComponent = ({dispatchOnAddNewTask, projectId, tasksSize}) => {
    uuidv4()
    const [task, setTask] = useState({
        id: uuidv4(),
        name: '',
        description: '',
        completed: false,
        projectId: projectId,
    })

    const onNameChange = (e) => {
        e.persist()
        setTask(prevTask => ({
            ...prevTask,
            name: e.target.value
        }))
    }

    const onDescriptionChange = (e) => {
        e.persist()
        setTask(prevTask => ({
            ...prevTask,
            description: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
        setTask(prevTask => ({
            ...prevTask,
            id: uuidv4()
        }))
        dispatchOnAddNewTask(task)
        setTask(prevTask => ({
            ...prevTask,
            name: '',
            description: ''
        }))
    }

    return (
        <div className={cx('container')}>
            <form  className={cx('createNewTask')} onSubmit={onSubmit}>
                <div className={cx('header')}>
                    <input
                        className={cx('nameInput')}
                        value={task.name}
                        placeholder="Enter the name of your task"
                        onChange={onNameChange}
                        type="text"
                    />
                </div>
                <div className={cx('body')}>
                        <textarea
                            className={cx('textArea')}
                            placeholder="Enter the description of your task"
                            value={task.description}
                            onChange={onDescriptionChange}
                        />
                </div>
                <div className={cx('footer')}>
                    <button className={cx('addButton')} type="submit">Add</button>
                </div>

            </form>
        </div>
    )
}

export const TaskAdd = connect(null, mapDispatchToProps)(TaskAddComponent)
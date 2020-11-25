import React, {useState} from 'react'
import classNames from 'classnames/bind'
import styles from './TaskAdd.module.scss'
import { addNewTask } from "../../actions/newTask";
import { connect } from "react-redux";


const cx = classNames.bind(styles)

const mapStateToProps = (state) => ({
    tasksList: state.tasksList.tasksList
})

const mapDispatchToProps = (dispatch) => ({
    dispatchOnAddNewTask: (newTask) => dispatch(addNewTask(newTask))
})


const TaskAddComponent = ({tasksList, dispatchOnAddNewTask}) => {

    const [task, setTask] = useState({
        id: 0,
        name: '',
        description: '',
        completed: false
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
            id: tasksList.length + 1
        }))
        dispatchOnAddNewTask(task)
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

export const TaskAdd = connect(mapStateToProps, mapDispatchToProps)(TaskAddComponent)
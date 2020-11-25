import React, {useState} from 'react'
import classNames from 'classnames/bind'
import styles from './TaskAdd.module.scss'
import { addNewTask } from "../../actions/newTask";
import { connect } from "react-redux";


const cx = classNames.bind(styles)

// class TaskAdd extends React.Component {
//
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: '',
//             description: ''
//         }
//
//         this.handleNameChange = this.handleNameChange.bind(this)
//         this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
//         this.handleSubmit = this.handleSubmit.bind(this)
//     }
//
//     handleNameChange(event) {
//         const val = event.target.value
//         this.setState(() => ({
//             name: val
//         }))
//     }
//
//     handleDescriptionChange(event) {
//         const val = event.target.value
//         this.setState(() => ({
//             description: val
//         }))
//     }
//
//     handleSubmit(event) {
//         event.preventDefault()
//         useDispatch(addNewTask(
//             {
//                 id: this.props.tasks.length + 1,
//                 name: this.state.name,
//                 description: this.state.description,
//                 completed: false
//             }
//         ))
//         // this.props.addNewTask({
//         //     id: this.props.tasks.length + 1,
//         //     name: this.state.name,
//         //     description: this.state.description,
//         //     completed: false
//         // })
//         // this.setState(() => ({
//         //     name: '',
//         //     description: ''
//         // }))
//     }
//
//     render() {
//         return (

//         )
//     }
//
// }


//export default TaskAdd;

const mapStateToProps = (state) => ({
    tasks: state.tasks.tasks
})

const mapDispatchToProps = (dispatch) => ({
    dispatchOnAddNewTask: (newTask) => dispatch(addNewTask(newTask))
})


const TaskAddComponent = ({tasks, dispatchOnAddNewTask}) => {

    const [task, setTask] = useState({
        id: tasks.length,
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
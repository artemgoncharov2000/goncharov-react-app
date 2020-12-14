import React from 'react'
import classNames from 'classnames/bind'
import styles from './TaskAdd.module.scss'

const cx = classNames.bind(styles)

class TaskAdd extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: ''
        }

        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleNameChange(event) {
        const val = event.target.value
        this.setState(() => ({
            name: val
        }))
    }

    handleDescriptionChange(event) {
        const val = event.target.value
        this.setState(() => ({
            description: val
        }))
    }

    handleSubmit(event) {
        event.preventDefault()
        this.props.addNewTask({
            id: this.props.tasks.length + 1,
            name: this.state.name,
            description: this.state.description,
            completed: false
        })
        this.setState(() => ({
            name: '',
            description: ''
        }))
    }

    render() {
        return (
            <div className={cx('container')}>
                <form  className={cx('createNewTask')} onSubmit={this.handleSubmit}>
                    <div className={cx('header')}>
                            <input
                                className={cx('nameInput')}
                                value={this.state.name}
                                placeholder="Enter the name of your task"
                                onChange={this.handleNameChange}
                                type="text"
                            />
                    </div>
                    <div className={cx('body')}>
                        <textarea
                            className={cx('textArea')}
                            placeholder="Enter the description of your task"
                            value={this.state.description}
                            onChange={this.handleDescriptionChange}
                        />
                    </div>
                    <div className={cx('footer')}>
                        <button className={cx('addButton')} type="submit">Add</button>
                    </div>

                </form>
            </div>
        )
    }

}

export default TaskAdd;
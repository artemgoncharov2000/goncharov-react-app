import React, {useState} from 'react'
import classNames from 'classnames/bind'
import styles from './TaskAdd.module.scss'

const cx = classNames.bind(styles)

const CreateTask = ({handleCreateTask}) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const onTitleChange = (e) => {
        setTitle(e.target.value);
    }

    const onDescriptionChange = (e) => {
        setDescription(e.target.value);
    }

    const onCreate = () => {
        const task = {
            id: title.replace(' ', '_'),
            title,
            description,
            date_created: new Date(),
            priority: 0,
            completed: false,
        }

        handleCreateTask(task);
    }

    return (
        <div className={cx('container')}>
            <div className={cx('header')}>
                <input
                    className={cx('nameInput')}
                    value={title}
                    placeholder="Enter the name of your task"
                    onChange={onTitleChange}
                    type="text"
                />
            </div>
            <div className={cx('body')}>
                <textarea
                    className={cx('textArea')}
                    placeholder="Enter the description of your task"
                    value={description}
                    onChange={onDescriptionChange}
                />
            </div>
            <div className={cx('footer')}>
                <button className={cx('addButton')} onClick={onCreate}>Add</button>
            </div>
        </div>
    )
}

export default CreateTask;
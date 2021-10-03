import React, {useState} from "react";
import classNames from 'classnames/bind';
import styles from './ProjectAdd.module.scss';
import {useDispatch} from "react-redux";
import {createProject} from "../../../modules/projects/actions";
const cx = classNames.bind(styles);

const CreateProject = () => {

    const [title, setTitle] = useState('');
    const dispatch = useDispatch();

    const createId = (title) => {
        return title.replace(' ', '_');
    }

    const onChangeTitle = (e) => {
        setTitle(e.target.value);
    }

    const onCreate = () => {
        const project = {
            id: createId(title),
            title,
            date_created: new Date(),
            tasks: [],
        }
        dispatch(createProject(project));
    };

    return (
        <div className={cx('container')}>
            <input
                className={cx('nameInput')}
                value={title}
                placeholder={'Project name'}
                onChange={onChangeTitle}
                type='text'
            />
            <button className={cx('createButton')} onClick={onCreate}>Create</button>
        </div>
    );
};

export default CreateProject;
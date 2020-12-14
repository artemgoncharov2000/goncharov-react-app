import React, {useState} from "react";
import classNames from 'classnames/bind';
import styles from './ProjectAdd.module.scss';
import {createProject} from "../../../actions/actions";
import {connect} from "react-redux";
import { v4 as uuidv4 } from 'uuid';
const cx = classNames.bind(styles);

const mapDispatchToProps = (dispatch) => ({
    dispatchOnAddNewProject: (newProject) => dispatch(createProject(newProject))
});

const ProjectAddComponent = ({dispatchOnAddNewProject, projectsSize}) => {
    uuidv4()
    const [project, setProject] = useState({
        id: uuidv4(),
        name: '',
    });

    const onNameChange = (e) => {
        e.persist()
        setProject(prevProj => ({
            ...prevProj,
            name: e.target.value
        }))
    };

    const onSubmit = (e) => {
        e.preventDefault();
        setProject(prevProj => ({
            ...prevProj,
            id: uuidv4(),
        }))
        dispatchOnAddNewProject(project)
        setProject(prevState => ({
            ...prevState,
            name: ''
        }))
    };



    return (
        <div className={cx('container')}>
            <form onSubmit={onSubmit}>
                <input
                    className={cx('nameInput')}
                    value={project.name}
                    placeholder={'Project name'}
                    onChange={onNameChange}
                    type='text'
                />
                <button className={cx('createButton')} type={'submit'}>Create</button>
            </form>
        </div>
    );
};

export const ProjectAdd = connect(null, mapDispatchToProps)(ProjectAddComponent);
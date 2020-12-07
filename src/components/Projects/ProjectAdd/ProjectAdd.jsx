import React, {useState} from "react";
import classNames from 'classnames/bind';
import styles from './ProjectAdd.module.scss';
import {createProject} from "../../../actions/actions";
import {connect} from "react-redux";

const cx = classNames.bind(styles);

const mapDispatchToProps = (dispatch) => ({
    dispatchOnAddNewProject: (newProject) => dispatch(createProject(newProject))
});

const ProjectAddComponent = ({dispatchOnAddNewProject}) => {

    // const ID = function () {
    //     // Math.random should be unique because of its seeding algorithm.
    //     // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    //     // after the decimal.
    //     return '_' + Math.random().toString(36).substr(2, 9);
    // };

    const [project, setProject] = useState({
        id: Date.now(),
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
        dispatchOnAddNewProject(project)
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
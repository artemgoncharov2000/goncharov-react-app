import React, {useState} from 'react';
import {Task} from "./Task/Task";
import {TaskAdd} from "./TaskAdd/TaskAdd";
import classNames from 'classnames/bind';
import styles from './Tasks.module.scss';
import {connect, useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {selectCurrentProject} from "../../modules/currentProject/selectors";

const cx = classNames.bind(styles);

const Project = () => {
    const project = useSelector(selectCurrentProject);
    const dispatch = useDispatch();

    const onBack = () => {
        dispatch(selectCurrentProject(null));
    }

    return (
        <div className={cx('container')}>
            <div className={cx('header')}>
                <Link to={'/projects'}>
                    <a onClick={onBack}>
                        Back
                    </a>
                </Link>
                <h3>ProjectName</h3>
                <div>{project.title}</div>
            </div>
            <div className={cx('body')}>
                {
                    project?.tasks.map((task, i) => (
                        <Task
                            key={i}
                            task={task}
                        />
                    ))
                }
                {/*<TaskAdd*/}
                {/*    tasksSize={tasks.length}*/}
                {/*    projectId={match.params.projectId}*/}
                {/*/>*/}
            </div>
        </div>
    )
};

export default Project;
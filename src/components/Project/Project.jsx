import React, {useState} from 'react';
import Task from "./Task/Task";
import CreateTask from "./TaskAdd/TaskAdd";
import classNames from 'classnames/bind';
import styles from './Tasks.module.scss';
import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom";
import {createTask} from "../../modules/projects/actions";
import {useParams} from 'react-router-dom';

const cx = classNames.bind(styles);

const Project = () => {
    const { projectId } = useParams();

    const project = useSelector((state) => state.projects.byId[projectId] ?? null);
    const dispatch = useDispatch();


    const handleCreateTask = (task) => {
        dispatch(createTask(task, project.id));
    }

    return (
        <div className={cx('container')}>
            <div className={cx('header')}>
                <Link to={'/projects'}>
                    <a>
                        Back
                    </a>
                </Link>
                <h3>{project.title}</h3>
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
                <CreateTask handleCreateTask={handleCreateTask}/>
            </div>
        </div>
    )
};

export default Project;
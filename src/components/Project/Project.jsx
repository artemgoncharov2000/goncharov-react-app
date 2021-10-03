import React, {useState} from 'react';
import {Task} from "./Task/Task";
import {TaskAdd} from "./TaskAdd/TaskAdd";
import classNames from 'classnames/bind';
import styles from './Tasks.module.scss';
import {connect} from "react-redux";
import {Link} from "react-router-dom";

const cx = classNames.bind(styles);

const mapStateToProps = (state) => {
    return ({
        tasks: tasks(state)
    });

}
const Project = ({match, tasks}) => {
    return (
        <div className={cx('container')}>
            <div className={cx('header')}>
                <Link to={'/projects'}>
                    <a>
                        Back
                    </a>
                </Link>
                <h3>ProjectName</h3>
                <div></div>
            </div>
            <div className={cx('body')}>
                {
                    tasks.filter(task => task.projectId === match.params.projectId).map((task, i) => (
                        <Task
                            key={i}
                            task={task}
                        />
                    ))
                }
                <TaskAdd
                    tasksSize={tasks.length}
                    projectId={match.params.projectId}
                />
            </div>

        </div>
    )
};

export default Project;
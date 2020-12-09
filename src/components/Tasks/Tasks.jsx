import React, {useState} from 'react';
import {Task} from "./Task/Task";
import {TaskAdd} from "./TaskAdd/TaskAdd";
import classNames from 'classnames/bind';
import styles from './Tasks.module.scss';
import {connect} from "react-redux";
import {tasks} from "../../selectors/selectors";
import {Link} from "react-router-dom";

const cx = classNames.bind(styles);

const mapStateToProps = (state) => {
   // console.log(state)
    return ({
        tasks: tasks(state)
    });

}
const TasksListComponent = ({match, tasks}) => {
    //console.log(match)
    //console.log(tasks)
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
            {/*<div className={cx('sideBar')}>*/}
            {/*</div>*/}
            <div className={cx('body')}>
                {
                    tasks.map((task, i) => (
                        <Task
                            key={i}
                            task={task}

                        />
                    ))
                }
                <TaskAdd/>
            </div>

        </div>
    )
};

export const Tasks = connect(mapStateToProps)(TasksListComponent);
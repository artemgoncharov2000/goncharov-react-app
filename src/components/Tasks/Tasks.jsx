import React, {useState} from 'react';
import {Task} from "./Task/Task";
import {TaskAdd} from "./TaskAdd/TaskAdd";
import classNames from 'classnames/bind';
import styles from './Tasks.module.scss';
import {connect} from "react-redux";
import {tasks} from "../../selectors/selectors";

const cx = classNames.bind(styles);

const mapStateToProps = (state) => {
   // console.log(state)
    return ({
        tasks: tasks(state)
    });

}
const TasksListComponent = ({match, tasks}) => {

    return (
        <div className={cx('container')}>
            <div className={cx('header')}>
                <button>Back</button>
                <h3 className={cx('projectName')}>ProjectName</h3>
            </div>
            <div className={cx('sideBar')}>
            </div>
            <div className={cx('body')}>
                {
                    tasks.map((task, i) => (
                        <Task
                            key={i}
                            task={task}

                        />
                    ))
                }
                <TaskAdd projectId={match.params.projectId}/>
            </div>

        </div>
    )
};

export const Tasks = connect(mapStateToProps)(TasksListComponent);
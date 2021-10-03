import React, { useEffect } from "react";
import classNames from 'classnames/bind';
import styles from './Projects.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import CreateProject from './ProjectAdd/CreateProject';
import {Link} from "react-router-dom";
import {loadProjects} from "../../modules/projects/actions";
import {selectIsLoaded, selectProjects} from "../../modules/projects/selectors";
import map from 'lodash/map';
import {setCurrentProject} from "../../modules/currentProject/actions";

const cx = classNames.bind(styles);

const Projects = () => {
    const projects = useSelector(selectProjects);
    const isLoaded = useSelector(selectIsLoaded);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!isLoaded) {
            dispatch(loadProjects());
        }
    }, [])

    const onSelectProject = (projectId) => {
        dispatch(setCurrentProject(projects[projectId]));
    }

    return (
        <div className={cx('container')}>
            <div className={cx('header')}>
                <h3>TheBestToDoList</h3>
            </div>
            <div className={cx('body')}>
                {
                    map(projects, (project, i) => {
                        return(
                        <div key={i} className={cx('projectPreview')}>
                            <Link to={`/projects/${project.id}`}>
                                <a onClick={() => onSelectProject(project.id)}>
                                    {project.title}
                                </a>
                            </Link>
                        </div>
                    )})
                }
                <CreateProject />
            </div>
        </div>
    )
};

export default Projects;
import React, {useEffect, useReducer} from "react";
import classNames from 'classnames/bind';
import styles from './Projects.module.scss';
import {connect, useDispatch, useSelector} from 'react-redux';
// import {ProjectAdd} from './ProjectAdd/ProjectAdd';
import {Link} from "react-router-dom";
import {loadProjects} from "../../modules/projects/actions";
import {selectProjects} from "../../modules/projects/selectors";
import map from 'lodash/map';

const cx = classNames.bind(styles);



const Projects = () => {
    const projects = useSelector(selectProjects);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadProjects());
    }, [])

    console.log('projects', projects);
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
                                <a>
                                    {project.title}
                                </a>
                            </Link>
                        </div>
                    )})
                }
                {/*<ProjectAdd projectsSize={projects.length}/>*/}
            </div>
        </div>
    )
};

export default Projects;
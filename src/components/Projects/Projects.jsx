import React from "react";
import classNames from 'classnames/bind';
import styles from './Projects.module.scss';
import {connect} from 'react-redux';
import {ProjectAdd} from './ProjectAdd/ProjectAdd';
import {Link} from "react-router-dom";
import {projects} from "../../selectors/selectors";

const cx = classNames.bind(styles);

const mapStateToProps = (state) => ({
    projects: projects(state)
});

const ProjectsComponent = ({projects}) => {
    console.log(projects)
    return (
        <div className={cx('container')}>
            <div className={cx('header')}>
                <h3>TheBestToDoList</h3>
            </div>
            <div className={cx('body')}>
                {
                    projects.map((project, i) => {
                        console.log()
                        return(
                        <div key={i} className={cx('projectPreview')}>
                            <Link to={`/projects/${project.id}`}>
                                <a>
                                    {project.name}
                                </a>
                            </Link>
                        </div>
                    )})
                }
                <ProjectAdd/>
            </div>
        </div>
    )
};

export const Projects = connect(mapStateToProps)(ProjectsComponent);
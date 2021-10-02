import {CREATE_PROJECT, DELETE_PROJECT, LOAD_PROJECTS_SUCCESS} from "./actions";
import keyBy from 'lodash/keyBy';

const initialState = null;

export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_PROJECTS_SUCCESS: {
            const { projects } = action;
            const projectsByKey = keyBy(projects, 'id');
            return {
                projects: projectsByKey,
            }
        }
        case CREATE_PROJECT: {
            const { project, id } = action;
            const projects = {...state.projects};
            projects[id] = project;

            return {
                ...state,
                projects: projects,
            }
        }
        case DELETE_PROJECT: {
            const { id } = action;
            const projects = {...state.projects};
            projects[id] = undefined;

            return {
                ...state,
                projects: projects
            }
        }
        default:
            return state;
    }
}
import {types as t} from "./actions";
import keyBy from 'lodash/keyBy';

const initialState = null;

export default (state = initialState, action) => {
    switch (action.type) {
        case t.LOAD_PROJECTS_SUCCESS: {
            const { projects } = action;
            const projectsByKey = keyBy(projects, 'id');
            return {
                projects: projectsByKey,
            }
        }
        case t.LOAD_PROJECTS_FAILURE: {
            const { error } = action;
            console.log('Failed to load');
            console.log('Reason: ', action.error);
            return state;
        }
        case t.CREATE_PROJECT: {
            const { project, id } = action;
            const projects = {...state.projects};
            projects[id] = project;

            return {
                ...state,
                projects: projects,
            }
        }
        case t.DELETE_PROJECT: {
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
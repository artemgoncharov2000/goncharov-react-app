import {types as t} from "./actions";
import keyBy from 'lodash/keyBy';

const initialState = {
    byId: null,
    isLoaded: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case t.LOAD_PROJECTS_SUCCESS: {
            const { projects } = action;

            return {
                ...state,
                byId: keyBy(projects, 'id'),
                isLoaded: true,
            };
        }
        case t.LOAD_PROJECTS_FAILURE: {
            const { error } = action;
            console.log('Failed to load');
            console.log('Reason: ', action.error);
            return state;
        }
        case t.CREATE_PROJECT: {
            const { project } = action;
            const projects = {...state.byId};
            projects[project.id] = project;

            return { ...state, byId: projects };
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
        case t.CREATE_TASK: {
            const { task, projectId } = action;
            const project = state.byId[projectId];

            const updatedProject = {
                ...project,
                tasks: [...project.tasks, task],
            }

            return {
                ...state,
                byId: {
                    ...state.byId,
                    [projectId]: updatedProject,
                }
            }

        }
        default:
            return state;
    }
}
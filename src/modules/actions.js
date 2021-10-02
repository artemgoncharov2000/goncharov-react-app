
export const types = {
    CREATE_PROJECT: 'CREATE_PROJECT',
    DELETE_PROJECT: 'DELETE_PROJECT',
    LOAD_PROJECTS: 'LOAD_PROJECTS',
    LOAD_PROJECTS_SUCCESS: 'LOAD_PROJECTS_SUCCESS',
    LOAD_PROJECTS_FAILURE: 'LOAD_PROJECTS_FAILURE'
}

export const loadProjects = () => ({type: types.LOAD_PROJECTS});

export const loadProjectsSuccess = (projects) =>
    ({
        type: types.LOAD_PROJECTS_SUCCESS,
        projects,
    });

export const loadProjectsFailure = (error) =>
    ({
        type: types.LOAD_PROJECTS_FAILURE,
        error,
    });
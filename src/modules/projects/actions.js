
export const types = {
    CREATE_PROJECT: 'CREATE_PROJECT',
    DELETE_PROJECT: 'DELETE_PROJECT',
    LOAD_PROJECTS_REQUEST: 'LOAD_PROJECTS',
    LOAD_PROJECTS_SUCCESS: 'LOAD_PROJECTS_SUCCESS',
    LOAD_PROJECTS_FAILURE: 'LOAD_PROJECTS_FAILURE',
    CREATE_TASK: 'CREATE_TASK',
    UPDATE_TASK: 'UPDATE_TASK',
    DELETE_TASK: 'DELETE_TASK',
}

export const loadProjects = () => ({type: types.LOAD_PROJECTS_REQUEST});

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

export const createProject = (project) =>
    ({
        type: types.CREATE_PROJECT,
        project,
    })

export const createTask = (task, projectId) =>
    ({
        type: types.CREATE_TASK,
        task,
        projectId,
    })
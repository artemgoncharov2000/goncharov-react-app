export const types = {
    SET_CURRENT_PROJECT: 'SET_CURRENT_PROJECT',
    CREATE_TASK: 'CREATE_TASK',
}

export const setCurrentProject = (project) =>
    ({
       type: types.SET_CURRENT_PROJECT,
       project,
    });


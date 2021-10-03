export const types = {
    SET_CURRENT_PROJECT: 'SET_CURRENT_PROJECT',

}

export const setCurrentProject = (project) =>
    ({
       type: types.SET_CURRENT_PROJECT,
       project,
    });
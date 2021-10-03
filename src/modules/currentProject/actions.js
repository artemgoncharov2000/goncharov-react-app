export const types = {
    SET_CURRENT_PROJECT: 'SET_CURRENT_PROJECT',

}

const setCurrentProject = (project) =>
    ({
       type: types.SET_CURRENT_PROJECT,
       project,
    });
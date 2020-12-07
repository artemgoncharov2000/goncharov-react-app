import {
    SELECT_PROJECT,
    CREATE_PROJECT,
    COMPLETE_TASK,
    CREATE_TASK
} from './actionTypes';

export const selectProject = id => {
    return {
        type: SELECT_PROJECT,
        payload: id
    };
};

export const createProject = props => {
    return {
        type: CREATE_PROJECT,
        payload: props
    };
};

export const createTask = props => {
    return {
        type: CREATE_TASK,
        payload: props
    };
};

export const completeTask = id => {
    return {
        type: COMPLETE_TASK,
        payload: id,
    };
};

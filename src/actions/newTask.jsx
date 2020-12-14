export const addNewTask = (task) => {
    return {
        type: 'NEW_TASK',
        payload: task
    }
}
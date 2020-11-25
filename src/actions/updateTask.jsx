export const updateTask = (updatedTask) => {
    return {
        type: 'UPDATE_TASK',
        payload: updatedTask
    }
}
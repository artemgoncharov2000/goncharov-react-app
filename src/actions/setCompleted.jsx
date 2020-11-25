export const setCompleted = (updatedTask) => {
    return {
        type: 'SET_COMPLETED',
        payload: updatedTask
    }
}
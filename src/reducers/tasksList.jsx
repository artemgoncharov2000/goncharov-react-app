const initialState = {
    tasksList: []
}

export const tasksListReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'NEW_TASK':
            return {
                ...state,
                tasksList: [...state.tasksList, action.payload]
            }
        case 'UPDATE_TASK':
            let updatedTasksList = [...state.tasksList]
            updatedTasksList[action.payload.id] = action.payload
            return {
                tasksList: updatedTasksList
            }
        default:
            return state
    }
}


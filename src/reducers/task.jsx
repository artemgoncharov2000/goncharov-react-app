const initialState = {
    id: 0,
    name: '',
    description: '',
    completed: false
}

export const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_COMPLETED':
            let updatedTasks = [...state.tasks]
            updatedTasks[action.payload.id] = action.payload
            return {
                tasks: updatedTasks
            }
        default:
            return state
    }
}
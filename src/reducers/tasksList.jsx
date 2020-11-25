const initialState = {
    tasks: []
}

export const tasksListReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'NEW_TASK':
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }
    }
}


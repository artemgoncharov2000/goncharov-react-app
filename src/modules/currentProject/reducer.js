import {types as t} from './actions';
const initialState = null;

export default (state = initialState, action) => {
    switch (action.type) {
        case t.SET_CURRENT_PROJECT: {
            const { project } = action;
            return project;
        }
        default:
            return state;
    }
}
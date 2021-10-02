import projects from './projects/reducer';
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    projects,
})

export default rootReducer;
import projects from './projects/reducer';
import currentProject from './currentProject/reducer';
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    projects,
    currentProject,
})

export default rootReducer;
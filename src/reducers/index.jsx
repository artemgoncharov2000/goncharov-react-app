import {tasksListReducer} from "./tasksList";
import {combineReducers} from "redux";

export const rootReducer = combineReducers({
    tasksList: tasksListReducer
})


import {tasksListReducer} from "./tasksList";
import {taskReducer} from "./task";
import {combineReducers} from "redux";

export const rootReducer = combineReducers({
    tasksList: tasksListReducer,
    task: taskReducer
})


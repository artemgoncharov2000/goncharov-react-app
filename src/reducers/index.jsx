import {combineReducers} from "redux";
import {createReducer} from "redux-orm";
import orm from "../orm/orm";

export const rootReducer = combineReducers({
    orm: createReducer(orm)
});


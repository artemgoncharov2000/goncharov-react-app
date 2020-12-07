//import {schema} from "../orm/schema";
import {createSelector} from "redux-orm";
import orm from '../orm/orm'
//export const ormSelector = state => state.orm

export const tasks = createSelector(
    orm,
    (session) => {
        return session.Task.all().toModelArray();
    }
);

export const project = createSelector(
    orm,
    (session, projectId) => {
        return session.Project.withId(projectId).toModel()
    }
);

export const projects = createSelector(
    orm,
    session => {
        return session.Project.all().toModelArray()
    }
)
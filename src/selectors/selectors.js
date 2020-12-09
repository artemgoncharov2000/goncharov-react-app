import {createSelector} from "redux-orm";
import orm from '../orm/orm'


export const tasks = createSelector(
    orm,
    (session) => {
        return session.Task.all().toRefArray();
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
        return session.Project.all().toRefArray()
    }
)
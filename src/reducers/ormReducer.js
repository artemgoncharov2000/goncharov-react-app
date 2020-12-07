import {SELECT_PROJECT, CREATE_PROJECT} from "../actions/actionTypes";
import orm from "../orm/orm";

export default function ormReducer(dbState, action) {
    const sess = orm.session(dbState)

    const {Project, Task} = sess;
    const {type, payload} = action

    switch (type) {
        case SELECT_PROJECT:
            //Project.withId(payload).
            break;
        case CREATE_PROJECT:
            Project.create(payload);
            break;
    }

    return sess.state;
}

//export const reducer = createReducer(orm);
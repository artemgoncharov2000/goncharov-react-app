import {Model, fk, many, attr} from 'redux-orm';
import {
    SELECT_PROJECT,
    CREATE_PROJECT
} from "../../actions/actionTypes";

class Project extends Model {
    static reducer(action, Project, session) {
        const { payload, type } = action
        switch (type) {
            case CREATE_PROJECT:
                Project.create(payload)
                break;
        }

        return undefined;
    };
}

Project.modelName = 'Project';

Project.fields = {
    id: attr(),
    name: attr(),
}

export default Project
import {Model, fk, many, attr } from 'redux-orm';
import {
    CREATE_TASK,
    COMPLETE_TASK
} from "../../actions/actionTypes";
class Task extends Model {
    static reducer(action, Task, session) {
        const { payload, type } = action;
        switch (type) {
            case CREATE_TASK:
                Task.create(payload);
                break;
            case COMPLETE_TASK:
                Task.withId(payload).delete();
                break;
        }

        return undefined
    }
}

Task.modelName = 'Task';

Task.fields = {
    id: attr(),
    name: attr(),
    description: attr(),
    completed: attr(),
    projectId: fk({
        to: 'Project',
        as: 'project',
        relatedName: 'tasks'
    })
};

Task.defaultProps = {
    completed: false,
};

export default Task;
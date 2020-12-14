import {ORM} from 'redux-orm';
import Project from './models/Project';
import Task from './models/Task'

const orm = new ORM({
    stateSelector: state => state.orm
});
orm.register(Project, Task);

export default orm;
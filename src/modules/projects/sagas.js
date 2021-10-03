import { takeEvery, put, call } from 'redux-saga/effects';
import * as api from '../../lib/api-client';
import {loadProjectsFailure, loadProjectsSuccess, types as t} from "./actions";

function* loadProjectsSaga() {
    try {
        const res = yield api.getProjects();
        const projects = res.data;

        yield put(loadProjectsSuccess(projects));
    } catch (error) {
        yield put(loadProjectsFailure(error.toString()));
    }
}

function* projectsSaga() {
    yield takeEvery(t.LOAD_PROJECTS_REQUEST, loadProjectsSaga);
}

export default projectsSaga;
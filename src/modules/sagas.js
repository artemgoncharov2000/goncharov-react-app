import projectsSaga from "./projects/sagas";
import { fork } from 'redux-saga/effects';

export default function* rootSaga() {
    yield fork(projectsSaga);
}
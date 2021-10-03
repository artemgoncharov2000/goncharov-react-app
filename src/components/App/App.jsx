import React from 'react';
import './App.css';
// import {Tasks} from "../Tasks/Tasks";
import {createStore, applyMiddleware} from "redux";
import rootReducer from '../../modules/reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from "../../modules/sagas";
import {Provider} from 'react-redux'
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import Projects from "../Projects/Projects";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
)

window.store = store;
sagaMiddleware.run(rootSaga);

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Provider store={store}>
                    <Switch>
                        <Route path={"/projects"} exact component={Projects}/>
                        {/*<Route path={"/projects/:projectId"} component={Tasks}/>*/}
                        <Redirect to="/projects"/>
                    </Switch>
                </Provider>
            </BrowserRouter>
        </div>
    );
}

export default App;

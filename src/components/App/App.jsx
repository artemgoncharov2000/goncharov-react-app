import React from 'react';
import './App.css';
import {Tasks} from "../Tasks/Tasks";
import {createStore} from "redux";
import {rootReducer} from "../../reducers";
import {Provider} from 'react-redux'
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import {Projects} from "../Projects/Projects";
import orm from '../../orm/orm'

const emptyDBState = orm.getEmptyState();
const store = createStore(rootReducer);


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Provider store={store}>
                    <Switch>
                        <Route path={"/"}>
                            <Redirect to="/projects"/>
                            <Route path={"/projects"} exact component={Projects}/>
                            <Route path={"/projects/:projectId"} component={Tasks}/>
                        </Route>
                    </Switch>
                </Provider>
            </BrowserRouter>
        </div>
    );
}

export default App;

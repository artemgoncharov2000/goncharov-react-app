import React from 'react';
import './App.css';
import {Tasks} from "../Tasks/Tasks";
import {createStore} from "redux";
import {rootReducer} from "../../reducers";
import {Provider} from 'react-redux'
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import {Projects} from "../Projects/Projects";

const store = createStore(rootReducer);

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Provider store={store}>
                    <Switch>
                        <Route path={"/projects"} exact component={Projects}/>
                        <Route path={"/projects/:projectId"} component={Tasks}/>
                        <Redirect to="/projects"/>
                    </Switch>
                </Provider>
            </BrowserRouter>
        </div>
    );
}

export default App;

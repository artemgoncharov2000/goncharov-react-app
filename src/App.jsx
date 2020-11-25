import React from 'react';
import './App.css';
import {TasksList} from "./components/TasksList/TasksList";
import {createStore} from "redux";
import {rootReducer} from "./reducers";
import {Provider} from 'react-redux'

const store = createStore(rootReducer)

function App() {
  return (
    <div className="App">
        <Provider store={store}>
            <TasksList/>
        </Provider>
    </div>
  );
}

export default App;

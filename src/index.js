/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
*/

import {createStore} from "redux";

const reducer = function(state, action) {

    if(action.type === "INC") {
        return state+1;
    }
    return state;
}

const store = createStore(reducer, 0); //initial state

store.subscribe(()=> {
console.log("store changed", store.getState())
})

store.dispatch({type: "INC", payload: 1})
store.dispatch({type: "INC", payload: 1})
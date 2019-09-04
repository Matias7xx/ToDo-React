import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
import { createStore } from 'redux'; //REDUX
import { Provider } from 'react-redux' //Integração entre React e Redux

import App from  './main/App'
import reducers from './main/reducers' //Redux Reducers
import * as serviceWorker from './serviceWorker';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ //Utilizar o devTools do chrome
    && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(reducers, devTools)
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

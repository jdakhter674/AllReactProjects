import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import {createStore} from 'redux'
import { allReducers } from './reducer';
import {composeWithDevTools} from 'redux-devtools-extension'
import { Provider } from 'react-redux';


const store= createStore(allReducers , composeWithDevTools())


ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
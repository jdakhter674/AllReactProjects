import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {createStore} from 'redux'
import rootReducer from './redux/reducer/root_reducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'


const store = createStore(rootReducer,composeWithDevTools())




ReactDOM.render(
    <Provider store={store}>
    <App />

    </Provider>
    ,document.getElementById('root')
)
import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import {createStore , applyMiddleware} from 'redux'
import { allReducers } from './redux/reducers'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import logger from 'redux-logger'


const middleWare=[thunk]
if(process.env.NODE_ENV==="development"){
    middleWare.push(logger)
}

const store=createStore(allReducers , applyMiddleware(...middleWare))
// store.subscribe(console.log(store))



ReactDom.render(
    <Provider store={store}>

<App/>
    </Provider>
,document.getElementById('root')
)
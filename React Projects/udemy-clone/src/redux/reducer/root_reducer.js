import {combineReducers} from 'redux'
import addToCart from './addToCart';
import loginReducer from './loginReducer'


const rootReducer=combineReducers({
    allReducer:loginReducer,
    addToCart: addToCart
})


export default rootReducer;
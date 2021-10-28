import React from 'react'
import { useSelector } from 'react-redux'
import {Route} from 'react-router-dom'
import LoadingToRedirect from './LoadingToRedirect'



const Routes = ({children,...rest}) => {
    const  {currentUser}  = useSelector(state => state.userReducer)
// console.log(currentUser)

    return currentUser ? <Route {...rest} /> : <LoadingToRedirect />
}

export default Routes

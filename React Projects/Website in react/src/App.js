import React, { useEffect } from 'react'
import Login from './container/Login'
import Registration from './container/Registration'
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'
import Home from './container/Home'
import Routes from './pagesRoutes/Routes'
import { useDispatch } from 'react-redux'
import firebase from './container/firebase'
import { setUser } from './redux/actions/actions'

const App = () => {
    const dispatch=useDispatch()


    useEffect(()=>{
        firebase.auth().onAuthStateChanged(authUser=>{
            if(authUser){
                dispatch(setUser(authUser))
                // console.log(authUser)
            }else{
                dispatch(setUser(null))
            }
        })
    
    },[dispatch])
    
    



    return (
        <Router>

       <Switch>

            {/*Login Page Setup*/}
            {/* <Login /> */}
            <Routes exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Registration} />

            {/* <Registration /> */}
       </Switch>
      
        </Router>
    )
}

export default App

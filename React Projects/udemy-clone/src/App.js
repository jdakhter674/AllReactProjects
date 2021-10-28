import React from 'react'
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'
import Forget from './component/Forget'
import Home from './component/Home'
import LoginPage from './component/LoginPage'
import Navbar from './component/Navbar'
import Profile from './component/Profile'
import SignUp from './component/SignUp'


const App = () => {
    return (
        <>
        <Router>
        {/* <Navbar /> */}
            <Switch>
                <Route exact path="/" component={LoginPage} />
                <Route  path="/home" component={Home} />
                <Route  path="/sign" component={SignUp} />
                <Route  path="/forget" component={Forget} />
                <Route  path="/profile" component={Profile} />
            </Switch>
        </Router>
   </>
    )
}

export default App

import React from 'react'
import Header from './container/Header'
import {BrowserRouter as Router , Switch,Route} from 'react-router-dom'
import ProductListing from './container/ProductListing'
import ProductDetail from './container/ProductDetail'

const App = () => {
    return (
        <div>
            <Router>
            <Header />
            <Switch>
                <Route path="/" exact component={ProductListing} />
                <Route path="/product/:productId"  component={ProductDetail} />
                <Route>404 not found</Route>
            </Switch>

            </Router>


        </div>
    )
}

export default App

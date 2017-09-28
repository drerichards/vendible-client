import React, {Component} from 'react'
import { Route} from 'react-router-dom'
import { BrowserRouter as Router } from 'browser-router'
import {connect} from 'react-redux'
import * as actions from '../actions'
import createBrowserHistory from 'history/createBrowserHistory'

import NavBar from './NavBar'
import Landing from './Landing'
import AccountSignup from './Account_SignUp'
import Departments from './Departments'
import ProductDisplay from './Product_Display'
import ShoppingCart from './Shopping_Cart'
const history = createBrowserHistory()

class App extends Component {
    componentDidMount() {
        this.props.fetchUser()
    }
    render() {
        return (
            <div>
                <BrowserRouter history={history}>
                    <div>
                        <NavBar/>
                        <Route exact path='/' component={Landing}/>
                        {/* <Route path='/signup' component={AccountSignup}/> */}
                        <Route path='/departments' component={Departments}/>
                        <Route path='/product_display' component={ProductDisplay}/>
                        <Route path='/shopping_cart' component={ShoppingCart}/>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default connect(null, actions)(App)
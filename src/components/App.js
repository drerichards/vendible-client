import React, {Component} from 'react'
import { Router, Route } from 'react-router-dom'
import {connect} from 'react-redux'
import * as actions from '../actions'
import createBrowserHistory from 'history/createBrowserHistory'

import NavBar from './NavBar'
import Landing from './Landing'
import Departments from './Departments'
import ProductDisplay from './Product_Display'
import ShoppingCart from './Shopping_Cart'
const history = createBrowserHistory(),
    URL = 'https://vendible.netlify.com/'

class App extends Component {
    componentDidMount() {
        this.props.fetchUser('post')
    }
    render() {
        return (
            <div>
                <Router history={history}>
                    <div>
                        <NavBar/>
                        <Route exact path={URL} component={Landing} />
                        <Route path={URL+'/post:first_name'} component={Landing}/>
                        <Route path={URL+'/departments'} component={Departments}/>
                        <Route path={URL+'/product_display'} component={ProductDisplay}/>
                        <Route path={URL+'/shopping_cart'} component={ShoppingCart}/>
                    </div>
                </Router>
            </div>
        )
    }
}

export default connect(null, actions)(App)
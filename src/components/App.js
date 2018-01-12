import React, {Component} from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {connect} from 'react-redux'
import * as actions from '../actions'

import NavBar from './NavBar'
import Landing from './Landing'
import Departments from './Departments'
import ProductDisplay from './Product_Display'
import ShoppingCart from './Shopping_Cart'

class App extends Component {

    componentDidMount() {
      const userId = localStorage.getItem('userId')
      const userEmail = localStorage.getItem('userEmail')

      if(userId && userEmail) {
        this.props.dispatch(actions.fetchUserSuccess(userId, userEmail))
      }
    }

    render() {
        return (
            <div>
                <Router>
                    <div>
                        <NavBar/>
                        <Route exact path='/' component={Landing}/>
                        <Route path='/:userId/:userEmail' component={Landing}/>
                        <Route path='/departments' component={Departments}/>
                        <Route path='/product_display' component={ProductDisplay}/>
                        <Route path='/shopping_cart' component={ShoppingCart}/>
                    </div>
                </Router>
            </div>
        )
    }
}

export default connect()(App)

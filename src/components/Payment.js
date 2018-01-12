import React, { Component } from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { connect } from 'react-redux'
import * as actions from '../actions'

class Payment extends Component {
    render() {
        const cartTotal = this.props.total,
            payTotal = cartTotal * 100,
            description = `CC: 4242 4242 4242 4242
            Exp: 1/22
            CVC: 111`
        return (
            <StripeCheckout
                name='Vendible'
                description={description}
                amount={payTotal}
                token={token => this.props.handleToken(cartTotal)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}>
                <p>CC: 4242 4242 4242 4242
            Exp: 1/22
            CVC: 111</p>
                <button className="btn btn-info" style={{'fontSize': '1em'}}>Checkout</button>
            </StripeCheckout>
        )
    }
}
export default connect(null, actions)(Payment)
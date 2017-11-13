import React, { Component } from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { connect } from 'react-redux'
import * as actions from '../actions'

class Payment extends Component {
    render() {
        const cartTotal = this.props.total,
            payTotal = cartTotal * 100,
            description = `Purchase Total: ${cartTotal}
            Enter Credit Card: 4242 4242 4242 4242
            3 Digit Code: 111
            Expiration: 12/22`
        return (
            <StripeCheckout
                name='Vendible'
                description={description}
                amount={payTotal}
                token={token => this.props.handleToken(cartTotal)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}>
                <button className="btn btn-info" style={{'fontSize': '1em'}}>Checkout</button>
            </StripeCheckout>
        )
    }
}
export default connect(null, actions)(Payment)
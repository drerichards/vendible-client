import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from '../actions/types'

export default function (state = [], action) {
    switch (action.type) {
        case ADD_TO_CART:
            return Array.apply([], state, state.push(action.payload))
        case REMOVE_FROM_CART:
            return Array.apply([], state, state.splice(action.payload,1))
        case EMPTY_CART:
            return Array.apply([], [])
        default:
            return state
    }
}
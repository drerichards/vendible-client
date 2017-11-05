import axios from 'axios'
import { FETCH_USER_SUCCESS } from './types'
import { FETCH_PRODUCTS } from './types'
import { SHOW_MODAL } from './types'
import { HIDE_MODAL } from './types'
import { ADD_TO_CART } from './types'
import { REMOVE_FROM_CART } from './types'
import { EMPTY_CART } from './types'

export const fetchUserSuccess = (id, email, first_name) => {
    let userInfo = { id, email, first_name }
    return { type: FETCH_USER_SUCCESS, payload: userInfo }
}

export const fetchProducts = (dept) => async dispatch => {
    const route = `https://stormy-fortress-32507.herokuapp.com/inventory/${dept.toLowerCase()}`
    const res = await axios.get(route)
    dispatch({ type: FETCH_PRODUCTS, payload: res.data })
}

export const showModal = (displayInfo) => {
    const displayArr = [
        displayInfo[0].currentSrc,
        displayInfo[1].innerHTML,
        displayInfo[2].innerText,
        displayInfo[3].innerHTML
    ]
    return { type: SHOW_MODAL, payload: displayArr }
}

export const hideModal = () => {
    return { type: HIDE_MODAL }
}

export const addToCart = (item) => {
    return { type: ADD_TO_CART, payload: item }
}

export const removeFromCart = (index) => {
    return { type: REMOVE_FROM_CART, payload: index }
}

export const handleToken = (cartTotal) => {
    alert(`Thank You for your Purchase of ${cartTotal}!`)
    return { type: EMPTY_CART }
}

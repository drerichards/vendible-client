import axios from 'axios'
import { FETCH_PRODUCTS } from './types'
import { SHOW_MODAL } from './types'
import { HIDE_MODAL } from './types'
import { ON_LOGOUT } from './types'
import { ADD_TO_CART } from './types'
import { REMOVE_FROM_CART } from './types'
import { EMPTY_CART } from './types'

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

export const fetchUserSuccess = (id, email) => ({
  type: 'FETCH_USER_SUCCESS', id, email
})

export const hideModal = () => {
    return { type: HIDE_MODAL }
}

export const onLogout = () => {
    console.log('hello')
    return { type: ON_LOGOUT }
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

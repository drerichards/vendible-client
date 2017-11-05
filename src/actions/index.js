import axios from 'axios'
import { API_URL } from './types'
import { FETCH_USER } from './types'
import { FETCH_PRODUCTS } from './types'
import { SHOW_MODAL } from './types'
import { HIDE_MODAL } from './types'
import { ADD_TO_CART } from './types'
import { REMOVE_FROM_CART } from './types'
import { EMPTY_CART } from './types'

export const fetchUser = () => async dispatch => {
    const res = await axios.get(API_URL+'/api/current_user')
    let res = {
        _id: "59b9f984ca12ec2b106ea506",
        googleId: "104940457039876329937",
        first_name: "G. Andre",
        last_name: "Richardson",
        email: "g.andrerichards@gmail.com",
        __v: 0
    } 
    console.log(res)
    dispatch({ type: FETCH_USER, payload: res })
}

export const fetchProducts = dept => async dispatch => {
    const route = `${API_URL}/inventory/${dept.toLowerCase()}`
    const res = await axios.get(route)
    dispatch({ type: FETCH_PRODUCTS, payload: res.data })
}

export const showModal = displayInfo => {
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

export const addToCart = item => {
    return { type: ADD_TO_CART, payload: item }
}

export const removeFromCart = index => {
    return { type: REMOVE_FROM_CART, payload: index }
}

export const handleToken = cartTotal => {
    alert(`Thank You for your Purchase of ${cartTotal}!`)
    return { type: EMPTY_CART }
}

import axios from 'axios'
import { FETCH_USER } from './types'
import { FETCH_PRODUCTS } from './types'
import { SHOW_MODAL } from './types'
import { HIDE_MODAL } from './types'
import { ADD_TO_CART } from './types'
import { REMOVE_FROM_CART } from './types'
// import { GOOGLE_AUTH } from './types'
const host = 'https://glacial-wildwood-37638.herokuapp.com'

export const fetchUser = () => async dispatch => {
    const res = await axios.get(`${host}/api/current_user`)
    dispatch({ type: FETCH_USER, payload: res.data })
}
export const googleAuth = () => async dispatch => {
    const res = await axios.get(`${host}/auth/google`)
    dispatch({ type: FETCH_USER, payload: res.data })
    console.log('srgf')
}

export const googleLogout = () => {

}

export const fetchProducts = (dept) => async dispatch => {
    const route = `${host}/inventory/${dept.toLowerCase()}`
    const res = await axios.get(route)
    dispatch({ type: FETCH_PRODUCTS, payload: res.data })
}

export const showModal = (displayInfo) => {
    if (displayInfo) {
        const displayArr = [
            displayInfo[0].currentSrc,
            displayInfo[1].innerHTML,
            displayInfo[2].innerText,
            displayInfo[3].innerHTML
        ]
        return { type: SHOW_MODAL, payload: displayArr }
    } else return { type: SHOW_MODAL }
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

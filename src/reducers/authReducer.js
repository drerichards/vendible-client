import { ON_LOGOUT, FETCH_USER_SUCCESS } from '../actions/types'

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_USER_SUCCESS: {
          return {
            ...state,
            id: action.id,
            email: action.email
          }
        }
        case ON_LOGOUT:
            console.log('hello world1')
            window.localStorage.clear()
            console.log('hello world2')

            localStorage.removeItem('state')
            console.log('hello world3')
            localStorage.removeItem('userEmail')
            console.log('hello world4')
            localStorage.removeItem('userId')
            // window.location = '/'
            return state = {}
        default:
            return state
    }
}

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
            localStorage.clear()
            localStorage.removeItem('state')
            localStorage.removeItem('userEmail')
            localStorage.removeItem('userId')
            window.location = '/'
            const newState = Object.assign({}, state, {})
            return newState
        default:
            return state
    }
}

import { FETCH_USER, ON_LOGOUT } from '../actions/types'

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_USER:
            return state = action.payload
        case 'FETCH_USER_SUCCESS': {
          return {
            ...state,
            id: action.id,
            email: action.email
          }
        }
        case ON_LOGOUT:
            // localStorage.clear()
            // window.location = '/'
            console.log('000')
            alert('000')
            return state
        default:
            return state
    }
}

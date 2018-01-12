import { ON_LOGOUT } from '../actions/types'

export default function (state = {}, action) {
    switch (action.type) {
        case 'FETCH_USER_SUCCESS': {
          return {
            ...state,
            id: action.id,
            email: action.email
          }
        }
        case ON_LOGOUT:
            // window.localStorage.clear()
            console.log('hello world')

            localStorage.removeItem('state')
            localStorage.removeItem('userEmail')
            localStorage.removeItem('userId')
            // window.location = '/'
            return state = {}
        default:
            return state
    }
}

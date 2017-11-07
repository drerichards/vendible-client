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
            window.localStorage.clear()
            // localStorage.setItem('userID', null)
            // localStorage.setItem('userEmail', null)
            window.location = '/'

            console.log(state)
            console.log(localStorage)
            // alert('000')
            return state = {}
        default:
            return state
    }
}

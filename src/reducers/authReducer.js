import { FETCH_USER } from '../actions/types'



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
        default:
            return state
    }
}

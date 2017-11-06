import { FETCH_USER_SUCCESS } from '../actions/types'

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_USER_SUCCESS: {
            console.log(state)
            console.log(action)
          return {
            ...state,
            id: action.id,
            email: action.email,
            name: action.name
          }
        }
        default:
            return state
    }
}

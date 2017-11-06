import { FETCH_USER_SUCCESS } from '../actions/types'

export default function (state = {}, action) {
    switch (action.type) {
        // case FETCH_USER_SUCCESS:
        //     return state = action.payload
        case 'FETCH_USER_SUCCESS': {
            console.log(state)

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

export default function (state = {}, action) {
    switch (action.type) {
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

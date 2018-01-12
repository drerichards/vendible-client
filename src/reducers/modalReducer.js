import { SHOW_MODAL, HIDE_MODAL } from '../actions/types'

export default function (state = false, action) {
    switch (action.type) {
        case SHOW_MODAL:
            return [Boolean(1), action.payload]
        case HIDE_MODAL:
            return Boolean(0)
        default:
            return state
    }
}
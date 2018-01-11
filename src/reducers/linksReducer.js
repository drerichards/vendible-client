import { SHOW_LINKS, HIDE_LINKS } from '../actions/types'

export default function (state = false, action) {
    switch (action.type) {
        case SHOW_LINKS:
            return [Boolean(1)]
        case HIDE_LINKS:
            return [Boolean(0)]
        default:
            return state
    }
}
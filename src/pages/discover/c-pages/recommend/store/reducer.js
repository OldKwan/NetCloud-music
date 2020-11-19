import { Map } from 'immutable'

import {
    UPDATE_BANNER
} from './constants'

const initState = Map({
    banner: []
})


export default function(state = initState, action) {
    switch (action.type) {
        case UPDATE_BANNER:
            return state.set('banner', action.banner)
            break;
    
        default:
            return state
    }
}
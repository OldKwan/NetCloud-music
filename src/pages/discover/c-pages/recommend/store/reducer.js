import {
    UPDATE_BANNER
} from './constants'

const initState = {
    banner: []
}


export default function(state = initState, action) {
    switch (action.type) {
        case UPDATE_BANNER:
            return {
                ...state,
                banner: action.banner,
            }
            break;
    
        default:
            return state
    }
}
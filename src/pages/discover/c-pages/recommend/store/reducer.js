import { Map } from 'immutable'

import {
    UPDATE_BANNER,
    UPDATE_HOT_RECOMMEND,
} from './constants'

const initState = Map({
    banner: [],
    hotRecommend: [],
})


export default function(state = initState, action) {
    switch (action.type) {
        case UPDATE_BANNER:
            return state.set('banner', action.banner)
            break;
    
        case UPDATE_HOT_RECOMMEND:
            return state.set('hotRecommend', action.hotRecommend)
            break;
    
        default:
            return state
    }
}
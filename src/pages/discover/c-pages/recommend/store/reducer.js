import { Map } from 'immutable'

import {
    UPDATE_BANNER,
    UPDATE_HOT_RECOMMEND,
    UPDATE_NEW_ALBUM,
} from './constants'

const initState = Map({
    banner: [],
    hotRecommend: [],
    newAlbum: [],
})


export default function(state = initState, action) {
    switch (action.type) {
        case UPDATE_BANNER:
            return state.set('banner', action.banner)
            break;
    
        case UPDATE_HOT_RECOMMEND:
            return state.set('hotRecommend', action.hotRecommend)
            break;
    
        case UPDATE_NEW_ALBUM:
            return state.set('newAlbum', action.newAlbum)
            break;
    
        default:
            return state
    }
}
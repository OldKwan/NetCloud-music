import { Map } from 'immutable'

import {
    UPDATE_BANNER,
    UPDATE_HOT_RECOMMEND,
    UPDATE_NEW_ALBUM,
    UPDATE_UP_RANKING,
    UPDATE_NEW_RANKING,
    UPDATE_ORIGIN_RANKING,
} from './constants'

const initState = Map({
    banner: [],
    hotRecommend: [],
    newAlbum: [],

    upRanking: [],
    newRanking: [],
    originRanking: [],
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
    
        case UPDATE_UP_RANKING:
            return state.set('upRanking', action.upRanking)
            break;
    
        case UPDATE_NEW_RANKING:
            return state.set('newRanking', action.newRanking)
            break;
    
        case UPDATE_ORIGIN_RANKING:
            return state.set('originRanking', action.originRanking)
            break;
    
        default:
            return state
    }
}
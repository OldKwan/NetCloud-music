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


function reducer(state = initState, action) {
    switch (action.type) {
        case UPDATE_BANNER:
            return state.set('banner', action.banner)
    
        case UPDATE_HOT_RECOMMEND:
            return state.set('hotRecommend', action.hotRecommend)
    
        case UPDATE_NEW_ALBUM:
            return state.set('newAlbum', action.newAlbum)
    
        case UPDATE_UP_RANKING:
            return state.set('upRanking', action.upRanking)
    
        case UPDATE_NEW_RANKING:
            return state.set('newRanking', action.newRanking)
    
        case UPDATE_ORIGIN_RANKING:
            return state.set('originRanking', action.originRanking)
    
        default:
            return state
    }
}

export default  reducer
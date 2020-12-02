import { combineReducers } from 'redux-immutable'
import recommend from '@/pages/discover/c-pages/recommend/store'
import player from '@/pages/player/store'

export default combineReducers({
    recommend,
    player,
})
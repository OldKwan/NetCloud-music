import { combineReducers } from 'redux-immutable'
import reducer from '@/pages/discover/c-pages/recommend/store'

export default combineReducers({
    recommend: reducer
})
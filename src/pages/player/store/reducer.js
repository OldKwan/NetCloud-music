import { Map } from 'immutable'

import {
    CHANGE_CURRENT_SONG,
    CHANGE_CURRENT_SONG_INDEX,
    CHANGE_CURRENT_SONGLIST,
    CHANGE_CURRENT_SEQUENCE,
    CHANGE_CURRENT_LYRIC,
    CHANGE_CURRENT_LYRICINDEX,
} from './constants'

const defaultState = Map({
    currentSong: {},
    songIndex: 0,
    songList: [],
    sequence: 0, // 播放顺序: 0顺序 1随机 2单曲循环
    lyric: [], // 当前播放歌曲的歌词
    lyricIndex: 0, // 当前歌词下标
})

function reducer(state = defaultState, action) {
    switch (action.type) {
        case CHANGE_CURRENT_SONG:
            return state.set('currentSong', action.currentSong)
    
        case CHANGE_CURRENT_SONG_INDEX:
            return state.set('songIndex', action.songIndex)
    
        case CHANGE_CURRENT_SONGLIST:
            return state.set('songList', action.songList)
    
        case CHANGE_CURRENT_SEQUENCE:
            return state.set('sequence', action.sequence)
    
        case CHANGE_CURRENT_LYRIC:
            return state.set('lyric', action.lyric)
    
        case CHANGE_CURRENT_LYRICINDEX:
            return state.set('lyricIndex', action.lyricIndex)
    
        default:
            return state
    }
}

export default reducer
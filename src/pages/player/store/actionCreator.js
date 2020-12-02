import {
    getSongInfo,
} from '@/api/player'

import {
    CHANGE_CURRENT_SONG,
} from './constants'

export const updateSong = currentSong => ({
    type: CHANGE_CURRENT_SONG,
    currentSong,
})

export const updateSongAction = (ids) => {
    return dispatch => {
        getSongInfo(ids).then(res => {
            dispatch(updateSong(res.songs[0]))
        })
    }
}
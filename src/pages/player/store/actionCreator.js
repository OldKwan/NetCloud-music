import {
    getSongInfo,
    getSongLyric,
} from '@/api/player'
import { getRandomNum } from '@/utils/math-utils'
import { parseLyric, parseLyric_codeWhy } from '@/utils/format-utils'

import {
    CHANGE_CURRENT_SONG,
    CHANGE_CURRENT_SONG_INDEX,
    CHANGE_CURRENT_SONGLIST,
    CHANGE_CURRENT_SEQUENCE,
    CHANGE_CURRENT_LYRIC,
    CHANGE_CURRENT_LYRICINDEX,
} from './constants'


export const updateSong = currentSong => ({
    type: CHANGE_CURRENT_SONG,
    currentSong,
})

export const updateSongIndex = songIndex => ({
    type: CHANGE_CURRENT_SONG_INDEX,
    songIndex,
})

export const updateSongList = songList => ({
    type: CHANGE_CURRENT_SONGLIST,
    songList,
})

export const updateListSequence = sequence => ({
    type: CHANGE_CURRENT_SEQUENCE,
    sequence,
})

export const updateSongLyric = lyric => ({
    type: CHANGE_CURRENT_LYRIC,
    lyric,
})
export const updateSongLyricIndex = lyricIndex => ({
    type: CHANGE_CURRENT_LYRICINDEX,
    lyricIndex,
})

export const updateChangeSongAndIndex = tag => {
    return (dispatch, getState) => {
        const songList = getState().getIn(['player', 'songList'])
        const sequence = getState().getIn(['player', 'sequence'])
        let songIndex = getState().getIn(['player', 'songIndex'])
        let currentSong = null
        switch (sequence) {
            case 1: // 默认随机播放
                let randomIndex = getRandomNum(songList.length);
                if (songList.length > 2) {
                    while (randomIndex === songIndex) {
                        randomIndex = getRandomNum(songList.length);
                    }
                }
                currentSong = songList[randomIndex]
                dispatch(updateSongIndex(randomIndex))
                dispatch(updateSong(currentSong))
                break;
        
            default: // 默认顺序播放
                songIndex += tag
                if (songIndex >= songList.length) songIndex = 0
                if (songIndex < 0) songIndex = (songList.length - 1)
                currentSong = songList[songIndex]
                dispatch(updateSongIndex(songIndex))
                dispatch(updateSong(currentSong))
                break;
        }
        if (!currentSong) return
        dispatch(updateSongLyricAction(currentSong.id))
    }
}

export const updateSongAction = (ids) => {
    return (dispatch, getState) => {
        if (!ids) return
        const songs = getState().getIn(['player', 'songList'])
        const songIndex = songs.findIndex(item => item.id === ids)
        let currentSong = null
        if (songIndex !== -1) { // 已存在该音乐
            currentSong = songs[songIndex]
            dispatch(updateSongIndex(songIndex))
            dispatch(updateSongList(songs))
            dispatch(updateSong(currentSong))
            dispatch(updateSongLyricAction(currentSong.id))
        } else { // 不存在音乐
            getSongInfo(ids).then(res => {
                currentSong = res.songs && res.songs[0]
                if (!currentSong) return
                const newSongs = [...songs]
                newSongs.push(currentSong)
                dispatch(updateSong(currentSong))
                dispatch(updateSongIndex(newSongs.length - 1))
                dispatch(updateSongList(newSongs))
                dispatch(updateSongLyricAction(currentSong.id))
            })
        }
    }
}

export const updateSongLyricAction = (id) => {
    return dispatch => {
        getSongLyric(id).then(res => {
            const lyric = parseLyric_codeWhy(res.lrc.lyric)
            dispatch(updateSongLyric(lyric))
        })
    }
}

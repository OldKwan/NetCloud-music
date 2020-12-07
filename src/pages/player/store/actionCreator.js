import {
    getSongInfo,
} from '@/api/player'
import { getRandomNum } from '@/utils/math-utils'

import {
    CHANGE_CURRENT_SONG,
    CHANGE_CURRENT_SONG_INDEX,
    CHANGE_CURRENT_SONGLIST,
    CHANGE_CURRENT_SEQUENCE,
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

export const updateChangeSongAndIndex = tag => {
    return (dispatch, getState) => {
        const songList = getState().getIn(['player', 'songList'])
        const sequence = getState().getIn(['player', 'sequence'])
        let songIndex = getState().getIn(['player', 'songIndex'])
        switch (sequence) {
            case 1: // 默认随机播放
                let randomIndex = getRandomNum(songList.length);
                if (songList.length > 2) {
                    while (randomIndex === songIndex) {
                        randomIndex = getRandomNum(songList.length);
                    }
                }
                dispatch(updateSongIndex(randomIndex))
                dispatch(updateSong(songList[randomIndex]))
                break;
        
            default: // 默认顺序播放
                songIndex += tag
                if (songIndex >= songList.length) songIndex = 0
                if (songIndex < 0) songIndex = (songList.length - 1)
                dispatch(updateSongIndex(songIndex))
                dispatch(updateSong(songList[songIndex]))
                break;
        }
    }
}

export const updateSongAction = (ids) => {
    return (dispatch, getState) => {
        if (!ids) return
        const songs = getState().getIn(['player', 'songList'])
        const songIndex = songs.findIndex(item => item.id === ids)
        if (songIndex !== -1) { // 已存在该音乐
            dispatch(updateSongIndex(songIndex))
            dispatch(updateSongList(songs))
            dispatch(updateSong(songs[songIndex]))
        } else { // 不存在音乐
            getSongInfo(ids).then(res => {
                const song = res.songs && res.songs[0]
                if (!song) return
                const newSongs = [...songs]
                newSongs.push(song)
                dispatch(updateSong(song))
                dispatch(updateSongIndex(newSongs.length - 1))
                dispatch(updateSongList(newSongs))
            })
        }
    }
}
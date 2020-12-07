import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Slider } from 'antd'

import {
    updateSongAction,
    updateListSequence,
    updateChangeSongAndIndex,
} from '../store/actionCreator'
import { getSizeImage, formatDate, getPlaySong } from '@/utils/format-utils'

import {
    PlaybarWrapper,
    Control,
    PlayInfo,
    Operator
} from './style'

let timeID = null
export default memo(function HTAppPlayerBar() {
    const dispatch = useDispatch()
    const audioRef = useRef()
    const PlayerHoverRef = useRef()

    const [currentTime, setCurrentTime] = useState(0)
    const [sliderPercent, setSliderPercent] = useState(0)
    const [isChanging, setIsChanging] = useState(false)
    const [isPlaying, setIsPlaying] = useState(false)
    const [playerVisual, setPlayerVisual] = useState(false)
    const [isLock, setIsLock] = useState(false)

    const { currentSong = {}, sequence = 0 } = useSelector(state => ({
        currentSong: state.getIn(['player', 'currentSong']),
        sequence: state.getIn(['player', 'sequence']),
    }), shallowEqual)

    
    useEffect(() => {
        dispatch(updateSongAction(167876))
    }, [dispatch])

    const handleChangeSequence = () => {
        let nextStep = sequence + 1
        if (nextStep > 2) nextStep = 0
        dispatch(updateListSequence(nextStep))
    }

    useEffect(() => { // 注册和卸载 player hover处理函数
        let currentEle = null
        const handleHover = (e) => {
            console.log('enter: ', e);
            if (isLock) return
            setPlayerVisual(true)
            timeID && clearTimeout(timeID)
        }
    
        const handleHoverOut = (e) => {
            console.log('mouseleave: ', e);
            if (isLock) return
            timeID = setTimeout(() => {
                setPlayerVisual(false)
            }, 1200);
        }
        if (PlayerHoverRef) {
            currentEle = PlayerHoverRef.current
            currentEle.addEventListener('mouseenter', handleHover)
            currentEle.addEventListener('mouseleave', handleHoverOut)
            
        }
        return () => { // 组件卸载时执行
            if (currentEle) {
                currentEle.removeEventListener('mouseenter', handleHover)
                currentEle.removeEventListener('mouseleave', handleHoverOut)
                timeID && clearTimeout(timeID)
            }
        }
    }, [isLock, PlayerHoverRef])

    useEffect(() => {
        audioRef.current.src = getPlaySong(currentSong && currentSong.id)
        isPlaying && audioRef.current.play().then(res => {
            setIsPlaying(true)
        }).catch(err => {
            setIsPlaying(false)
        })
    }, [currentSong, isPlaying])

    const picUrl = (currentSong && currentSong.al && currentSong.al.picUrl) || ''
    const singer = (currentSong && currentSong.ar && currentSong.ar[0] && currentSong.ar[0].name) || ''
    const duration = currentSong && currentSong.dt

    const handleTimeUpdate = e => {
        if (!isChanging) {
            setCurrentTime(Math.floor(e.target.currentTime * 1000))
            setSliderPercent(currentTime/duration*100)
        }
    }

    const handleControlSong = (isPlaying) => {
        isPlaying ? audioRef.current.pause() : audioRef.current.play()
        setIsPlaying(!isPlaying)
    }

    const handleChangeSong = (tag) => {
        dispatch(updateChangeSongAndIndex(tag))
        audioRef.current.currentTime = 0
    }

    const handlePlayerEnd = (tag) => {
        if (sequence === 2) {
            audioRef.current.currentTime = 0
            audioRef.current.play()
        } else {
            dispatch(updateChangeSongAndIndex(1))
        }
    }

    const handleSilderChange = useCallback((value) => {
        setCurrentTime(value/100*duration)
        setSliderPercent(value)
        setIsChanging(true)
    }, [duration])
    const handleSilderAfterChange = useCallback((value) => {
        audioRef.current.currentTime = value/100*duration/1000 // 赋值秒
        setIsChanging(false)
    }, [audioRef, duration])
    
    return (
        <PlaybarWrapper className="sprite_player" ref={PlayerHoverRef} visual={playerVisual} lock={isLock}>
            <div className="lock-btn" onClick={() => setIsLock(!isLock)}>{isLock ? 'lockIn' : 'lockOut'}</div>
            <div className="content wrap-v2">
                <Control isPlaying={isPlaying}>
                    <button className="sprite_player prev" onClick={() => handleChangeSong(-1)}></button>
                    <button className="sprite_player play" onClick={() => handleControlSong(isPlaying)}></button>
                    <button className="sprite_player next" onClick={() => handleChangeSong(1)}></button>
                </Control>
                <PlayInfo>
                    <div className="image">
                        <a href="/#">
                            <img src={getSizeImage(picUrl, 35)} alt="" />
                        </a>
                    </div>
                    <div className="info">
                        <div className="song">
                            <span className="song-time">{currentSong.name}</span>
                            <a href="/#" className="singer-name">{singer}</a>
                        </div>
                        <div className="progress">
                            <Slider value={sliderPercent} onChange={handleSilderChange} onAfterChange={handleSilderAfterChange} />
                            <div className="time">
                                <span className="now-time">{formatDate(currentTime, 'mm:ss')}</span>
                                <span className="divider">/</span>
                                <span className="duration">{formatDate(duration || 0, 'mm:ss')}</span>
                            </div>
                        </div>
                    </div>
                </PlayInfo>
                <Operator sequence={sequence}>
                    <div className="left">
                        <button className="sprite_player btn favor"></button>
                        <button className="sprite_player btn share"></button>
                    </div>
                    <div className="right sprite_player">
                        <button className="sprite_player btn volume"></button>
                        <button className="sprite_player btn loop" onClick={handleChangeSequence}></button>
                        <button className="sprite_player btn playlist"></button>
                    </div>
                </Operator>
            </div>
            <audio ref={audioRef} onTimeUpdate={handleTimeUpdate} onEnded={handlePlayerEnd} />
            
        </PlaybarWrapper>
    )
})

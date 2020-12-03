import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Slider } from 'antd'

import { updateSongAction } from '../store/actionCreator'
import { getSizeImage, formatDate, getPlaySong, throttle } from '@/utils/format-utils'

import {
    PlaybarWrapper,
    Control,
    PlayInfo,
    Operator
} from './style'

export default memo(function HTAppPlayerBar() {
    const dispatch = useDispatch()
    const audioRef = useRef()

    const [currentTime, setCurrentTime] = useState(0)
    const [sliderPercent, setSliderPercent] = useState(0)
    const [isChanging, setIsChanging] = useState(false)
    const [isPlaying, setIsPlaying] = useState(false)

    const { currentSong = {} } = useSelector(state => ({
        currentSong: state.getIn(['player', 'currentSong']),
    }), shallowEqual)
    
    useEffect(() => {
        dispatch(updateSongAction(167876))
    }, [dispatch])

    useEffect(() => {
        audioRef.current.src = getPlaySong(currentSong && currentSong.id)
    }, [currentSong])

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
        <PlaybarWrapper className="sprite_player">
            <div className="content wrap-v2">
                <Control isPlaying={isPlaying}>
                    <button className="sprite_player prev"></button>
                    <button className="sprite_player play" onClick={() => handleControlSong(isPlaying)}></button>
                    <button className="sprite_player next"></button>
                </Control>
                <PlayInfo>
                    <div className="image">
                        <a href="#">
                            <img src={getSizeImage(picUrl, 35)} alt="" />
                        </a>
                    </div>
                    <div className="info">
                        <div className="song">
                            <span className="song-time">{currentSong.name}</span>
                            <a href="#" className="singer-name">{singer}</a>
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
                <Operator>
                    <div className="left">
                        <button className="sprite_player btn favor"></button>
                        <button className="sprite_player btn share"></button>
                    </div>
                    <div className="right sprite_player">
                        <button className="sprite_player btn volume"></button>
                        <button className="sprite_player btn loop"></button>
                        <button className="sprite_player btn playlist"></button>
                    </div>
                </Operator>
            </div>
            <audio ref={audioRef} onTimeUpdate={handleTimeUpdate} />
            
        </PlaybarWrapper>
    )
})

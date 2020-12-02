import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Slider } from 'antd'

import { updateSongAction } from '../store/actionCreator'
import { getSizeImage, formatDate } from '@/utils/format-utils'

import {
    PlaybarWrapper,
    Control,
    PlayInfo,
    Operator
} from './style'

export default memo(function HTAppPlayerBar() {
    const dispatch = useDispatch()

    const { currentSong = {} } = useSelector(state => ({
        currentSong: state.getIn(['player', 'currentSong']),
    }), shallowEqual)
    
    useEffect(() => {
        dispatch(updateSongAction(167876))
    }, [dispatch])

    const picUrl = (currentSong && currentSong.al && currentSong.al.picUrl) || ''
    const singer = (currentSong && currentSong.ar && currentSong.ar[0] && currentSong.ar[0].name) || ''

    return (
        <PlaybarWrapper className="sprite_player">
            <div className="content wrap-v2">
                <Control>
                    <button className="sprite_player prev"></button>
                    <button className="sprite_player play"></button>
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
                            <Slider defaultValue={30} />
                            <div className="time">
                                <span className="now-time">02 : 30</span>
                                <span className="divider">/</span>
                                <span className="duration">{formatDate((currentSong && currentSong.dt) || 0, 'mm:ss')}</span>
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
            
            
        </PlaybarWrapper>
    )
})

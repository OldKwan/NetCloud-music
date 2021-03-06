import React, { memo } from 'react'
import { useDispatch } from 'react-redux'

import { getSizeImage } from '@/utils/format-utils'
import { updateSongAction } from '@/pages/player/store'

import { TopRankingWrapper } from './style'

export default memo(function HYTopRanking(props) {
    const dispatch = useDispatch()
    const { info } = props
    const { tracks = [] } = info
    const playMusic = (id) => {
        dispatch(updateSongAction(id))
    }
    return (
        <TopRankingWrapper>
            <div className="header">
                <div className="image">
                    <img src={getSizeImage(info.coverImgUrl)} alt="" />
                    <a href="/#" className="image_cover">ranking</a>
                </div>
                <div className="info">
                    <a href="/#">{info.name}</a>
                    <div>
                        <button className="btn sprite_02 play"></button>
                        <button className="btn sprite_02 favor"></button>
                    </div>
                </div>
            </div>
            <div className="list">
                {
                    tracks.slice(0, 10).map((item, index) => (
                        <div className="list-item" key={item.id}>
                            <div className="rank">{index + 1}</div>
                            <div className="info">
                                <span className="name text-nowrap">{item.name}</span>
                                <div className="operate">
                                    <button className="btn sprite_02 play" onClick={() => playMusic(item.id)}></button>
                                    <button className="btn sprite_icon2 addto"></button>
                                    <button className="btn sprite_02 favor"></button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="footer">
                <a href="/#">查看全部 &gt;</a>
            </div>
        </TopRankingWrapper>
    )
})

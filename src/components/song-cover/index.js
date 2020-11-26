import React, { memo } from 'react'

import { SongsCoverWrapper } from './style'

export default memo(function HYSongsCover(props) {
  const { info } = props
  return (
    <SongsCoverWrapper>
      <div className="cover-top">
        <img src="" alt="" />
        <div className="cover sprite_covor">
          <div className="info sprite_covor">
            <span>
              <i className="sprite_icon erji">
                count
              </i>
            </span>
            <i className="sprite_icon play" />
          </div>
        </div>
      </div>
      <div className="cover-bottom text-nowrap">
        {info.name}
      </div>
      <div className="cover-source text-nowrap">
        by {info.copywriter || info.creator.nickname}
      </div>
    </SongsCoverWrapper>
  )
})

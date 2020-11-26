import React, { memo, useEffect, useCallback, useRef } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { Carousel } from 'antd'

import HYThemeHeaderRCM from '@/components/theme-header-rcm';
import HYAlbumCover from '@/components/album-cover';
import { updateNewAlbumAction } from '@/pages/discover/c-pages/recommend/store/actionCreators'

import { AlbumWrapper } from './style';

export default memo(function HYNewAlbum() {
  const newAlbumRef = useRef()
  
  const { newAlbum } = useSelector((state) => ({
    newAlbum: state.getIn(['recommend', 'newAlbum'])
  }), shallowEqual)

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(updateNewAlbumAction(10))
  }, [dispatch])
  
  const handleMore = useCallback(() => {
    console.log('点击新碟上架更多!');
  }, [])

  return (
    <AlbumWrapper>
      <HYThemeHeaderRCM title="新碟上架" onMore={handleMore} />
      <div className="content">
        <button className="arrow arrow-left sprite_02" onClick={() => newAlbumRef.current.prev()}></button>
        <div className="album">
          <Carousel dots={false} ref={newAlbumRef}>
            {
              [0, 1].map(item => (
                <div key={item} className="page">
                  {/* HYAlbumCover */}
                  {
                    newAlbum.slice(item * 5, (item + 1) * 5).map(xtem => (
                      <HYAlbumCover key={xtem.picId} info={xtem} size={100} width={118} bgp="-570px" />
                    ))
                  }
                </div>
              ))
            }
          </Carousel>
        </div>
        <button className="arrow arrow-right sprite_02" onClick={() => newAlbumRef.current.next()}></button>
      </div>
    </AlbumWrapper>
  )
})

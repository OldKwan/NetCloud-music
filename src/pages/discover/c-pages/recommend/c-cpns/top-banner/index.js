import React, { memo, useEffect, useRef, useCallback, useState } from 'react';
import { connect, useDispatch, useSelector, shallowEqual } from 'react-redux'
import { Carousel } from 'antd'

import {
  updateBannerAction,
} from '../../store/actionCreators'


import {
  BannerWrapper,
  BannerLeft,
  BannerRight,
  BannerControl
} from './style';

export default memo(function HYTopBanner() {
  const [bannerIndex, setBannerIndex] = useState(0)
  const { banner } = useSelector(state => ({
    banner: state.getIn(['recommend', 'banner']),
  }), shallowEqual)
  const dispatch = useDispatch()

  const bannerRef = useRef()

  const bannerChange = useCallback((form, to) => {
    setBannerIndex(to)
  }, [])

  useEffect(() => {
    dispatch(updateBannerAction())
  }, [dispatch])

  const currentBg = banner[bannerIndex] && `${banner[bannerIndex].imageUrl}?imageView&blur=40x20`
  
  return (
    <BannerWrapper bgImage={currentBg}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel effect="fade" autoplay ref={bannerRef} beforeChange={bannerChange}>
            {
              banner && banner.length != 0 && banner.map((item, index) => (
                <div className="banner-item" key={item.imageUrl}>
                  <img className="image" src={item.imageUrl} alt={item.typeTitle} />
                </div>
              ))
            }
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button className="btn left" onClick={() => bannerRef.current.prev()}></button>
          <button className="btn right" onClick={() => bannerRef.current.next()}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
})

import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import HYThemeHeaderRCM from '@/components/theme-header-rcm'
import { updateHotRecommendAction } from '@/pages/discover/c-pages/recommend/store/actionCreators'
import HYSongsCover from '@/components/song-cover'
import { HotRecommendWrapper } from './style'

export default memo(function HYHotRecommend() {
  const { hotRecommend } = useSelector(state => ({
    hotRecommend: state.getIn(['recommend', 'hotRecommend'])
  }), shallowEqual)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(updateHotRecommendAction(8))
  }, [dispatch])
  return (
    <HotRecommendWrapper>
      <HYThemeHeaderRCM title="热门推荐" keywords={['华语', '流行', '民谣', '摇滚', '电子']} />
      <div className="recommend-list">
        {
          hotRecommend.map((item, index) => (<HYSongsCover info={item} key={index} />))
        }
      </div>
    </HotRecommendWrapper>
  )
})
                                                                                     
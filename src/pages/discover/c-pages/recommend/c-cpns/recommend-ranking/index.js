import React, { memo, useCallback, useEffect } from 'react';
import {useDispatch, useSelector, shallowEqual} from 'react-redux'

import HYThemeHeaderRCM from '@/components/theme-header-rcm';
import HYTopRanking from '@/components/top-ranking';
import { updateRecommendRanking } from '../../store/actionCreators'

import { RankingWrapper } from './style';

export default memo(function HYRecomendRanking() {
  const { upRanking, newRanking, originRanking } = useSelector((state) => ({
    upRanking: state.getIn(['recommend', 'upRanking']),
    newRanking: state.getIn(['recommend', 'newRanking']),
    originRanking: state.getIn(['recommend', 'originRanking']),
  }), shallowEqual)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(updateRecommendRanking(0))
    dispatch(updateRecommendRanking(2))
    dispatch(updateRecommendRanking(3))
  }, [dispatch])
  
  const handleMore = useCallback(() => {
    console.log('点击榜单更多!');
  }, [])
  return (
    <RankingWrapper>
      <HYThemeHeaderRCM title="榜单" onMore={handleMore} />
      <div className="tops">
        <HYTopRanking info={upRanking}/>
        <HYTopRanking info={newRanking}/>
        <HYTopRanking info={originRanking}/>
      </div>
    </RankingWrapper>
  )
})

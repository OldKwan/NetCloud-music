import React, { memo, useCallback } from 'react';


import HYThemeHeaderRCM from '@/components/theme-header-rcm';
import { RankingWrapper } from './style';

export default memo(function HYRecomendRanking() {
  const handleMore = useCallback(() => {
    console.log('点击榜单更多!');
  }, [])
  return (
    <RankingWrapper>
      <HYThemeHeaderRCM title="榜单" onMore={handleMore} />
    </RankingWrapper>
  )
})

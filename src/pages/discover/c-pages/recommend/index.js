import React, { memo } from 'react';

import { 
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight
} from './style';

function HYRecommend(props) {
  return (
    <RecommendWrapper>
      <Content className="wrap-v2">
        HYRecommend
      </Content>
    </RecommendWrapper>
  )
}

export default memo(HYRecommend);
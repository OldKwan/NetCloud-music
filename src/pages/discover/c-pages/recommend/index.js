import React, { memo } from 'react';

import HYTopBanner from './c-cpns/top-banner'


import { 
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight
} from './style';

function HYRecommend(props) {
  return (
    <RecommendWrapper>
      <HYTopBanner />
      <Content className="wrap-v2">
      </Content>
    </RecommendWrapper>
  )
}

// const mapStateToProps = ({ recommend }) => ({
//   banner: recommend.banner,
// })

// const mapDispatchToProps = dispatch => ({
//   onUpdateRecommendBanner: () => {
//     dispatch(updateBannerAction())
//   }
// })

// export default connect(mapStateToProps, mapDispatchToProps)(memo(HYRecommend));


export default memo(HYRecommend);
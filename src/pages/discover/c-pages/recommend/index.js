import React, { memo } from 'react';

import HYTopBanner from './c-cpns/top-banner'
import HYHotRecommend from './c-cpns/hot-recommend'
import NewAlbum from './c-cpns/new-album'
import RecommendRanking from './c-cpns/recommend-ranking'
import HYUserLogin from './c-cpns/user-login';
import HYSettleSinger from './c-cpns/settle-singer';
import HYHotAnchor from './c-cpns/hot-anchor';


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
        <RecommendLeft>
          <HYHotRecommend />
          <NewAlbum />
          <RecommendRanking />
        </RecommendLeft>
        <RecommendRight>
          <HYUserLogin />
          <HYSettleSinger />
          <HYHotAnchor />
        </RecommendRight>
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
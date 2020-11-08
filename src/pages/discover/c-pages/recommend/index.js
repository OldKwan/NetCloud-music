import React, { memo, useEffect } from 'react';
import { connect } from 'react-redux'
import {
  updateBannerAction,
} from './store/actionCreators'

import { 
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight
} from './style';

function HYRecommend(props) {
  const { onUpdateRecommendBanner, banner } = props

  useEffect(() => {
    onUpdateRecommendBanner()
  }, [])
  
  return (
    <RecommendWrapper>
      <Content className="wrap-v2">
        {/* HYRecommend: */}
        HYRecommend: {banner.length}
      </Content>
    </RecommendWrapper>
  )
}

const mapStateToProps = ({ recommend }) => ({
  banner: recommend.banner,
})

const mapDispatchToProps = dispatch => ({
  onUpdateRecommendBanner: () => {
    dispatch(updateBannerAction())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(memo(HYRecommend));
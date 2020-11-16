import React, { memo, useEffect } from 'react';
import { connect, useDispatch, useSelector, shallowEqual } from 'react-redux'
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
  // const { onUpdateRecommendBanner, banner } = props

  // redux 钩子函数应用
  const { banner } = useSelector(state => ({
    banner: state.recommend.banner,
  }), shallowEqual)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(updateBannerAction())
  }, [dispatch])
  
  return (
    <RecommendWrapper>
      <Content className="wrap-v2">
        {/* HYRecommend: */}
        HYRecommend: {banner.length}
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
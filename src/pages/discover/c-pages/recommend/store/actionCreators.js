import {
    UPDATE_BANNER,
    UPDATE_HOT_RECOMMEND,
} from './constants'
import {
    getRecommendBanner,
    getHotRecommend,
} from '@/api/recommend'


export const updateBanner = banner => ({
    type: UPDATE_BANNER,
    banner,
})

export const updateHotRecommend = hotRecommend => ({
    type: UPDATE_HOT_RECOMMEND,
    hotRecommend,
})

export const updateBannerAction = () => {
    return dispatch => {
        getRecommendBanner().then((dat) => {
            dispatch(updateBanner(dat.banners))
        })
    }
}

export const updateHotRecommendAction = (limit) => {
    return dispatch => {
        getHotRecommend(limit).then((dat) => {
            dispatch(updateHotRecommend(dat.result))
        })
    }
}
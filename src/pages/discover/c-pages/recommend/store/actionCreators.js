import {
    UPDATE_BANNER
} from './constants'
import {
    getRecommendBanner,
} from '@/api/recommend'


export const updateBanner = banner => ({
    type: UPDATE_BANNER,
    banner,
})

export const updateBannerAction = () => {
    return dispatch => {
        getRecommendBanner().then((dat) => {
            dispatch(updateBanner(dat.banners))
        })
    }
}
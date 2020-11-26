import {
    UPDATE_BANNER,
    UPDATE_HOT_RECOMMEND,
    UPDATE_NEW_ALBUM,
} from './constants'
import {
    getRecommendBanner,
    getHotRecommend,
    getNewAlbum,
} from '@/api/recommend'


export const updateBanner = banner => ({
    type: UPDATE_BANNER,
    banner,
})

export const updateHotRecommend = hotRecommend => ({
    type: UPDATE_HOT_RECOMMEND,
    hotRecommend,
})

export const updateNewAlbum = newAlbum => ({
    type: UPDATE_NEW_ALBUM,
    newAlbum,
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

export const updateNewAlbumAction = (limit) => {
    return dispatch => {
        getNewAlbum(limit).then((dat) => {
            dispatch(updateNewAlbum(dat.albums))
        })
    }
}
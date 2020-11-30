import {
    UPDATE_BANNER,
    UPDATE_HOT_RECOMMEND,
    UPDATE_NEW_ALBUM,
    UPDATE_UP_RANKING,
    UPDATE_NEW_RANKING,
    UPDATE_ORIGIN_RANKING,
} from './constants'
import {
    getRecommendBanner,
    getHotRecommend,
    getNewAlbum,
    getRemcommendRanking,
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

export const updateUpRanking = upRanking => ({
    type: UPDATE_UP_RANKING,
    upRanking,
})

export const updateNewRanking = newRanking => ({
    type: UPDATE_NEW_RANKING,
    newRanking,
})

export const updateOriginRanking = originRanking => ({
    type: UPDATE_ORIGIN_RANKING,
    originRanking,
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

export const updateRecommendRanking = (idx) => {
    return dispatch => {
        getRemcommendRanking(idx).then((dat) => {
            switch (idx) {
                case 0:
                    dispatch(updateUpRanking(dat.playlist))
                    break;
                case 2:
                    dispatch(updateNewRanking(dat.playlist))
                    break;
                case 3:
                    dispatch(updateOriginRanking(dat.playlist))
                    break;
            
                default:
                    break;
            }
        })
    }
}
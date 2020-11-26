import request from './request'


export const getRecommendBanner = () => {
    return request({
        url: '/banner'
    })
}

export const getHotRecommend = (limit) => {
    return request({
        url: '/personalized',
        params: {
            limit,
        }
    })
}

export const getNewAlbum = (limit) => {
    return request({
        url: '/top/album',
        params: {
            limit,
        }
    })
}
import request from './request'

export const getRecommendBanner = () => {
    return request({
        url: '/banner'
    })
}
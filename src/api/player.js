import request from './request'


export const getSongInfo = (ids) => {
    return request({
        url: '/song/detail',
        params: {
            ids,
        }
    })
}
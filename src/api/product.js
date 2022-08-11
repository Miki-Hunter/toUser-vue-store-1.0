import request from './request'

export const toGetCatetory = () => {
    return request({
        url: '/product/getCategory/'
    })
}

export const getAllProduct = (data) => {
    return request({
        url: '/product/getAllProduct/',
        method: 'post',
        data
    })
}

export const getProductByCategory = (data) => {
    return request({
        url: '/product/getProductByCategory/',
        method: 'post',
        data
    })
}
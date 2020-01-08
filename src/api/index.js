import request from '@/utils/request'

// 首页tab数据
export function tabData (data) {
  return request({
    // 这里是你自己的请求方式、url和data参数
    method: 'post',
    url: '/tabData',
    data: data
    // 假设后台需要的是表单数据这里你就可以更改
    // headers: {
    //   'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    // }
  })
}

// 首页商品列表
export function goodsList (data) {
  return request({
    // 这里是你自己的请求方式、url和data参数
    method: 'post',
    url: '/goodsList',
    data: data
    // 假设后台需要的是表单数据这里你就可以更改
    // headers: {
    //   'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    // }
  })
}

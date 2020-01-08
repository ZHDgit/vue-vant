import request from '@/utils/request'
import { getCookie } from '@/utils/cookie'

// 登录
export function guessLickList (data) {
  return request({
    // 这里是你自己的请求方式、url和data参数
    method: 'post',
    url: '/guessLickList',
    data: data
    // 假设后台需要的是表单数据这里你就可以更改
    // headers: {
    //   'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    // }
  })
}

// 获取个人资料
export function getUserData (data) {
  return request({
    // 这里是你自己的请求方式、url和data参数
    method: 'post',
    url: '/getUserData',
    data: { token: getCookie('loginToken') }
  })
}

// import { getCookie } from './cookie'
const Mock = require('mockjs') // 获取mock对象
const Random = Mock.Random // 获取random对象，随机生成各种数据，具体请翻阅文档
const domain = 'http:/localhost:8080' // 定义默认域名
let code = 200 // 返回的状态码

// 登录
const login = res => {
  let parameter = JSON.parse(res.body) // 请求体，用于获取参数
  let data = {}
  if (parameter.userName === '11' && parameter.password === '123') {
    data.dataMessage = '登录成功'
    data.token = Random.date('T')
  } else {
    code = 417
    data.dataMessage = '登录失败'
    data.token = ''
  }
  // 返回状态码和数据
  return {
    code,
    data
  }
}
Mock.mock(`${domain}/login`, 'post', login)

// 首页tab
const tabData = req => {
  let tabList = [{
    id: 1,
    title: '首页',
    path: '/home'
  }, {
    id: 2,
    title: '男装',
    path: '/man'
  }, {
    id: 3,
    title: '女装',
    path: '/women'
  }, {
    id: 4,
    title: '日用品',
    path: '/life'
  }]
  return {
    code,
    tabList
  }
}
Mock.mock(`${domain}/tabData`, 'post', tabData)

// 商品列表
const goodsList = res => {
  let parameter = JSON.parse(res.body) // 请求体，用于获取参数
  let goodsList = []
  let finished = false
  let id = 0
  for (let i = 0; i < parameter.size; i++) {
    let goodsObj = {
      id: id += 1,
      title: Random.csentence(5, 20),
      content: Random.csentence(30, 60),
      peopleNum: Random.integer(1, 23),
      // imageUrl: Random.dataImage('240*240'),
      imageUrl: '/static/man.png',
      price: Random.integer(123, 999)
    }
    goodsList.push(goodsObj)
  }
  if (parameter.page * parameter.size > 40) {
    finished = true
  }
  return {
    code,
    goodsList,
    finished
  }
}
// 定义请求链接，类型，还有返回数据
Mock.mock(`${domain}/goodsList`, 'post', goodsList)

// 我的资料
const getUserData = res => {
  let parameter = JSON.parse(res.body) // 请求体，用于获取参数
  if (parameter.token) {
    let data = {name: '', logo: '', user: '11'}
    data.name = '张大大'
    data.logo = '/static/userLogo.png'
    return {
      code: 200,
      data
    }
  } else {
    return {
      code: 417,
      message: '未登录'
    }
  }
}
// 定义请求链接，类型，还有返回数据
Mock.mock(`${domain}/getUserData`, 'post', getUserData)

// 我的-猜你喜欢列表
const guessLickList = res => {
  let guessLickList = []
  for (let i = 0; i < 7; i++) {
    let guessLickObj = {
      title: Random.csentence(10, 30),
      price: Random.integer(100, 1000),
      // imageUrl: Random.dataImage('240*240'),
      imageUrl: '/static/women.png',
      peopleNum: Random.integer(1, 23)
    }
    guessLickList.push(guessLickObj)
  }
  return {
    code,
    guessLickList
  }
}
// 定义请求链接，类型，还有返回数据
Mock.mock(`${domain}/guessLickList`, 'post', guessLickList)

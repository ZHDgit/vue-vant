import Vue from 'vue'
import Router from 'vue-router'
import { getCookie } from '../utils/cookie'
Vue.use(Router)

var router = new Router({
  mode: 'history',
  base: '/',
  routes: [{
    path: '*',
    redirect: '/'
  }, {
    path: '',
    component: () => import('@/page/login/login')
  }, {
    path: '/home',
    meta: {
      title: '首页'
    },
    component: () => import('@/page/index/index'),
    children: [{
      path: '/home',
      name: '首页',
      component: () => import('@/page/index/childe/home')
    }, {
      path: '/man',
      name: '男装',
      component: () => import('@/page/index/childe/man')
    }, {
      path: '/women',
      name: '女装',
      component: () => import('@/page/index/childe/women')
    }, {
      path: '/life',
      name: '生活用品',
      component: () => import('@/page/index/childe/life')
    }]
  }, {
    path: '/shopping',
    meta: {
      title: '商城'
    },
    component: () => import('@/page/shopping/index')
  }, {
    path: '/cat',
    meta: {
      title: '购物车'
    },
    component: () => import('@/page/cat/index')
  }, {
    path: '/personal',
    meta: {
      title: '我的',
      requiresAuth: false
    },
    component: () => import('@/page/personal/index')
  }, {
    path: '/search',
    name: '搜索',
    component: () => import('@/page/search/search')
  }, {
    path: '/goods',
    name: '商品详情',
    component: () => import('@/page/goods/index')
  }, {
    path: '/setUp',
    meta: {
      tile: '设置',
      requiresAuth: true
    },
    component: () => import('@/page/personal/setUp/setUp')
  }, {
    path: '/editData',
    meta: {
      tile: '资料编辑',
      requiresAuth: true
    },
    component: () => import('@/page/personal/setUp/children/editData')
  }, {
    path: '/address',
    meta: {
      tile: '地址管理',
      requiresAuth: true
    },
    component: () => import('@/page/personal/setUp/children/address')
  }, {
    path: '/area',
    name: '地址',
    meta: {
      tile: '地址',
      requiresAuth: true
    },
    component: () => import('@/page/personal/setUp/children/area')
  }]
})

router.beforeEach((to, from, next) => {
  //  路由发生变化修改页面title
  if (to.meta.title) {
    document.title = to.meta.title
  }
  if (to.path === '/') {
    if (getCookie('loginToken')) {
      next({
        path: '/home'
      })
    } else {
      // 进入登录页
      next()
    }
  } else {
    //  是否需要登录
    if (to.matched.some(record => record.meta.requiresAuth)) {
      // 对路由进行验证
      if (getCookie('loginToken')) { // 已经登陆
        next() // 正常跳转到你设置好的页面
      } else {
        // 未登录则跳转到登陆界面
        next({ path: '/login' })
      }
    } else {
      next()
    }
  }
})
const routerPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return routerPush.call(this, location).catch(error => error)
}
export default router

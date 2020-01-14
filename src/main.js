// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './assets/style/reset.css'
import './assets/style/boder.css'
import './assets/style/currency.scss'
import 'lib-flexible/flexible'
import Vant from 'vant'
import 'vant/lib/index.css'
import Mock from './utils/mock'
import './assets/icon/font_qs87nmnao5o/iconfont.css'
/* eslint-disable */
import './assets/icon/font_qs87nmnao5o/iconfont.js'
/* eslint-enable */
Vue.use(Vant)

Vue.config.productionTip = false


router.beforeEach((to, from, next) => {
  // chrome
  document.body.scrollTop = 0
  // firefox
  document.documentElement.scrollTop = 0
  // safari
  window.pageYOffset = 0
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  Mock,
  components: {
    App
  },
  template: '<App/>'
})

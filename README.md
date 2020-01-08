# 基于vue+vant H5商城

### 项目初衷

自己闲来无聊练练手。

### 主要功能
1. 常用目录别名
2. Vant/Rem适配
3. scss支持
7. mock
8. axios封装、api管理
12. 生产环境优化

### 下载运行打包
#### 安装依赖
npm install

#### 运行项目
npm run dev

#### 打包项目
npm run build

```
### Vant/Rem适配
按照Vant官网推荐自动按需引入组件，同样，Vant官网中也有对Rem适配的推荐配置，按照官网说明的使用。需要注意的是postcss的配置中，autoprefixer下的`browsers`需要替换成`overrideBrowserslist`，否则会有报错信息。<br>
```js
{
    plugins: {
    'autoprefixer': {
      overrideBrowserslist: [
        'Android 4.1',
        'iOS 7.1',
        'Chrome > 31',
        'ff > 31',
        'ie >= 8'
      ]
    },
    'postcss-pxtorem': {
      rootValue: 37.5, // 设计稿750px
      propList: ['*']
    }
  }
}
```
### scss支持
选择scss作为css预处理。
```js
css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: !!IS_PRODUCTION,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    // 启用 CSS modules for all css / pre-processor files.
    modules: false,
    loaderOptions: {
      sass: {
        data: '@import "style/_mixin.scss";@import "style/_variables.scss";@import "style/common.scss";' // 全局引入
      }
    }
  }
```

### mock server

Mock server部分可直接参看[vue-element-admin](https://panjiachen.gitee.io/vue-element-admin-site/zh/guide/essentials/mock-api.html)的mock方案

### axios封装

axios部分，配置了baseUrl、超时时间，利用拦截器对header添加了用户的Token，方便下一步的用户鉴权，并对错误做了Toast提示。具体错误的code需要视各业务而定，本项目只做为示例参考。

### 用户鉴权
在`vue-router`的`beforeEach`中，添加用户鉴权功能。当用户登录后使用cookie持续化保存用户token，并赋值到vuex，后续可利用token获取用户信息。具体代码如下图：
![permission](http://img.cixi518.com/permission.png)
### vuex-loading
在vuex3.1.0中对[vuex.subscribeAction](https://vuex.vuejs.org/zh/api/#subscribe)做了改动，使其拥有了before/after钩子函数。
```js
// subscribeAction官网示例
store.subscribeAction({
  before: (action, state) => {
    console.log(`before action ${action.type}`)
  },
  after: (action, state) => {
    console.log(`after action ${action.type}`)
  }
})
```
有了它，配合`vuex`的[插件](https://vuex.vuejs.org/zh/guide/plugins.html)功能，实现对应action的状态监听也不再是难题。

[点击查看具体实现代码](https://github.com/Ljhhhhhh/h5vue/blob/master/src/utils/vuex-loading.js)

> 参照自[vue 在移动端体验上的优化解决方案](https://juejin.im/post/5cdd2457f265da034e7eb2f9#heading-2)

```vue
// 使用方法
computed: {
  ...mapState({
    loading: state => state['@@loading'].effects['test/onePlusAction']
  })
}
// 其中 test对应的是vuex中的模块名，onePlusAction对应模块内的actions
```
具体效果：<br>![loading](http://img.cixi518.com/loading.gif)

实现效果：<br>
![vo-pages](http://img.cixi518.com/Kapture%202019-10-27%20at%2013.36.21.gif)

### 生产环境优化
上线前，得优化一下资源了，该项目做了如下几步操作
1. 通用库改用CDN
2. 关闭sourcemap防止源码泄露
3. 丑化html/css/js
4. 生成gzip 
5. 移除掉debugger/console
6. 利用webpack-bundle-analyzer做资源分析，提供进一步优化的数据分析
想对性能、资源了解更多的，推荐[Vue SPA 项目webpack打包优化指南](https://juejin.im/post/5bd2b60e6fb9a05d27794c5e)这篇文章。

### 更多
花了不少时间开发了这个项目，希望能提高您的H5开发效率。也欢迎大家跟我一起交流学习。

### 相关链接
* [源码地址](https://github.com/ZHDgit/vue-vant.git)

### 文章参考
* [基于vue-cli3.0构建功能完善的移动端架子](https://juejin.im/post/5cbf32bc6fb9a03236393379)
* [Vue SPA 项目webpack打包优化指南](https://juejin.im/post/5bd2b60e6fb9a05d27794c5e)
* [vue 在移动端体验上的优化解决方案](https://juejin.im/post/5cdd2457f265da034e7eb2f9)
* [手摸手，带你优雅的使用 icon](https://juejin.im/post/59bb864b5188257e7a427c09)
* [一款易用、高可定制的vue翻页组件](https://juejin.im/post/5d81da4551882556ba55e50e)



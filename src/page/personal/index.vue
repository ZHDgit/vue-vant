<template>
<div class='personal-body'>
  <div class="logo-box">
    <van-image
      round
      width="1.2rem"
      height="1.2rem"
      :src="logoImg"
      class="logo-img"
      @click="goSetUp"
    />
    <div v-if="userName" class="user-name-box">{{userName}}</div>
    <div v-else class="user-name-box">请登录</div>
  </div>
  <div class="flex-layout-lr padding suspension-box" v-if="(loginStatus && suspension)">
    <div class="flex-layout-l">
      <van-image
        round
        width="1.2rem"
        height="1.2rem"
        :src="logoImg"
        class="logo-img"
      />
      <div class="user-name">
        <p class="font-size-26">{{userName}}</p>
        <p class="font-size-24 color999">会员名：{{user}}</p>
      </div>
    </div>
    <div class="icon-box" @click="goSetUp">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-shezhi"></use>
      </svg>
    </div>
  </div>
  <div class="main-box">
    <div class="main-item">
      <div class="main-tilte-box">
        <p>我的订单</p>
        <p class="flex-layout-r-c">查看全部<van-icon name="arrow" /></p>
      </div>
      <div class="main-item-content">
        <div class="main-item-content-item">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-jinqian-"></use>
          </svg>
          <p>返现订单</p>
        </div>
        <div class="main-item-content-item">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-weifukuan"></use>
          </svg>
          <p>待付款</p>
        </div>
        <div class="main-item-content-item">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-xiaoshoufahuo"></use>
          </svg>
          <p>待发货</p>
        </div>
        <div class="main-item-content-item">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-yifahuo"></use>
          </svg>
          <p>待收货</p>
        </div>
      </div>
    </div>
    <div class="main-item">
      <div class="main-tilte-box">
        <p>常用功能</p>
      </div>
      <div class="main-item-content">
        <div class="main-item-content-item">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-dingdan"></use>
          </svg>
          <p>我的订单</p>
        </div>
        <div class="main-item-content-item">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-dianpu"></use>
          </svg>
          <p>关注店铺</p>
        </div>
        <div class="main-item-content-item">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shoucang"></use>
          </svg>
          <p>我的收藏</p>
        </div>
        <div class="main-item-content-item">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-jiaoyin"></use>
          </svg>
          <p>浏览历史</p>
        </div>
      </div>
    </div>
    <div class="main-item">
      <div class="main-tilte-box">
        <p>必备工具</p>
      </div>
      <div class="main-item-content">
        <div class="main-item-content-item">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-huiyuanjifen"></use>
          </svg>
          <p>积分</p>
        </div>
        <div class="main-item-content-item">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-fenxiang"></use>
          </svg>
          <p>分享</p>
        </div>
        <div class="main-item-content-item">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-navigation__e"></use>
          </svg>
          <p>领劵指南</p>
        </div>
        <div class="main-item-content-item">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-kefu"></use>
          </svg>
          <p>客服反馈</p>
        </div>
        <div class="main-item-content-item">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-xingxing"></use>
          </svg>
          <p>五星好评</p>
        </div>
        <div class="main-item-content-item">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shezhi"></use>
          </svg>
          <p>设置</p>
        </div>
      </div>
    </div>
  </div>
  <div class="guess-like">
    <div class="guess-title">
      <p>.....<span class="big">.</span></p>
      <p class="text">猜你喜欢</p>
      <p><span class="big">.</span>.....</p>
    </div>
    <div class="guess-like-box">
      <div v-for="(item, index) in guessLickList" :key="index" class="guess-like-item" @click="goGoods(item.id)">
        <div class="item-image">
          <van-image :src="item.imageUrl"></van-image>
        </div>
        <div class="item-title">
          <span class="item-title-bao">包邮</span>
          <span>{{item.title}}</span>
        </div>
        <div class="item-price-num">
          <p class="item-price">￥<span>{{item.price}}</span></p>
          <p>{{item.peopleNum}}万人付款</p>
        </div>
      </div>
    </div>
  </div>
  <footerBar/>
</div>
</template>

<script>
import footerBar from '@/components/footerBar'
import { guessLickList, getUserData } from '@/api/personal'
export default {
  components: {
    footerBar
  },
  data () {
    return {
      logoImg: '', // 默认logo图像
      userName: '', // 用户名
      user: '', // 账户名
      loginStatus: false, // 是否登陆
      suspension: false, // 上拉悬浮框是否显示状态
      guessLickList: [] // 猜你喜欢列表
    }
  },
  computed: {},
  // 监控data中的数据变化
  watch: {},
  methods: {
    // 进入我的资料页面
    goSetUp () {
      this.$router.push({ path: '/setUp' })
    },
    // 进入商品详情页
    goGoods () {
      this.$router.push({path: '/goods'})
    }
  },
  // 生命周期 - 创建之前
  beforeCreate () {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {
    let that = this
    // 获取猜你喜欢数据
    guessLickList().then(res => {
      if (res.data.code === 200) {
        that.guessLickList = res.data.guessLickList
      }
    })
    // 判断是否登录
    getUserData().then(res => {
      if (res.data.code === 200) {
        that.loginStatus = true
        that.userName = res.data.data.name
        that.logoImg = res.data.data.logo
        that.user = res.data.data.user
      } else {
        that.loginStatus = false
        that.userName = ''
        that.logoImg = '/static/default.jpg'
      }
    })
    window.addEventListener('scroll', function () {
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop > 80) {
        that.suspension = true
      } else {
        that.suspension = false
      }
    })
  },
  // 生命周期 - 挂载之前
  beforeMount () {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {},
  // 生命周期 - 更新之前
  beforeUpdate () {},
  // 生命周期 - 更新之后
  updated () {},
  // 生命周期 - 销毁之前
  beforeDestroy () {},
  // 生命周期 - 销毁完成
  destroyed () {},
  // 如果页面有keep-alive缓存功能，这个函数会触发
  activated () {}
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.personal-body{
  background: #f2f2f2;
}
.logo-box{
  width: 100%;
  background-size: 100% auto;
  background-repeat: no-repeat;
  background: url('/static/b3.png');
  height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  margin-bottom:20px;
  .logo-img{
    box-shadow: 0 0 0 4px rgba(255, 255, 255, .8);
  }
  .user-name-box{
    height: 30px;
    line-height: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 15px;
    .icon{
      font-size: 20px;
      margin-left: 2px;
    }
  }
}
.suspension-box{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 4;
  width: 100%;
  padding: 20px 15px;
  background: #fff;
  .user-name{
    margin-left: 4px;
  }
  .icon-box{
    text-align: right;
    width: 80px;
    height: 50px;
    padding: 10px 0;
    line-height: 50px;
    .icon {
      width: 30px;
      height: 30px;
    }
  }
}
.main-box{
  width: 100%;
  font-size: 15px;
  color: #333;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .main-item{
    width: 92%;
    border-radius: 5px;
    border: 2px solid #fff;
    box-sizing: border-box;
    margin-bottom: 12px;
    .main-tilte-box{
      background: #fff;
      padding: 0 15px;
      width: 100%;
      height: 50px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2px;
    }
    .main-item-content{
      background: #fff;
      padding: 0 15px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      .main-item-content-item{
        width: 25%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 15px 0;
        .icon{
          width: 35px;
          height: 40px;
          line-height: 40px;
          text-align: center;
          font-size: 28px;
          margin-bottom: 8px;
          color: #fe371f;
        }
        p{
          height: 20px;
          line-height: 20px;
        }
      }
    }
  }
}
.guess-like{
  padding-bottom: 60px;
  font-size: 15px;
  color: #333;
  .guess-title{
    color: #fe371f;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 30px;
    line-height: 30px;
    .big{
      font-size: 30px;
    }
    .text{
      height: 30px;
      line-height: 40px;
      margin: 0 4px;
    }
  }
  .guess-like-box{
    padding: 0 15px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    .guess-like-item{
      width: 48%;
      background: #fff;
      margin-top: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 5px;
      .item-image{
        margin: 10px 0;
        width: 150px;
        height: 148px;
        .van-image{
          width: 148px;
          height: 148px;
        }
      }
      .item-title{
        padding: 0 8px;
        font-size: 14px;
        color: #333;
        display:-webkit-box;
        overflow:hidden;
        text-overflow:ellipsis;
        -webkit-line-clamp:2;
        -webkit-box-orient:vertical;
        .item-title-bao{
          color: #fff;
          background: #fe371f;
          padding: 0 2px;
        }
      }
      .item-price-num{
        height: 40px;
        line-height: 40px;
        width: 100%;
        padding: 0 8px;
        font-size: 13px;
        color: #999;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .item-price{
          color: #ff6600;
          span{
            font-size: 18px;
          }
        }
      }
    }
    .guess-like-item:nth-child(2n+1){
      margin-right: 4%;
    }
  }
}
</style>

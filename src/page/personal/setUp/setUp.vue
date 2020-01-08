<template>
<div class='bodyBackground'>
  <van-nav-bar
    class="back-box"
    title="设置"
    left-arrow
    @click-left="onClickLeft"
  />
  <div @click="goEditData" class="line-item flex-item flex-layout-lr padding back-box-bottom">
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
    <van-icon name="arrow" class="icon" />
  </div>
  <div class="line-item flex-item flex-layout-lr" @click="goAddress">
    <p class="text font-size-28">地址管理</p>
    <van-icon name="arrow" class="icon" />
  </div>
  <div class="line-item flex-item flex-layout-lr">
    <p class="text font-size-28">问题反馈</p>
    <van-icon name="arrow" class="icon" />
  </div>
  <div class="line-item flex-item flex-layout-lr">
    <p class="text font-size-28">关于商城</p>
    <van-icon name="arrow" class="icon" />
  </div>
  <div class="line-item flex-item flex-layout-r-c" @click="signOut">
    <p class="text font-size-28">退出登录</p>
  </div>
  <reminder @determine="determine" @cancel="cancel" :show="show" :title="title"/>
</div>
</template>

<script>
import { getUserData } from '@/api/personal'
import { removeCookie } from '@/utils/cookie'
import reminder from '@/components/reminder'
export default {
  components: {
    reminder
  },
  data () {
    return {
      logoImg: '', // 用户头像
      userName: '', // 用户名称
      user: '', // 用户账户
      show: false, // 提示框显示状态
      title: '是否确定退出' // 提示框提示标题
    }
  },
  computed: {},
  // 监控data中的数据变化
  watch: {},
  methods: {
    // 返回上一页
    onClickLeft () {
      this.$router.go(-1)
    },
    // 进入个人资料编辑
    goEditData () {
      this.$router.push({ path: '/editData' })
    },
    // 进入地址管理
    goAddress () {
      this.$router.push({ path: '/address' })
    },
    // 提示框点击确定事件
    determine () {
      removeCookie('loginToken')
      this.$router.push({path: '/personal'})
      this.show = false
    },
    // 提示框点击取消事件
    cancel () {
      this.show = false
    },
    // 退出登录
    signOut () {
      this.show = true
    }
  },
  // 生命周期 - 创建之前
  beforeCreate () {
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {
    // 获取资料
    getUserData().then(res => {
      if (res.data.code === 200) {
        this.userName = res.data.data.name
        this.logoImg = res.data.data.logo
        this.user = res.data.data.user
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
.flex-item{
  margin-bottom: 10px;
  .user-name{
    margin-top: 10px;
    margin-left: 10px;
  }
}
.padding{
  padding: 10px 15px;
}
</style>

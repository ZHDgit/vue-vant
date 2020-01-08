<template>
<div class='bodyBackground'>
  <van-nav-bar
    class="back-box"
    title="编辑资料"
    left-text="取消"
    right-text="完成"
    @click-left="onClickLeft"
    @click-right="onClickRight"
  />
  <div class="flex-layout-c-c logo-box back-box-bottom">
    <van-image
        round
        width="2.2rem"
        height="2.2rem"
        :src="logoImg"
        class="logo-img"
      />
      <p class="ff660">更换头像</p>
  </div>
  <div class="line-item flex-item flex-layout-l">
    <p class="font-size-28 text-width">昵称</p>
    <van-field v-model="userName" placeholder="请输入用户名" />
  </div>
  <div class="line-item flex-item flex-layout-l">
    <p class="font-size-28 text-width">用户名</p>
    <p class="color999">{{user}}</p>
  </div>
  <div class="line-item flex-item flex-layout-lr" @click="showPicker = true">
    <div class="font-size-28 flex-layout-l">
      <p class="text-width">性别</p>
      <p class="color999">{{sex}}</p>
    </div>
    <van-icon name="arrow" class="icon" />
  </div>
  <van-popup v-model="showPicker" position="bottom">
  <van-picker
    show-toolbar
    :columns="columns"
    @cancel="showPicker = false"
    @confirm="onConfirm"
  />
</van-popup>
</div>
</template>

<script>
import { getUserData } from '@/api/personal'
export default {
  components: {},
  data () {
    return {
      logoImg: '', // 用户头像
      userName: '', // 用户名称
      user: '', // 用户账户
      showPicker: false, // picker显示状态
      columns: ['男', '女'], // picker数据
      sex: '男' // piker显示文本
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
    // 保存按钮事件
    onClickRight () {
    },
    // 性别更改
    onConfirm (value) {
      this.sex = value
      this.showPicker = false
    }
  },
  // 生命周期 - 创建之前
  beforeCreate () {},
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
.logo-box{
  padding: 20px 0;
  background: #fff;
}
.flex-item{
  .text-width{
    width: 100px;
  }
  .user-name{
    margin-top: 20px;
    margin-left: 20px;
  }
}
</style>

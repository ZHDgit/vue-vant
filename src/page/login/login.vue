<template>
  <div class="login-body">
    <p class="login-title">Welcome</p>
    <div class="login-box">
      <div class="login-from">
        <div class="input-box">
          <van-field v-model="userName" placeholder="请输入用户名" class="input-width" />
        </div>
        <div class="input-box">
          <van-field type="password" v-model="password" placeholder="请输入密码" class="input-width" />
        </div>
        <div class="input-width login-btn" @click="login">
          立即登录
          <van-loading v-if="loadingStatus" type="spinner" color="blue" />
        </div>
        <div class="footer-box">
          <p>立即注册</p>
          <p class="margin-l-r">|</p>
          <p>忘记密码</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios' // 引入 axios库
import { login } from '@/api/login'
import { setCookie } from '@/utils/cookie'
export default {
  name: 'login',
  data () {
    return {
      loadingStatus: false, // 加载动画状态
      userName: '', // 用户名
      password: '' // 密码
    }
  },
  methods: {
    // 登录事件
    login () {
      this.loadingStatus = true
      login({userName: this.userName, password: this.password}).then(res => {
        this.loadingStatus = false
        if (res.data.code === 200) {
          setCookie('loginToken', res.data.data.token)
          console.log(123456)
          axios.get('/mock/data.json').then(res => {
            localStorage.goodsData = JSON.stringify(res.data.goodsData)
          })
          this.$toast('登录成功')
          this.$router.push({ path: '/home' })
        } else {
          this.$toast('登录失败')
        }
      })
    }
  }
}
</script>

<style scoped>
.van-cell {
  background: none;
}
.van-field__control {
  color: #fff;
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.login-body {
  position: fixed;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom right,
    #67c8b7,
    #58afc2,
    #4e98bf,
    #3b7ecc
  );
  color: #fff;
}
.login-title {
  width: 100%;
  font-size: 26px;
  text-align: center;
  margin-top: 160px;
  margin-bottom: 50px;
}
.login-box {
  width: 100%;
  display: flex;
  justify-content: center;
  .login-from {
    width: 345px;
    .input-box {
      margin-bottom: 20px;
    }
    .login-btn {
      justify-content: center;
      font-size: 13px;
    }
    .footer-box {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      align-content: center;
      font-size: 12px;
      margin-top: 10px;
      .margin-l-r {
        padding: 0 4px;
      }
    }
  }
}
.input-width {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 2px 5px;
  width: 345px;
  border: 2px solid #fff;
  border-radius: 20px;
  height: 40px;
  line-height: 40px;
  margin: 0 auto;
}
</style>

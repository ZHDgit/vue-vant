<template>
     <div class="footer-box-body">
      <router-link v-for="(item, index) in nav" :to=item.router active-class="active" class="tab" :key="index">
        <van-icon :name="item.class" class="icon" />
        <span class="content">{{item.desc}}</span>
      </router-link>
    </div>
</template>

<script>
export default {
  data () {
    return {
      nav: [
        {
          router: '/home',
          class: 'wap-home-o',
          desc: '首页'
        },
        {
          router: '/shopping',
          class: 'shop-o',
          desc: '商城'
        },
        {
          router: '/cat',
          class: 'cart-o',
          desc: '购物车'
        },
        {
          router: '/personal',
          class: 'friends-o',
          desc: '我的'
        }
      ]
    }
  }
}
</script>
<style lang="scss">
.footer-box-body{
  z-index: 999999;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  background: #fff;
  border-top: 2px solid #333;
  .tab{
    width: 25%;
    text-align: center;
    color: #666;
    font-size: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    .icon{
      font-size: 23px;
    }
    .content{
    }
  }
  .active{
    color: red;
  }
}
</style>

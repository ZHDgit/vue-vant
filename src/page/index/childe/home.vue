<template>
<div class='childe-body'>
  <van-swipe :autoplay="3000" indicator-color="white" class="swiper-box">
      <van-swipe-item>
        <van-image src='/static/banner.png' class="img" />
      </van-swipe-item>
      <van-swipe-item>
        <van-image src='/static/banner2.png' class="img" />
      </van-swipe-item>
    </van-swipe>
    <van-grid :border="false" :column-num="5" class="grid-box">
      <van-grid-item>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-rexiao-"></use>
        </svg>
        <p>热销</p>
      </van-grid-item>
      <van-grid-item>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-cuxiaohuodong"></use>
        </svg>
        <p>促销</p>
      </van-grid-item>
      <van-grid-item>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-nanzhuang"></use>
        </svg>
        <p>男装</p>
      </van-grid-item>
      <van-grid-item>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-danfan"></use>
        </svg>
        <p>数码</p>
      </van-grid-item>
      <van-grid-item>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-qingjie"></use>
        </svg>
        <p>生活用品</p>
      </van-grid-item>
    </van-grid>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="upData" class="footerBotom">
      <div class="goods-list-box">
        <div class="goods-box" v-for="(item, index) in goodsList" :key="index" @click="goGoods(item.id)">
          <div class="image-box">
            <van-image :src="item.imageUrl" />
          </div>
          <div>
            <div class="content-box">
              <p class="title">{{item.title}}</p>
              <p class="content">{{item.content}}</p>
            </div>
            <div class="price-box">
              <p>￥<span class="price">{{item.price}}</span></p>
              <p class="people">{{item.peopleNum}}万人浏览</p>
            </div>
          </div>
        </div>
      </div>
    </van-list>
</div>
</template>

<script>
import { goodsList } from '@/api/index'
export default {
  components: {},
  data () {
    return {
      goodsNumber: 10, // 一页商品数量
      page: 0, // 页数
      loading: false, // 上拉加载状态
      finished: false, // 无更多数据状态提示
      goodsList: [] // 商品列表数据
    }
  },
  computed: {},
  // 监控data中的数据变化
  watch: {},
  methods: {
    // 上拉加载更多商品
    upData () {
      setTimeout(() => {
        this.getGoodsList({page: this.page += 1, size: this.goodsNumber})
      }, 600)
    },
    // 商品点击
    goGoods () {
      this.$router.push({ path: '/goods' })
    },
    // 获取商品列表
    getGoodsList (data) {
      goodsList(data).then(res => {
        if (res.data.code === 200) {
          if (this.page === 1) {
            this.goodsList = res.data.goodsList
          } else {
            this.goodsList.push.apply(this.goodsList, res.data.goodsList)
          }
          // 数据全部加载完成
          this.finished = res.data.finished
          // 加载状态结束
          this.loading = false
        }
      })
    }
  },
  // 生命周期 - 创建之前
  beforeCreate () {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {
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
.childe-body{
  width: 100%;
}
.swiper-box{
 margin-top: 10px;
 z-index: 2;
 .img{
   width: 100%;
   height: 160px;
 }
}
.grid-box{
  .icon{
    width: 40px;
    height: 40px;
  }
}
.goods-list-box{
  .goods-box{
    width: 100%;
    padding-top: 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    .image-box{
      width: 120px;
      height: 120px;
      .van-image{
        width: 120px;
        height: 120px;
      }
    }
    .content-box{
      padding: 0 5px;
      .title{
        box-sizing: border-box;
        line-height: 17px;
        font-size: 14px;
        color: #333;
        font-weight: 600;
        margin: 10px 0;
        display:-webkit-box;
        overflow:hidden;
        text-overflow:ellipsis;
        -webkit-line-clamp:1;
        -webkit-box-orient:vertical;
      }
      .content{
        height: 40px;
        line-height: 20px;
        display:-webkit-box;
        overflow:hidden;
        text-overflow:ellipsis;
        -webkit-line-clamp:2;
        -webkit-box-orient:vertical;
        color: #999;
        font-size: 12px;
      }
    }
    .price-box{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      height: 30px;
      line-height: 30px;
      padding: 0 5px;
      font-size: 12px;
      margin-top: 12px;
      .price{
        font-size: 16px;
        color: red;
      }
      .people{
        font-size: 12px;
        color: #999;
      }
    }
  }
}
</style>

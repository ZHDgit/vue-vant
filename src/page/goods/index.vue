<template>
<div class='goods-body'>
  <van-nav-bar
    class="back-box"
    title="商品详情"
    left-arrow
    @click-left="onClickLeft"
  />
  <van-swipe indicator-color="white" class="swiper-box back-box-bottom">
    <van-swipe-item>
      <van-image src='/static/banner.png' class="img" />
    </van-swipe-item>
    <van-swipe-item>
      <van-image src='/static/banner2.png' class="img" />
    </van-swipe-item>
  </van-swipe>
  <div class="padding30 font-size-30 title-box">
    <p>商品title,手机移动端商城商品详情页面html模板，简洁仿淘宝宝贝介绍详情页面wap模板下载。</p>
    <p class="price">￥101</p>
  </div>
  <div class="flex-layout-lr padding30 specs-box font-size-30">
    <p>规格选择</p>
    <van-icon name="weapp-nav"/>
  </div>
  <div class="evaluate-box padding30">
    <div class="flex-layout-lr evaluate-herder-box font-size-30">
      <p>用户评价(<span>2001</span>)</p>
      <div class="flex-layout-l ff660">
        <p class="text">查看全部</p>
        <van-icon name="arrow"/>
      </div>
    </div>
    <div class="flex-layout-lr evaluate-lable">
      <p>质量不错(1002)</p>
      <p>板式好(702)</p>
      <p>穿的好看(902)</p>
    </div>
    <div class="evaluate-content">
      <div class="logo-name flex-layout-l">
        <van-image src='/static/userLogo.png' round class="img" />
        <p class="name font-size-26 color999">用***名</p>
      </div>
      <p class="evaluate-text">
        评价，欢迎光临本店，您的支持是我们最大的前进动力，本店所有产品均低价销售，并且保证质量，需要的亲请放心购买，我们一定会给您一个最舒心的购物体验!
      </p>
    </div>
  </div>
  <div class="shop-box">
    <van-image src="/static/logo.png" class="img" />
    <div class="content-box">
      <p>店铺名字</p>
      <p class="synopsis">大家好欢迎大家光临本店，很高兴认识各位朋友哦！本店XX品牌服装产品全部来自厂家正规网络代理渠道，以最直接有效的方式送达最终端消费者手里</p>
    </div>
  </div>
  <div class="goods-detail">
    <p class="title font-size-30">商品详情</p>
    <div>
      <van-image src='/static/banner.png' />
      <van-image src='/static/banner2.png' />
      <van-image src='/static/logo.png' />
    </div>
  </div>
  <van-goods-action class="goods-action">
    <van-goods-action-icon icon="chat-o" text="客服" class="icon" />
    <van-goods-action-icon icon="shop-o" text="店铺" class="icon" />
    <van-goods-action-button color="#be99ff" type="warning" text="加入购物车" class="btn" @click="addCat" />
    <van-goods-action-button color="#7232dd" type="danger" text="立即购买" class="btn" @click="buy" />
  </van-goods-action>
  <van-sku
    v-model="show"
    stepper-title="我要买"
    :sku="sku"
    :goods="goods"
    :goods-id="goodsId"
    :quota="quota"
    :quota-used="quotaUsed"
    :hide-stock="sku.hide_stock"
    show-add-cart-btn
    reset-stepper-on-hide
    :initial-sku="initialSku"
    @buy-clicked="onBuyClicked"
    @add-cart="onAddCartClicked"
    class="sku-box"
  >
    <!-- 自定义 sku-header-price -->
    <template slot="sku-header-price" slot-scope="props">
      <div class="van-sku__goods-price">
        <span class="van-sku__price-symbol">￥</span><span class="van-sku__price-num">{{ props.price }}</span>
      </div>
    </template>

    <!-- 自定义 sku actions -->
    <template slot="sku-actions" slot-scope="props">
      <div class="van-sku-actions">
        <van-button
          square
          size="large"
          type="warning"
          @click="onPointClicked"
        >
          加入购物车
        </van-button>
        <!-- 直接触发 sku 内部事件，通过内部事件执行 onBuyClicked 回调 -->
        <van-button
          square
          size="large"
          type="danger"
          @click="props.skuEventBus.$emit('sku:buy')"
        >
          立即购买
        </van-button>
      </div>
    </template>
  </van-sku>
</div>
</template>

<script>
export default {
  data () {
    return {
      show: false,
      sku: {
        // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
        // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
        tree: [
          {
            k: '颜色', // skuKeyName：规格类目名称
            v: [
              {
                id: '30349', // skuValueId：规格值 id
                name: '红色', // skuValueName：规格值名称
                imgUrl: '/static/banner.png', // 规格类目图片，只有第一个规格类目可以定义图片
                previewImgUrl: '/static/banner.png' // 用于预览显示的规格类目图片
              },
              {
                id: '1215',
                name: '蓝色',
                imgUrl: '/static/banner2.png',
                previewImgUrl: '/static/banner2.png'
              }
            ],
            k_s: 's1' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
          }
        ],
        // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
        list: [
          {
            id: 2259, // skuId，下单时后端需要
            price: 100, // 价格（单位分）
            s1: '1215', // 规格类目 k_s 为 s1 的对应规格值 id
            s2: '1193', // 规格类目 k_s 为 s2 的对应规格值 id
            s3: '0', // 最多包含3个规格值，为0表示不存在该规格
            stock_num: 110 // 当前 sku 组合对应的库存
          }
        ],
        price: '1.00', // 默认价格（单位元）
        stock_num: 227, // 商品总库存
        collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
        none_sku: false, // 是否无规格商品
        hide_stock: false // 是否隐藏剩余库存
      },
      goods: {
        // 商品标题
        title: '测试商品',
        // 默认商品 sku 缩略图
        picture: '/static/logo.png'
      },
      messageConfig: {
        // 数据结构见下方文档
      },
      goodsId: '',
      quota: 0,
      quotaUsed: 0,
      initialSku: {
        // 键：skuKeyStr（sku 组合列表中当前类目对应的 key 值）
        // 值：skuValueId（规格值 id）
        s1: '30349',
        s2: '1193',
        // 初始选中数量
        selectedNum: 1
      }
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
    // 页面底部加入购物车事件
    addCat () {
      this.show = true
    },
    // 页面底部立即购买事件
    buy () {
      this.show = true
    },
    // 商品规格购买事件
    onBuyClicked () {

    },
    // 商品规格点击加入购物按钮
    onAddCartClicked () {},
    customStepperConfig: {
      // 自定义限购文案
      quotaText: '每次限购xxx件',
      // 自定义步进器超过限制时的回调
      handleOverLimit: (data) => {
        const { action, limitType, quota, quotaUsed } = data
        if (action === 'minus') {
          this.$toast('至少选择一件商品')
        } else if (action === 'plus') {
          // const { LIMIT_TYPE } = Sku.skuConstants;
          // eslint-disable-next-line no-undef
          if (limitType === LIMIT_TYPE.QUOTA_LIMIT) {
            let msg = `单次限购${quota}件`
            if (quotaUsed > 0) msg += `，你已购买${quotaUsed}`
            this.$toast(msg)
          } else {
            this.$toast('库存不够了')
          }
        }
      },
      // 步进器变化的回调
      // handleStepperChange: currentValue => {},
      // 库存
      stockNum: 1999,
      // 格式化库存
      // stockFormatter: stockNum => {}
    },
    // 商品规格点击购买事件 触发onBuyClicked
    onPointClicked () {

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
.swiper-box{
  z-index: 2;
  .img{
   width: 100%;
   height: 210px;
 }
}
.title-box{
  margin-top: 30px;
  border-bottom: 10px solid #f2f2f2;
  .price{
    color: red;
    font-size: 20px;
    line-height: 40px;
  }
}
.specs-box{
  border-bottom: 10px solid #f2f2f2;
  line-height: 1.2rem;
}
.evaluate-box{
  border-bottom: 10px solid #f2f2f2;
  .evaluate-herder-box{
    line-height: 1rem;
    .text{
      margin-right: 4px;
    }
  }
  .evaluate-lable{
    p{
      font-size: 12px;
      background: rgba(239,181,181,0.2);
      color: #808080;
      padding: 8px 14px;
      border-radius: 20px;
    }
  }
  .evaluate-content{
    padding-bottom: 20px;
    .logo-name{
      margin: 10px 0;
      .img{
        width: 20px;
        height: 20px;
      }
      .name{
        margin-left: 5px;
      }
    }
    .evaluate-text{
      display:-webkit-box;
      overflow:hidden;
      text-overflow:ellipsis;
      -webkit-line-clamp:2;
      -webkit-box-orient:vertical;
    }
  }
}
.shop-box{
  border-bottom: 10px solid #f2f2f2;
  padding: 5px 15px;
  display: flex;
  flex-direction: row;
  .img{
    width: 50px;
    height: 50px;
  }
  .content-box{
    width: calc(100% - 100px);
    margin-left: 10px;
    .synopsis{
      margin-top: 5px;
      line-height: 20px;
    }
  }
}
.goods-detail{
  margin-bottom: 1.4rem;
  .title{
    line-height: 0.8rem;
    width: 100%;
    text-align: center;
    background: #ccc;
  }
}
.goods-body{
  .sku-box{
    min-height: 80%;
    .van-sku-header-item{
      line-height: 0.8rem;
    }
  }
  .goods-action{
    height: 100px;
    .icon{
      font-size: 26px;
      height: 100px;
      .van-goods-action-icon__icon{
        font-size: 24px;
      }
    }
    .btn{
      height: 60px;
    }
    .van-goods-action-icon {
      width: 80px;
    }
  }
}
</style>

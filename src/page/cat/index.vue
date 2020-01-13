<template>
<div class=''>
  <van-nav-bar
    class="back-box"
    title="购物车"
    right-text="删除"
    @click-right="onClickRight"
  />
  <div class="cart-data-box">
    <van-checkbox-group ref="checkboxCart" v-model="result" class="back-box-bottom">
      <van-checkbox :name="itemData.id" class="cart-checkbox" v-for="(itemData,index) in cartData" :key="index">
        <van-card
          class="cart-item"
          :num="itemData.number"
          :price="itemData.price"
          :desc="itemData.content"
          :title="itemData.title"
          :thumb="itemData.img"
          @click="checkboxFunc(itemData)"
        >
          <div slot="footer">
            <van-button size="mini" @click.stop="numReduce(itemData.number,index)">-</van-button>
            <van-button size="mini" @click.stop="numAdd(itemData.number,index)">+</van-button>
          </div>
        </van-card>
      </van-checkbox>
    </van-checkbox-group>
  </div>
  <van-checkbox v-model="checked" class="checkbox-all" @change="election">
    <span class="text">全选</span>
    <div class="price-all">
      <span>总价：{{ priceAll }}</span>
      <van-button size="mini" @click.stop="settlement()" class="btn">结算</van-button>
    </div>
  </van-checkbox>
  <footerBar/>
</div>
</template>

<script>
import footerBar from '@/components/footerBar'
export default {
  components: {
    footerBar
  },
  data () {
    return {
      result: [],// 商品列表选中的商品id集合
      cartData: [
        { id: 1, title: '标题1', content: '内容', price: 30.00, number: 10, img: "https://img.yzcdn.cn/vant/t-thirt.jpg",check: false },
        { id: 2, title: '标题2', content: '内容', price: 30.00, number: 10, img: "https://img.yzcdn.cn/vant/t-thirt.jpg", check: false },
        { id: 3, title: '标题3', content: '内容', price: 30.00, number: 10, img: "https://img.yzcdn.cn/vant/t-thirt.jpg", check: false }
      ],// 商品数据
      checked: false // 全选反选
    }
  },
  computed: {
    priceAll() {
      let priceAll = 0
      this.cartData.forEach(item => {
        if(item.check){
          priceAll += item.number * item.price
        }
      })
      return priceAll
    }
  },
  // 监控data中的数据变化
  watch: {},
  methods: {
    // 删除商品
    onClickRight () {
    },
    // 选择商品
    checkboxFunc(item,index) {
      item.check = !item.check
      this.$set(item, 'check', item.check)
    },
    // 全选全消
    election(e) {
      this.$refs.checkboxCart.toggleAll(e)
      this.cartData.forEach(item => {
          item.check = e
      })
    },
    // 商品数量++
    numAdd(number,index) {
      number++
      this.$set(this.cartData[index], 'number', number)
    },
    // 商品数量--
    numReduce(number,index) {
      if(number === 1){
        this.$toast('商品数量不能少于一件！')
      } else {
        number--
        this.$set(this.cartData[index], 'number', number)
      }
    },
    // 结算
    settlement() {
      if(this.priceAll === 0){
        this.$toast('请最少选一件购买的商品！')
      } else {
        console.log(this.priceAll)
      }
    }
  },
  // 生命周期 - 创建之前
  beforeCreate () {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {},
}
</script>
<style scoped>
  /deep/ .van-nav-bar__text{
    color: red;
  }
  /deep/ .van-checkbox__label{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
</style>
<style lang='scss' scoped>
//@import url(); 引入公共css类
  .cart-data-box{
    background: #f2f2f2;
    margin-bottom: 110px;
    .cart-checkbox{
      padding: 10px 15px;
      border-bottom: 1px solid red;
      .cart-item{
        width: 320px;
      }
    }
  }
  .checkbox-all{
    padding: 0 15px;
    position: fixed;
    bottom: 50px;
    left: 0;
    line-height: 100px;
    height: 60px;
    background: #ececec;
    font-size: 18px;
    .text{
      width: 60px;
    }
    .price-all{
      width: 260px;
      text-align: right;
      color: red;
      .btn{
        margin-left: 10px;
        width: 60px;
        height: 40px;
        background: #990055;
        color: #fff;
      }
    }
  }
</style>

<template>
<div class='bodyBackground'>
  <van-nav-bar
    class="back-box"
    title="设置"
    left-arrow
    @click-left="onClickLeft"
  />
  <div class="address-box back-box-bottom">
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      @add="onAdd"
      @edit="onEdit"
    />
  </div>

</div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      chosenAddressId: '1', // 选中的地址id
      list: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
        },
        {
          id: '2',
          name: '李四',
          tel: '1310000000',
          address: '浙江省杭州市拱墅区莫干山路 50 号'
        }
      ] // 地址数据列表
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
    // 点击新增地址
    onAdd () {
      this.$router.push({name: '地址',
        params: {
          type: '0' // 0表示新增
        }})
    },
    // 点击编辑地址
    onEdit () {
      this.$router.push({name: '地址',
        params: {
          type: '1' // 1表示编辑
        } })
    }
  },
  // 生命周期 - 创建之前
  beforeCreate () {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {},
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
<style>
.van-address-item{
  padding: 0;
}
.van-radio__icon{
  margin: 0 20px;
}
.van-address-item__name, .van-address-item__address{
  line-height: 0.8rem
}
.van-button--large{
  height: 0.8rem;
}
</style>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.address-body{
  background: #f2f2f2;
  .address-box{
    padding: 0 30px;
  }
}
</style>

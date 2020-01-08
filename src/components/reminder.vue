<template>
<div class=''>
  <van-popup v-model="show" class="popup-box">
    <div class="header-box">
      <div class="title-box font-size-30"><p>{{title}}</p></div>
      <p class="quxiao" @click="cancel">X</p>
    </div>
    <div class="btn-box">
      <div class="btn cancel" @click="cancel">取消</div>
      <div class="btn determine" @click="determine">确定</div>
    </div>
  </van-popup>
</div>
</template>

<script>
export default {
  components: {},
  props: {
    show: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: '提示'
    }
  },
  data () {
    return {
    }
  },
  computed: {},
  // 监控data中的数据变化
  watch: {},
  methods: {
    // 点击确定事件
    cancel () {
      this.$emit('cancel')
    },
    // 点击取消事件
    determine () {
      this.$emit('determine')
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
<style lang='scss' scoped>
//@import url(); 引入公共css类
.popup-box{
  width: 80%;
  height: 150px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  .header-box{
    display: flex;
    flex-direction: row;
    .title-box{
      width: 6.7rem;
      height: 2.4rem;
    }
    .quxiao{
      width: 0.6rem;
      font-size: 16px;
      right: 10px;
      top: 10px;
      position: absolute;
      text-align: center;
    }
  }

  .btn-box{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .btn{
      width: 100px;
      height: 0.8rem;
      line-height: 0.8rem;
      text-align: center;
    }
    .cancel{
      background: #f2f2f2;
    }
    .determine{
      background: #409eff;
      color: #fff;
    }
  }

}
</style>

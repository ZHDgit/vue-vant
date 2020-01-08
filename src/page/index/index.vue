<template>
  <div class="home-body">
    <div class="search-box">
      <van-image src="/static/logo.png" class="logo"></van-image>
      <div class="search-input-box" @click="goSearch">
        <van-icon name="search" class="icon"></van-icon>
      </div>
    </div>
    <div class="herder-tab">
      <TabPage :tab-list='tabList'>
        <router-view/>
      </TabPage>
    </div>
  <footerBar/>
  </div>
</template>

<script>
import { tabData } from '@/api/index'
import footerBar from '@/components/footerBar'
import TabPage from '@/components/tabPage'
export default {
  components: {
    TabPage,
    footerBar
  },
  data () {
    return {
      searchText: '', // 搜索框内容
      tabList: [] // tab数据
    }
  },
  computed: {},
  // 监控data中的数据变化
  watch: {},
  methods: {
    // 点击页面底部搜索
    goSearch () {
      this.$router.push({path: '/search'})
    }
  },
  // 生命周期 - 创建之前
  beforeCreate () {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {
    // 获取商品列表
    tabData().then(res => {
      if (res.data.code === 200) {
        this.tabList = res.data.tabList
      }
    })
  },
  // 生命周期 - 挂载之前
  beforeMount () {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {
  },
  // 生命周期 - 更新之前
  beforeUpdate () {},
  // 生命周期 - 更新之后
  updated () {},
  // 生命周期 - 销毁之前
  beforeDestroy () {},
  // 生命周期 - 销毁完成
  destroyed () {},
  // 如果页面有keep-alive缓存功能，这个函数会触发
  activated () {
  }
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.home-body{
.search-box{
  width: 100%;
  padding: 10px 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  z-index: 999;
  .logo{
    width: 20px;
    height: 20px;
    margin-right: 20px;
  }
  .search-input-box{
    width: calc(100% - 35px);
    height: 30px;
    background: #efefef;
    display: flex;
    flex-direction: row;
    align-items: center;
    .icon{
      font-size: 15px;
      margin-left: 5px;
    }
  }
}
.herder-tab{
  padding: 10px 15px;
  margin-top: 50px;
}
}
</style>

<template>
<div class='search-body'>
  <div class="flex-layout-lr header-search">
    <van-field v-model="searchText" placeholder="请输入搜索关键字" class="search-input" autofocus="true" />
    <p class="back" @click="back">取消</p>
  </div>
  <div class="history-box" v-if="historyList.length !== 0">
    <div class="flex-layout-lr">
      <p class="history-tilte font-size-30">搜索历史</p>
      <van-icon name="clear" class="delete" @click="deleteHistory" />
    </div>
    <div class="history-text-box">
      <p v-for="(item, index) in historyList" :key="index" class="history-text font-size-24">{{item}}</p>
    </div>
  </div>
  <reminder @determine="determine" @cancel="cancel" :show="show" :title="title" />
</div>
</template>

<script>
import reminder from '@/components/reminder'
export default {
  components: {
    reminder
  },
  data () {
    return {
      show: false, // 提示框显示状态
      title: '是否清空搜索记录', // 提示框提示标题
      searchText: '', // 搜索内容
      historyList: [
        '男装1', '男装2', '男装3', '男装4', '男装5', '男装6', '男装7'
      ] // 搜索历史
    }
  },
  computed: {},
  // 监控data中的数据变化
  watch: {},
  methods: {
    // 返回上一页
    back () {
      this.$router.go(-1)
    },
    // 点击清除历史记录按钮
    deleteHistory () {
      this.show = true
    },
    // 确定清除
    determine () {
      this.historyList = []
      this.show = false
    },
    // 取消清除
    cancel () {
      this.show = false
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
.search-body{
  background: #f2f2f2;
}
.header-search{
  padding: 8px 0 8px 15px;
  background: #f2f2f2;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  .search-input{
    padding: 4px;
    width: 90%;
    border: 2px solid #ff6600;
    border-radius: 15px;
    height: 30px;
  }
  .back{
    text-align: center;
    width: 10%;
    height: 0.4rem;
    line-height: 0.4rem;
  }
}
.history-box{
  background: #fff;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  width: 100%;
  margin-top: calc(0.4rem + 8px);
  padding: 15px;
  .history-tilte{
    width: 100%;
  }
  .delete{
    width: 50px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 17px;
  }
  .history-text-box{
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    .history-text{
      padding: 4px 10px;
      background: #e2e2e2;
      border-radius: 15px;
      margin-right: 5px;
      margin-top: 10px;
    }
  }
}
</style>

<template>
<div class='bodyBackground'>
  <van-nav-bar
    class="back-box"
    :title="title"
    left-arrow
    @click-left="onClickLeft"
  />
  <van-address-edit
    class="back-box-bottom"
    :area-list="areaList"
    show-postal
    show-delete
    show-set-default
    show-search-result
    :search-result="searchResult"
    :area-columns-placeholder="['请选择', '请选择', '请选择']"
    @save="onSave"
    @change-detail="onChangeDetail"
  />
</div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      title: '', // 页面动态title
      areaList: {
        province_list: {
          110000: '北京市',
          120000: '天津市'
        },
        city_list: {
          110100: '北京市',
          110200: '县',
          120100: '天津市',
          120200: '县'
        },
        county_list: {
          110101: '东城区',
          110102: '西城区',
          110105: '朝阳区',
          110106: '丰台区',
          120101: '和平区',
          120102: '河东区',
          120103: '河西区',
          120104: '南开区',
          120105: '河北区'
        }
      },
      searchResult: []
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
    onSave () {

    },
    // 删除地址
    onDelete () {

    },
    // 修改详细地址是触发备选
    onChangeDetail (val) {
      if (val) {
        this.searchResult = [{
          name: '黄龙万科中心',
          address: '杭州市西湖区'
        }]
      } else {
        this.searchResult = []
      }
    }
  },
  // 生命周期 - 创建之前
  beforeCreate () {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {
    // 判断编辑还是新增
    if (this.$route.params.type === '0') {
      this.title = '新增地址'
    } else if (this.$route.params.type === '1') {
      this.title = '编辑地址'
    }
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
<style scoped>
  /deep/ .van-cell{
  line-height: 80px;
  }
  /deep/ .van-field__label{
    width: 1.4rem;
  }
  /deep/ .van-button {
    height: 0.8rem;
  }
</style>
<style lang='scss' scoped>
//@import url(); 引入公共css类

</style>

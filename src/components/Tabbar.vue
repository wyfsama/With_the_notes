<template>
  <div>
    <van-tabbar
      v-model="active"
      active-color="#3498db"
      inactive-color="#2980b9"
      route
    >
      <van-tabbar-item
        class="iconfont"
        to="/count"
        icon-prefix="icon"
        icon="xiugai"
        >记账</van-tabbar-item
      >
      <van-tabbar-item
        class="iconfont"
        to="/detail"
        icon-prefix="icon"
        icon="baobiao"
        >明细</van-tabbar-item
      >
      <van-tabbar-item
        class="iconfont"
        to="/report"
        icon-prefix="icon"
        icon="mingxi"
        >报告</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 1,
    }
  },
  components: {},
}
</script>

<style  lang="scss" scoped>
</style>

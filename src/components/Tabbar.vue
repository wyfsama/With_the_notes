<template>
  <div>
    <van-tabbar
      v-model="active"
      :active-color="color.light"
      :inactive-color="color.dark"
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
import { mapState } from 'vuex'
export default {
  data() {
    return {
      active: 1,
      color: {
        light: '#3498db',
        dark: '#2980b9',
      },
    }
  },
  created() {
    this.color.light = this.theme[this.defaultIndex].Light
    this.color.dark = this.theme[this.defaultIndex].Dark
  },
  computed: {
    ...mapState(['theme', 'defaultIndex']),
  },
  watch: {
    defaultIndex(val) {
      this.color.light = this.theme[val].Light
      this.color.dark = this.theme[val].Dark
    },
  },
  components: {},
}
</script>

<style  lang="scss" scoped>
</style>

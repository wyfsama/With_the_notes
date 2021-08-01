<template>
  <div>
    <router-view></router-view>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from '@/components/Tabbar'
export default {
  data() {
    return {}
  },
  components: {
    Tabbar,
  },
}
</script>

<style  lang="scss" scoped>
</style>

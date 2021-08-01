<template>
  <div class="header">
    <Drawer></Drawer>
    <slot></slot>
  </div>
</template>

<script>
import Drawer from '@/components/Drawer'
export default {
  data() {
    return {}
  },
  components: {
    Drawer,
  },
}
</script>

<style  lang="scss" scoped>
.header {
  background-color: #f9f9f9;
  height: 3.125rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .drawer{
    position: absolute;
    left: 1.25rem;
    &:active{
      color: $theme-color-light;
    }
  }
}
</style>

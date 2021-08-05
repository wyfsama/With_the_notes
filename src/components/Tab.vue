<template>
  <div class="tab-wrap">
    <div
      :class="['btn', type === 'pay' ? 'active' : '']"
      @click="change('pay')"
    >
      支出
    </div>
    <div
      :class="['btn', type === 'income' ? 'active' : '']"
      @click="change('income')"
    >
      收入
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: 'pay',
    }
  },
  methods: {
    change(i) {
      this.type = i
      this.$emit('change', i)
    },
  },
  components: {},
}
</script>

<style  lang="scss" scoped>
.tab-wrap {
  text-align: center;
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .btn {
    cursor: pointer;
    font-weight: 600;
    flex: 1;
    padding: 0.1875rem 1.25rem;
    background: #ddd;
    color: $theme-color-light;
    border-radius: 0.3125rem;
  }
  .active {
    background: $theme-color-light;
    color: #ddd;
  }
}
</style>

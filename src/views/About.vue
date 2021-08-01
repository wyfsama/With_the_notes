<template>
  <div>
    <header>
      <a-icon @click="linkto" type="arrow-left" />
      <span>关于随手记</span>
    </header>
    <main>
      <div class="icon">
        <icon-font type="icon-notes" />
      </div>
      <div class="version">当前版本 V1.0.0</div>
    </main>
    <footer>
      <p>感谢你使用随手记</p>
      <p>希望本项目能够帮助到你</p>
      <p class="eng">Good luck</p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    linkto() {
      this.$router.push('/')
    },
  },
  components: {},
}
</script>

<style  lang="scss" scoped>
header {
  background-color: #f9f9f9;
  height: 3.125rem;
  line-height: 3.125rem;
  .anticon {
    margin: 0 20px;
  }
  span {
    font-size: 1rem;
    font-weight: 500;
  }
}
main {
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  .icon {
    .anticon {
      font-size: 3.75rem;
    }
  }
  .version {
    color: #333;
    padding: 0.3125rem;
  }
}
footer {
  padding: 10px;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 20%;
  background-color: #f9f9f9;
  .eng {
    font-style: italic;
  }
}
</style>

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
      <div class="version">当前版本 V1.1.1</div>
      <div class="update_note">
        <h3>更新日志：</h3>
        <div>1. 加入主题切换</div>
        <div>2. 支持数值精确到分</div>
        <div>3. 修复echarts的数值呈现问题</div>
      </div>
    </main>
    <footer>
      <p>感谢你使用随手记</p>
      <p>希望本项目能够帮助到你</p>
      <p>
        <strong>Blog: </strong
        ><a style="color: #111" href="https://wyfsama.github.io"
          >https://wyfsama.github.io</a
        >
      </p>
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
  .update_note {
    // flex: 1;
    padding: 1rem;
    align-self: start;
    h3 {
      font-size: 20px;
      font-weight: 600;
    }
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

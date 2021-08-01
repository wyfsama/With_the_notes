<template>
  <div class="drawer">
    <a-icon type="menu" @click="showDrawer" />
    <a-drawer
      title="随 手 记 With the notes"
      :placement="placement"
      :closable="false"
      :visible="visible"
      @close="onClose"
    >
      <div class="container">
        <div class="mode item">
          <div class="left">
            <div class="icon1">
              <icon-font type="icon-zhuti" />
            </div>
            <div class="name">主题切换（暂未开放）</div>
          </div>
          <div class="right">
            <div class="icon2">
              <a-dropdown>
                <div class="down">></div>
                <a-menu slot="overlay">
                  <a-menu-item>
                    <a href="javascript:;">蓝（默认）</a>
                  </a-menu-item>
                  <a-menu-item>
                    <a href="javascript:;">红</a>
                  </a-menu-item>
                  <a-menu-item>
                    <a href="javascript:;">黄</a>
                  </a-menu-item>
                </a-menu>
              </a-dropdown>
            </div>
          </div>
        </div>
        <div class="theme item">
          <div class="left">
            <div class="icon1">
              <icon-font type="icon-yejianmoshi" />
            </div>
            <div class="name">夜间模式</div>
          </div>
          <div class="right">
            <div class="icon2">
              <!-- <a-switch default-checked @change="onSwitchChange" />
               -->
              <DarkModeSwitch
                @switched="onSwitched"
                :initialState="isDarkModeEnabled"
              />
            </div>
          </div>
        </div>
        <div class="clean item" @click="cleanLocalStorage">
          <div class="left">
            <div class="icon1">
              <icon-font type="icon-weibiaoti-" />
            </div>
            <div class="name">清除缓存</div>
          </div>
          <div class="right">
            <div class="icon2">></div>
          </div>
        </div>
        <div class="about item" @click="$router.push('/about')">
          <div class="left">
            <div class="icon1">
              <icon-font type="icon-guanyu" />
            </div>
            <div class="name">关于</div>
          </div>
          <div class="right">
            <div class="icon2">></div>
          </div>
        </div>
      </div>
    </a-drawer>
  </div>
</template>

<script>
import DarkModeSwitch from 'vue-dark-mode-switch'
import { mapState, mapMutations } from 'vuex'
export default {
  mounted() {
    // console.log(Boolean(localStorage.getItem('darkmode')))
    if (this.isDarkMode) {
      document.querySelector('body').className = 'dark'
    }
  },
  computed: {
    ...mapState(['isDarkMode']),
    isDarkModeEnabled() {
      return this.isDarkMode
    },
  },
  data() {
    return {
      visible: false,
      placement: 'left',
    }
  },
  watch: {
    isDarkMode(val) {
      if (val) {
        document.querySelector('body').className = 'dark'
      } else {
        document.body.removeAttribute('class', 'dark')
      }
    },
  },
  created() {},
  methods: {
    showDrawer() {
      this.visible = true
    },
    onClose() {
      this.visible = false
    },
    onChange(e) {
      this.placement = e.target.value
    },
    cleanLocalStorage() {
      localStorage.clear()
      window.location.reload()
    },
    ...mapMutations(['changeDarkMode']),
    onSwitched(isSwitched) {
      this.changeDarkMode(isSwitched)
      // console.log('dark mode is enabled :', isSwitched)
    },
  },
  components: {
    DarkModeSwitch,
  },
}
</script>

<style  lang="scss" scoped>
.ant-drawer-content {
  .ant-drawer-body {
    .container {
      border: 0.0625rem solid #eee;
      border-radius: 0.625rem;
      box-shadow: 0 0 0.5625rem #eee;
      .item {
        font-size: 1rem;
        padding: 0.8rem 1rem;
        display: flex;
        justify-content: space-between;
        border-top: 1px solid #ddd;
        &:first-child {
          border-top: none;
        }
        .left {
          display: flex;
          .name {
            margin: 0 0.3125rem;
          }
        }
      }
    }
  }
}
</style>

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
        <a-popover trigger="click" placement="rightTop">
          <div class="mode item">
            <div class="left">
              <div class="icon1">
                <icon-font type="icon-zhuti" />
              </div>
              <div class="name">主题切换</div>
            </div>
            <div class="right">
              <div class="icon2">
                <div class="down">></div>
              </div>
            </div>
          </div>
          <template slot="content">
            <p
              v-for="(i, k) in colorList"
              :key="k"
              @click="changeIndex(k)"
              :class="k === defaultIndex ? 'active' : ''"
            >
              {{ i }}
            </p>
          </template>
        </a-popover>
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
  created() {
    document
      .getElementsByTagName('body')[0]
      .style.setProperty('--light', this.theme[this.defaultIndex].Light)
    document
      .getElementsByTagName('body')[0]
      .style.setProperty('--dark', this.theme[this.defaultIndex].Dark)
  },
  computed: {
    ...mapState(['isDarkMode', 'theme', 'defaultIndex']),
    isDarkModeEnabled() {
      return this.isDarkMode
    },
  },
  data() {
    return {
      visible: false,
      placement: 'left',
      colorList: ['蓝', '红', '黄'],
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
    defaultIndex(val) {
      document
        .getElementsByTagName('body')[0]
        .style.setProperty('--light', this.theme[val].Light)
      document
        .getElementsByTagName('body')[0]
        .style.setProperty('--dark', this.theme[val].Dark)
    },
  },
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
    ...mapMutations(['changeDarkMode', 'changeIndex']),
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
.active {
  color: $theme-color-light;
}
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

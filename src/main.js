import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Tabbar, TabbarItem } from 'vant'
import { DatePicker, Input, Icon, message, Modal, Drawer, Dropdown, Menu, Switch } from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import '../src/assets/iconfont/iconfont.css'
import '@/styles/base.scss'
import moment from 'moment'
import * as echarts from 'echarts'
import 'vue-dark-mode-switch/dist/vue-dark-mode-switch.css'

Vue.config.productionTip = false
Vue.use(Tabbar)
  .use(TabbarItem)
  .use(DatePicker)
  .use(Input)
  .use(Icon)
  .use(Modal)
  .use(Drawer)
  .use(Dropdown)
  .use(Menu)
  .use(Switch)

Vue.prototype.$message = message
Vue.prototype.$echarts = echarts

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2708694_jjb3xw6ykzt.js',
})

Vue.mixin({
  components: {
    IconFont
  },
  methods: {
    moment
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

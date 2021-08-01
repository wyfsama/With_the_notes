import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projects:
      JSON.parse(localStorage.getItem('projects')) ||
      {
        pay: [
          {
            id: 1,
            name: '游戏充值',
            icon: 'icon-youxichongzhi'
          },
          {
            id: 2,
            name: '房贷',
            icon: 'icon-zhufang'
          },
          {
            id: 3,
            name: '餐饮费',
            icon: 'icon-canyin'
          },
          {
            id: 4,
            name: '美容费',
            icon: 'icon-meirong'
          },
          {
            id: 5,
            name: '零食费',
            icon: 'icon-lingshi'
          },
          {
            id: 6,
            name: '汽车保养',
            icon: 'icon-qiche'
          },
          {
            id: 7,
            name: '衣服',
            icon: 'icon-fushi'
          },
          {
            id: 8,
            name: '公共交通',
            icon: 'icon-jiaotong'
          },
          {
            id: 9,
            name: '话费',
            icon: 'icon-shoujichongzhi'
          },
          {
            id: 10,
            name: '医疗',
            icon: 'icon-yiliao'
          },
          {
            id: 11,
            name: '水电煤',
            icon: 'icon-shuidianmei'
          },
        ],
        income: [
          {
            id: 1,
            name: '工资',
            icon: 'icon-gongzi'
          },
          {
            id: 2,
            name: '理财收益',
            icon: 'icon-licaishouyi'
          }
        ]
      },
    bill: JSON.parse(localStorage.getItem('bill')) || [],
    isDarkMode: JSON.parse(localStorage.getItem('darkmode')) || false
  },
  mutations: {
    deletePro(state, payload) {
      // console.log(payload.id)
      state.projects[payload.type] = state.projects[payload.type].filter(item => item.id !== payload.id)
    },
    addBill(state, payload) {
      state.bill.push({
        createAt: payload.createAt,
        type: payload.type,
        record: payload.record,
        money: payload.type === 'pay' ? -1 * payload.money : payload.money,
        icon: payload.selected,
        name: state.projects[payload.type].find(item => item.icon === payload.selected).name
      })
      localStorage.setItem('bill', JSON.stringify(state.bill))
    },
    addProjects(state, payload) {
      state.projects[payload.type].push(
        {
          id: +new Date(),
          name: payload.name,
          icon: payload.selected
        },
      )
      localStorage.setItem('projects', JSON.stringify(state.projects))
    },
    // 黑暗模式
    changeDarkMode(state, payload) {
      state.isDarkMode = payload
      localStorage.setItem('darkmode', state.isDarkMode)
    }
  },
  actions: {
  },
  modules: {
  }
})

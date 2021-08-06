<template>
  <div class="report">
    <Header>
      <Tab @change="type = $event"></Tab>
    </Header>
    <div class="report-head">
      <div class="date-picker">
        <a-month-picker
          @change="onChange"
          :defaultValue="moment(new Date(), 'YYYY/MM')"
        />
      </div>
      <div class="count-wrap">
        <div class="count-detail">
          <div class="count-pay item">{{ pay }}</div>
          <div class="count-income item">{{ income }}</div>
        </div>
        <div class="count-total">共计: {{ total }}</div>
      </div>
    </div>
    <div class="charts" id="main" ref="charts"></div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Tab from '@/components/Tab'
import { mapState } from 'vuex'
export default {
  data() {
    return {
      myChart: '',
      data1: '',
      showMonth: new Date().getMonth() + 1,
      type: 'pay',
    }
  },
  mounted() {
    this.init()
    this.getData()
    this.setCharts()
  },
  watch: {
    showMonth() {
      this.getData()
      this.setCharts()
    },
    newbill() {
      this.getData()
      this.setCharts()
    },
  },
  computed: {
    ...mapState(['bill']),
    newbill() {
      const sameDatebill = this.bill
        .filter(
          (item) => new Date(item.createAt).getMonth() + 1 === this.showMonth
        )
        .filter((item) => item.type === this.type)
      const newbillList = []
      const map = {}
      sameDatebill.forEach((item, key) => {
        if (!map[item.name]) {
          newbillList.push({
            createAt: item.createAt,
            icon: item.icon,
            name: item.name,
            money: +item.money,
            type: item.type,
          })
          map[item.name] = item
        } else {
          newbillList.find((i) => {
            return i.name === item.name
          }).money += +item.money
        }
      })
      return newbillList
    },
    pay() {
      let sum = 0
      this.bill
        .filter(
          (item) => new Date(item.createAt).getMonth() + 1 === this.showMonth
        )
        .filter((i) => i.type === 'pay')
        .forEach((i) => (sum += +i.money))
      return sum.toFixed(2)
    },
    income() {
      let sum = 0
      this.bill
        .filter(
          (item) => new Date(item.createAt).getMonth() + 1 === this.showMonth
        )
        .filter((i) => i.type === 'income')
        .forEach((i) => (sum += +i.money))
      return Number(sum) ? '+' + sum.toFixed(2) : sum.toFixed(2)
    },
    total() {
      const res = +this.pay + +this.income
      if (res > 0) {
        return '+' + res.toFixed(2)
      } else {
        return res.toFixed(2)
      }
    },
  },
  methods: {
    init() {
      this.myChart = this.$echarts.init(this.$refs.charts)
    },
    getData() {
      this.data1 = this.newbill.map((item) => {
        return {
          value: item.money,
          name: item.name,
        }
      })
    },
    setCharts() {
      this.myChart.setOption({
        // title: {
        //   text: '支出',
        //   left: 'center',
        // },
        tooltip: {},
        legend: {
          type: 'scroll',
          // orient: 'vertical',
          // left: 'left',
          bottom: 'bottom',
        },
        series: [
          {
            // name: '销量',
            type: 'pie',
            radius: ['40%', '70%'],
            // radius: [20, 50],
            center: ['50%', '45%'],
            avoidLabelOverlap: false,
            data: this.data1.sort(function (a, b) {
              return a.value - b.value
            }),
            label: {
              show: false,
              position: 'center',
            },
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 2,
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '25',
                fontWeight: 'bold',
              },
            },
          },
        ],
      })
    },
    onChange(date) {
      this.showMonth = date._d.getMonth() + 1
    },
  },
  components: {
    Header,
    Tab,
  },
}
</script>

<style  lang="scss" scoped>
.report {
  // display: flex;
  // flex-direction: column;
  .report-head {
    height: 30vh;
    width: 70%;
    margin: 0.625rem auto;
    .date-picker {
      margin: 10px 0;
      .ant-calendar-picker {
        width: 100%;
      }
    }
    .count-wrap {
      .count-detail {
        font-size: 1.125rem;
        font-weight: 600;
        width: 100%;
        display: flex;
        margin: 0.3125rem 0;
        .item {
          width: 50%;
          border: 1px solid #ddd;
          text-align: center;
          border-radius: 0.625rem;
          box-shadow: 3px 3px 5px #aaa;
        }
        .count-pay {
          padding: 0.625rem;
          margin-right: 0.625rem;
          color: red;
        }
        .count-income {
          padding: 0.625rem;
          margin-left: 0.625rem;
          color: green;
        }
      }
      .count-total {
        padding: 0.625rem;
        margin: 0.625rem auto;
        width: 50%;
        border-radius: 0.625rem;
        border: 1px solid #ddd;
        text-align: center;
        box-shadow: 3px 3px 5px #aaa;
        font-size: 1.125rem;
        font-weight: 600;
      }
    }
  }
  .charts {
    // flex: 1;
    text-align: center;
    width: 100%;
    height: 50vh;
    // margin-top: 30px;
  }
}
</style>

vue
<template>
  <div>
    <Header>
      <div class="title">明细</div>
    </Header>
    <div class="date-picker">
      <a-month-picker
        @change="onChange"
        :defaultValue="moment(new Date(), 'YYYY/MM')"
      />
    </div>
    <div class="count-wrap" v-for="(date, k) in dateList" :key="k">
      <div class="count-total">
        <div class="count-date">{{ date }}</div>
        <div class="count-number">
          {{
            bill
              .filter((item) => item.createAt === date)
              .reduce((a, b) => a + b.money, 0)
          }}
        </div>
      </div>
      <div class="count-detail">
        <div
          class="count-detail-item"
          v-for="(i, k) in bill.filter((item) => item.createAt === date)"
          :key="k"
        >
          <div class="item-left">
            <icon-font :type="i.icon" />
            <div class="item-name">{{ i.name }}</div>
            <div class="item-record" v-if="i.record">({{ i.record }})</div>
          </div>
          <div class="item-price">
            {{ i.money }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Header from '@/components/Header'
export default {
  data() {
    return {
      showMonth: new Date().getMonth() + 1,
    }
  },
  computed: {
    ...mapState(['bill']),
    dateList() {
      const list = [
        ...new Set(
          this.bill.map((item) => {
            return item.createAt
          })
        ),
      ]
        .sort((a, b) => {
          return +new Date(b) - +new Date(a)
        })
        .filter((item) => {
          return new Date(item).getMonth() + 1 === this.showMonth
        })
      return list
    },
  },
  methods: {
    onChange(date) {
      this.showMonth = date._d.getMonth() + 1
      // console.log(date._d.getMonth() + 1)
    },
  },
  components: {
    Header,
  },
}
</script>

<style  lang="scss" scoped>
.title {
  font-weight: 700;
  font-size: 1rem;
}
.date-picker {
  margin: 0.625rem auto;
  text-align: center;
  .ant-calendar-picker {
    width: 70%;
  }
}
.count-wrap {
  .count-total {
    display: flex;
    justify-content: space-between;
    background: #eee;
    padding: 0.3125rem 0.625rem;
    .count-number {
      color: $theme-color-light;
    }
  }
  .count-detail {
    .count-detail-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.625rem 1.125rem;
      border-top: 0.0625rem solid #ccc;
      .item-left {
        display: flex;
        align-items: center;
        .item-name {
          margin: 0 5px;
        }
      }
    }
    &:last-child {
      border-bottom: 1px solid #ccc;
    }
  }
}
</style>

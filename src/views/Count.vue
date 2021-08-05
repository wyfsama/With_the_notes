<template>
  <div>
    <Header>
      <Tab @change="type = $event"></Tab>
    </Header>
    <main>
      <div class="part-wrap">
        <div class="data-wrap input-item">
          <span>日期</span>
          <a-date-picker
            @change="onChange"
            :defaultValue="moment(new Date(), 'YYYY/MM/DD')"
          />
        </div>
        <div class="record-wrap input-item">
          <span>记录</span>
          <a-input v-model.trim="record" placeholder="写点备注吧~" />
        </div>
        <div class="money-wrap input-item">
          <span>{{ content }}</span>
          <a-input v-model.trim.number="money" placeholder="0" />
        </div>
        <div class="category-wrap">
          <p>分类</p>
          <div class="scroll-wrap">
            <div class="category-content">
              <div
                @click="selected = i.icon"
                :class="['category-item', i.icon === selected ? 'active' : '']"
                v-for="i in projects[type]"
                :key="i.id"
              >
                <div class="category-item-icon">
                  <icon-font :type="i.icon" />
                </div>
                <div class="category-item-name">{{ i.name }}</div>
              </div>
              <div class="category-item">
                <div class="edit" @click="edit">编辑 ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="confirm">
        <div
          class="confirm-btn"
          @click="confirm({ type, selected, record, money, createAt })"
        >
          确定
        </div>
        <a-modal
          okText="确认"
          cancelText="取消"
          :visible="visible1"
          :confirm-loading="confirmLoading"
          @ok="handleOk({ type, selected, record, money, createAt })"
          @cancel="handleCancel"
        >
          <p>{{ ModalText }}</p>
        </a-modal>
      </div>
    </main>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import Header from '@/components/Header'
import Tab from '@/components/Tab'

export default {
  data() {
    return {
      type: 'pay',
      selected: 'icon-youxichongzhi',
      record: '',
      money: '',
      createAt: this.moment().format('YYYY/MM/DD'),
      visible1: false,
      confirmLoading: false,
    }
  },
  watch: {
    type(val) {
      // console.log(val)
      val === 'pay'
        ? (this.selected = 'icon-youxichongzhi')
        : (this.selected = 'icon-gongzi')
    },
  },
  computed: {
    ...mapState(['projects']),
    content() {
      if (this.type === 'pay') {
        return '支出'
      } else {
        return '收入'
      }
    },
    ModalText() {
      return `当前${this.content}费用为0,确认提交么`
    },
  },
  components: {
    Header,
    Tab,
  },
  methods: {
    ...mapMutations(['addBill']),
    confirm(payload) {
      if (payload.money && typeof payload.money === 'number') {
        this.addBill(payload)
        this.record = ''
        this.money = ''
        this.$message.success('已提交')
      } else if (!payload.money) {
        this.visible1 = true
      } else {
        this.$message.error('含有非法字符，只能输入数字~');
      }
    },
    handleOk(payload) {
      this.confirmLoading = true
      this.money = 0
      this.visible1 = false
      this.confirmLoading = false
      this.addBill(payload)
      // console.log(e)
    },
    handleCancel() {
      this.visible1 = false
    },
    onChange(v) {
      this.createAt = v._d.toLocaleDateString()
    },
    edit() {
      this.$router.push('/count/edit')
    },
  },
}
</script>

<style  lang="scss" scoped>
.edit {
  text-align: center;
}
main {
  .active {
    background: $theme-color-light;
    color: #eee;
  }
  .part-wrap {
    overflow: auto;
    height: 70vh;
    .input-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 20px;
      border-bottom: 1px dotted #ccc;
      & > span:first-child {
        font-weight: 700;
      }
      &:nth-child(3) .ant-input {
        background: $theme-color-light;
      }
      .ant-input {
        width: 80%;
      }
      .ant-calendar-picker {
        width: 80%;
      }
    }
    .category-wrap {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      border-bottom: none;
      p {
        padding: 0.625rem 1.25rem;
        font-weight: 700;
        margin-bottom: 0;
      }
      .scroll-wrap {
        width: 100%;
        height: 30vh;
        overflow: auto;
        .category-content {
          padding: 0 0.3125rem;
          width: 100%;
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          .anticon {
            font-size: 1.5625rem;
          }
          .category-item {
            box-sizing: border-box;
            cursor: pointer;
            // text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 5px;
            border: 0.0625rem solid #ddd;
            border-radius: 0.625rem;
            margin: 5px 10px;
            width: 25%;
          }
        }
      }
    }
  }
  .confirm {
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 3.125rem;
    background: #fff;
    .confirm-btn {
      text-align: center;
      width: 60%;
      background-color: $theme-color-light;
      color: #ddd;
      padding: 0.4rem;
      border-radius: 1.25rem;
      &:active {
        background-color: $theme-color-dark;
      }
    }
  }
}
</style>

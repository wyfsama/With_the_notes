<template>
  <div>
    <Header>{{ type | ctype }}新标签</Header>
    <main>
      <div class="part-wrap">
        <div class="input-item">
          <span>名字</span>
          <a-input v-model.trim="name" placeholder="请输入标签名" />
        </div>
        <div class="category-wrap">
          <p>图标</p>
          <div class="scroll-wrap">
            <div class="category-content">
              <div
                :class="['category-item', selected === i ? 'active' : '']"
                v-for="(i, k) in iconList"
                :key="k"
                @click="selected = i"
              >
                <div class="category-item-icon">
                  <icon-font :type="i" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="confirm">
        <div class="confirm-btn" @click="addIcon({ type, selected, name })">
          确定
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Header from '@/components/Header'
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      iconList: [
        'icon-lvxing',
        'icon-bangong1',
        'icon-yundong',
        'icon-chongwu',
        'icon-huiyuantequan',
        'icon-huankuan',
        'icon-weixiu',
        'icon-jujia',
        'icon-shuji',
        'icon-xuexi',
        'icon-shejiao',
        'icon-zhuanzhang',
      ],
      selected: 'icon-lvxing',
      name: '',
    }
  },
  filters: {
    ctype(val) {
      if (val === 'pay') {
        return '支出'
      } else {
        return '收入'
      }
    },
  },
  computed: {
    type() {
      return this.$route.params.type
    },
  },
  methods: {
    ...mapMutations(['addProjects']),
    addIcon(payload) {
      this.addProjects(payload)
    },
  },
  components: {
    Header,
  },
}
</script>

<style  lang="scss" scoped>
.active {
  background: $theme-color-light;
  color: #eee;
}
.header {
  font-weight: 700;
}
main {
  .anticon {
    font-size: 1.5625rem;
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
      .ant-input {
        width: 80%;
      }
      span {
        font-weight: 700;
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

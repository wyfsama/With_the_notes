<template>
  <div>
    <Header>
      <Tab @change="type = $event"></Tab>
    </Header>
    <main>
      <div class="edit-item" @click="$router.push(`/count/edit/${type}`)">
        <div class="edit-item-info">追加新の标签</div>
        <div class="del-icon">></div>
      </div>
      <div class="edit-item" v-for="i in projects[type]" :key="i.id">
        <div class="edit-item-info">
          <div class="edit-item-icon">
            <icon-font :type="i.icon" />
          </div>
          <div class="edit-item-name">{{ i.name }}</div>
        </div>
        <div class="del-icon" @click="deletePro({ type, id: i.id })">
          <a-icon type="delete" />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Tab from '@/components/Tab'
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {
      type: 'pay',
    }
  },
  computed: {
    ...mapState(['projects']),
  },
  components: {
    Header,
    Tab,
  },
  methods: {
    ...mapMutations(['deletePro']),
  },
}
</script>

<style  lang="scss" scoped>
.edit-item {
  padding: 10px 20px;
  border-bottom: 1px dotted #ccc;
  display: flex;
  justify-content: space-between;
  .edit-item-info {
    display: flex;
    align-items: center;
  }
  .edit-item-name{
    margin: 0 0.3125rem;
  }
}
.anticon {
  font-size: 1.5625rem;
}
</style>

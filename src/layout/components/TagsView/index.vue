<template>
  <div :class="['tags-view-container', {'sidebar-opened': opened}]">
    <el-tabs 
      v-model="activeName"
      type="card"
      @tab-click="handleOpenTag">
      <el-tab-pane
        :key="item.value"
        v-for="item in tagsList"
        :label="item.label"
        :name="item.value"
        closable="true">
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'TagsView',
  computed: {
    ...mapGetters([
      'opended'
    ])
  },
  data () {
    return {
      activeName: '',
      tagsList: [
        { label: '首页', value: '1' },
        { label: '首页', value: '2' },
        { label: '首页', value: '3' },
        { label: '首页', value: '4' },
        { label: '首页', value: '5' },
        { label: '首页', value: '6' },
        { label: '首页', value: '7' },
        { label: '首页', value: '5' },
        { label: '首页', value: '6' },
        { label: '首页', value: '4' },
        { label: '首页', value: '5' },
        { label: '首页', value: '6' },
      ]
    }
  },
  methods: {
    // 选择时触发
    handleOpenTag (tab) {

    }
  }
}
</script>

<style lang="scss">
.tags-view-container {
  width: calc(100vw - 65px);
  height: 44px;
  line-height: 44px;
  background-color: #fff;
  margin: 5px 0 10px;
  padding: 5px 10px;
  box-sizing: border-box;
  &.sidebar-opened {
    width: calc(100vw - 200px);
  }
  .el-tabs {
    .el-tabs__header {
      border: none;
      .el-tabs__nav {
        border: none;
        .el-tabs__item {
          height: 30px;
          line-height: 30px;
          border: 1px solid #eee;
          color: #ccc;
          border-radius: 3px;
          margin: 0 3px;
          &.is-active {
            border-color: #409EFF;
            color: #409EFF;
            span {
              color: #409EFF;
            }
          }
        }
      }
    }
  }
}
</style>



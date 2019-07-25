<template>
  <div class="tags-view-container">
    <el-tabs 
      v-model="activeName"
      :active="$route.path"
      type="card"
      @tab-click="handleOpenTag">
      <el-tab-pane
        v-for="item in visitedViews"
        :key="item.menuPath"
        :label="item.menuName"
        :name="item.menuPath"
        :closable="!!visitedViews.length">
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'TagsView',
  data () {
    return {
      activeName: '',
      tagsList: []
    }
  },
  computed: {
    ...mapGetters([
      'visitedViews'
    ])
  },
  watch: {
    $route (route) {
      console.log(2, route)
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
  height: 44px;
  line-height: 44px;
  background-color: #fff;
  margin: 5px 0 10px;
  padding: 5px 10px;
  box-sizing: border-box;
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



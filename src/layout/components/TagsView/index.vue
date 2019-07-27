<template>
  <div class="tags-view-container">
    <el-tabs 
      v-model="activeName"
      type="card"
      @tab-click="handleOpenTag"
      @edit="handleTabEdit">
      <el-tab-pane
        v-for="item in visitedViews"
        :key="item.path"
        :label="item.title"
        :name="item.path"
        :closable="visitedViews.length > 1">
      </el-tab-pane>
    </el-tabs>
    <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link">
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="closeCurrent">关闭当前标签页</el-dropdown-item>
        <el-dropdown-item command="closeOthers">关闭其他标签页</el-dropdown-item>
        <el-dropdown-item command="closeAll">关闭全部标签页</el-dropdown-item>
        <el-dropdown-item command="refreshCurrent">刷新当前标签页</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'TagsView',
  inject: ['refreshCurPage'],
  computed: {
    ...mapGetters([
      'visitedViews'
    ]),
    activeName: {
      get () {
        return this.$route.path
      },
      set () {}
    }
  },
  watch: {
    $route () {
      this.addTags()
    }
  },
  mounted () {
    this.addTags()
  },
  methods: {
    // 添加Tag
    addTags () {
      const { name, path, meta, params, query } = Object.assign({}, this.$route)
      const view = {
        path, name, meta, params, query
      }
      if (name) {
        this.$store.dispatch('addViews', view)
      }
    },
    // 点击tab
    handleOpenTag (tag) {
      this.$router.push({
        path: tag.path || tag.name
      })
    },
    // tab新增或关闭后触发
    handleTabEdit (targetName, action) {
      if (action === 'remove') {
        const { tag, index } = this.handleFindTag(targetName)
        this.$store.dispatch('delViews', tag)
        if (tag.path === this.activeName) { // 删除的tab就是激活的tab
          const newTag = this.visitedViews[index === 0 ? index : index - 1]
          this.handleOpenTag({
            path: newTag.path
          })
        }
      }
    },
    // 查找tag
    handleFindTag (path) {
      let tag, index
      this.visitedViews.forEach((v, i) => {
        if (v.path === path) {
          tag = v
          index = i
        }
      })
      return { tag, index }
    },
    // 点击菜单项触发
    handleCommand (command) {
      let { tag } = this.handleFindTag(this.activeName)
      if (command === 'closeCurrent') {
        this.visitedViews.length > 1 && this.handleTabEdit(this.activeName, 'remove')
      } else if (command === 'closeOthers') {
        this.$store.dispatch('delOthersViews', tag)
      } else if (command === 'closeAll') {
        this.$store.dispatch('delAllViews', tag)
      } else {
        this.refreshCurPage()
      }
    }
  }
}
</script>

<style lang="scss">
.tags-view-container {
  position: relative;
  height: 44px;
  line-height: 44px;
  background-color: #fff;
  padding: 2px 45px 5px 10px;
  box-sizing: border-box;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);
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
  .el-dropdown {
    position: absolute;
    top: 0;
    right: 0;
    width: 40px;
    height: 100%;
    line-height: 44px;
    background-color: #f1f4f5;
    cursor: pointer;
    .el-dropdown-link {
      width: 100%;
      height: 100%;
      text-align: center;
      i {
        margin: 0;
      }
    }
  }
}
</style>



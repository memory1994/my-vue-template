<template>
  <el-breadcrumb class="navbar-el-breadcrumb">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item
        v-for="(item, index) in levelList"
        :key="index"
        :to="item.path ? { path: item.path } : ''">
        {{item.name}}
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script>
import { getterMap } from 'vuex'
export default {
  name: 'Breadcrumb',
  data () {
    return {
      list: []
    }
  },
  computed: {
    levelList () {
      let route = this.$route
      let pathList = route.meta.pPath.split('=>')
      let nameList = route.meta.pName.split('=>')
      let levelList = []
      pathList.forEach((p, i) => {
        levelList.push({
          path: p,
          name: nameList[i]
        })
      })
      return levelList
    }
  }
}
</script>

<style lang="scss">
.navbar-el-breadcrumb {
  .el-breadcrumb__item {
    .el-breadcrumb__inner {
      color: #424040;
    }
    &:last-child .el-breadcrumb__inner {
      font-weight: normal;
      color: #999 !important;
    }
  }
  
}
</style>



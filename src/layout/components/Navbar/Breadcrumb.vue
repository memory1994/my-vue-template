<template>
  <el-breadcrumb class="navbar-el-breadcrumb">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item
        v-for="(item,index) in levelList"
        :key="index"
        :to="item.path ? { path: item.path } : ''">
        {{item.name}}
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script>
export default {
  name: 'Breadcrumb',
  computed: {
    levelList () {
      let { pPath, pName } = this.$route.meta
      let pathList = pPath ? pPath.split('=>') : []
      let nameList = pName ? pName.split('=>') : []
      let levelList = []
      nameList.forEach((name, index) => {
        levelList.push({
          path: pathList[index],
          name
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
      &.is-link {
        font-weight: normal;
      }
    }
    &:last-child:not(:first-child) .el-breadcrumb__inner {
      color: #999 !important;
    }
  }
  .breadcrumb-enter-active,
  .breadcrumb-leave-active {
    transition: all 0.5s ease;
  }

  .breadcrumb-enter,
  .breadcrumb-leave-active {
    opacity: 0;
    transform: translateX(20px)
  }
  .breadcrumb-leave-active {
    position: absolute;
  }
}
</style>



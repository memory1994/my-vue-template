<template>
  <el-breadcrumb>
    <transition-group name="breadcrumb">
      <el-bradcrumb-item
        v-for="(item, index) of list"
        :key="index">
      </el-bradcrumb-item>
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
      let pathList = route.meta.parentPath.split('|')
      let nameList = route.meta.parentName.split('|')
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


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
export default {
  name: 'Breadcrumb',
  data () {
    return {
      list: []
    }
  }
}
</script>


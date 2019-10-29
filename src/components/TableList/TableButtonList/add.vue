<template>
  <el-button type="text" @click="handleTableContentEmit" @dblclick.native="handleTableContentEmit2">编辑</el-button>
</template>

<script>
export default {
  methods: {
    handleTableContentEmit () {
      this.$emit('tableContentEmit',...arguments, 'click')
      
    },
    handleTableContentEmit2 () {
      this.$emit('tableContentEmit',...arguments, 'moveup')
    }
  }
}
</script>
<template>
  <el-button
    v-show="selfCustomConfig.show"
    type="primary"
    :disabled="selfCustomConfig.disabled"
    @click="handleTableContentEmit"
    @dblclick.native="handleTableContentEmit2">
    {{ selfCustomConfig.text }}
  </el-button>
</template>

<script>
import { tableCustomContentEmitFn } from '@/utils'
export default {
  name: 'TableContentCommon',
  inheritAttrs: false,
  props: ['row', 'selfCustomConfig'], // 表格行数据
  computed: {
    // selfCustomConfig () { return this.row.tableCustomConfig.common }
  },
  methods: {
    handleTableContentEmit () {
      tableCustomContentEmitFn.call(this, ...arguments, 'handleTableContentAddButton') // 对外分发事件
    },
    handleTableContentEmit2 () {
      // this.$emit('tableContentEmit',this.row, ...arguments, this.selfConfig, this.config, 'moveup')
    }
  }
}
</script>
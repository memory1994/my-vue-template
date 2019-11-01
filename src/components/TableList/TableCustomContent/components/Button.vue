<template>
  <el-button
    v-show="selfCustomConfig.show"
    :type="selfCustomConfig.type"
    :disabled="selfCustomConfig.disabled"
    @click="handleTableContentEmit">
    {{ selfCustomConfig.text }}
  </el-button>
</template>

<script>
import { tableCustomContentEmitFn } from '@/utils'
export default {
  name: 'TableContentButton',
  inheritAttrs: false,
  props: ['row', 'customConfigName'], // 表格行数据，组件名称
  computed: {
    selfCustomConfig () { return this.row.tableCustomConfig[this.customConfigName] }
  },
  methods: {
    handleTableContentEmit () {
      tableCustomContentEmitFn.call(this, ...arguments, `handleTableContent${this.customConfigName.replace(/^\w/, s => s.toUpperCase())}Button`) // 对外分发事件
    },
  }
}
</script>
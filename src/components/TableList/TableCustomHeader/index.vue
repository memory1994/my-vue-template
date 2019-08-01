<template>
  <el-popover
    v-model="showCustomHeader"
    width="110"
    trigger="click"
    class="table-custom-header"
    popper-class="popper-table-custom-header"
    @after-leave="handleAfterHidePopover">
    <i class="el-icon-setting" slot="reference"></i>
    <el-checkbox
      v-model="checkAll"
      class="head"
      :indeterminate="isIndeterminate"
      @change="handleCheckAllChange">
      自定义表头
    </el-checkbox>
    <el-checkbox-group
      v-model="checkedList"
      @change="handleCheckedChange">
      <el-checkbox
        v-for="(config, index) of computeTableColumnConfig"
        :key="'config' + index"
        :label="index"
        :title="config.label">
        {{config.label}}
      </el-checkbox>
    </el-checkbox-group>
    <el-button
      class="button"
      type="text"
      @click="handleSaveCustomHeader">
      确定
    </el-button>
  </el-popover>
</template>

<script>
export default {
  name: 'TableCustomHeader',
  inheritAttrs: false,
  props: {
    tableColumnConfig: {
      type: Array,
      default () { return [] }
    }
  },
  data () {
    return {
      showCustomHeader: false,
      checkAll: false,
      checkedList: [],
      isIndeterminate: true
    }
  },
  computed: {
    computeTableColumnConfig () {
      return tableColumnConfig
    }
  },
  mounted () {
    this.handleInitFn()
  },
  methods: {
    handleInitFn () {
      const config = JSON.parse(JSON.stringify(this.computeTableColumnConfig))
      config.forEach((c, i) => {
        c.checkedCurrentColumn = true
        this.checkedList.push(i)
      })
      this.checkAll = this.checkedList.length === config.length
      this.isIndeterminate = !this.checkAll
    },
    // 全选
    handleCheckAllChange (val) {
      this.checkedList = val ? this.tableColumnConfig.map((c, i) => i) : []
      this.isIndeterminate = false
    },
    // 选择单个
    handleCheckedChange (value) {
      let checkedCount = value.length
      this.checkAll = checkedCount === this.tableColumnConfig.length
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.tableColumnConfig.length
    },
    // popover隐藏后触发
    handleAfterHidePopover () {
      this.handleInitFn()
    },
    // 点击确定按钮
    handleSaveCustomHeader () {
      const checkedList = this.checkedList
    }
  }
}
</script>

<style lang="scss">
.table-custom-header {
  cursor: pointer;
}
</style>



<template>
  <div class="table-list-component">
    <el-table
      :data="tableData"
      :border="tableBorder"
      :stripe="tableStripe"
      :tree-props="{children: 'children'}"
      row-key="id"
      @expand-change="handleaaa">
      <template v-for="(config, index) of tableColumnConfig">
        <table-tree-column
          v-if="config.columnType === 'tree'"
          :key="'tree' + index"
          :prop="config.prop"
          :width="config.width"
          :fixed="config.fixed"
          :treeKey="config.treeKey"
          :parentKey="config.parentKey"
          :levelKey="config.levelKey"
          :childKey="config.childKey">
        </table-tree-column>

        <el-table-column
          v-else
          :key="'column' + index"
          :prop="config.prop"
          :label="config.label"
          :align="config.align"
          :header-align="config.headerAlign"
          :width="config.width"
          :min-width="config.minWidth"
          :fixed="config.fixed">
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script>
import TableTreeColumn from './TableTreeColumn'
export default {
  name: 'TableList',
  components: { TableTreeColumn },
  props: {
    tableData: {
      type: Array,
      default () { return [] }
    },
    tableColumnConfig: {
      type: Array,
      default () { return [] }
    },
    tableStripe: {
      type: Boolean,
      default: true,
    },
    tableBorder: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    handleaaa () {
      console.log(12)
    }
  }
}
</script>


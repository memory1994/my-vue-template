<template>
  <div class="table-list-component">
    <el-table
      :data="newTableData"
      :border="tableBorder"
      :stripe="tableStripe">
      <template v-for="(config, index) of tableColumnConfig">
        <table-tree-column
          v-if="config.columnType === 'tree'"
          :key="'tree' + index"
          :tableData="newTableData"
          :prop="config.prop"
          :label="config.label"
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
          <template v-slot="scope">
            <table-render-column
              v-if="handleIsShowRenderColumn(config)"
              :scope="scope"
              :column-config="config"/>

            <span v-else>
              {{scope.row[config.prop]}}
            </span>
            
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script>
import TableTreeColumn from './TableTreeColumn'
import TableRenderColumn from './TableRenderColumn'
export default {
  name: 'TableList',
  components: { TableTreeColumn, TableRenderColumn },
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
  computed: {
    newTableData () {
      return this.tableData
    }
  },
  methods: {
    handleIsShowRenderColumn (config) {
      return config.render && typeof config.render === 'function'
    }
  }
}
</script>


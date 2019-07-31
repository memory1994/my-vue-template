<template>
  <el-table-column :prop="prop" v-bind="$attrs" class="table-tree-column">
    <template v-slot="scope">
      <span @click.prevent="toggleHandle(scope.$index, scope.row)" :style="handleSpanStyle(scope.row)">
        <i :class="handleIconClass(scope.row)" v-show="handleHasChild(scope.row)"></i>
        {{scope.row[prop]}}
      </span>
    </template>
  </el-table-column>
</template>

<script>
export default {
  name: 'TableTreeColumn',
  props: {
    tableData: {
      type: Array,
      default () { return [] }
    },
    prop: {
      type: String
    },
    treeKey: {
      type: String,
      default: 'id'
    },
    parentKey: {
      type: String,
      default: 'parentId'
    },
    levelKey: {
      type: String,
      default: '_level'
    },
    childKey: {
      type: String,
      default: 'children'
    }
  },
  computed: {
    newTableData () {
      return this.tableData
    }
  },
  methods: {
    handleSpanStyle (row) {
      return { 'cursor': this.handleHasChild(row) ? 'pointer' : 'initial', 'padding-left': (row[this.levelKey] ? row[this.levelKey] * 20 : 0)  + 'px'}
    },
    handleIconClass (row) {
      return row._expand ? 'el-icon-caret-bottom' : 'el-icon-caret-right'
    },
    handleIconStyle (row) {
      return { 'display': this.handleHasChild(row) ? 'block' : 'none' }
    },
    handleHasChild (row) {
      return row[this.childKey] && Array.isArray(row[this.childKey]) && row[this.childKey].length
    },
    toggleHandle (index, row) {
      if (!this.handleHasChild(row)) return
      row._expand = !row._expand
      if (row._expand) { // 展开
        const childrenData = row[this.childKey]
        this.newTableData.splice(index + 1, 0, ...childrenData)
      } else {
        this.nextTableData = this.newTableData.slice(index)
        this.removeTableData = []
        this.handleGetRemoveDataLen(row)
        this.newTableData.splice(index + 1, this.removeTableData.length)
      }
    },
    handleGetRemoveDataLen (row) {
      if (this.handleHasChild(row)) {
        row.children.forEach(childRow => {
          this.nextTableData.find(d => d[this.treeKey] === childRow[this.treeKey]) && this.removeTableData.push('remove')
          childRow._expand = false
          this.handleGetRemoveDataLen(childRow)
        })
      }
    }
  }
}
</script>



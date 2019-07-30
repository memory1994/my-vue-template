<template>
  <el-table-column :prop="prop" v-bind="$attrs">
    <template v-slot="scope">
      <span @click.prevent="toggleHandle(scope)">
        <i :class="iconClass(scope.row)" :style="iconStyle(scope.row)"></i>
        {{scope.row[prop]}}
      </span>
    </template>
  </el-table-column>
</template>

<script>
export default {
  name: 'TableTreeColumn',
  props: {
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
  methods: {
    iconClass (row) {
      return row._expand ? 'el-icon-caret-bottom' : 'el-icon-caret-right'
    },
    iconStyle (row) {
      return { 'padding-left': row[this.levelKey] > 1 ? row[this.levelKey] * 7 : 0  + 'px'}
    },
    toggleHandle () {}
  }
}
</script>


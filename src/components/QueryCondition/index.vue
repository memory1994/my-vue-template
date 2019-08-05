<template>
  <el-form
    :inline="inline"
    :label-width="labelWidth"
    class="query-condition-component">
    <el-form-item
      v-for="(config, index) of queryConditionConfig"
      :key="'query' + index"
      :label="config.label">
      <el-input 
        v-if="config.type === 'input'"
        v-model="queryConditionValues[config.prop]"
        :disabled="config.disabled"
        :placeholder="config.placeholder"
        @input="handleChangeEvent(config, ...arguments)"/>

      <el-select
        v-else-if="config.type === 'select'"
        v-model="queryConditionValues[config.prop]"
        :disabled="config.disabled"
        :clearable="config.clearable || true"
        :placeholder="config.placeholder"
        @change="handleChangeEvent(config, ...arguments)">
        <el-option
          v-for="(option, index) of config.options"
          :key="'option' + index"
          :label="option.label"
          :value="option.value"/>
      </el-select>

      <el-date-picker
        v-else-if="config.type === 'datetime' || config.type === 'datetimerange'"
        v-model="queryConditionValues[config.prop]"
        :type="config.type"
        :value-format="config.valueFormat || 'yyyy-MM-dd HH:mm:ss'"
        :placeholder="config.placeholder"
        :range-separator="config.rangeSeparator || '至'"
        :start-placeholder="config.startPlaceholder || '开始时间'"
        :end-placeholder="config.endPlaceholder || '结束时间'"
        @change="handleChangeEvent(config, ...arguments)"/>

    </el-form-item>

    <el-form-item class="form-button-item">
      <el-button type="primary" icon="el-icon-search" @click="handleQueryTableList">查 询</el-button>
      <el-button type="warning" icon="el-icon-delete" @click="handleResetQueryCondition">重 置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'QueryCondition',
  props: {
    inline: {
      type: Boolean,
      default: true
    },
    labelWidth: {
      type: String,
      default: '80px'
    },
    queryConditionValues: {
      type: Object,
      default () { return {} }
    },
    queryConditionConfig: {
      type: Array,
      default () { return [] }
    },
    queryTableListFn: { // 查询table数据函数
      type: String,
      default: 'handleQueryTableList'
    }
  },
  computed: {
    computeQueryConditionValues () {
      return this.queryConditionValues
    }
  },
  mounted () {
    this.initValues = this.$clone(this.queryConditionValues)
  },
  methods: {
    // 触发事件
    handleChangeEvent (config, value) {
      if (config.type === 'datetimerange') { // 时间选择器
        config.sprop && (this.computeQueryConditionValues[config.sprop] = value ? value[0] : '')
        config.eprop && (this.computeQueryConditionValues[config.eprop] = value ? value[1] : '')
      }
    },
    // 查询按钮
    handleQueryTableList () {
      if (this.$parent && this.$parent[this.queryTableListFn] && typeof this.$parent[this.queryTableListFn] === 'function') {
        this.$parent[this.queryTableListFn]()
      } else {
        this.$emit('queryTableList')
      }
    },
    // 重置查询条件
    handleResetQueryCondition () {
      console.log(this.initValues)
      this.$emit('update:queryConditionValues', this.$clone(this.initValues))
    }
  }
}
</script>

<style lang="scss">
.query-condition-component {
  width: 100%;
  background-color: #fff;
  box-sizing: border-box;
  padding: 20px 15px 20px;
  margin-bottom: 10px;
  .el-form-item {
    &.form-button-item {
      display: block;
      text-align: right;
      margin-bottom: 0;
    }
  }
}
</style>



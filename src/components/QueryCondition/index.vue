<template>
  <el-form
    :label-width="labelWidth"
    class="query-condition-component">
    <el-form-item
      v-for="(config, index) of queryConditionConfig"
      :key="'query' + index"
      :label="config.label">
      <el-input 
        v-if="config.type === 'input'"
        v-model="config.value"
        :placeholder="config.placeholder"/>

    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'QueryCondition',
  props: {
    labelWidth: {
      type: String,
      default: '80px'
    },
    queryConditionConfig: {
      type: Array,
      default () { return [] }
    }
  },
  data () {
    
  }
}
</script>


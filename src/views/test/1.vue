<template>
  <div>1.vue

    <el-button type="primary" @click="$router.push('/test/111')">跳转页面1</el-button>
    <el-button type="primary" @click="$router.push('/test/222')">跳转页面2</el-button>


    <table-list
      :tableData="tableData"
      :tableColumnConfig="tableColumnConfig">
    </table-list>
  </div>
</template>


<script>
import TableList from '@/components/TableList'
import { apiGetMenuList } from '@/api/menuList'
import { transformMenuToTree } from '@/utils/index'
export default {
  components: { TableList },
  data () {
    return {
      tableData: [],
      tableColumnConfig: [
        { prop: 'id', label: 'id' },
        { prop: 'name', label: '标题' },
        { prop: 'path', label: '路由' }
      ]
    }
  },
  async mounted () {
    const res = await apiGetMenuList()
    console.log(res)
    const data = transformMenuToTree(res.data.list)
    console.log(data)
    this.tableData = data.menuTreeData
  }
}
</script>

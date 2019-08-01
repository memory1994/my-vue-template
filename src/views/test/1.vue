<template>
  <div>1.vue

    <el-button type="primary" @click="$router.push('/test/111')">跳转页面1</el-button>
    <el-button type="primary" @click="$router.push('/test/222')">跳转页面2</el-button>

    <!-- <el-dialog
      title="提示"
      :visible.sync="aa">
      <table-list
        :tableData="tableData"
        :tableColumnConfig="tableColumnConfig">
      </table-list>
    </el-dialog> -->
    <table-list
      :tableData="tableData"
      :tableColumnConfig="tableColumnConfig"
      :custom-header="true">
      <!-- <div slot="header">
        <el-button slot="header" type="primary">按钮</el-button>
        <el-button slot="header" type="primary">按钮</el-button>
        <el-button slot="header" type="primary">按钮</el-button>
      </div> -->
      
      <el-button slot="footer">按钮</el-button>
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
      aa: true,
      tableData: [],
      tableColumnConfig: [
        { prop: 'name', label: '标题', columnType: 'tree' },
        { prop: 'id', label: 'id', render () {
          return '<el-input />'
        }},
        { prop: 'parentId', label: 'parentId'},
        { prop: 'path', label: '路由' , render () {
          return `
                    <el-dropdown @command="handleCommand">
                      <span class="el-dropdown-link">
                        下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
                      </span>
                      <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="a">黄金糕</el-dropdown-item>
                        <el-dropdown-item command="b">狮子头</el-dropdown-item>
                        <el-dropdown-item command="c">螺蛳粉</el-dropdown-item>
                        <el-dropdown-item command="d" disabled>双皮奶</el-dropdown-item>
                        <el-dropdown-item command="e" divided>蚵仔煎</el-dropdown-item>
                      </el-dropdown-menu>
                    </el-dropdown>
                 `
        }},
        { label: '操作', width:'250px', render () {
          return  `<el-tooltip effect="dark" content="编辑" placement="top">
                    <el-button type="primary" @click="handleEdit">编辑</el-button>
                   </el-tooltip>
                   <el-tooltip effect="dark" content="编辑" placement="top" v-if="!row.hidden">
                    <el-button type="primary" @click="handleaaa">223232</el-button>
                   </el-tooltip>`
        } }
      ]
    }
  },
  async mounted () {
    const res = await apiGetMenuList()
    const data = transformMenuToTree(res.data.list)
    this.tableData = data.menuTreeData
  },
  methods: {
    handleEdit () {
      console.log(arguments)
      // this.$set(scope.row, 'hidden', true)
    },
    handleaaa (scope, config) {
      console.log(scope, config)
    },
    handleCommand () {
      console.log(arguments)
    }
  }
}
</script>

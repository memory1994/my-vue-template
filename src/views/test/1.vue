<template>
  <div>
    <query-condition
      :query-condition-values.sync="queryConditionValues"
      :query-condition-config="queryConditionConfig"/>

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
      :pages="pages"
      :custom-header="false"
      :tableLoading="tableLoading">
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
import QueryCondition from '@/components/QueryCondition'
import { apiGetMenuList } from '@/api/menuList'
import { transformMenuToTree } from '@/utils/index'
export default {
  components: { TableList, QueryCondition },
  data () {
    return {
      aa: true,
      tableLoading: false,
      tableData: [],
      pages: {
        currentPage: 1,
        pageSize: 10,
        total: 0
      },
      tableColumnConfig: [
        { prop: 'name', label: '标题', columnType: 'tree' },
        { prop: 'id', label: 'id' },
        { prop: 'parentId', label: 'parentId'},
        // { prop: 'path', label: '路由' , render () {
        //   return `
        //             <el-dropdown @command="handleCommand">
        //               <span class="el-dropdown-link">
        //                 下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
        //               </span>
        //               <el-dropdown-menu slot="dropdown">
        //                 <el-dropdown-item command="a">黄金糕</el-dropdown-item>
        //                 <el-dropdown-item command="b">狮子头</el-dropdown-item>
        //                 <el-dropdown-item command="c">螺蛳粉</el-dropdown-item>
        //                 <el-dropdown-item command="d" disabled>双皮奶</el-dropdown-item>
        //                 <el-dropdown-item command="e" divided>蚵仔煎</el-dropdown-item>
        //               </el-dropdown-menu>
        //             </el-dropdown>
        //          `
        // }},
        { label: '操作', width:'250px', fixed: 'right', render () {
          return  `<el-button type="text" @click="handleEdit">编辑</el-button>
                   <el-button type="text" @click="handleaaa">223232</el-button>`
        } }
      ],
      queryConditionValues: {
        aa: '',
        bb: '',
        cc: '',
        dd: '',
        startTime: '',
        endTime: ''
      },
      queryConditionConfig: [
        { type: 'input', prop: 'aa', label: '菜单名称', placeholder: '请输入数据' },
        { type: 'select', prop: 'bb', label: '活动区域', placeholder: '请选择下拉框', options: [
          { label: '黄金糕', value: '选项1' },
          { label: '双皮奶', value: '选项2' },
          { label: '龙须面', value: '选项3' }
        ] },
        { type: 'datetime', prop: 'cc', label: '活动时间', placeholder: '选择时间' },
        { type: 'datetimerange', prop: 'dd', sprop: 'startTime', eprop: 'endTime', label: '时间范围', placeholder: '选择时间范围' }
      ]
    }
  },
  async mounted () {
    this.tableLoading = true
    const res = await apiGetMenuList()
    const data = transformMenuToTree(res.data.list)
    this.tableData = data.menuTreeData
    this.pages.total = data.menuTreeData.length
    this.tableLoading = false
  },
  methods: {
    handleEdit () {
      console.log(arguments)
      // this.$set(scope.row, 'hidden', true)
      this.tableLoadingaa = true
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

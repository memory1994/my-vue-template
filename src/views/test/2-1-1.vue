<template>
  <div>7.vue

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
        { prop: 'id', label: 'id' },
        { prop: 'parentId', label: 'parentId', content: 'Add'},
        // { prop: 'path', label: '路由' , render () {
        //   return `
        //             <el-dropdown>
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
          return  `<el-button type="text">编辑</el-button>
                   <el-button type="text">223232</el-button>
                   <el-dropdown>
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
                    </el-dropdown>`
        } }
      ]
    }
  },
  async mounted () {
    const res = await apiGetMenuList()
    const data = transformMenuToTree(res.data.list)
    this.tableData = data.menuTreeData
  },
}
</script>


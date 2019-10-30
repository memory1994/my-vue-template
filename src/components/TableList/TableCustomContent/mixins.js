import Common from './common'

export default {
  data () {
    return {
      commonCustomComponent: { // 普通常用组件,直接全部使用common组件
        'add': { name: 'common', text: '添加' },
        'edit': { name: 'common', text: '编辑' },
        'delete': { name: 'common', text: '删除' },
      }, 
      defaultTableCustomConfig: { // 默认表格内容配置，最后merge到table row中
        name: '', // 组件名称
        text: '', // 文本
        show: true, // 是否显示
        disabled: false, // 是否禁用
        event: '', // 事件名称
      }
    }
  },
  components: {
    TableContentCommon: Common
  }
}
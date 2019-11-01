import Button from './components/Button'

export default {
  data () {
    return {
      defaultTableCustomConfig: { // 默认组件配置值，可扩充
        name: '', // 组件名称
        text: '', // 文本
        show: true, // 是否显示
        disabled: false, // 是否禁用
        event: '', // 自定义$emit事件名称
      },
      configReuseCustomComponent: { // 配置可复用组件
        'add': { name: 'button', text: '添加', type: 'primary' }, // 添加按钮组件
        'edit': { name: 'button', text: '编辑', type: 'success'}, // 编辑按钮组件
        'delete': { name: 'button', text: '删除', type: 'danger'} // 删除按钮组件
      }
    }
  },
  components: {
    TableContentButton: Button
  }
}
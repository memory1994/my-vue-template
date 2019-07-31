<script>
export default {
  name: 'TableRenderColumn',
  functional: true,
  props: {
    scope: {
      type: Object,
      default () { return {} }
    },
    columnConfig: {
      type: Object,
      default () { return {} }
    }
  },
  render (h, { props, parent }) {
    const html = props.columnConfig.render(props.scope.row, props.columnConfig)
    const reg = /(?:@|v-on)\w+(?:\.\w+)?="(\w+)"/g
    let methodList = null
    if (html && typeof html === 'string' && reg.test(html)) {
      methodList = html.match(reg).map(m => m.replace(reg, '$1'))
    }
    const renderObject = {
      template: `<div class="table-render-column">${html}</div>`,
      methods: {},
      props: {
        row: Object
      }
    }
    methodList && methodList.forEach(method => {
      method && (renderObject.methods[method] = () => {
        if (parent.$parent && parent.$parent[method] && typeof parent.$parent[method] === 'function') {
          parent.$parent[method](props.scope, props.columnConfig)
        } else if (parent.$parent && parent.$parent.$parent && parent.$parent.$parent[method] && typeof parent.$parent.$parent[method] === 'function') {
          parent.$parent.$parent[method](props.scope, props.columnConfig)
        } else {
          parent.$emit(method, props.scope, props.columnConfig)
        }
      })
    })
    return h(
      renderObject,
      {
        props: {
          row: props.scope.row
        }
      }
    )
  }
}
</script>

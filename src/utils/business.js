// table自定义内容分发emit事件
export const tableCustomContentEmitFn = function () {
  let { row, selfCustomConfig } = this
  let args = arguments
  let eventName = args[args.length - 1]
  this.$emit('tableContentEmit', {
    row,
    selfCustomConfig
  }, ...args, selfCustomConfig.event || eventName)
}
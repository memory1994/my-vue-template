
// 格式化菜单menu数据
export const transformMenuToTree = (data, key = 'id', parentkey = 'menuParentId', sort = 'sortNo') => {
  if (!key || !data) return []
  if (Array.isArray(data)) {
    const r = []
    const keyMap = {}
    for (let i = 0; i < data.length; i++) {
      keyMap[data[i][key]] = data[i]
    }
    for (let i = 0; i < data.length; i++) {
      let pKey = keyMap[data[i][parentkey]]
      if (pKey && data[i][key] !== data[i][parentkey]) {
        (!pKey.children) && (pKey.children = [])
        data[i].parentName = `${pKey.parentName}|${data[i].menuName}` 
        data[i].parentPath = `${pKey.parentPath}|${data[i].menuPath}` 
        pKey.children.push(data[i])
        pKey.children.sort((a, b) => a[sort] - b[sort])
      } else {
        data[i].parentName = data[i].menuName
        data[i].parentPath = data[i].menuPath
        r.push(data[i])
        r.sort((a, b) => a[sort] - b[sort])
      }
    }
    return r
  } else {
    return [data]
  }
}

// 转换时间戳
export const format = (now, fmt = 'yyyy-MM-dd hh:mm:ss') => {
  typeof now === 'string' && (now = now.replace(/-/g, '/'))
  now = new Date(now)
  const o = {
    'y+': now.getFullYear(), // 年
    'M+': now.getMonth() + 1, // 月
    'd+': now.getDate(), // 日
    'h+': now.getHours(), // 时
    'm+': now.getMinutes(), // 分
    's+': now.getSeconds(), // 秒
    'q+': Math.ceil((now.getMonth() + 1) / 3), // 季度
    'S+': now.getMilliseconds() // 毫秒
  }

  for (let k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, String(o[k]).padStart(RegExp.$1.length, 0))
    }
  }
  return fmt
}
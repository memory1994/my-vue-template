// 格式化菜单menu数据
export const formatMenuList = (data) => {
  if (Array.isArray(data)) {
    return data.map(menu => {
      return Object.assign({}, menu)
    })
  } else {
    return [data]
  }
}

// 一维数据转换成树形数据
export const transformMenuToTree = (data, id = 'id', pId = 'parentId', sort = 'sort') => {
  if (Array.isArray(data)) {
    data = JSON.parse(JSON.stringify(data))
    const parentList = JSON.parse(JSON.stringify(data)).filter(d => !d[pId])
    const childrenList = JSON.parse(JSON.stringify(data)).filter(d => !!d[pId])

    // 父级数据设置_level层级
    parentList.forEach(d => d._level = 0)

    data.filter(d => !d[pId]).forEach(d => (d.pName = d.name, d.pPath = d.path))
    const translator = (parentList, childrenList) => {
      parentList.forEach(parent => {
        childrenList.forEach(current => {
          if (parent[id] === current[pId]) {
            // 往子节点上添加父节点信息
            const findP = data.find(d => d[id] === parent[id])
            const findC = data.find(d => d[id] === current[id])
            findC.pName = `${findP.pName}=>${findC.name}`
            findC.pPath = `${findP.pPath}=>${findC.path}`

            // 往子节点上添加_level
            current._level = parent._level + 1
            Array.isArray(parent.children) ? parent.children.push(current) : (parent.children = [current])
            parent.children.sort((a, b) => a[sort] - b[sort])
            translator([current], childrenList.filter(d => d.id !== current.id))
          }
        })
      })
    }
    translator(parentList, childrenList)
    return {
      menuTreeData: parentList,
      menuData: data
    }
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
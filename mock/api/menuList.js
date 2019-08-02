import Mock from 'mockjs'

export default () => {
  Mock.mock('api/test/menuList', 'post', {
    code: '000000',
    msg: '成功',
    data: {
      list: [
       { id: 1, parentId: 0, sort: 1, path: '/test/1', name: '企业基本信息', icon: 'el-icon-phone' },
       { id: 2, parentId: 0, sort: 2, path: '', name: 'aa项目', icon: 'el-icon-s-tools' },
       { id: 5, parentId: 4, sort: 2, path: '', name: 'bb项目', icon: 'el-icon-eleme' },
       { id: 3, parentId: 2, sort: 2, path: '/test/4', name: 'cc1项目', icon: 'el-icon-info' },
       { id: 13, parentId: 2, sort: 2, path: '/test/4-1', name: 'cc2项目', icon: 'el-icon-info' },
       { id: 4, parentId: 2, sort: 2, path: '', name: 'dd项目', icon: 'el-icon-goods' },
       { id: 6, parentId: 5, sort: 2, path: '/test/6', name: 'ee项目', icon: 'el-icon-picture-outline' },
       { id: 7, parentId: 0, sort: 2, path: '/test/7', name: 'ff项目', icon: 'el-icon-bell' },
       { id: 8, parentId: 0, sort: 2, path: '/test/8', name: 'gg项目', icon: 'el-icon-s-platform' },
       { id: 9, parentId: 0, sort: 2, path: '/test/9', name: 'hh项目', icon: 'el-icon-s-promotion' },
       { id: 15, parentId: 8, sort: 2, path: '/test/9', name: 'hh项目', icon: 'el-icon-s-promotion' },
       { id: 14, parentId: 9, sort: 2, path: '/test/9', name: 'hh项目', icon: 'el-icon-s-promotion' },
       { id: 10, parentId: 0, sort: 2, path: '/test/10', name: 'ii项目', icon: 'el-icon-s-home' },
       { id: 11, parentId: 0, sort: 2, path: '/test/11', name: 'jj项目', icon: 'el-icon-s-release' },
       { id: 12, parentId: 0, sort: 2, path: '/test/12', name: 'kk项目', icon: 'el-icon-s-ticket' },
     ]
    }
  })
}

// { id: 1, parentId: 0, sort: 1, path: '/test/1', name: '企业基本信息', icon: 'el-icon-phone' },
// { id: 2, parentId: 0, sort: 2, path: '', name: 'aa项目', icon: 'el-icon-s-tools' },
// { id: 7, parentId: 0, sort: 2, path: '/test/7', name: 'ff项目', icon: 'el-icon-bell' },
// { id: 8, parentId: 0, sort: 2, path: '/test/8', name: 'gg项目', icon: 'el-icon-s-platform' },
// { id: 9, parentId: 0, sort: 2, path: '/test/9', name: 'hh项目', icon: 'el-icon-s-promotion' },
// { id: 10, parentId: 0, sort: 2, path: '/test/10', name: 'ii项目', icon: 'el-icon-s-home' },
// { id: 11, parentId: 0, sort: 2, path: '/test/11', name: 'jj项目', icon: 'el-icon-s-release' },
// { id: 12, parentId: 0, sort: 2, path: '/test/12', name: 'kk项目', icon: 'el-icon-s-ticket' },


// { id: 5, parentId: 4, sort: 2, path: '', name: 'bb项目', icon: 'el-icon-eleme' },
// { id: 3, parentId: 2, sort: 2, path: '/test/4', name: 'cc项目', icon: 'el-icon-info' },
// { id: 4, parentId: 2, sort: 2, path: '', name: 'dd项目', icon: 'el-icon-goods' },
// { id: 6, parentId: 5, sort: 2, path: '/test/6', name: 'ee项目', icon: 'el-icon-picture-outline' },
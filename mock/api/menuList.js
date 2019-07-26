import Mock from 'mockjs'

export default () => {
  Mock.mock('api/test/menuList', 'post', {
    code: '000000',
    msg: '成功',
    data: {
      list: [
       { id: 1, menuParentId: 0, sortNo: 1, menuPath: '/test/1', menuName: '企业基本信息', menuIcon: 'el-icon-phone' },
       { id: 2, menuParentId: 0, sortNo: 2, menuPath: '', menuName: 'aa项目', menuIcon: 'el-icon-s-tools' },
       { id: 5, menuParentId: 4, sortNo: 2, menuPath: '', menuName: 'bb项目', menuIcon: 'el-icon-eleme' },
       { id: 3, menuParentId: 2, sortNo: 2, menuPath: '/test/4', menuName: 'cc项目', menuIcon: 'el-icon-info' },
       { id: 4, menuParentId: 2, sortNo: 2, menuPath: '', menuName: 'dd项目', menuIcon: 'el-icon-goods' },
       { id: 6, menuParentId: 5, sortNo: 2, menuPath: '/test/6', menuName: 'ee项目', menuIcon: 'el-icon-picture-outline' },
       { id: 7, menuParentId: 0, sortNo: 2, menuPath: '/test/7', menuName: 'ff项目', menuIcon: 'el-icon-bell' },
       { id: 8, menuParentId: 0, sortNo: 2, menuPath: '/test/8', menuName: 'gg项目', menuIcon: 'el-icon-s-platform' },
       { id: 9, menuParentId: 0, sortNo: 2, menuPath: '/test/9', menuName: 'hh项目', menuIcon: 'el-icon-s-promotion' },
       { id: 10, menuParentId: 0, sortNo: 2, menuPath: '/test/10', menuName: 'ii项目', menuIcon: 'el-icon-s-home' },
       { id: 11, menuParentId: 0, sortNo: 2, menuPath: '/test/11', menuName: 'jj项目', menuIcon: 'el-icon-s-release' },
       { id: 12, menuParentId: 0, sortNo: 2, menuPath: '/test/12', menuName: 'kk项目', menuIcon: 'el-icon-s-ticket' },
     ]
    }
  })
}
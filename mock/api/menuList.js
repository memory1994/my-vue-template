import Mock from 'mockjs'

export default () => {
  Mock.mock('api/test/menuList', 'post', {
    code: '208207',
    msg: '成功',
    data: {
      list: [
       { id: 1, menuParentId: 0, sortNo: 1, menuUrl: '/businesscenter/basic', menuName: '企业基本信息' },
       { id: 2, menuParentId: 0, sortNo: 2, menuUrl: '/businesscenter/project', menuName: '项目管理' },
       { id: 5, menuParentId: 4, sortNo: 2, menuUrl: '/businesscenter/project', menuName: '项目管理5' },
       { id: 3, menuParentId: 2, sortNo: 2, menuUrl: '/businesscenter/project', menuName: '项目管理3' },
       { id: 4, menuParentId: 2, sortNo: 2, menuUrl: '/businesscenter/project', menuName: '项目管理4' },
       { id: 6, menuParentId: 5, sortNo: 2, menuUrl: '/businesscenter/project', menuName: '项目管理6' },
       { id: 7, menuParentId: 0, sortNo: 2, menuUrl: '/businesscenter/project', menuName: '项目管理6' },
       { id: 8, menuParentId: 0, sortNo: 2, menuUrl: '/businesscenter/project', menuName: '项目管理6' },
     ]
    }
  })
}
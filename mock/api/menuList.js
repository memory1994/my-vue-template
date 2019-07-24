import Mock from 'mockjs'

export default () => {
  Mock.mock('api/test/menuList', 'post', {
    code: '000000',
    msg: '成功',
    data: {
      list: [
       { id: 1, menuParentId: 0, sortNo: 1, menuUrl: 'businesscenter/basic', menuName: '企业基本信息' },
       { id: 2, menuParentId: 0, sortNo: 2, menuUrl: 'businesscenter/project1', menuName: 'aa项目' },
       { id: 5, menuParentId: 4, sortNo: 2, menuUrl: 'businesscenter/project2', menuName: 'bb项目' },
       { id: 3, menuParentId: 2, sortNo: 2, menuUrl: 'businesscenter/project3', menuName: 'cc项目' },
       { id: 4, menuParentId: 2, sortNo: 2, menuUrl: 'businesscenter/project4', menuName: 'dd项目' },
       { id: 6, menuParentId: 5, sortNo: 2, menuUrl: 'businesscenter/project5', menuName: 'ee项目' },
       { id: 7, menuParentId: 0, sortNo: 2, menuUrl: 'businesscenter/project6', menuName: 'ff项目' },
       { id: 8, menuParentId: 0, sortNo: 2, menuUrl: 'businesscenter/project7', menuName: 'gg项目' },
     ]
    }
  })
}